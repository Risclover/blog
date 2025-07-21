import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import prism from "remark-prism";
import remarkGfm from "remark-gfm";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";

const projectsDirectory = path.join(process.cwd(), "projects");

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

/**  Used if you need a list elsewhere (e.g. landing page)             */
export function getProjectsData() {
  const fileNames = fs.readdirSync(projectsDirectory);

  return fileNames
    .filter((f) => f.endsWith(".mdx"))
    .map((fileName) => {
      const id = fileName.replace(/\.mdx?$/, "");
      const source = fs.readFileSync(
        path.join(projectsDirectory, fileName),
        "utf8"
      );
      const { data } = matter(source);
      return {
        id,
        ...(data as { title: string; subtitle: string; date?: string }),
      };
    })
    .sort((a, b) => (a.date && b.date && a.date < b.date ? 1 : -1));
}

/**  Tell Next.js which dynamic routes to build                        */
export function getAllProjectIds() {
  return fs
    .readdirSync(projectsDirectory)
    .filter((f) => f.endsWith(".mdx"))
    .map((fileName) => ({
      params: { id: fileName.replace(/\.mdx?$/, "") },
    }));
}

/* ------------------------------------------------------------------ */
/*  Core loader ― called from getStaticProps                           */
/* ------------------------------------------------------------------ */

export async function getProjectData(id: string) {
  const fullPath = path.join(projectsDirectory, `${id}.mdx`);
  const rawSource = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(rawSource);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm, prism as any],
      format: "mdx",
    },
    scope: data, // front‑matter available inside the MDX if needed
  });

  return {
    id,
    mdxSource: mdxSource as MDXRemoteSerializeResult,
    ...(data as {
      title: string;
      subtitle: string;
      date?: string;
      [key: string]: any;
    }),
  };
}
