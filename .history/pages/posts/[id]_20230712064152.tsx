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
  console.log("file content:", fileContent);
  useEffect(() => {
    const headings: any = document.querySelectorAll("h2");

    headings.forEach((heading: any) => {
      heading.setAttribute(
        "id",
        heading.textContent.toLowerCase().split(" ").join("-")
      );
      heading.classList.add("text-3xl", "font-bold", "mt-16", "text-sky-700");
    });
  }, []);

  return (
    <Layout postData={postData}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div className="mx-auto max-w-6xl w-full px-12 py-20 flex flex-row-reverse dark:text-white">
        {fileContent.length > 0 && <TableOfContents headings={fileContent} />}
        <div className="text-slate-900 font-medium text-lg leading-8 font-wotfard dark:text-white">
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
      </div>
    </Layout>
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
