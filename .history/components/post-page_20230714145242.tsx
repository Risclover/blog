"use client";

import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";
import { getCategories } from "lib/categories";
import { extractHeadings } from "extract-md-headings";
import TableOfContents from "@/components/tableofcontents";
import { useEffect, useRef } from "react";

export default function Post({
  postData,
  fileContent,
}: {
  fileContent: { slug: string; title: string; level: number }[];
  postData: {
    title: string;
    date: string;
    contentHtml: string;
    subtitle: string;
    category: string;
  };
}) {
  const headingsRef = useRef(null);

  const headings: any = document.querySelectorAll("h2, h3");

  headings.forEach((heading: any) => {
    heading.setAttribute(
      "id",
      heading.textContent.toLowerCase().split(" ").join("-")
    );

    if (heading.nodeName.toLowerCase() === "h2")
      heading.classList.add(
        "text-3xl",
        "font-bold",
        "mt-16",
        "text-sky-700",
        "mb-8"
      );

    if (heading.nodeName.toLowerCase() === "h3") {
      heading.classList.add("text-2xl", "font-bold", "mt-16", "mb-8");
    }
  });

  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div
        ref={headingsRef}
        className="mx-auto max-w-6xl w-full px-12 py-20 flex flex-row-reverse dark:text-gray-50"
      >
        {fileContent.length > 0 && (
          <TableOfContents headings={fileContent} headingsRef={headingsRef} />
        )}
        <div className="blog-post text-slate-900 font-medium text-lg leading-8 font-wotfard dark:text-gray-50">
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  console.log(getCategories());
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string);
  const mdxContent = extractHeadings(`posts/${params?.id}.md`);
  return {
    props: {
      postData,
      fileContent: mdxContent,
    },
  };
};

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  const postData = await getPostData(params?.id as string);
  const mdxContent = extractHeadings(`posts/${params?.id}.md`);
  return {
    props: {
      postData,
      fileContent: mdxContent,
    },
  };
}

async function getPosts() {
    const res = await fetch("")
}
