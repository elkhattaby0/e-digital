import fs from "fs";
import path from "path";

export function getBlogs() {
  const blogDir = path.join(process.cwd(), "src/content/blogs");
  const blogFiles = fs.readdirSync(blogDir);

  return blogFiles.map((filename) => {
    const fileContent = fs.readFileSync(path.join(blogDir, filename), "utf-8");
    const sections = fileContent.split("---").map((s) => s.trim());

    let generalData = {};
    let articleData = {};

    for (let section of sections) {
      if (section.startsWith("# General")) {
        const lines = section.split("\n").slice(1); // Remove '# General' header
        for (let line of lines) {
          const [key, ...rest] = line.split(":");
          generalData[key.trim()] = rest.join(":").trim().replace(/^"|"$/g, "");
        }
      } else if (section.startsWith("# Article")) {
        const lines = section.split("\n").slice(1); // Remove '# Article' header
        
        // We'll parse keys until we hit "text:"
        let i = 0;
        while (i < lines.length) {
          const line = lines[i];

          if (line.startsWith("text:")) {
            // Multiline markdown text after `text:` line
            // The text could be multiple lines indented or raw lines until end of section
            let textLines = [];

            // Check if the line is like: text: | (meaning multiline)
            if (line.trim().endsWith("|")) {
              i++; // move to next line for the text content
              // Collect all remaining lines as text content
              while (i < lines.length) {
                textLines.push(lines[i]);
                i++;
              }
            } else {
              // Single line text after `text:` on same line
              textLines.push(line.replace(/^text:\s*/, ""));
              i++;
            }

            articleData["text"] = textLines.join("\n").trim();
            break; // text is last, so break
          } else {
            // Regular key: value pairs
            const [key, ...rest] = line.split(":");
            articleData[key.trim()] = rest.join(":").trim().replace(/^"|"$/g, "");
            i++;
          }
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
      article: articleData,
    };
  });
}
