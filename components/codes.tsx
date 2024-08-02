import React, { useEffect } from "react";
import Prism from "prismjs";

type Props = {
  code: string;
  language: string;
};

export default function Codes({ code, language }: Props) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className="Code">
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}
