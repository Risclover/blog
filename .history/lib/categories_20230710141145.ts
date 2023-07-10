import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getCategories() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    const category = matterResult.data;

    console.log(category.category);

    return {
      params: {
        id: category.category.toLowerCase(),
      },
    };
  });
}

export function getCategoryPosts(id: string) {
  const fileNames = fs.readdirSync(postsDirectory);
  let posts: any[] = [];
  fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    const category = matterResult.data;

    if (category.category === id) {
      posts.push(matterResult.data);
    }
  });

  return posts;
}
