import React, { useEffect } from "react";
import { PiArrowFatUpDuotone } from "react-icons/pi";
import useHighlighted from "hooks/useHighlighted";

type Heading = { slug: string; title: string; level: number };

type Props = {
  headings: Heading[];
};

export default function TableofContents(props: Props) {
  const { activeId } = useHighlighted();

  useEffect(() => {
    function setClasses(el: HTMLElement | null): void {
      if (!el) {
        return;
      }

      const isScrollable = el.scrollHeight > el.clientHeight;

      // GUARD: If element is not scrollable, remove all classes
      if (!isScrollable) {
        el.classList.remove("is-bottom-overflowing", "is-top-overflowing");
        return;
      }

      // The element is overflowing
      const isScrolledToBottom =
        el.scrollHeight <= el.clientHeight + el.scrollTop;
      const isScrolledToTop = el.scrollTop === 0;
      el.classList.toggle("is-bottom-overflowing", !isScrolledToBottom);
      el.classList.toggle("is-top-overflowing", !isScrolledToTop);
    }

    const tocUl = document.querySelector<HTMLElement>(".toc-ul");
    if (tocUl) {
      const onScroll = (e: Event) => {
        const el = e.currentTarget as HTMLElement;
        setClasses(el);
      };

      tocUl.addEventListener("scroll", onScroll);
      setClasses(tocUl);

      return () => {
        tocUl.removeEventListener("scroll", onScroll);
      };
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    const toc = document.querySelector<HTMLElement>(".toc-ul");
    toc?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="toc hidden w-auto inline-block lg:block flex-none
    "
    >
      <h1 className="uppercase font-medium text-[1.05rem] tracking-widest mb-1 text-slate-900 dark:text-gray-50">
        Table of Contents
      </h1>
      <div className="toc-ul max-h-[60vh]">
        <ul>
          {props.headings.map((heading, idx) =>
            heading.level !== 1 ? (
              <li key={idx}>
                <a href={`#${heading.slug}`}>
                  {heading.level === 2 && (
                    <div
                      className={`${
                        activeId === heading.slug
                          ? "text-indigo-600 dark:text-indigo-300"
                          : "text-slate-900 dark:text-gray-50"
                      } text-base hover:text-indigo-600 mt-[10px] dark:hover:text-indigo-300 leading-6`}
                    >
                      {heading.title}
                    </div>
                  )}
                  {heading.level === 3 && (
                    <ul className="ml-3">
                      <li
                        className={`${
                          activeId === heading.slug
                            ? "text-indigo-600 dark:text-indigo-300"
                            : "text-slate-900 dark:text-gray-50"
                        } text-[0.9rem] hover:text-indigo-600 mt-[3px] dark:hover:text-indigo-300`}
                      >
                        {heading.title}
                      </li>
                    </ul>
                  )}
                  {heading.level === 4 && (
                    <ul className="ml-8">
                      <li
                        className={`${
                          activeId === heading.slug
                            ? "text-indigo-600 dark:text-indigo-300"
                            : "text-slate-900 dark:text-gray-50"
                        } text-[0.8rem] hover:text-indigo-600 mt-[3px] dark:hover:text-indigo-300`}
                      >
                        {heading.title}
                      </li>
                    </ul>
                  )}
                </a>
              </li>
            ) : null
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
