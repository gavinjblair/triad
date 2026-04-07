import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { mainLinks, topLinks } from "@/content/site";

const sourceSans3 = Source_Sans_3({
  variable: "--font-source-sans-3",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
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
      <body className={`${sourceSans3.variable} antialiased`}>
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
