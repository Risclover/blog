import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");
const categoriesDirectory = path.join(process.cwd(), "categories");

export function getCategories() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allCategories = fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    const category = matterResult.data;

    return {
      params: {
        id: category.category,
      },
    };
  });

  return allCategories;
}

export function getCategoryPosts(category: string) {
  const fileNames = fs.readdirSync(postsDirectory);
  const allCategories = fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    const category = matterResult.data;

    return category.category;
  });

  return allCategories;
}
