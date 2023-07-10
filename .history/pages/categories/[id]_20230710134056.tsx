import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";
import { getCategories } from "lib/categories";

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
  return <Layout postData={postData}>Hello</Layout>;
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   const allPosts = await getPostData();
//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const categories = await getPostData(params?.id as string);
//   return {
//     props: {
//       categories,
//     },
//   };
// };

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getCategories();
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
};
