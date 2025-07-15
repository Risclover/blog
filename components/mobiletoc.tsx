import React, { useEffect, useRef, useState } from "react";
import { GoChevronRight, GoChevronDown } from "react-icons/go";
import useScrolling from "../hooks/useScrolling";
import { useMobileHighlighted } from "hooks/useMobileHighlighted";

type Heading = {
  slug: string;
  title: string;
  level: number;
};

type Props = {
  headings: Heading[];
};

export default function MobileTableofContents(props: Props) {
  const { activeId } = useMobileHighlighted();
  const containerRef = useRef<HTMLDivElement | null>(null);

  const scroll = useScrolling();
  const [isOpen, setIsOpen] = useState(false);

  const toggleToC = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scroll) {
        setIsOpen(false);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  return (
    <div className="mobile-toc top-[4.4rem] sm:top-[3.7rem] sticky z-10">
      <div
        className={`max-w-6xl mx-auto border-b border-slate-800 dark:text-white px-6 lg:px-12 py-3 w-full block lg:hidden flex items-center bg-white dark:bg-gray-950 dark:bg-opacity-90 backdrop-blur-sm text-slate-900 cursor-pointer`}
        onClick={toggleToC}
        ref={containerRef}
      >
        {isOpen ? (
          <GoChevronDown className="mr-2" />
        ) : (
          <GoChevronRight className="mr-2" />
        )}{" "}
        Table of Contents
      </div>
      {isOpen && (
        <div
          className={`${
            isOpen && "open"
          } mobile-toc-scroll max-w-6xl mx-auto bg-white border-b border-slate-800 dark:bg-gray-950 bg-opacity-90 dark:bg-opacity-90 backdrop-blur-sm text-white py-4 dark:border-slate-800 px-6 lg:px-12 lg:hidden`}
        >
          <ul>
            {props.headings.map((heading, idx) =>
              heading.level !== 1 ? (
                <li key={idx} className="list-none" onClick={toggleToC}>
                  <a href={`#${heading.slug}`}>
                    {heading.level === 2 && (
                      <div
                        className={`${
                          activeId === heading.slug
                            ? "text-indigo-600 dark:text-indigo-300"
                            : "text-slate-900 dark:text-gray-50"
                        } text-base hover:text-indigo-600 mt-[0.625rem] dark:hover:text-indigo-300`}
                      >
                        {heading.title}
                      </div>
                    )}
                    {heading.level === 3 && (
                      <ul className="mb-0 ml-5">
                        <li
                          className={`${
                            activeId === heading.slug
                              ? "text-indigo-600 dark:text-indigo-300"
                              : "text-slate-900 dark:text-gray-50"
                          } text-[0.875rem] hover:text-indigo-600 mt-[3px] list-none dark:hover:text-indigo-300`}
                        >
                          {heading.title}
                        </li>
                      </ul>
                    )}
                    {/* {heading.level === 4 && (
                      <ul className="mb-0 ml-5">
                        <li className="list-none">
                          <ul className="mb-0">
                            <li
                              className={`${
                                activeId === heading.slug
                                  ? "text-indigo-600 dark:text-indigo-300"
                                  : "text-slate-900 dark:text-gray-50"
                              } text-[0.925rem] hover:text-indigo-600 mt-[3px] list-none dark:hover:text-indigo-300`}
                            >
                              {heading.title}
                            </li>
                          </ul>
                        </li>
                      </ul>
                    )} */}
                  </a>
                </li>
              ) : null
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
