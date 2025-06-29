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
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="%2318181B"/><text x="50%" y="50%" text-anchor="middle" dominant-baseline="central" font-size="32" font-family="Michroma,Arial,sans-serif" fill="white">JP</text></svg>'
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
