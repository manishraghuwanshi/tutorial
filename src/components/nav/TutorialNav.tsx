import styles from "./TutorialNav.module.css";
import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
}

interface TutorialNavProps {
  prev: NavItem | null;
  next: NavItem | null;
}

export function TutorialNav({ prev, next }: TutorialNavProps) {
  return (
    <nav className={styles.nav} aria-label="Tutorial navigation">
      <div className={styles.side}>
        {prev ? (
          <Link href={prev.href} className={`${styles.btn} ${styles.prevBtn}`}>
            ❮ {prev.label}
          </Link>
        ) : (
          <span /> /* spacer */
        )}
      </div>

      <Link href="/tutorials" className={styles.homeBtn}>
        ☰ Tutorial Home
      </Link>

      <div className={styles.side}>
        {next ? (
          <Link href={next.href} className={`${styles.btn} ${styles.nextBtn}`}>
            {next.label} ❯
          </Link>
        ) : (
          <span />
        )}
      </div>
    </nav>
  );
}
