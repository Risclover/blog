import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";
import { getCategories, getCategoryPosts } from "lib/categories";

export default function Category({
  id,
  categoryData,
}: {
  id: string;
  categoryData: {
    title: string;
    date: string;
    subtitle: string;
    preview: string;
    category: string;
  }[];
}) {
  console.log("string:", id);
  return (
    <Layout>
      <div className="w-full h-full bg-gray-100 dark:bg-gray-900 min-h-screen pt-16 sm:pt-32 px-8 pb-16">
        <div className="lg:max-w-5xl w-full m-auto">
          <h1 className="text-[38px] font-bold ml-8 mb-4 dark:text-gray-50 capitalize">
            {id} C:
          </h1>
          <div className="categories-page"></div>
        </div>
      </div>
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
      id: params?.id,
      categoryData,
    },
  };
};
