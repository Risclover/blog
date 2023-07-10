import { GetStaticPaths, GetStaticProps } from "next";
import Layout from "../../components/layout";

export default function Post() {
  return <Layout>...</Layout>;
}

export const getStaticPaths: GetStaticPaths = async () => {
  // ...
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // ...
};
