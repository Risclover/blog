import React, { useEffect, useRef, useState } from "react";
import { PiArrowFatUpDuotone } from "react-icons/pi";

type Props = {
  headingsRef: any;
  headings: { slug: string; title: string; level: number }[];
};

function useHighlighted() {
  const observer = useRef<IntersectionObserver | null>(null);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const handleObserver = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry?.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    observer.current = new IntersectionObserver(handleObserver, {
      rootMargin: "10% 0% -50% 0%",
      threshold: 0,
    });

    const elements = document.querySelectorAll("h2, h3, h4");
    elements.forEach((elem) => observer.current?.observe(elem));
    return () => observer.current?.disconnect();
  }, []);

  return { activeId };
}

export default function TableofContents(props: Props) {
  const { activeId } = useHighlighted();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="toc ml-20 hidden lg:block">
      <h1 className="uppercase font-medium text-[18px] tracking-widest mb-1 text-slate-900 dark:text-gray-50 mb-[16px]">
        Table of Contents
      </h1>
      <ul>
        {props.headings.map(
          (
            heading: { slug: string; title: string; level: number },
            idx: number
          ) => (
            <a key={idx} href={`#${heading.slug}`}>
              {heading.level === 2 ? (
                <li
                  className={`${
                    activeId === heading.slug
                      ? "text-indigo-600 dark:text-indigo-300 text-[15px] hover:text-indigo-600"
                      : "text-slate-900 dark:text-gray-50 text-[15px] hover:text-indigo-600  dark:hover:text-indigo-300"
                  } mt-[10px]`}
                >
                  {heading.title}
                </li>
              ) : heading.level === 3 ? (
                <li className="mt-0">
                  <ul className="mb-0 ml-1">
                    <li
                      className={`${
                        activeId === heading.slug
                          ? "text-indigo-600 dark:text-indigo-300 text-[15px] hover:text-indigo-600"
                          : "text-slate-900 dark:text-gray-50 text-[15px] hover:text-indigo-600  dark:hover:text-indigo-300"
                      } mt-[3px]`}
                    >
                      {heading.title}
                    </li>
                  </ul>
                </li>
              ) : heading.level === 4 ? (
                <li className="mt-0">
                  <ul className="mb-0">
                    <li>
                      <ul className="mb-0  ml-3">
                        <li
                          className={`${
                            activeId === heading.slug
                              ? "text-indigo-600 dark:text-indigo-300 text-[15px] hover:text-indigo-600"
                              : "text-slate-900 dark:text-gray-50 text-[15px] hover:text-indigo-600  dark:hover:text-indigo-300"
                          } mt-[3px]`}
                        >
                          {heading.title}
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              ) : (
                ""
              )}
            </a>
          )
        )}
      </ul>
      <button
        className="mt-6 text-sm text-gray-900 hover:text-indigo-600 flex dark:text-gray-50 dark:hover:text-indigo-300"
        onClick={scrollToTop}
      >
        Back to Top <PiArrowFatUpDuotone className="ml-1 mt-[2px]" />
      </button>
    </div>
  );
}
