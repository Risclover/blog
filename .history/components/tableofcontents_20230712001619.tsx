import React, { useEffect, useRef, useState } from "react";

type Props = {
  headings: { slug: string; title: string; level: number }[];
};

const TableOfContents = (props: Props) => {
  const headingsRef = useRef<any>();
  const scrollRef = useRef(0);
  const [active, setActive] = useState("");

  useEffect(() => {
    const ids = headings.map((e) => e.id);
    headingsRef.current = headings;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id") ?? "";

          if (entry.isIntersecting) {
            setActive(id);
            scrollRef.current = window.scrollY;
            return;
          }

          const diff = scrollRef.current - window.scrollY;
          const isScrollingUp = diff > 0;
          const currentIndex = ids.indexOf(id);
          const prevEntry = ids[currentIndex - 1];
          if (isScrollingUp) {
            const id = prevEntry;
            setActive(id);
          }
        });
      },
      {
        rootMargin: "0% 0% -10% 0%",
        threshold: 0.2,
      }
    );

    headings.forEach((e) => observer.observe(e));
  });
  return (
    <div className="toc min-w-fit ml-20 hidden lg:block">
      <h2 className="uppercase font-medium tracking-widest mb-4">
        Table of Contents
      </h2>
      <ul>
        {props.headings.map(
          (heading: { title: string; slug: string; level: number }) => {
            return (
              <li
                className={
                  active === heading.slug
                    ? "text-sky-700 mt-[10px] text-[15px] hover:text-sky-700"
                    : "mt-[10px] text-[15px] hover:text-sky-700"
                }
              >
                <a
                  href={`#${heading.slug}`}
                  className={active ? "text-sky-900" : ""}
                >
                  {heading.title}
                </a>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};

export default TableOfContents;
