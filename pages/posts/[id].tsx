import Layout from "../../components/layout";
import {
  getAllPostIds,
  getPostData,
  getSortedPostsData,
} from "../../lib/posts";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";
import { getCategories } from "lib/categories";
import { extractHeadings } from "extract-md-headings";
import TableOfContents from "@/components/tableofcontents";
import { useEffect, useRef, useState } from "react";
import MobileTableofContents from "@/components/mobiletoc";
import markdownToHtml from "lib/markdown";

export default function Post({
  allPostsData,
  postData,
  fileContent,
  content,
}: {
  allPostsData: {
    date: string;
    title: string;
    category: string;
    subtitle: string;
    slug: string;
  }[];

  fileContent: { slug: string; title: string; level: number }[];
  content: string;

  postData: {
    title: string;
    date: string;
    contentHtml: string;
    subtitle: string;
    category: string;
  };
}) {
  const headingsRef = useRef(null);

  console.log("POST DATA:", postData);

  useEffect(() => {
    const headings: NodeListOf<Element> =
      document.querySelectorAll("h2, h3, h4");

    headings.forEach((heading: Element) => {
      heading.setAttribute(
        "id",
        heading.textContent.toLowerCase().split(" ").join("-")
      );

      if (heading.textContent.toLowerCase() === "introduction") {
        heading.classList.add("opacity-0", "mt-[-34px]");
      } else {
        if (heading.nodeName.toLowerCase() === "h2")
          heading.classList.add(
            "text-3xl",
            "font-bold",
            "mt-16",
            "text-indigo-600",
            "dark:text-indigo-300",
            "mb-8"
          );

        if (heading.nodeName.toLowerCase() === "h3") {
          heading.classList.add("text-2xl", "font-bold", "mt-16", "mb-8");
        }

        if (heading.nodeName.toLowerCase() === "h4") {
          heading.classList.add("text-xl", "font-bold", "mt-16", "mb-8");
        }
      }
    });
  }, []);

  useEffect(() => {
    let links = document.querySelectorAll(".content a");
    links.forEach((link) => {
      link.setAttribute("target", "_blank");
    });
  }, []);

  useEffect(() => {
    function initCodeCopy() {
      const codeBlocks = document.querySelectorAll('code[class*="language-"]');

      codeBlocks.forEach((block: Element) => {
        const lang: string | undefined = parseLanguage(block);
        const referenceEl = block.parentElement;
        const parent = block.parentElement?.parentElement;

        const wrapper = document.createElement("div");
        wrapper.className = "code-wrapper";
        parent?.insertBefore(wrapper, referenceEl);
        wrapper.append(block.parentElement);

        const copyBtn = document.createElement("button");
        copyBtn.setAttribute("class", "copy-button");
        copyBtn.setAttribute("data-lang", lang);
        copyBtn.innerHTML = `${lang} <svg viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.007-1H7zM5.003 8L5 20h10V8H5.003zM9 6h8v10h2V4H9v2z" fill="currentColor"/></svg>`;

        wrapper.insertAdjacentElement("beforeend", copyBtn);
      });

      function parseLanguage(block: HTMLElement): string | undefined {
        const className = block.className;
        if (className.startsWith("language")) {
          const [prefix, lang] = className.split("-");
          console.log("prefix:", prefix);
          return lang;
        }
      }

      function copy(e: React.BaseSyntheticEvent<HTMLButtonElement>) {
        const btn = e.currentTarget;
        const lang = btn.dataset.lang;

        const text = e.currentTarget.previousSibling.children[0].textContent;

        navigator.clipboard.writeText(text).then(
          () => {
            btn.innerHTML = `copied! <svg viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.007-1H7zm2 0h8v10h2V4H9v2z" fill="currentColor"/></svg>`;
            btn.setAttribute("style", "opacity: 1");
          },
          () => alert("failed to copy")
        );

        setTimeout(() => {
          btn.removeAttribute("style");
          btn.innerHTML = `${lang} <svg viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.007-1H7zM5.003 8L5 20h10V8H5.003zM9 6h8v10h2V4H9v2z" fill="currentColor"/></svg>`;
        }, 3000);
      }

      const copyButtons = document.querySelectorAll(".copy-button");

      copyButtons.forEach((btn) => {
        btn.addEventListener("click", copy);
      });
    }

    initCodeCopy();
  }, []);

  return (
    <Layout postData={postData}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      {fileContent.length > 0 && (
        <MobileTableofContents
          headings={fileContent}
          headingsRef={headingsRef}
        />
      )}
      <div
        ref={headingsRef}
        className="mx-auto max-w-6xl w-full px-6 lg:px-12 py-10 lg:py-20 flex flex-row-reverse dark:text-gray-50"
      >
        {fileContent.length > 0 && (
          <TableOfContents headings={fileContent} headingsRef={headingsRef} />
        )}
        <div className="blog-post text-slate-900 font-medium text-lg leading-8 font-wotfard dark:text-gray-50">
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
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
  const allPostsData = getSortedPostsData();
  const postData = await getPostData(params?.id as string);
  const content = await markdownToHtml(postData.contentHtml || "");
  const mdxContent = extractHeadings(`posts/${params?.id}.md`);
  return {
    props: {
      allPostsData,
      postData,
      fileContent: mdxContent,
      content,
    },
  };
};
