"use client";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Feature } from "@/sections/Feature";
import { Solutions } from "@/sections/Solutions";
import  StatsSection  from "@/sections/StatsSection";
import { ParallaxSection } from "@/components/ParallaxSection";
import { FillerSection } from "@/sections/FillerSection";
import FaqSection from "@/sections/FaqSection";
import PreFooter from "@/sections/PreFooter";
import Testimonial from "@/sections/Testimonial";
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
        <FaqSection></FaqSection>
        <Testimonial></Testimonial>
      </ParallaxSection>
      <ParallaxSection speed={0.6}>
        <PreFooter></PreFooter>
      </ParallaxSection>
      
      
    </div>
  );
}
