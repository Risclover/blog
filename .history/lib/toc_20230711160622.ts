import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";

import { headingTree } from "./headings";

const postsDirectory = path.join(process.cwd(), "posts");

export async function getHeadings(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert Markdown into HTML string
  const processedContent = await remark()
    .use(headingTree)
    .process(matterResult.content);

  return processedContent.data.headings;
}
