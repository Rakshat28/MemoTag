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
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What our users say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From intuitive design to powerful features, our app has become an essential tool for users around the world.
          </p>
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