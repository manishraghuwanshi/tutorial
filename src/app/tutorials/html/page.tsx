import styles from "./page.module.css";
import { TutorialNav } from "@/components/nav/TutorialNav";
import { CodeBlock } from "@/components/ui/CodeBlock";

const HTML_NAV_ITEMS = [
  { label: "HTML Home", href: "/tutorials/html", active: true },
  { label: "HTML Introduction", href: "/tutorials/html/introduction" },
  { label: "HTML Editors", href: "/tutorials/html/editors" },
  { label: "HTML Basic", href: "/tutorials/html/basic" },
  { label: "HTML Elements", href: "/tutorials/html/elements" },
];

const EXAMPLE_CODE = `<!DOCTYPE html>
<html>
<head>
  <title>Page Title</title>
</head>
<body>

  <h1>My First Heading</h1>
  <p>My first paragraph.</p>

</body>
</html>`;

export default function HtmlTutorialPage() {
  return (
    <article className={styles.article}>
      {/* ── Bottom nav panel: Prev / Next ── */}
      <TutorialNav
        prev={null}
        next={{ label: "HTML Introduction →", href: "/tutorials/html/introduction" }}
      />

      <h1 className={styles.h1}>HTML Tutorial</h1>

      <p className={styles.lead}>
        HTML is the standard markup language for creating Web pages.
      </p>

      <h2 className={styles.h2}>What is HTML?</h2>
      <ul className={styles.list}>
        <li>HTML stands for Hyper Text Markup Language</li>
        <li>HTML is the standard markup language for creating Web pages</li>
        <li>HTML describes the structure of a Web page</li>
        <li>HTML consists of a series of elements</li>
      </ul>

      <h2 className={styles.h2}>A Simple HTML Document</h2>

      <CodeBlock title="Example" code={EXAMPLE_CODE} language="html" />

      {/* ── Bottom nav panel repeated at foot of article ── */}
      <TutorialNav
        prev={null}
        next={{ label: "HTML Introduction →", href: "/tutorials/html/introduction" }}
      />
    </article>
  );
}
