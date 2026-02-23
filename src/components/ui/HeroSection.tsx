import styles from "./HeroSection.module.css";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <h1 className={styles.heading}>
          Learn to Code
        </h1>
        <p className={styles.sub}>
          With the world's largest web developer site.
        </p>
        <div className={styles.actions}>
          <Link href="/tutorials/html" className={styles.btnPrimary}>
            Start Learning HTML ➜
          </Link>
          <Link href="/exercises" className={styles.btnSecondary}>
            Take an Exercise
          </Link>
        </div>
      </div>
      {/* Decorative badge */}
      <div className={styles.badge}>
        <span className={styles.badgeNumber}>90</span>
        <span className={styles.badgeText}>Million<br />Learners</span>
      </div>
    </section>
  );
}
