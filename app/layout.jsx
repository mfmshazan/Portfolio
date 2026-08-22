import { JetBrains_Mono, Anton } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrainsMono",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-display",
  weight: ["400"],
  subsets: ["latin"],
});


export const metadata = {
  title: "Shazan Faslan — Fullstack, Mobile & AI Engineer",
  description: "Portfolio of Shazan Faslan — building modern web, mobile and AI-powered products.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} ${anton.variable}`}>
        <Header />{children}
        <PageTransition>

        </PageTransition>
      </body>
    </html>
  );
}
