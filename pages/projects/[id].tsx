import { useEffect, useRef } from "react";
import type { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { extractHeadings } from "extract-md-headings";

/* ---------- Layout & UI ---------- */
import Layout from "@/components/layout";
import TableOfContents from "@/components/tableofcontents";
import MobileTableofContents from "@/components/mobiletoc";

/* ---------- MDX runtime ---------- */
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

/* ---------- Data helpers ---------- */
import {
  getAllProjectIds,
  getProjectData,
  getProjectsData,
} from "lib/projects";

/* ---------- Components available inside MDX ---------- */
import Code from "@/components/code";
import { ExternalLinkWiggle } from "@/components/external-link-wiggle";
import ComparisonSlider from "@/components/comparisonslider";
import ImageModal from "@/components/imagemodal";
import QuickFacts from "@/components/quick-facts";
import { Projects2 } from "@/components/Homepage/projects2";
import { Badge } from "@/components/badge";
import {
  ExpressIcon,
  FlaskIcon,
  FlaskSocketIoIcon,
  ReactIcon,
  ReduxIcon,
  SequelizeIcon,
  SQLAIcon,
  TypeScriptIcon,
} from "@/components/icons";
import ResponsiveTable from "@/components/responsive-table";
import Link from "next/link";
import HeroImageCarousel from "@/components/hero-image-carousel";

/* ---------- Types ---------- */
interface ProjectProps {
  fileContent: { slug: string; title: string; level: number }[];
  projectData: {
    title: string;
    subtitle: string;
    mdxSource: MDXRemoteSerializeResult;
    [k: string]: any;
  };
}

export default function Project({ projectData, fileContent }: ProjectProps) {
  const headingsRef = useRef<HTMLDivElement | null>(null);

  /* --- Same heading/anchor/Styling logic you already use for posts --- */
  useEffect(() => {
    if (!headingsRef.current) return;
    const hs = headingsRef.current.querySelectorAll<HTMLElement>("h2,h3,h4");
    hs.forEach((h) => {
      const txt = h.textContent?.toLowerCase() ?? "";
      h.id = txt
        .replace(/[^a-z0-9 _-]/gi, "")
        .split(" ")
        .join("-");
      const n = h.nodeName.toLowerCase();
      if (n === "h2")
        h.classList.add(
          "text-3xl",
          "font-bold",
          "mt-16",
          "text-indigo-600",
          "dark:text-indigo-300",
          "mb-8"
        );
      else if (n === "h3")
        h.classList.add("text-2xl", "font-bold", "mt-16", "mb-8");
      else if (n === "h4")
        h.classList.add("text-xl", "font-bold", "mt-16", "mb-8");
    });
  }, []);

  useEffect(() => {
    document
      .querySelectorAll<HTMLAnchorElement>(".content a")
      .forEach((a) => a.setAttribute("target", "_blank"));
  }, []);

  const mdxComponents = {
    ExternalLinkWiggle,
    Code,
    ComparisonSlider,
    ImageModal,
    QuickFacts,
    Badge,
    ExpressIcon,
    SequelizeIcon,
    ReactIcon,
    ReduxIcon,
    TypeScriptIcon,
    FlaskIcon,
    SQLAIcon,
    FlaskSocketIoIcon,
    ResponsiveTable,
    Link,
    HeroImageCarousel
  };

  return (
    <Layout projectData={projectData}>
      <Head>
        <title>Sara Dunlop | {projectData.title}</title>
      </Head>

      {fileContent.length > 0 && (
        <MobileTableofContents headings={fileContent} />
      )}

      <div
        ref={headingsRef}
        className="mx-auto max-w-6xl w-full px-6 lg:px-5 py-10 lg:py-20 flex flex-row-reverse justify-between dark:text-gray-50 items-start text-slate-900 gap-14"
      >
        {fileContent.length > 0 && <TableOfContents headings={fileContent} />}

        <div className="project-content project-post font-wotfard text-lg w-full lg:pl-6 flex-1 min-w-0">
          <MDXRemote
            {...projectData.mdxSource}
            components={mdxComponents}
            /* scope → only if you need to inject extra variables */
          />
        </div>
      </div>
    </Layout>
  );
}

/* ------------------------------------------------------------------ */
/*  Static generation                                                 */
/* ------------------------------------------------------------------ */

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: getAllProjectIds(),
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const projectData = await getProjectData(params!.id as string);
  const mdxHeadings = extractHeadings(`projects/${params!.id}.mdx`);

  return {
    props: {
      projectData,
      fileContent: mdxHeadings,
    },
  };
};
