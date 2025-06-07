import type { Metadata } from "next";
import { Dancing_Script } from 'next/font/google';
import "./globals.css";
import AnimatedLayout from "./components/AnimatedLayout";
import CustomCursor from "./components/CustomCursor";

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing-script',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Jay Pipaliya",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${dancingScript.variable} font-sans cursor-none antialiased`}>
        <CustomCursor />
        <AnimatedLayout>
          {children}
        </AnimatedLayout>
      </body>
    </html>
  );
}
