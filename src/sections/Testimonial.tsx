// app/testimonials/page.tsx
'use client';

import React from 'react';

const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    name: "Jamie Rivera",
    handle: "@jamietechguru00"
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    name: "Taylor Kim",
    handle: "@taylorkimm"
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    name: "Riley Smith",
    handle: "@rileysmith1"
  },
  {
    text: "Our team’s productivity has skyrocketed since we started using this tool.",
    name: "Casey Harper",
    handle: "@casey09"
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    name: "Josh Smith",
    handle: "@jjsmith"
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    name: "Jordan Patels",
    handle: "@jpatelsdesign"
  }
];

export default function TestimonialsPage() {
  return (
    <section className="py-16 bg-gray-50 overflow-hidden rounded-xl shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
      <div className="flex items-center justify-center mb-10">
      <p className="flex flex-row justify-between items-center gap-1 text-white w-[132px] md:w-40 mt-4 rounded-full text-center px-2 md:px-4 py-2 md:py-2 bg-[#003AFC] uppercase text-sm font-semibold">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 480 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M471.99 334.43L336.06 256l135.93-78.43c7.66-4.42 10.28-14.2 5.86-21.86l-32.02-55.43c-4.42-7.65-14.21-10.28-21.87-5.86l-135.93 78.43V16c0-8.84-7.17-16-16.01-16h-64.04c-8.84 0-16.01 7.16-16.01 16v156.86L56.04 94.43c-7.66-4.42-17.45-1.79-21.87 5.86L2.15 155.71c-4.42 7.65-1.8 17.44 5.86 21.86L143.94 256 8.01 334.43c-7.66 4.42-10.28 14.21-5.86 21.86l32.02 55.43c4.42 7.65 14.21 10.27 21.87 5.86l135.93-78.43V496c0 8.84 7.17 16 16.01 16h64.04c8.84 0 16.01-7.16 16.01-16V339.14l135.93 78.43c7.66 4.42 17.45 1.8 21.87-5.86l32.02-55.43c4.42-7.65 1.8-17.43-5.86-21.85z">
          </path>
        </svg>
        Testimonials
      </p>
      </div>
        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            What our users say
          </h2>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="flex animate-scroll hover:animation-paused">
          {/* Duplicate testimonials for seamless animation */}
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div 
              key={index}
              className="flex-shrink-0 w-[85vw] md:w-[400px] bg-white rounded-xl p-6 mx-4 shadow-lg"
            >
              <p className="text-gray-600 mb-4 text-base md:text-lg leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="flex flex-col">
                <span className="font-semibold text-gray-900">{testimonial.name}</span>
                <span className="text-gray-500 text-sm">{testimonial.handle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}