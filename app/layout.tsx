import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";



export const metadata: Metadata = {
  title: "Machuca Photography",
  description: "Photography Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased  flex flex-col min-h-screen">
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
