"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "The India Watch provided us with unparalleled insights that were critical to our market entry strategy. Their deep understanding of the regulatory landscape and consumer behavior gave us the confidence to invest heavily.",
    name: "Sarah Jenkins",
    title: "Director of APAC Operations, GlobalTech",
  },
  {
    id: 2,
    quote: "Their data-driven approach and meticulous research methodology helped us identify niche market opportunities we had previously overlooked. An invaluable partner for any firm serious about the Indian market.",
    name: "Michael Chen",
    title: "VP of Strategy, Nexus Capital",
  },
  {
    id: 3,
    quote: "Working with The India Watch was a game-changer. They don't just provide data; they deliver actionable strategic intelligence that directly translates to competitive advantage.",
    name: "Priya Sharma",
    title: "Founder & CEO, Elevate Retail",
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-[#f8fafc] to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-blue-50 blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-100 blur-3xl opacity-50"></div>
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Client Success Stories</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute top-0 left-0 text-blue-100 transform -translate-x-4 -translate-y-6 md:-translate-x-8 md:-translate-y-8 z-0">
            <Quote size={120} className="opacity-50" />
          </div>
          
          <div className="relative z-10 min-h-[320px] md:min-h-[240px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-center px-4 md:px-12"
              >
                <p className="text-xl md:text-3xl font-serif text-gray-700 leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{testimonials[currentIndex].name}</h4>
                  <p className="text-blue-600 text-sm font-medium mt-1">{testimonials[currentIndex].title}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-6 mt-12">
            <button 
              onClick={prev}
              className="p-3 rounded-full bg-white shadow-md text-gray-600 hover:text-blue-600 hover:shadow-lg transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? "bg-blue-600 w-8" : "bg-gray-300 w-2.5 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={next}
              className="p-3 rounded-full bg-white shadow-md text-gray-600 hover:text-blue-600 hover:shadow-lg transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
