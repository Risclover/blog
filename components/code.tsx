import React, { useState } from "react";
import { CopyIcon } from "./icons/CopyPaperIcon";

type Props = {
  code: string;
  language: string; // e.g. "js", "python"
};

export default function Code({ code, language }: Props) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      alert("Failed to copy");
    }
  }

  const idleIcon = (
    <svg viewBox="0 0 24 24">
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        d="M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3
           c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14
           c0-.552.45-1 1.007-1H7zM5.003 8L5 20h10V8H5.003zM9 6h8v10h2V4H9v2z"
        fill="currentColor"
      />
    </svg>
  );

  // 🔹 SVG requested for the “copied!” state
  const copiedIcon = (
    <svg viewBox="0 0 24 24">
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        d="M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3
           c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14
           c0-.552.45-1 1.007-1H7zm2 0h8v10h2V4H9v2z"
        fill="currentColor"
      />
    </svg>
  );

  return (
    <div className="remark-highlight">
      <div className="code-wrapper">
        <pre>
          <code className={`language-${language}`}>{code}</code>
        </pre>

        <div className="copy-button" data-lang={language}>
          {copied ? (
            <>
              copied!
              <button onClick={handleCopy}>
                <CopyIcon dark />
              </button>
            </>
          ) : (
            <>
              {language}
              <button onClick={handleCopy}>
                <CopyIcon dark={false} />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
