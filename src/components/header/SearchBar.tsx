"use client";

import styles from "./SearchBar.module.css";
import { useState } from "react";

export function SearchBar() {
  const [query, setQuery] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(query.trim())}`;
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} role="search">
      <input
        className={styles.input}
        type="search"
        placeholder="Search our tutorials, e.g. css"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Search W3Schools"
      />
      <button className={styles.btn} type="submit" aria-label="Submit search">
        🔍
      </button>
    </form>
  );
}
