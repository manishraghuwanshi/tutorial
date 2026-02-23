"use client";

import styles from "./Sidebar.module.css";
import { SidebarSection } from "./SidebarSection";

// One representative item per section — skeleton pattern
const SIDEBAR_DATA = [
  {
    heading: "HTML Tutorial",
    items: [
      { label: "HTML Home", href: "/tutorials/html" },
      { label: "HTML Introduction", href: "/tutorials/html/introduction" },
      { label: "HTML Editors", href: "/tutorials/html/editors" },
      { label: "HTML Basic", href: "/tutorials/html/basic" },
      { label: "HTML Elements", href: "/tutorials/html/elements" },
    ],
  },
  {
    heading: "HTML Forms",
    items: [
      { label: "HTML Forms", href: "/tutorials/html/forms" },
      { label: "HTML Form Elements", href: "/tutorials/html/form-elements" },
    ],
  },
  {
    heading: "HTML References",
    items: [
      { label: "HTML Tag List", href: "/references/html/tags" },
      { label: "HTML Attributes", href: "/references/html/attributes" },
    ],
  },
];

export function Sidebar() {
  return (
    <aside className={styles.sidebar} aria-label="Tutorial navigation">
      <div className={styles.inner}>
        {SIDEBAR_DATA.map((section) => (
          <SidebarSection
            key={section.heading}
            heading={section.heading}
            items={section.items}
          />
        ))}
      </div>
    </aside>
  );
}
