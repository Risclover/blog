import Layout from "@/components/layout";
import { getCategories } from "lib/categories";
import { getSortedPostsData } from "lib/posts";
import { GetStaticProps } from "next";
import Link from "next/link";
import { useEffect } from "react";

export default function Home({
  allPostsData,
  categories,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
  categories: {
    params: {
      id: string;
    };
  }[];
}) {
  console.log("cats:", allPostsData);

  let categoriesList: any = {};
  for (let category of categories) {
    if (categoriesList[category.params.id] == 0) {
      categoriesList[category.params.id] += 1;
    } else {
      categoriesList[category.params.id] = 0;
    }
  }

  let categoriesSet = new Set(Object.keys(categoriesList));

  console.log(Array.from(categoriesSet));

  console.log("list:", categoriesList);

  return (
    <Layout home>
      <main className="container px-12 py-24 font-sans flex flex-col min-h-screen h-full">
        <h2 className="uppercase text-lg font-medium tracking-widest text-pink-500 mb-9">
          Categories
        </h2>
        <div className="flex flex-wrap mb-[64px]">
          {Array.from(categoriesSet).map((category) => (
            <Link href={`/categories/${category}`}>
              <div className="flex justify-center items-center mb-2 mr-2 text-sm font-normal font-wotfard rounded-lg bg-sky-100 dark:bg-slate-700 dark:text-white w-fit px-3 py-1.5 cursor-pointer">
                {category.slice(0, 1).toUpperCase() + category.slice(1)}
              </div>
            </Link>
          ))}
        </div>
        <section className="mr-16">
          <h2 className="uppercase text-lg font-medium tracking-widest text-pink-500 mb-7">
            Latest and Greatest
          </h2>
          <div className="grid grid-cols-1 gap-1 grid-flow-row">
            {allPostsData.map(({ id, date, title }) => (
              <Link href={`/posts/${id}`}>
                <div
                  key={post.id}
                  className="container py-2 mb-12 group cursor-pointer"
                >
                  <h3 className="text-xl font-bold leading-8 text-gray-950 group-hover:text-sky-700 dark:text-gray-50">
                    {post.title}
                  </h3>
                  {post.subtitle !== "No subtitle given" && (
                    <div className="text-slate-500 text-base leading-8 font-medium dark:text-slate-400">
                      {post.subtitle}
                    </div>
                  )}

                  {post.description !== "No description given" && (
                    <div className="mt-4 font-normal text-gray-900 text-base leading-7 dark:text-gray-50">
                      {post.description}
                    </div>
                  )}
                  <div className="mt-4 font-bold text-neutral-900 text-base flex items-center dark:text-gray-50">
                    <span className="mr-1">Read more</span>
                    <span className="text-lg text-sky-700 hidden group-hover:block">
                      <HiMiniArrowRight />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  const categories = getCategories();
  return {
    props: {
      allPostsData,
      categories,
    },
  };
};
