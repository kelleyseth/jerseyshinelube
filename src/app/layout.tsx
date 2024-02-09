import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"], weight: "400"});

export const metadata: Metadata = {
  title: "Jersey Shine & Lube",
  description: "A place where your car is respected",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}><Navigation/>{children}<Footer/></body>
    </html>
  );
}
