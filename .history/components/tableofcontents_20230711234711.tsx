import React from "react";

type Props = {
  headings: { slug: string; title: string; level: number };
};

const tableofcontents = (props: Props) => {
  console.log(props.headings);
  return <div>fs</div>;
};
