
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "PAULIN.OS | AI Engineering",
    template: "%s | PAULIN.OS",
  },
  description:
    "Explore the AI engineering projects, applied machine learning research, and technical work of Paulin Binusha Sahayaranjan.",
  applicationName: "PAULIN.OS",
  keywords: [
    "Paulin Binusha Sahayaranjan",
    "AI Engineer",
    "Machine Learning",
    "Computer Vision",
    "Generative AI",
    "PyTorch",
    "RAG",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
