import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mizu Diving - Professional Diving Services in Switzerland",
  description: "Expert diving services in Switzerland. Technical diving, diving instruction, and custom expeditions. Over 10 years of experience with certified professionals. Contact us at mizudiving@gmail.com",
  keywords: ["diving", "professional diving", "Switzerland diving", "technical diving", "diving instruction", "diving expeditions", "Wangen SZ", "scuba diving"],
  authors: [{ name: "V Van Cauwelaert" }],
  openGraph: {
    title: "Mizu Diving - Professional Diving Services",
    description: "Expert diving services with over 10 years of experience. Technical diving, instruction, and custom expeditions.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

