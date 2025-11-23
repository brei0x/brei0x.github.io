import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Breith Barbot - CTO hands-on / Lead Full Stack / DevOps",
  description: "Breith Barbot, CTO hands-on spécialisé en PHP (Symfony), JavaScript (Next.js/Vue.js) et Cloud Infrastructure (GCP/AWS).",
  authors: [{name: "Breith Barbot"}],
  keywords: ["CTO", "Fullstack", "Full Stack", "PHP", "Symfony", "Next.js", "GCP", "AWS", "DevOps", "SysAdmin"],
  // Content Security Policy (CSP)
  other: {
    "Content-Security-Policy": "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https:; font-src 'self' data:;"
  }
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="fr" className="scroll-smooth">
    <body className={`${inter.className} bg-slate-950 text-slate-200 antialiased selection:bg-teal-500 selection:text-white`}>
    {children}
    </body>
    </html>
  );
}
