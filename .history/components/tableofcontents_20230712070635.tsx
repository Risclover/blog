import React, { useEffect, useRef, useState } from "react";

type Props = {
  headingsRef: any;
  headings: { slug: string; title: string; level: number }[];
};

function useHighlighted(id: string) {
  const observer = useRef<IntersectionObserver | null>(null);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const handleObserver = (entries: any) => {
      console.log("entries:", entries);
      entries.forEach((entry: any) => {
        console.log("entry:", entry);
        console.log("entry target id:", entry.target.id);
        if (entry?.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    observer.current = new IntersectionObserver(handleObserver, {
      rootMargin: "0% 0% -35% 0px",
    });

    const elements = document.querySelectorAll("h2[id], h3, h4");
    elements.forEach((elem) => observer.current.observe(elem));
    return () => observer.current?.disconnect();
  }, []);

  return [activeId === id, setActiveId];
}

export default function TableofContents(props: Props) {
  console.log("tocc:", typeof props.headings[0].slug);
  const scrollRef = useRef(0);
  const [active, setActive] = useState(""); //active
  const id = props.headings[0].slug;
  const [highlighted, setHighlighted] = useHighlighted("");

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
              className={highlighted ? "text-sky-900" : "text-black"}
              onClick={() => {
                console.log("slug:", heading.slug);
                setHighlighted(heading.slug);
              }}
            >
              <li
                className={
                  highlighted === heading.slug
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
