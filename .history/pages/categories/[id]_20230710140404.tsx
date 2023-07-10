import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";
import { getCategories, getCategoryPosts } from "lib/categories";

export default function Category({
  allCategories,
}: {
  allCategories: {
    title: string;
    date: string;
    subtitle: string;
    preview: string;
    category: string;
  };
}) {
  return <Layout>{allCategories}</Layout>;
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const categoryData = await getCategoryPosts(params?.id as string);

  console.log("all categories:", categoryData);

  return {
    props: {
      categoryData,
    },
  };
};
