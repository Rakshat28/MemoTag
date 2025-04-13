import React, { ReactNode, useState } from 'react';

interface CardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon, title, description }: CardProps) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({ 
      x: e.clientX - rect.left, 
      y: e.clientY - rect.top 
    });
  };

  return (
    <div 
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-[200px] h-[200px] bg-gradient-to-r from-[#f4f6ff] to-[#dbe2f1] rounded-full blur-xl pointer-events-none transition-opacity duration-300"
          style={{
            transform: `translate(${pos.x - 100}px, ${pos.y - 100}px)`,
            opacity: hovering ? 1 : 0,
          }}
        />
      </div>
      
      <div className="p-8 relative z-10">
        {icon}
        <h3 className="text-slate-900 text-lg font-semibold mb-3 pt-8">{title}</h3>
        <p className="text-slate-500 text-sm font-medium leading-relaxed">{description}</p>
      </div>
    </div>
  );
};