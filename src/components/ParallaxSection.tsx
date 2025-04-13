// components/ParallaxSection.tsx
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { ReactNode } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number; // Lower means slower scroll
  height?: string; // Optional height prop
}

export const ParallaxSection = ({ children, speed = 0.5 }: ParallaxSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -1000 * speed]);

  return (
    <motion.section ref={ref} style={{ y }} className="relative z-0">
      {children}
    </motion.section>
  );
};
