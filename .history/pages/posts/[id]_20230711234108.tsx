import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";
import { getCategories } from "lib/categories";
import { extractHeadings } from "extract-md-headings";

export default function Post({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
    subtitle: string;
    category: string;
  };
}) {
  return (
    <Layout postData={postData}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div className="max-w-6xl w-full px-12 py-20 flex flex-row-reverse dark:text-white">
        <div>Table of Contents</div>
        <div className="class=text-slate-900 font-medium text-lg leading-8 font-wotfard dark:text-white">
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
  const mdxContent =
  return {
    props: {
      postData,
    },
  };
};
