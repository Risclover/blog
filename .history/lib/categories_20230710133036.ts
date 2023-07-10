import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export function getCategories() {
  const fileNames = fs.readdirSync(postsDirectory);
  let categories: string[] = [];
  fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    const category = matterResult.data;

    categories.push(category.category);
  });

  return categories;
}
