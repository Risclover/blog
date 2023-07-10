import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";
import { getCategories, getCategoryPosts } from "lib/categories";

export default function Category({
  categoryData,
}: {
  categoryData: {
    title: string;
    date: string;
    subtitle: string;
    preview: string;
    category: string;
  }[];
}) {
  console.log("cat:", categoryData[0]);
  return (
    <Layout>
      {categoryData.map((category) => (
        <div>{category.title}</div>
      ))}
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getCategories();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const categoryData = await getCategoryPosts(params?.id as string);
  return {
    props: {
      categoryData,
    },
  };
};
