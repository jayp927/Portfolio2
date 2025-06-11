import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";
import AnimatedLayout from "./components/AnimatedLayout";
import CustomCursor from "./components/CustomCursor";

const michroma = localFont({
  src: '../app/fonts/Michroma-Regular.ttf',
  variable: '--font-michroma',
  display: 'swap',
});

const eduNSWACT = localFont({
  src: "./fonts/EduNSWACTCursive-VariableFont_wght.ttf",
  variable: '--font-edu-nswact',
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
    <html lang="en" className={`${michroma.variable} ${eduNSWACT.variable} scroll-smooth`}>
      <body className={`${michroma.className} cursor-none antialiased`}>
        <CustomCursor />
        <AnimatedLayout>
          {children}
        </AnimatedLayout>
      </body>
    </html>
  );
}
