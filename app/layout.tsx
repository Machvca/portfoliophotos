import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";


const archivo = Archivo({
  display: "swap",
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-archivo",
});

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
    <html lang="en">
      <body className={`${archivo.variable} antialiased font-archivo`}>
        {children}
      </body>
    </html>
  );
}
