import { useEffect, useRef } from "react";
import type { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { extractHeadings } from "extract-md-headings";

/* ---------- Layout & UI ---------- */
import Layout from "@/components/layout";
import TableOfContents from "@/components/tableofcontents";
import MobileTableofContents from "@/components/mobiletoc";

/* ---------- MDX runtime ---------- */
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

/* ---------- Data helpers ---------- */
import { getAllPostIds, getPostData, getSortedPostsData } from "lib/posts";

/* ---------- Custom MDX components ---------- */
import Code from "@/components/code";
import { ExternalLinkWiggle } from "@/components/external-link-wiggle";
import ComparisonSlider from "@/components/comparisonslider";

/* ---------- STATIC IMAGES USED IN MDX ---------- */
import ComparisonReddit2 from "../../public/images/projects/ribbit/comparison-reddit-2.png";
import ComparisonRibbit2 from "../../public/images/projects/ribbit/comparison-ribbit-2.png";
import Link from "next/link";

/* ---------- Types ---------- */
interface PostProps {
  fileContent: { slug: string; title: string; level: number }[];
  postData: {
    title: string;
    date: string;
    mdxSource: MDXRemoteSerializeResult;
    subtitle: string;
    category: string;
    subcategory?: string;
    tags: string[];
  };
}

export default function Post({ postData, fileContent }: PostProps) {
  const headingsRef = useRef<HTMLDivElement | null>(null);

  /* ---------- Style generated headings ---------- */
  useEffect(() => {
    if (!headingsRef.current) return;
    const headings =
      headingsRef.current.querySelectorAll<HTMLElement>("h2,h3,h4");

    headings.forEach((heading) => {
      const textContent = heading.textContent?.toLowerCase() ?? "";
      heading.id = textContent
        .replace(/[^a-zA-Z0-9_\- ]/g, "")
        .split(" ")
        .join("-");

      const node = heading.nodeName.toLowerCase();
      if (node === "h2") {
        heading.classList.add(
          "text-3xl",
          "font-bold",
          "mt-16",
          "text-indigo-600",
          "dark:text-indigo-300",
          "mb-8"
        );
      } else if (node === "h3") {
        heading.classList.add("text-2xl", "font-bold", "mt-16", "mb-8");
      } else if (node === "h4") {
        heading.classList.add("text-xl", "font-bold", "mt-16", "mb-8");
      }
    });
  }, []);

  /* ---------- Force external links to open in new tab ---------- */
  // useEffect(() => {
  //   document
  //     .querySelectorAll<HTMLAnchorElement>(".content a")
  //     .forEach((link) => link.setAttribute("target", "_blank"));
  // }, []);

  /* ---------- Components exposed to MDX ---------- */
  const mdxComponents = {
    ExternalLinkWiggle,
    Code,
    ComparisonSlider,
    Link
  };

  return (
    <Layout postData={postData}>
      <Head>
        <title>Sara Dunlop | Blog: {postData.title}</title>
      </Head>

      {fileContent.length > 0 && (
        <MobileTableofContents headings={fileContent} />
      )}

      {postData.tags?.map((tag) => (
        <div key={tag}>{tag.toLowerCase()}</div>
      ))}

      <div
        id="about"
        ref={headingsRef}
        className="mx-auto max-w-6xl w-full px-6 lg:px-5 py-10 lg:py-20 flex flex-row-reverse justify-between dark:text-gray-50 items-start text-slate-900 gap-14"
      >
        {fileContent.length > 0 && <TableOfContents headings={fileContent} />}

        <div className="blog-post text-slate-900 font-medium text-lg leading-8 font-wotfard dark:text-gray-50">
          <div
            className={`${
              fileContent.length > 0 ? "content content-with-toc" : "content"
            }`}
          >
            {/* ⬇️ Inject the images via `scope` so MDX can reference them */}
            <MDXRemote
              {...postData.mdxSource}
              components={mdxComponents}
              scope={{ ComparisonReddit2, ComparisonRibbit2 }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

/* ------------------------------------------------------------------ */
/*  Static generation                                                 */
/* ------------------------------------------------------------------ */

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: getAllPostIds(),
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const allPostsData = getSortedPostsData();
  const postData = await getPostData(params!.id as string);
  const mdxContent = extractHeadings(`posts/${params!.id}.mdx`);

  return {
    props: {
      allPostsData,
      postData,
      fileContent: mdxContent,
    },
  };
};
