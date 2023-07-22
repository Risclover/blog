import { useEffect, useRef, useState } from "react";
import { GoChevronRight, GoChevronDown } from "react-icons/go";

type Props = {
  headingsRef: HTMLHeadingElement;
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
      rootMargin: "0% 0% -40% 0%",
      threshold: 0,
    });

    const elements = document.querySelectorAll("h2, h3, h4");
    elements.forEach((elem) => observer.current?.observe(elem));
    return () => observer.current?.disconnect();
  }, []);

  return { activeId };
}

export default function MobileTableofContents(props: Props) {
  const { activeId } = useHighlighted();
  const containerRef = useRef(null);

  const [isOpen, setIsOpen] = useState(true);
  const [shouldCloseOnScroll, setShouldCloseOnScroll] = useState(true);

  const toggleToC = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mobile-toc top-[60px] sticky z-10">
      <div
        className={`border-b border-slate-800 dark:text-white px-6 lg:px-12 py-3 w-full block lg:hidden flex  items-center bg-white dark:bg-gray-950 dark:bg-opacity-90 backdrop-blur-sm text-slate-900 cursor-pointer`}
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
        <div className="bg-white border-b border-slate-800 dark:bg-gray-950 bg-opacity-90 dark:bg-opacity-90 backdrop-blur-sm text-white py-4 dark:border-slate-800 px-6 lg:px-12 lg:hidden">
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
                      } mt-[10px] list-none`}
                      onClick={toggleToC}
                    >
                      {heading.title}
                    </li>
                  ) : heading.level === 3 ? (
                    <li className="mt-0 list-none">
                      <ul className="mb-0">
                        <li
                          className={`${
                            activeId === heading.slug
                              ? "text-indigo-600 dark:text-indigo-300 text-[15px] hover:text-indigo-600"
                              : "text-slate-900 dark:text-gray-50 text-[15px] hover:text-indigo-600  dark:hover:text-indigo-300"
                          } mt-[3px] list-none`}
                          onClick={toggleToC}
                        >
                          {heading.title}
                        </li>
                      </ul>
                    </li>
                  ) : heading.level === 4 ? (
                    <li className="mt-0 list-none">
                      <ul className="mb-0">
                        <li className="list-none">
                          <ul className="mb-0">
                            <li
                              className={`${
                                activeId === heading.slug
                                  ? "text-indigo-600 dark:text-indigo-300 text-[15px] hover:text-indigo-600"
                                  : "text-slate-900 dark:text-gray-50 text-[15px] hover:text-indigo-600  dark:hover:text-indigo-300"
                              } mt-[3px] list-none`}
                              onClick={toggleToC}
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
        </div>
      )}
    </div>
  );
}
