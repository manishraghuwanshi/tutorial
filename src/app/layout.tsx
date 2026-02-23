import type { Metadata } from "next";
import "./globals.css";
import { TopBar } from "@/components/header/TopBar";
import { MainNav } from "@/components/header/MainNav";

export const metadata: Metadata = {
  title: "W3Schools — Skeleton",
  description: "A modern Next.js skeleton inspired by W3Schools",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* ── Top slim bar (upgrade / sign-in) ── */}
        <TopBar />

        {/* ── Primary navigation bar ── */}
        <MainNav />

        {/* ── Page content injected by child layouts ── */}
        {children}
      </body>
    </html>
  );
}
