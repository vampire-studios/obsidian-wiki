import { SiteConfig } from "vitepress";
import { PageData } from "vitepress";

function addTag(pageData: PageData, name: string, content: string) {
  pageData.frontmatter.head ??= [];
  pageData.frontmatter.head.push([
    "meta",
    {
      name,
      content,
    },
  ]);
}

export function applySEO(pageData: PageData) {
  addTag(
    pageData,
    "og:title",
    pageData.title === "Obsidian Wiki"
      ? `Obsidian Wiki`
      : `${pageData.title} | Obsidian Wiki`
  );

  addTag(pageData, "og:type", "website");
  addTag(pageData, "og:description", pageData.description);
  addTag(pageData, "og:image", "/logo.png");

  addTag(pageData, "twitter:card", "summary");

  addTag(pageData, "theme-color", "#2275da");
}