"use client"
import ArrowRight from '../../public/assets/arrow-right.svg';
import MenuIcon from "../../public/assets/menu.svg"
import BrandLogo from "../../public/assets/BrandLogo.svg";
import PreOrderButton from "@/components/PreOrderButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useEffect, useState } from 'react';
export const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;
    }
    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar)
  },[]);
  return(
    <header className={`sticky top-0 backdrop-blur-sm z-50 transition-transform duration-600 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm">
        <div className = "inline-flex gap-1 items-center">
          <p>The Future of Dementia Care</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center"></ArrowRight>
        </div>
      </div>
      <div className="py-5">
        <div className="container gap-4 mx-auto px-16 ">
          <div className="flex items-center justify-between">
            <BrandLogo className="h-6 w-auto md:h-8  whitespace-nowrap" />
            <MenuIcon className="h-5 w-5 block md:hidden"/>
            <nav className="hidden md:flex gap-5 text-black/60 items-center mx-3">
              <a href="" className="relative group hover:text-black">
                Home
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#0035E8] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="" className="relative group whitespace-nowrap hover:text-black">
                About Us
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#0035E8] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="" className="relative group hover:text-black">
                MindMap
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#0035E8] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="" className="relative group hover:text-black">
                CareGivers
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#0035E8] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>
            <div className="md:inline-flex gap-3 items-center justify-center hidden ">
                <PreOrderButton>
                  Pre-Order Now
                </PreOrderButton>
                <WhatsAppButton>
                  Join Us
                </WhatsAppButton>
              </div>
          </div>
        </div>
      </div>
    </header>
  )
};





