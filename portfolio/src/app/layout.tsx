import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navber from "@/components/Navber";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "portfolio Bisma",
  description:
    "Expert Web Developer | Crafting Scalable, User-Friendly Web Solutions with HTML, CSS, JavaScript, React, & Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navber />
        {children}
        <Footer />
      </body>
    </html>
  );
}
