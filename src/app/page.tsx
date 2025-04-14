"use client";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Feature } from "@/sections/Feature";
import { Solutions } from "@/sections/Solutions";
import  StatsSection  from "@/sections/StatsSection";
import { ParallaxSection } from "@/components/ParallaxSection";
import { FillerSection } from "@/sections/FillerSection";
export default function Home() {
  return (
    <div>
      <Header />

      {/* Slower scroll (parallax lag) */}
      <ParallaxSection speed={0.1}>
        <Hero />
      </ParallaxSection>

      {/* Faster scroll (less parallax lag) */}
      <ParallaxSection speed={0.5}>
        <LogoTicker></LogoTicker>
        <Feature></Feature>
        <Solutions></Solutions>
        <StatsSection></StatsSection>
      </ParallaxSection>
      <ParallaxSection speed={0.5}> 
        <FillerSection></FillerSection>
      </ParallaxSection>
      
    </div>
  );
}
