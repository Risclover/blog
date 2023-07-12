import React, { useEffect, useRef, useState } from "react";

type Props = {
  headingsRef: any;
  headings: { slug: string; title: string; level: number }[];
};

export default function TableofContents(props: Props) {
  console.log("tocc:", props.headings[0]);
  const scrollRef = useRef(0);
  const [active, setActive] = useState(""); //active

  useEffect(() => {
    const headings = Array.from(
      document.querySelectorAll("h1[id], h2[id], h3[id], h4[id]")
    );
    const ids = headings.map((e) => e.id);
    props.headingsRef.current = headings;
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
  }, [props.headingsRef, observer]);

  return (
    <div className="toc min-w-fit ml-20 hidden lg:block">
      <h3 className="uppercase font-medium tracking-widest mb-4">
        Table of Contents
      </h3>
      <ul>
        {props.headings.map(
          (heading: { slug: string; title: string; level: number }) => (
            <a
              href={`#${heading.slug}`}
              className={active ? "text-sky-900" : "text-black"}
            >
              <li
                className={
                  active === heading.slug
                    ? "text-sky-700 mt-[10px] text-[15px] hover:text-sky-700"
                    : "mt-[10px] text-[15px] text-black hover:text-sky-700"
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
