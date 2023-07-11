import Layout from "@/components/layout";
import { getCategories } from "lib/categories";
import { getSortedPostsData } from "lib/posts";
import { GetStaticProps } from "next";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <main className="container px-12 py-24 font-sans flex flex-col min-h-screen h-full">
        <h2 className="uppercase text-lg font-medium tracking-widest text-pink-500 mb-9">
          Categories
        </h2>
        <div className="flex flex-wrap mb-[64px]">(categories go here)</div>
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
  return {
    props: {
      allPostsData,
    },
  };
};
