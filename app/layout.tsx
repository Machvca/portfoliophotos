import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";
import {  Roboto } from "next/font/google";




export const metadata: Metadata = {
  title: "Machuca Photography",
  description: "Photography Portfolio",
};


const roboto = Roboto({
  display: "swap",
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${roboto.variable} font-roboto antialiased flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
