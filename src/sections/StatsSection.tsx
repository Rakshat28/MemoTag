"use client"
import { useEffect, useState, useRef } from 'react';

interface AnimatedCounterProps {
  endValue: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  endValue,
  duration = 2000,
  prefix = '',
  suffix = '+',
  label,
}) => {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const countRef = useRef<number>(0);
  const startTimeRef = useRef<number | null>(null);
  const frameRef = useRef<number | null>(null);
  const elementRef = useRef<HTMLDivElement>(null);

  // Set up intersection observer to detect when element is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsInView(true);
          // Once we've seen it, no need to observe anymore
          if (elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        }
      },
      {
        // Start animation when element is 10% in view
        threshold: 0.1,
        // Root margin can be adjusted to trigger earlier/later
        rootMargin: '0px 0px -10% 0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  // Start animation when element comes into view
  useEffect(() => {
    if (!isInView) return;

    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smoother animation
      const easeOutQuad = (t: number) => t * (2 - t);
      const easedProgress = easeOutQuad(progress);
      
      // Calculate the current count based on progress
      countRef.current = Math.floor(easedProgress * endValue);
      setCount(countRef.current);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        // Ensure we reach the exact end value
        setCount(endValue);
      }
    };

    // Start the animation
    frameRef.current = requestAnimationFrame(animate);

    // Cleanup function
    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [isInView, endValue, duration]);

  return (
    <div ref={elementRef} className="text-center p-6">
      <div className="text-6xl font-bold text-gray-800 mb-2">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-lg text-gray-600">{label}</div>
    </div>
  );
};

const StatsSection: React.FC = () => {
  return (
    <div className="w-full bg-white py-16 ">
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedCounter 
            endValue={10000} 
            label="Insights Collected" 
          />
          <AnimatedCounter 
            endValue={35000} 
            label="Hospitals & Patient Network" 
          />
          <AnimatedCounter 
            endValue={500} 
            label="Lives Impacted" 
          />
        </div>
      </div>
    </div>
  );
};

export default StatsSection;