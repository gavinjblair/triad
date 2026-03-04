import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { mainLinks, topLinks } from "@/content/site";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "MSP Central UI Rebuild",
  description: "Pixel-accurate MSP Central marketing UI recreation in Next.js + Tailwind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} antialiased`}>
        <Header
          topLinks={topLinks}
          mainLinks={mainLinks}
          ctaHref="/free-trial"
          ctaLabel="Free Trial"
        />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
