import React, { useEffect } from "react";
import Prism from "prismjs";

type Props = {
  code: string;
  language: string;
};

export default function Code(props: Props) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className="Code">
      <h2> Code Syntax Block {props.language}</h2>
      <button data-copy-state="copy">Copy</button>
      <pre>
        <code className={`language-${props.language}`} data-prismjs-copy="copy">
          {props.code}
        </code>
      </pre>
    </div>
  );
}
