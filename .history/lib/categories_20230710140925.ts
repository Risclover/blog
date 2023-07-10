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

    return {
      params: {
        id: category.category,
      },
    };
  });
}

export function getCategoryPosts(id: string) {
  const fileNames = fs.readdirSync(postsDirectory);
  let posts: matter.GrayMatterFile<string>[] = [];
  fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    const category = matterResult.data;

    if (category.category === id) {
      posts.push(matterResult.data);
    }
  });

  console.log("posts:", posts);
  return posts;
}
