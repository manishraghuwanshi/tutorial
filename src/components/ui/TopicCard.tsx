import styles from "./TopicCard.module.css";
import Link from "next/link";

interface TopicCardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
  color: string;
}

export function TopicCard({ title, description, icon, href, color }: TopicCardProps) {
  return (
    <Link href={href} className={styles.card} style={{ "--accent": color } as React.CSSProperties}>
      <div className={styles.iconWrap}>
        <span className={styles.icon}>{icon}</span>
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>
      </div>
      <span className={styles.arrow}>→</span>
    </Link>
  );
}
