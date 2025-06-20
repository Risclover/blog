import React from "react";

type Props = {
  code: string;
  language: string;
};

export default function Code({ code, language }: Props) {
  return (
    <div className="remark-highlight">
      <div className="code-wrapper">
        <pre>
          <code className="language-python">{code}</code>
        </pre>
        <button className="copy-button" data-lang="">
          {language}{" "}
          <svg viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              d="M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.007-1H7zM5.003 8L5 20h10V8H5.003zM9 6h8v10h2V4H9v2z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
