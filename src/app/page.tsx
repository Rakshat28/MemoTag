"use client";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Feature } from "@/sections/Feature";
import { Solutions } from "@/sections/Solutions";
import { ParallaxSection } from "@/components/ParallaxSection";

export default function Home() {
  return (
    <div>
      <Header />

      {/* Slower scroll (parallax lag) */}
      <ParallaxSection speed={0.3}>
        <Hero />
      </ParallaxSection>

      {/* Faster scroll (less parallax lag) */}
      <ParallaxSection speed={0.7}>
        <LogoTicker />
      </ParallaxSection>
      <ParallaxSection speed={0.7}>
        <Feature />
      </ParallaxSection>
      <ParallaxSection speed={0.7}>
        <Solutions />
      </ParallaxSection>
    </div>
  );
}
