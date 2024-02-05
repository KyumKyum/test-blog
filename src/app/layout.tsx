import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import "./globals.css";
import Footer from "@/components/Footer";
import Canvas from "@/components/Canvas";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kyum's Blog",
  description: "HAHa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-row h-svh w-full">
        <Sidebar/>  
        <Canvas>
          {children}
        </Canvas>
      </body>
    </html>
  );
}
