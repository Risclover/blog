import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function ArticleParagraph({ children }: Props) {
  return <div className="font-wotfard text-lg mt-7">{children}</div>;
}

export default ArticleParagraph;
