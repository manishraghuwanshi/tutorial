"use client";

import styles from "./CodeBlock.module.css";
import { useState } from "react";

interface CodeBlockProps {
  title?: string;
  code: string;
  language?: string;
}

export function CodeBlock({ title = "Example", code, language = "html" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <span className={styles.title}>{title}</span>
        <div className={styles.actions}>
          <button className={styles.copyBtn} onClick={handleCopy}>
            {copied ? "✓ Copied!" : "⎘ Copy"}
          </button>
          <a
            href={`/tryit?lang=${language}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.tryBtn}
          >
            Try it Yourself »
          </a>
        </div>
      </div>
      <pre className={styles.pre}>
        <code className={styles.code}>{code}</code>
      </pre>
    </div>
  );
}
