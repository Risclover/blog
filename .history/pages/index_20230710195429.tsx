import Layout from "@/components/layout";
import { getCategories } from "lib/categories";
import { getSortedPostsData } from "lib/posts";
import { GetStaticProps } from "next";
import { useEffect } from "react";

export default function Home({
  allPostsData,
  categories,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  };
  categories: {
    params: {
      id: string;
    };
  }[];
}) {
  console.log("cats:", categories[0].params.id);

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
            <div>{category.slice(0, 1).toUpperCase() + category.slice(1)}</div>
          ))}
        </div>
        <section className="mr-16">
          <h2 className="uppercase text-lg font-medium tracking-widest text-pink-500 mb-7">
            Latest and Greatest
          </h2>
          <div className="grid grid-cols-1 gap-1 grid-flow-row">Post list</div>
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