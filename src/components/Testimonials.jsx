"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "We have extensively engaged with The India Watch for a wide range of product launch studies. They have helped us with pan-India market studies including both surveys as well as F2F interviews. We have also commissioned numerous market analysis services covering market intelligence data, industry data, competitive insights, distribution structure analysis, regulatory inputs, etc.",
    name: "Ajay Singh",
    title: "Head Marketing & Partnerships, HRX India",
  },
  {
    id: 2,
    quote: "One of my references connected us with Mr. Paritosh from The India Watch, as we were looking for a market study on India’s maritime trade, shipping, and container industry. After our initial discussion, we hired them. In less than 3 weeks, they came up with a very detailed report which gave us ample insights into the markets. They were also very cooperative in refurbishing additional data & insights requested by us.",
    name: "Eugenia",
    title: "Head of International Projects, SG Trans Russia",
  },
  {
    id: 3,
    quote: "We have hired the services of The India Watch to prepare a feasibility report for one of our new fine dining restaurants in Meghalaya. The team was really helpful and they delivered an incisive and detailed feasibility study report within the timeline decided.",
    name: "Pallavi Deka",
    title: "MD, Khorika Group",
  },
  {
    id: 4,
    quote: "We hired The India Watch to help us with a detailed market study and feasibility analysis for one of our hospitality investments in Gurgaon. They are thoroughly professional and have a very good understanding of the F&B, PBCL, and Hospitality industry. Quite impressed by their overall approach, depth of study, and professional behavior.",
    name: "Saurav Bhaik",
    title: "CEO, Tagbin",
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
    <section className="py-24 bg-gradient-to-b from-[#f8fafc] to-white relative overflow-hidden border-t border-gray-100">
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
                <p className="text-sm md:text-lg font-serif text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">{testimonials[currentIndex].name}</h4>
                  <p className="text-blue-600 text-xs font-medium mt-1">{testimonials[currentIndex].title}</p>
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
