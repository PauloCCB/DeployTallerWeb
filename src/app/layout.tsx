
import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google"
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Proyecto de Frontend",
  description: "Proyecto de Frontend",
}



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
       <body className={`${inter.className} text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
