'use client'

import { AnimatePresence } from "framer-motion";
import PageTransition from "./PageTransition";
import Navbar from "./Navbar";
import JPPreloader from "./JPPreloader";
import { usePathname } from "next/navigation";

export default function AnimatedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();

  return (
    <>
      <JPPreloader />
      <Navbar />
      <AnimatePresence mode="wait">
        <PageTransition key={pathname}>
          {children}
        </PageTransition>
      </AnimatePresence>
    </>
  );
} 