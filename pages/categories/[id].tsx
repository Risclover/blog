import Layout from "../../components/layout";
import { GetStaticProps, GetStaticPaths } from "next";
import { getCategories, getCategoryPosts } from "lib/categories";
import { HiMiniArrowRight } from "react-icons/hi2";
import Link from "next/link";

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
    slug: string;
  }[];
}) {
  return (
    <Layout home>
      <div className="w-full h-full bg-gray-200 dark:bg-slate-950 min-h-screen pt-16 sm:pt-32 px-8 pb-16">
        <div className="lg:max-w-6xl w-full m-auto">
          <h1 className="text-[38px] font-bold ml-8 mb-4 text-gray-900 dark:text-gray-50 capitalize">
            {id}
          </h1>
          <div className="categories-page">
            {categoryData.map(
              (post, i) =>
                post?.category.toLowerCase() === id && (
                  <Link href={`/posts/${categoryData[i].slug}`}>
                    <div className="category-box cursor-pointer group h-full dark:bg-gray-800 dark:text-gray-50">
                      <div className="mb-3">
                        <h2 className="text-[22px] font-bold text-gray-900 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 mb-1 dark:text-gray-50">
                          {post.title}
                        </h2>
                        <span className="text-slate-700 dark:text-slate-400 leading-7 font-medium text-[17px]">
                          {post?.subtitle !== "No subtitle given" &&
                            post.subtitle}
                        </span>
                      </div>
                      <p className="leading-7 text-[#0a0c10] dark:text-gray-50">
                        {post.preview}
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
