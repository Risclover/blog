import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import Head from "next/head";
import { HiMiniArrowRight } from "react-icons/hi2";
import { getCategories, getCategoryPosts } from "lib/categories";
import Layout from "@/components/layout";

export default function Category({
  id,
  categoryData,
}: {
  id: string;
  categoryData: {
    data: {
      title: string;
      date: string;
      subtitle: string;
      description: string;
      category: string;
      slug: string;
    };
    postId: string;
  }[];
}) {
  console.log(
    "postId:",
    categoryData.map((post) => post.postId)
  );
  return (
    <Layout home>
      <Head>
        <title>Sara Dunlop | Blog: {id[0].toUpperCase() + id.slice(1)}</title>
      </Head>
      <div className="w-full h-full bg-gray-200 dark:bg-slate-950 min-h-screen pt-16 sm:pt-32 px-8 pb-16">
        <div className="lg:max-w-6xl w-full m-auto">
          <h1 className="text-[2rem] font-bold ml-8 mb-4 text-gray-900 dark:text-gray-50 capitalize">
            {id}
          </h1>
          <div className="categories-page">
            {categoryData.map(
              (post, i) =>
                post?.data.category.toLowerCase() === id && (
                  <Link key={i} href={`/posts/${post?.postId.slice(0, -4)}`}>
                    <div className="category-box cursor-pointer group h-full dark:bg-gray-800 dark:text-gray-50">
                      <div className="mb-3">
                        <h2 className="text-[1.25rem] font-bold text-gray-900 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 mb-1 dark:text-gray-50 leading-snug">
                          {post.data.title}
                        </h2>
                        <span className="text-slate-700 dark:text-slate-400 leading-snug font-medium text-[1.05rem]">
                          {post?.data.subtitle !== "No subtitle given" &&
                            post.data.subtitle}
                        </span>
                      </div>
                      <p className="leading-7 text-[#0a0c10] dark:text-gray-50">
                        {post.data.description}
                      </p>
                      <div className="pt-4 leading-7 text-gray-900 font-bold flex items-center dark:text-gray-50">
                        Read more{" "}
                        <HiMiniArrowRight className="ml-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:block hidden" />
                      </div>
                    </div>
                  </Link>
                )
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

// testing

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
