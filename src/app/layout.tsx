import type { Metadata } from "next";
import { Cormorant_Garamond, Geist, Noto_Serif_Thai, IBM_Plex_Sans_Thai } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

const serif = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const thaiSerif = Noto_Serif_Thai({
  weight: ["500", "600", "700"],
  subsets: ["thai"],
  variable: "--font-serif-thai",
  display: "swap",
});

const thaiSans = IBM_Plex_Sans_Thai({
  weight: ["300", "400", "500", "600"],
  subsets: ["thai"],
  variable: "--font-sans-thai",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Peerapong Wongwichai (Deego) — Portfolio",
  description:
    "Full-stack developer based in Lampang, Thailand. I build web applications and AI systems, working with AI coding assistants as part of my everyday process.",
  keywords: [
    "Full-Stack Developer",
    "AI Coding Assistant",
    "Multi-Agent AI",
    "AWS Bedrock",
    "MCP Protocol",
    "Next.js",
    "Vue.js",
    "FastAPI",
    "Node.js",
    "Peerapong Wongwichai",
    "พีระพงษ์ วงศ์วิชัย",
    "Lampang",
    "Branz",
  ],
  authors: [{ name: "Peerapong Wongwichai" }],
  openGraph: {
    title: "Peerapong Wongwichai (Deego) — Portfolio",
    description:
      "I build web applications and AI systems, with AI coding assistants as part of my everyday workflow.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable} ${thaiSerif.variable} ${thaiSans.variable}`}
    >
      <body className="font-sans antialiased bg-[var(--bg-main)] text-[var(--text-primary)] transition-colors duration-300 selection:bg-[var(--accent-color)]/20 selection:text-[var(--text-primary)]">
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
