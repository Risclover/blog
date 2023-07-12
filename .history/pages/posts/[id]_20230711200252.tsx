import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";
import { getCategories } from "lib/categories";
import { getHeadings } from "lib/toc";

export default function Post({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
    subtitle: string;
    category: string;
    slug: string;
  };
}) {
  return (
    <Layout postData={postData}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div className="max-w-6xl w-full px-12 py-20 flex flex-row-reverse dark:text-white mx-auto">
        <div className="toc min-w-fit ml-20 hidden lg:block">
          Table of Contents
          <TableOfContents />
        </div>
        <div className="text-slate-900 font-medium text-lg leading-8 font-wotfard dark:text-white">
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string);
  const headings = await getHeadings(params?.id as string);
  console.log("headings:", headings);
  return {
    props: {
      postData,
    },
  };
};

export const TableOfContents = ({ nodes }: any) => {
  if (!nodes?.length) {
    return null;
  }

  return (
    <div className={"toc"}>
      <h3 className={"secondary-text"}>Table of contents</h3>
      {renderNodes(nodes)}
    </div>
  );
};

function renderNodes(nodes: any) {
  return (
    <ul>
      {nodes.map((node: any) => (
        <li key={node.data.hProperties.id}>
          <TOCLink node={node} />
          {node.children?.length > 0 && renderNodes(node.children)}
        </li>
      ))}
    </ul>
  );
}

const TOCLink = ({ node }: any) => {
  let fontSizes: any = { 2: "base", 3: "sm", 4: "xs" };
  const id = node.data.hProperties.id;
  return (
    <a
      href={`#${id}`}
      className={`block text-${fontSizes[node.depth]} hover:accent-color py-1`}
      onClick={(e) => {
        e.preventDefault();
        document
          .getElementById(id)
          .scrollIntoView({ behavior: "smooth", block: "start" });
      }}
    >
      {node.value}
    </a>
  );
};
