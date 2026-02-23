"use client";

import styles from "./SidebarSection.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface SidebarItem {
  label: string;
  href: string;
}

interface SidebarSectionProps {
  heading: string;
  items: SidebarItem[];
}

export function SidebarSection({ heading, items }: SidebarSectionProps) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  // Auto-collapse if no item in this section is active
  const hasActive = items.some((i) => i.href === pathname);

  return (
    <div className={styles.section}>
      {/* Section heading — clickable to collapse */}
      <button
        className={styles.heading}
        onClick={() => setCollapsed((c) => !c)}
        aria-expanded={!collapsed}
      >
        <span>{heading}</span>
        <span className={`${styles.chevron} ${collapsed ? styles.rotated : ""}`}>
          ▾
        </span>
      </button>

      {/* Items list */}
      {!collapsed && (
        <ul className={styles.list}>
          {items.map((item) => {
            const isActive = item.href === pathname;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${styles.item} ${isActive ? styles.active : ""}`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
