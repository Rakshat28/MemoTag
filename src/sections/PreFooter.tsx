// components/PreFooter.tsx
import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const PreFooter = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatePills, setAnimatePills] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Delay the pills animation
          setTimeout(() => {
            setAnimatePills(true);
          }, 800);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-gradient-to-b from-blue-50 via-blue-100 to-blue-50 py-40  relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-300 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div 
            className={`transform transition-all duration-1000 ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-6xl md:text-7xl font-bold mb-8">
              <span className="text-black">Try </span>
              <span className="text-blue-600">MemoTag</span>
              <br />
              <span className="text-black">Elevate Your </span>
              <span className="text-black">Care</span>
            </h2>
            
            <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
              Start your journey towards smarter
              <br />
              caregiving with MemoTag.
            </p>
          </div>
          
          <div 
            className={`mb-16 transition-all duration-700 delay-300 transform ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
            }`}
          >
            <Link href="/waitlist">
              <div className="inline-flex items-center gap-2 bg-blue-600 text-white py-4 px-10 rounded-full font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                Join Waitlist 
                <ArrowRight 
                  size={20} 
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </div>
            </Link>
          </div>
          
          <div className="flex justify-center gap-3 max-sm:flex-wrap">
            {[
              "Free 30-Day Trial",
              "Comprehensive Onboarding Assistance",
              "Join our 10,000+ Family"
            ].map((text, index) => (
              <div 
                key={index}
                className={`bg-white px-8 py-4 rounded-full shadow-md hover:shadow-lg transition-all duration-500 transform ${
                  animatePills 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200 + 600}ms` }}
              >
                <span className="text-blue-600 mr-2">✱</span> {text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add animation keyframes */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .floating {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default PreFooter;