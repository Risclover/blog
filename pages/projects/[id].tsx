import { GetStaticPaths, GetStaticProps } from "next";
import comparisonslider from "@/components/comparisonslider";
import topImage from "../public/images/ribbit-screen.png";
import bottomImage from "../public/images/reddit-screen.png";
import {
  getAllProjectIds,
  getProjectData,
  getProjectsData,
} from "lib/projects";
import markdownToHtml from "lib/markdown";

export default function ProjectDetails({
  projectData,
  content,
}: {
  projectData: {
    title: string;
    subtitle: string;
    contentHtml: string;
  };
  content: string;
}) {
  console.log("RPOJECT DATA:", projectData);
  console.log("CONTENT:", content);
  return (
    <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }}></div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllProjectIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const allProjectsData = getProjectsData();
  const projectData = await getProjectData(params?.id as string);
  const content = await markdownToHtml(projectData.contentHtml || "");

  return {
    props: {
      allProjectsData,
      projectData,
      content,
    },
  };
};
