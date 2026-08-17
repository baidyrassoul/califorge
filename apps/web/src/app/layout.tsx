import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CaliForge — The RPG of Bodyweight Training",
  description:
    "Skill trees, XP, quests and challenges — built for calisthenics athletes, by athletes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
