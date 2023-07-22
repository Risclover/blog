import Layout from "@/components/layout";
import { getCategories } from "lib/categories";
import { getSortedPostsData } from "lib/posts";
import { GetStaticProps } from "next";
import Link from "next/link";
import { HiMiniArrowRight } from "react-icons/hi2";

export default function Home({
  allPostsData,
  categories,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
    subtitle: string;
    description: string;
  }[];
  categories: {
    params: {
      id: string;
    };
  }[];
}) {
  let categoriesList: any = {};
  for (let category of categories) {
    if (categoriesList[category.params.id] == 0) {
      categoriesList[category.params.id] += 1;
    } else {
      categoriesList[category.params.id] = 0;
    }
  }

  let categoriesSet = new Set(Object.keys(categoriesList));

  return (
    <Layout home>
      <div className="px-6 sm:px-12 py-24 font-sans flex flex-col min-h-screen h-full lg:max-w-6xl w-full m-auto relative">
        <h2 className="uppercase text-base font-medium tracking-widest text-pink-500 mb-9">
          Categories
        </h2>
        <div className="flex flex-wrap mb-[64px]">
          {Array.from(categoriesSet).map((category, idx) => (
            <Link key={idx} href={`/categories/${category}`}>
              <div className="flex justify-center items-center mb-2 mr-2 text-sm font-normal font-wotfard rounded-lg bg-sky-100 text-black dark:bg-slate-700 dark:text-white hover:bg-sky-200 dark:hover:bg-slate-600 w-fit px-3 py-1.5 cursor-pointer">
                {category.slice(0, 1).toUpperCase() + category.slice(1)}
              </div>
            </Link>
          ))}
        </div>
        <section className="max-w-3xl lg:max-w-4xl w-full">
          <h2 className="uppercase text-base font-medium tracking-widest text-pink-500 mb-7">
            Latest and Greatest
          </h2>
          <div className="grid grid-cols-1 gap-1 grid-flow-row">
            {allPostsData.map(
              ({ id, date, title, subtitle, description }, idx) => (
                <Link
                  key={idx}
                  href={`/posts/${id}`}
                  className="container py-2 mb-12 group cursor-pointer"
                >
                  <div key={id}>
                    <h3 className="text-[22px] font-bold leading-8 text-gray-950 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 dark:text-gray-50">
                      {title}
                    </h3>
                    {subtitle !== "No subtitle given" && (
                      <div className="text-slate-500 text-[17px] leading-8 font-medium dark:text-slate-400">
                        {subtitle}
                      </div>
                    )}

                    {description !== "No description given" && (
                      <div className="mt-4 font-normal text-gray-900 text-base leading-7 dark:text-gray-50">
                        {description}
                      </div>
                    )}
                    <div className="mt-4 font-bold text-neutral-900 text-base flex items-center dark:text-gray-50">
                      <span className="mr-1">Read more</span>
                      <span className="text-lg text-indigo-600 dark:text-indigo-400 hidden group-hover:block">
                        <HiMiniArrowRight />
                      </span>
                    </div>
                  </div>
                </Link>
              )
            )}
          </div>
        </section>
      </div>
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
