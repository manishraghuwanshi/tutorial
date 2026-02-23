import styles from "./page.module.css";
import { HeroSection } from "@/components/ui/HeroSection";
import { TopicCard } from "@/components/ui/TopicCard";

const FEATURED_TOPICS = [
  {
    title: "HTML",
    description: "The language for building web pages",
    icon: "🌐",
    href: "/tutorials/html",
    color: "#e34c26",
  },
  {
    title: "CSS",
    description: "The language for styling web pages",
    icon: "🎨",
    href: "/tutorials/css",
    color: "#264de4",
  },
  {
    title: "JavaScript",
    description: "The language for programming web pages",
    icon: "⚡",
    href: "/tutorials/javascript",
    color: "#f7df1e",
  },
];

export default function HomePage() {
  return (
    <main className={styles.main}>
      <HeroSection />

      <section className={styles.topics}>
        <h2 className={styles.topicsHeading}>Learn by Topic</h2>
        <div className={styles.topicsGrid}>
          {FEATURED_TOPICS.map((topic) => (
            <TopicCard key={topic.title} {...topic} />
          ))}
        </div>
      </section>
    </main>
  );
}
