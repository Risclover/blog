import useHighlighted from "hooks/useHighlighted";
import React, { useEffect, useRef, useState } from "react";
import { PiArrowFatUpDuotone } from "react-icons/pi";

type Props = {
  headingsRef: any;
  headings: { slug: string; title: string; level: number }[];
};

// function useHighlighted() {
//   const observer = useRef<IntersectionObserver | null>(null);
//   const [activeId, setActiveId] = useState("");

//   useEffect(() => {
//     const handleObserver = (entries: any) => {
//       entries.forEach((entry: any) => {
//         if (entry?.isIntersecting) {
//           setActiveId(entry.target.id);
//         }
//       });
//     };

//     observer.current = new IntersectionObserver(handleObserver, {
//       rootMargin: "10% 0% -50% 0%",
//       threshold: 0,
//     });

//     const elements = document.querySelectorAll("h2, h3, h4");
//     elements.forEach((elem) => observer.current?.observe(elem));
//     return () => observer.current?.disconnect();
//   }, []);

//   return { activeId };
// }

export default function TableofContents(props: Props) {
  const { activeId } = useHighlighted();

  useEffect(() => {});

  useEffect(() => {
    function setClasses(el: any) {
      const isScrollable = el.scrollHeight > el.clientHeight;

      // GUARD: If element is not scrollable, remove all classes
      if (!isScrollable) {
        el.classList.remove("is-bottom-overflowing", "is-top-overflowing");
        return;
      }

      // Otherwise, the element is overflowing!
      // Now we just need to find out which direction it is overflowing to (can be both)
      const isScrolledToBottom =
        el.scrollHeight <= el.clientHeight + el.scrollTop;
      const isScrolledToTop = isScrolledToBottom ? false : el.scrollTop === 0;
      el.classList.toggle("is-bottom-overflowing", !isScrolledToBottom);
      el.classList.toggle("is-top-overflowing", !isScrolledToTop);
    }

    document.querySelector(".toc-ul")?.addEventListener("scroll", (e) => {
      const el = e.currentTarget;
      setClasses(el);
    });

    setClasses(document.querySelector(".toc-ul"));
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    let toc = document.querySelector(".toc-ul");
    toc?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="toc ml-10 hidden w-auto inline-block lg:block min-w-fit">
      <h1 className="uppercase font-medium text-[18px] tracking-widest mb-1 text-slate-900 dark:text-gray-50 mb-[16px]">
        Table of Contents
      </h1>
      <div className="toc-ul max-h-[60vh]">
        <ul>
          {props.headings.map(
            (
              heading: { slug: string; title: string; level: number },
              idx: number
            ) =>
              heading.level !== 1 && (
                <a key={idx} href={`#${heading.slug}`}>
                  {heading.level === 2 ? (
                    <li
                      className={`${
                        activeId === heading.slug
                          ? "text-indigo-600 dark:text-indigo-300 text-[15px] hover:text-indigo-600"
                          : "text-slate-900 dark:text-gray-50 text-[15px] hover:text-indigo-600  dark:hover:text-indigo-300"
                      } mt-[10px] leading-6`}
                    >
                      {heading.title}
                    </li>
                  ) : heading.level === 3 ? (
                    <li className="">
                      <ul className="ml-3">
                        <li
                          className={`${
                            activeId === heading.slug
                              ? "text-indigo-600 dark:text-indigo-300 text-[15px] hover:text-indigo-600"
                              : "text-slate-900 dark:text-gray-50 text-[15px] hover:text-indigo-600  dark:hover:text-indigo-300"
                          } mt-[8px]`}
                        >
                          {heading.title}
                        </li>
                      </ul>
                    </li>
                  ) : heading.level === 4 ? (
                    <li className="mt-0">
                      <ul className="mb-0">
                        <li>
                          <ul className="mb-0  ml-5">
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
        <div className="toc-fade"></div>
      </div>
      <button
        className="mt-6 text-sm text-gray-900 hover:text-indigo-600 flex dark:text-gray-50 dark:hover:text-indigo-300"
        onClick={scrollToTop}
      >
        Back to Top <PiArrowFatUpDuotone className="ml-1 mt-[2px]" />
      </button>
    </div>
  );
}
