import React from "react";

type Props = {
  heading: string;
  id: string;
};

function ArticleHeader({ heading, id }: Props) {
  console.log(id.replace(/[^a-zA-Z ]/g, ""));
  return (
    <h2
      id={id}
      className="text-3xl font-bold text-indigo-600 dark:text-indigo-300 mb-8 mt-16"
    >
      {heading}
    </h2>
  );
}

export default ArticleHeader;
