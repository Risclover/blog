import React, { useEffect, useRef, useState } from "react";

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
      rootMargin: "0% 0% -10% 0px",
      threshold: 1,
    });

    const elements = document.querySelectorAll("h2, h3, h4");
    elements.forEach((elem) => observer.current?.observe(elem));
    return () => observer.current?.disconnect();
  }, []);

  return { activeId };
}

export default function TableofContents(props: Props) {
  const { activeId } = useHighlighted();

  return (
    <div className="toc min-w-fit ml-20 hidden lg:block">
      <h1 className="uppercase font-medium tracking-widest mb-1 text-lg text-slate-900 dark:text-gray-50">
        Table of Contents
      </h1>
      <hr />
      <ul>
        {props.headings.map(
          (heading: { slug: string; title: string; level: number }) => (
            <a
              href={`#${heading.slug}`}
              className={`heading-${heading.level} ${
                activeId === heading.slug ? "text-sky-900" : ""
              }`}
            >
              <li
                className={
                  activeId === heading.slug
                    ? "text-sky-700 mt-[10px] text-[15px] hover:text-sky-700"
                    : "text-slate-900 dark:text-gray-50 mt-[10px] text-[15px] hover:text-sky-700"
                }
              >
                {heading.title}
              </li>
            </a>
          )
        )}
      </ul>
    </div>
  );
}
