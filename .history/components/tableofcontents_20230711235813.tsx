import React from "react";

type Props = {
  headings: { slug: string; title: string; level: number }[];
};

const TableOfContents = (props: Props) => {
  console.log(props.headings);
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
                <a href={`#${heading.slug}`}>{heading.title}</a>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};

export default TableOfContents;
