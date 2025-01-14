import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import ViewCanvas from "../components/ui/3d/ViewCanvas";
import Footer from "@/components/layout/Footer";

const alpino = localFont({
  src: "../../public/fonts/Alpino-Variable.woff2",
  weight: "100 900",
  display: "swap",
  variable: "--font-alpino",
});

export const metadata: Metadata = {
  title: "Vitae - soda for Gutsy people",
  description: "soda that makes you smile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={alpino.className}>
      <body className="">
        <Header />
        <main>
          {children}
          <ViewCanvas />
        </main>
        <Footer />
      </body>
    </html>
  );
}
