import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import prism from "remark-prism";
import remarkGfm from "remark-gfm";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";

const postsDirectory = path.join(process.cwd(), "posts");

/** ------------------------------------------------------------------ */
/**  Helpers: read directory / build slugs                            */
/** ------------------------------------------------------------------ */

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.mdx?$/, ""); // ← handle .mdx
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return {
      id,
      ...(data as {
        date: string;
        title: string;
        category: string;
        subtitle: string;
        slug: string;
        description?: string;
        tags: string[];
      }),
    };
  });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllPostIds() {
  return fs.readdirSync(postsDirectory).map((fileName) => ({
    params: { id: fileName.replace(/\.mdx?$/, "") },
  }));
}

/** ------------------------------------------------------------------ */
/**  Core: load a single post                                         */
/** ------------------------------------------------------------------ */

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.mdx`); // ← .mdx now
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  // Compile MDX → serialisable JSON for <MDXRemote />
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm, prism as any],
      format: "mdx",
    },
    scope: data, // front-matter available inside MDX if you want it
  });

  return {
    id,
    mdxSource: mdxSource as MDXRemoteSerializeResult,
    ...(data as {
      date: string;
      title: string;
      category: string;
      subtitle: string;
      slug: string;
      tags: string[];
    }),
  };
}
