"use client";
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-start pt-36 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
      {/* Background Image & Overlay */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')" }}
      ></motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F2744]/95 via-[#0F2744]/80 to-transparent z-10"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-20">
        <div className="max-w-4xl">

          {/* Badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="inline-block bg-blue-600/20 backdrop-blur-md border border-blue-400/30 text-blue-300 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase mb-8"
          >
            Strategic Market Intelligence
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.15}
            className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.5] mb-8"
          >
            Decoding the Indian Market.<br /> Delivering Strategic Clarity.
          </motion.h1>

          {/* Body */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.28}
            className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-2xl font-light"
          >
            The India Watch is a premier research and advisory firm equipping global investors and enterprises with the intelligence to win in India.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.4}
            className="flex flex-col sm:flex-row gap-6"
          >
            <Link href="#capabilities" className="bg-blue-600 text-white px-8 py-4 rounded text-center font-medium hover:bg-blue-500 transition-colors flex items-center justify-center text-lg">
              Explore Our Capabilities <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link href="#insights" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded text-center font-medium hover:bg-white/20 transition-colors flex items-center justify-center text-lg">
              Read Latest Insights
            </Link>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center"
      >
        <span className="text-white/60 text-xs tracking-widest uppercase mb-2">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-5 h-8 border-2 border-white/40 rounded-full flex justify-center p-1"
        >
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </motion.div>
      </motion.div>

    </section>
  );
}

