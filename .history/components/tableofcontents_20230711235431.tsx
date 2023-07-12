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
      {props.headings.map(
        (heading: { title: string; slug: string; level: number }) => {
          return (
            <li>
              <a href={`#${heading.slug}`}>{heading.title}</a>
            </li>
          );
        }
      )}
    </div>
  );
};

export default TableOfContents;
