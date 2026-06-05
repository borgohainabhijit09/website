"use client";
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '10%' : '-10%',
    opacity: 0,
    scale: 1.1,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring", stiffness: 100, damping: 30, mass: 1 },
      opacity: { duration: 0.8 },
      scale: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    }
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? '10%' : '-10%',
    opacity: 0,
    scale: 0.95,
    transition: {
      x: { type: "spring", stiffness: 100, damping: 30, mass: 1 },
      opacity: { duration: 0.8 },
      scale: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    }
  })
};

const textVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  show: (custom) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { 
      duration: 1, 
      ease: [0.16, 1, 0.3, 1], 
      delay: custom * 0.1 
    },
  }),
  exit: {
    opacity: 0,
    y: -20,
    filter: "blur(4px)",
    transition: { duration: 0.4, ease: "easeIn" }
  }
};

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    badge: "Strategic Market Intelligence",
    headline: "Strategic Clarity for India's Complex Markets.",
    body: "Delivering the granular data, competitive insights, and regulatory foresight required to win in the world's fastest-growing economy.",
    cta1: { text: "Explore Our Capabilities", href: "#capabilities" },
    cta2: { text: "Read Latest Insights", href: "#insights" }
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    badge: "Actionable Insights",
    headline: "Navigating Growth in Key Sectors.",
    body: "Expert analysis and bespoke advisory services to capitalize on emerging opportunities across Indian industries.",
    cta1: { text: "View Industries", href: "#industries" },
    cta2: { text: "Contact Our Experts", href: "#" }
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
    badge: "Proven Expertise",
    headline: "Your Partner in Indian Market Entry.",
    body: "From initial feasibility studies to comprehensive go-to-market strategies, we guide you every step of the way.",
    cta1: { text: "See Case Studies", href: "#case-studies" },
    cta2: { text: "Why Choose Us", href: "#why-us" }
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentSlide((prev) => (prev + newDirection + slides.length) % slides.length);
  };

  const slide = slides[currentSlide];

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-start overflow-hidden bg-[#0a1118]">
      {/* Background Image & Overlay */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 w-full h-full"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${slide.image}')` }}
          />
          {/* Multi-layered gradient overlay for sophisticated look and optimal text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F2744]/95 via-[#0F2744]/70 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F2744]/90 via-transparent to-[#0F2744]/20"></div>
          <div className="absolute inset-0 bg-black/10"></div>
        </motion.div>
      </AnimatePresence>

      <div className="container mx-auto px-6 max-w-7xl relative z-20 mt-16 md:mt-0">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div key={currentSlide} className="flex flex-col">
              {/* Badge */}
              <div className="overflow-hidden mb-8">
                <motion.div
                  variants={textVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  custom={0}
                  className="inline-flex items-center gap-2 border border-blue-400/30 bg-blue-900/30 backdrop-blur-md text-blue-300 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-lg shadow-blue-900/20"
                >
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                  {slide.badge}
                </motion.div>
              </div>

              {/* Headline */}
              <div className="overflow-hidden mb-8">
                <motion.h1
                  variants={textVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  custom={1}
                  className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-white leading-[1.1] tracking-tight"
                >
                  {slide.headline}
                </motion.h1>
              </div>

              {/* Body */}
              <div className="overflow-hidden mb-12">
                <motion.p
                  variants={textVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  custom={2}
                  className="text-lg md:text-2xl text-white/70 leading-relaxed max-w-2xl font-light"
                >
                  {slide.body}
                </motion.p>
              </div>

              {/* CTAs */}
              <motion.div
                variants={textVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                custom={3}
                className="flex flex-col sm:flex-row gap-5 items-start"
              >
                <Link href={slide.cta1.href} className="group relative overflow-hidden bg-blue-600 text-white px-8 py-4 rounded-sm text-center font-medium transition-all hover:bg-blue-500 flex items-center justify-center text-lg">
                  <span className="relative z-10 flex items-center">
                    {slide.cta1.text} 
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link href={slide.cta2.href} className="group relative overflow-hidden bg-transparent border border-white/30 text-white px-8 py-4 rounded-sm text-center font-medium hover:bg-white/10 transition-all flex items-center justify-center text-lg backdrop-blur-sm">
                  {slide.cta2.text}
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Modern Bottom Controls Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-30 pt-20 pb-8 md:pb-12">
        <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Progress Indicators */}
          <div className="flex items-center gap-8 w-full md:w-auto">
            <div className="text-white/80 font-mono text-sm tracking-widest flex items-baseline gap-1">
              <span className="text-xl font-medium text-white">0{currentSlide + 1}</span> 
              <span className="text-white/40">/</span> 
              <span className="text-white/60">0{slides.length}</span>
            </div>
            
            <div className="flex gap-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentSlide ? 1 : -1);
                    setCurrentSlide(index);
                  }}
                  className="relative h-1 w-12 md:w-24 bg-white/20 rounded-full overflow-hidden transition-all hover:bg-white/30 cursor-pointer"
                  aria-label={`Go to slide ${index + 1}`}
                >
                  {currentSlide === index && (
                    <motion.div
                      className="absolute inset-0 bg-blue-500"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 6, ease: "linear" }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={() => paginate(-1)}
              className="group relative flex items-center justify-center w-14 h-14 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white/20 hover:border-white/40 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              <ChevronLeft className="w-5 h-5 relative z-10 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button 
              onClick={() => paginate(1)}
              className="group relative flex items-center justify-center w-14 h-14 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white/20 hover:border-white/40 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              <ChevronRight className="w-5 h-5 relative z-10 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
}

