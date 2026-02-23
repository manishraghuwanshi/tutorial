import styles from "./TopBar.module.css";
import Link from "next/link";

export function TopBar() {
  return (
    <div className={styles.topBar}>
      <div className={styles.inner}>
        <span className={styles.promo}>
          🚀 <strong>W3Schools Spaces</strong> — Build, test, and deploy your code instantly
        </span>
        <div className={styles.actions}>
          <Link href="/login" className={styles.link}>Log in</Link>
          <Link href="/signup" className={styles.btnSignUp}>Sign Up</Link>
        </div>
      </div>
    </div>
  );
}
