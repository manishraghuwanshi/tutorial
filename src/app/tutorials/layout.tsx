import styles from "./layout.module.css";
import { Sidebar } from "@/components/sidebar/Sidebar";

export default function TutorialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.wrapper}>
      {/* ── Left sidebar shared by ALL tutorial pages ── */}
      <Sidebar />

      {/* ── Tutorial content area ── */}
      <div className={styles.content}>{children}</div>
    </div>
  );
}
