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

const libertinusMath = localFont({
  src: "./fonts/LibertinusMath-Regular.ttf",
  variable: '--font-libertinus-math',
  display: 'swap',
});

const bitcountGridDouble = localFont({
  src: "./fonts/BitcountGridDouble-VariableFont_CRSV,ELSH,ELXP,slnt,wght.ttf",
  variable: '--font-bitcount-griddouble',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Jay Pipaliya",
  description: "Full Stack Developer Portfolio",
  icons: {
    icon: '/images/logo.jpeg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${michroma.variable} ${libertinusMath.variable} ${bitcountGridDouble.variable} scroll-smooth`}>
      <body className={`${michroma.className} cursor-none antialiased`}>
        <CustomCursor />
        <AnimatedLayout>
          {children}
        </AnimatedLayout>
      </body>
    </html>
  );
}
