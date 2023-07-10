import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export function getCategories() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
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
}

export function getCategoryPosts(id: string) {
  const fileNames = fs.readdirSync(postsDirectory);
  let posts: any = {};
  fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    const category = matterResult.data;

    let postList = [];

    if (category.category === id) {
      postList.push({matterResult.data);
    }
    posts[category.category] = { [category.id]: postList };
  });

  console.log("POSTS?:", posts);
}
