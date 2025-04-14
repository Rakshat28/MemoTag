import React, { useEffect } from 'react'
import Image from 'next/image'

export function Solutions() {
  useEffect(() => {
    // Reveal animations on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-show');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.animate-hidden').forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-[7fr_3fr] gap-8 mb-4 md:mx-24">
        <div className="bg-[#2E6DFF] overflow-hidden rounded-3xl flex flex-col md:flex-row justify-between shadow-lg transform transition-all duration-300 hover:shadow-xl">
          <div className="md:w-[60%] w-full mt-2 px-6 sm:px-10 md:px-12 pt-4 md:pt-[40px] animate-hidden">
            <h2 className="text-white font-normal text-[20px] md:text-3xl lg:text-4xl leading-tight transition-all duration-500">
              Evolving <br /><span className="text-white font-bold">Dementia Care</span> with AI-Driven Solutions
            </h2>
            <p className="text-white opacity-60 mt-4 text-sm md:text-base transition-all duration-500">
              MemoTag integrates AI &amp; data analytics to deliver personalized care solutions, cognitive stimulation with peace of mind.
            </p>
          </div>
          <div className="md:w-[40%] md:h-[110%] w-full mt-5 md:mt-2 flex justify-center items-end">
            <div className="hidden md:block md:animate-float">
                <Image 
                src="/assets/phone.svg" 
                alt="phone" 
                width={250} 
                height={100}
                className="transform transition-all duration-700 hover:scale-105"
                />
            </div>
            <div className="md:hidden">
                <Image 
                src="/assets/phone.svg" 
                alt="phone" 
                width={250} 
                height={100}
                className="transform transition-all duration-700 hover:scale-105"
                />
            </div>
        </div>
        </div>
        <div className="bg-[#00114A] text-white rounded-3xl p-7 flex flex-col items-center justify-center shadow-lg transform transition-all duration-300 hover:shadow-xl animate-hidden">
          <ul className="space-y-2 p-1 md:p-5 w-full">
            {[
              'AI tracks patient behavior to predict cognitive decline, enabling early intervention.',
              'AI analyzes speech patterns for personalized cognitive therapy and progress tracking.',
              'Physical activity tracking helps identify future risks and provides proactive care recommendations.'
            ].map((text, index) => (
              <li key={index} className="flex items-start transition-all duration-300 hover:translate-x-1">
                <span className="mt-2 flex items-center justify-center w-10 h-5 text-lg font-thin mr-4 bg-white rounded-full text-black">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
                  </svg>
                </span>
                <p className="text-sm md:text-[14px] text-white">
                  {text}
                </p>
              </li>
            ))}
          </ul>
          <a href="/waitlist-form" className="w-full">
            <button className="mt-5 py-3 px-6 w-full bg-gradient-to-r from-[#003AFC] via-[#5177F5] to-[#003AFC] border-2 border-[#C2D0FF] text-white text-sm md:text-base font-medium rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:scale-105">
              Exclusive Insights
              <span className="ml-2 flex items-center justify-center w-6 h-6 rounded-full bg-white text-black animate-pulse">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.5253 5.49475L10.5206 7.49475L15.0782 7.50541L5.47473 17.0896L6.88752 18.5052L16.5173 8.89479L16.5065 13.5088L18.5065 13.5134L18.5253 5.51345L10.5253 5.49475Z" fill="currentColor"></path>
                </svg>
              </span>
            </button>
          </a>
        </div>
      </div>
      
      {/* CSS for custom animations */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-hidden {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease-out;
        }
        
        .animate-show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  )
}