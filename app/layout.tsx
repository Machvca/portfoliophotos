import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";
// import {  Roboto } from "next/font/google";
import { Space_Mono } from "next/font/google";





export const metadata: Metadata = {
  title: "Machuca Photography",
  description: "Photography Portfolio",
};

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});



// const roboto = Roboto({

//   weight: ["400", "700"],
//   subsets: ["latin"],
//   variable: "--font-roboto",
// });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${spaceMono.variable} font-space-mono antialiased flex flex-col min-h-screen bg-gradient-to-r from-indigo-900 to-indigo-400`}
      >
        <Navbar />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
