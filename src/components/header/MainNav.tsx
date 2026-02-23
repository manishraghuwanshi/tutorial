"use client";

import styles from "./MainNav.module.css";
import Link from "next/link";
import { SearchBar } from "./SearchBar";
import { NavDropdown } from "./NavDropdown";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Tutorials", href: "/tutorials/html" },
  { label: "References", href: "/references" },
  { label: "Exercises", href: "/exercises" },
  { label: "Quizzes", href: "/quizzes" },
];

export function MainNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <span className={styles.logoW}>W3</span>
          <span className={styles.logoSchools}>Schools</span>
        </Link>

        {/* Desktop nav links */}
        <nav className={styles.nav} aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link key={link.label} href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          ))}
          <NavDropdown label="More ▾" items={[
            { label: "Videos", href: "/videos" },
            { label: "Blog", href: "/blog" },
            { label: "Certificate", href: "/certificate" },
          ]} />
        </nav>

        {/* Search */}
        <div className={styles.searchWrap}>
          <SearchBar />
        </div>

        {/* Hamburger (mobile) */}
        <button
          className={styles.hamburger}
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <nav className={styles.mobileMenu} aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={styles.mobileLink}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
