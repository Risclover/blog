import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export function getCategories() {
    const fileNames = fs.readdirSync(postsDirectory);
    const categories = fileNames.map((fileName) => {
        return {
            params: {
                id: fil
            }
        }
    })
}
