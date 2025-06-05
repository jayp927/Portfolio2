import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AnimatedLayout from "./components/AnimatedLayout";
import CustomCursor from "./components/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Juan Pablo Jimenez",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} cursor-none`}>
        <CustomCursor />
        <AnimatedLayout>
          {children}
        </AnimatedLayout>
      </body>
    </html>
  );
}
