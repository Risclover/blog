import React, { useEffect } from "react";
import Prism from "prismjs";

export default function Code({ code: string, language }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className="Code">
      <h2> Code Syntax Block {language}</h2>
      <button data-copy-state="copy">Copy</button>
      <pre>
        <code className={`language-${language}`} data-prismjs-copy="copy">
          {code}
        </code>
      </pre>
    </div>
  );
}
