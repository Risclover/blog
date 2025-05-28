import React, { useEffect, useState } from "react";
import { PiArrowFatUpDuotone } from "react-icons/pi";
import useHighlighted from "hooks/useHighlighted";
import { buildHierarchy } from "lib/hierarchy";

type Heading = {
  slug: string;
  title: string;
  level: number;
  children?: Heading[];
};

type Props = {
  headings: Heading[];
};

export default function TableofContents(props: Props) {
  const { activeId } = useHighlighted();
  const [expandedHeadings, setExpandedHeadings] = useState<
    Record<string, boolean>
  >({});

  const hierarchicalHeadings = React.useMemo(
    () => buildHierarchy(props.headings),
    [props.headings]
  );

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

  const toggleHeading = (slug: string) => {
    setExpandedHeadings((prev) => ({
      ...prev,
      [slug]: !prev[slug],
    }));
  };
  // Render function to handle nesting
  const renderHeadings = (headings: Heading[], level: number) => {
    return headings.map((heading) => {
      if (heading.level === 2) {
        return (
          <li key={heading.slug}>
            <a href={`#${heading.slug}`}>
              {/* level-2 styling */}
              <div
                className={
                  activeId === heading.slug
                    ? "text-indigo-600 dark:text-indigo-300 text-base ..."
                    : "text-slate-900 dark:text-gray-50 text-base ..."
                }
              >
                {heading.title}
              </div>
            </a>
            {/* Render level-3 children below it, if any */}
            {heading.children && heading.children.length > 0 && (
              <ul className="ml-3">{renderHeadings(heading.children, 3)}</ul>
            )}
          </li>
        );
      }

      if (heading.level === 3) {
        // Does this heading have level-4 children?
        const hasLevel4Children =
          heading.children && heading.children.length > 0;
        return (
          <li key={heading.slug}>
            {/* The level-3 line, which might have a chevron if there are children. */}
            <div className="flex items-center">
              <a
                href={`#${heading.slug}`}
                className={
                  activeId === heading.slug
                    ? "text-indigo-600 dark:text-indigo-300 text-[0.95rem] ..."
                    : "text-slate-900 dark:text-gray-50 text-[0.95rem] ..."
                }
              >
                {heading.title}
              </a>
              {hasLevel4Children && (
                <button
                  onClick={() => toggleHeading(heading.slug)}
                  className="ml-1 p-1"
                  aria-label={`Toggle ${heading.title} subheadings`}
                >
                  {/* Show up/down arrow depending on state */}
                  {expandedHeadings[heading.slug] ? "▾" : "▸"}
                </button>
              )}
            </div>

            {/* Only render the level-4 children if expanded */}
            {hasLevel4Children && expandedHeadings[heading.slug] && (
              <ul
                className={`curtain ${
                  expandedHeadings[heading.slug] ? "expanded" : ""
                }`}
              >
                {renderHeadings(heading.children!, 4)}
              </ul>
            )}
          </li>
        );
      }

      if (heading.level === 4) {
        // Plainly render the level-4 item
        return (
          <li key={heading.slug}>
            <a
              href={`#${heading.slug}`}
              className={
                activeId === heading.slug
                  ? "text-indigo-600 dark:text-indigo-300 text-[0.925rem] ..."
                  : "text-slate-900 dark:text-gray-50 text-[0.925rem] ..."
              }
            >
              {heading.title}
            </a>
          </li>
        );
      }

      return null;
    });
  };

  return (
    <div className="toc hidden w-auto inline-block lg:block flex-none">
      <h1 className="uppercase font-medium text-[1.05rem] tracking-widest mb-1">
        Table of Contents
      </h1>
      <div className="toc-ul max-h-[60vh] overflow-auto">
        <ul>{renderHeadings(hierarchicalHeadings, 2)}</ul>
        {/* .toc-fade if needed */}
      </div>
      <button className="mt-6 text-sm flex" onClick={scrollToTop}>
        Back to Top <PiArrowFatUpDuotone className="ml-1 mt-[2px]" />
      </button>
    </div>
  );
}
