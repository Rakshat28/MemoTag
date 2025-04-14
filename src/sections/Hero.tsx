import React, { useState, useEffect } from "react";
import WhatsAppButton from "@/components/WhatsAppButton";
import PreOrderButton from "@/components/PreOrderButton";
import cogImage from "../../public/assets/cog.png"
import Image from "next/image";

export const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const targetText = "AI Driven";
  
  useEffect(() => {
    // Reset when component mounts
    setDisplayText("");
    
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const finalChars = targetText.split("");
    let iterations = 0;
    
    const interval = setInterval(() => {
      // Create a string of random and fixed characters
      const result = finalChars.map((char, index) => {
        // Space remains space
        if (char === " ") return " ";
        
        // If we've done enough iterations for this position, show the correct letter
        if (index < iterations / 3) {
          return char;
        }
        
        // Otherwise return a random character
        return characters[Math.floor(Math.random() * characters.length)];
      }).join("");
      
      setDisplayText(result);
      
      // Stop when all characters are revealed
      if (iterations >= finalChars.length * 3) {
        clearInterval(interval);
      }
      
      iterations += 1;
    }, 50); // Controls speed of cycling
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_80%)] overflow-x-clip">
      <div className="container mx-auto px-16">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E00] text-transparent bg-clip-text mt-6">
              <span className="text-[#0035E8] inline-block min-h-[1.2em] font-mono">
                {displayText}
              </span> Wearables for
              Proactive Caregiving
            </h1>
            <p className="text-xl text-[#0010D3E] tracking-tight mt-6">
              Empowering caregivers with real-time insights, safety alerts, and cognitive health tracking for loved ones.
            </p>
            <div className="flex gap-1 items-center mt-[30px] md:hidden">
              <PreOrderButton>Pre-Order Now</PreOrderButton>
              <WhatsAppButton>Join Us</WhatsAppButton>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative animate-float">
            <Image
              src={cogImage}
              alt="CogImage"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};