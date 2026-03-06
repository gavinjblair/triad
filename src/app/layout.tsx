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
  title: "Managed IT Services Edinburgh & the Lothians | Triad IT",
  description:
    "Managed IT services in Edinburgh and the Lothians. Structured, security-first IT management with accountable operations and senior oversight.",
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
          ctaHref="/contact"
          ctaLabel="Book a Structured IT Review"
        />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
