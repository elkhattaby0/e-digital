import fs from "fs";
import path from "path";
import yaml from "js-yaml";

export function getSingleBlog(id, title) {
  const blogDir = path.join(process.cwd(), "src/content/blogs");
  const files = fs.readdirSync(blogDir);
  const filename = files.find(file => file.startsWith(id));

  if (!filename) return null;

  const fileContent = fs.readFileSync(path.join(blogDir, filename), "utf-8");
  const sections = fileContent.split("---").map(s => s.trim());

  let seo = {};
  let general = {};
  let article = {};

  // Helper to parse YAML inside a section, skipping the first line header
  function parseYamlSection(section) {
    const lines = section.split("\n").slice(1).join("\n");
    return yaml.load(lines);
  }

  for (let section of sections) {
    if (section.startsWith("# SEO")) {
      seo = parseYamlSection(section);
    } else if (section.startsWith("# General")) {
      general = parseYamlSection(section);
    } else if (section.startsWith("# Article")) {
      article = parseYamlSection(section);
    }
  }

  // Validate the article.content is an array, else set empty array
  if (!Array.isArray(article.content)) {
    article.content = [];
  }

  return {
    id: general.id || id,
    title: general.title || title,
    date: general.date || "",
    image: general.image || "/default.jpg",
    category: general.category || "General",
    description: general.minidescription || "",
    seo,
    general,
    article,
  };
}
