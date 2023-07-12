import React from "react";

type Props = {
  headings: { slug: string; title: string; level: number }[];
};

const TableOfContents = (props: Props) => {
  const [active, setActive] = React.useState(
    props.headings.length > 0 ? props.headings[0].slug : ""
  );

  React.useEffect(() => {
    const handleScroll = () => {
      const headingElements = props.headings.map(({ slug }) =>
        document.getElementById(slug.toLowerCase().split(" ").join("-"))
      );
      const visibleHeadings: any = headingElements.filter((el) =>
        isElementInViewport(el)
      );
      if (visibleHeadings.length > 0) {
        setActive(visibleHeadings[0].id);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [props.headings]);

  const isElementInViewport = (el: any) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };
  return (
    <div className="toc min-w-fit ml-20 hidden lg:block">
      <h2 className="uppercase font-medium tracking-widest mb-4">
        Table of Contents
      </h2>
      <ul>
        {props.headings.map(
          (heading: { title: string; slug: string; level: number }) => {
            return (
              <li className="text-sky-700 mt-[10px] text-[15px] hover:text-sky-700">
                <a href={`#${heading.slug}`} className="text-sky-900">
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
