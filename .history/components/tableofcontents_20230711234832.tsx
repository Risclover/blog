import React from "react";

type Props = {
  headings: { slug: string; title: string; level: number };
};

const TableOfContents = (props: Props) => {
  console.log(props.headings);
  return <div>{props.headings.map(heading => {
    return <li key={i}
  })}</div>;
};

export default TableOfContents;
