"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
var headings_1 = require("./headings");
console.log("heading tree:", headings_1.headingTree);
var postsDirectory = path_1.default.join(process.cwd(), "posts");
// export async function getHeadings(id: string) {
//   const fullPath = path.join(postsDirectory, `${id}.md`);
//   const fileContents = fs.readFileSync(fullPath, "utf8");
//   // Use gray-matter to parse the post metadata section
//   const matterResult = matter(fileContents);
//   // Use remark to convert Markdown into HTML string
//   const processedContent = await remark()
//     .use(headingTree)
//     .process(matterResult.content);
//   return processedContent.data.headings;
// }
