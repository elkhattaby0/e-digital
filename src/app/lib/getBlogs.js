import fs from "fs";
import path from "path";

export function getBlogs() {
  const blogDir = path.join(process.cwd(), "src/content/blogs");
  const blogFiles = fs.readdirSync(blogDir);

  return blogFiles.map((filename) => {
    const fileContent = fs.readFileSync(path.join(blogDir, filename), "utf-8");
    const sections = fileContent.split("---").map((s) => s.trim());

    let generalData = {};

    for (let section of sections) {
      if (section.startsWith("# General")) {
        const lines = section.split("\n").slice(1); // Remove '# General' header
        for (let line of lines) {
          const [key, ...rest] = line.split(":");
          generalData[key.trim()] = rest.join(":").trim().replace(/^"|"$/g, "");
        }
      }
    }

    const [id, ...slugParts] = filename.replace(".md", "").split("-");
    const slug = slugParts.join("-");

    return {
      id: generalData.id || id,
      title: generalData.title || "Untitled",
      date: generalData.date || "",
      image: generalData.image || "/default.jpg",
      category: generalData.category || "General",
      description: generalData.minidescription || "",
      slug,
    };
  });
}
