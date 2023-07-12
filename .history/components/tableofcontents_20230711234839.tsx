import React from "react";

type Props = {
  headings: { slug: string; title: string; level: number };
};

const TableOfContents = (props: Props) => {
  console.log(props.headings);
  return <div>{props.headings.map(heading => {
    return <li>{title}</li>
  })}</div>;
};

export default TableOfContents;
