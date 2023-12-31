import React, { useEffect } from "react";
import Prism from "prismjs";

export default function Code({ code, language }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className="Code">
      <h2> Code Syntax Block {language}</h2>
      <button></button>
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}
