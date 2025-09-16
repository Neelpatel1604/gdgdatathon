import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { googleSans, googleSansDisplay } from "./fonts";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GDG Datathon 2025",
  description: "Google Developer Group Datathon 2025 - Join us for workshops, networking, and prizes!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${googleSans.variable} ${googleSansDisplay.variable} ${geistMono.variable} antialiased font-google-sans`}
      >
        {children}
      </body>
    </html>
  );
}
