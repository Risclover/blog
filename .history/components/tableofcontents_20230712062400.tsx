import React, { useEffect, useRef, useState } from "react";

type Props = {
  headings: any[];
};

export default function TableofContents(props: Props) {
  console.log("tocc:", props.headings);
  const headingsRef = useRef<any>();
  const scrollRef = useRef(0);
  const [active, setActive] = useState(""); //active

  useEffect(() => {
    const headings = Array.from(
      document.querySelectorAll("h1[id], h2[id], h3[id], h4[id]")
    );
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
      <h3 className="uppercase font-medium tracking-widest mb-4">
        Table of Contents
      </h3>
      <ul>
        {props.headings.map(
          (heading: { slug: string; title: string; level: number }[]) => (
            <a href={`#${heading[0]}`} className={active ? "text-sky-900" : ""}>
              <li
                className={
                  active === heading[0]
                    ? "text-sky-700 mt-[10px] text-[15px] hover:text-sky-700"
                    : "mt-[10px] text-[15px] hover:text-sky-700"
                }
              >
                {heading[0]}
              </li>
            </a>
          )
        )}
      </ul>
    </div>
  );
}
