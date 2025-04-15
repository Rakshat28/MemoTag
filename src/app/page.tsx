"use client";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Feature } from "@/sections/Feature";
import { Solutions } from "@/sections/Solutions";
import  StatsSection  from "@/sections/StatsSection";
import { FillerSection } from "@/sections/FillerSection";
import FaqSection from "@/sections/FaqSection";
import PreFooter from "@/sections/PreFooter";
import Testimonial from "@/sections/Testimonial";
import BlogSection from "@/sections/BlogSection";
import Footer from "@/sections/Footer";
export default function Home() {
  return (
    <div>
      <Header />
      <Hero></Hero>
      <LogoTicker></LogoTicker>
      <Feature></Feature>
      <Solutions></Solutions>
      <StatsSection></StatsSection>
      <FillerSection></FillerSection>
      <FaqSection></FaqSection>
      <Testimonial></Testimonial>
      <BlogSection></BlogSection>
      <PreFooter></PreFooter>
      <Footer></Footer>
      
    </div>
  );
}
