import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import 
import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";

export default function Category({
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
      <article>
        <h1>{postData.title}</h1>
        <div>{postData.date}</div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getPostData();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const categories = await getPostData(params?.id as string);
  return {
    props: {
      categories,
    },
  };
};
