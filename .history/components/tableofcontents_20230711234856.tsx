import React from "react";

type Props = {
  headings: { slug: string; title: string; level: number };
};

const TableOfContents = (props: Props) => {
  console.log(props.headings);
  return <div>{props.headings.map((heading: {title: string; slug: string; level: number} => {
    return <li>{title}</li>
  })}</div>;
};

export default TableOfContents;
