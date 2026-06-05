"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Anchor, Utensils, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

const cases = [
  {
    id: 1,
    industry: "Maritime Logistics",
    client: "Global Logistics Firm",
    icon: Anchor,
    image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=2070&auto=format&fit=crop",
    challenge: "Scope: 5 major ports. The client required a comprehensive feasibility analysis of India's maritime trade and container industry to guide a multi-million dollar market entry strategy.",
    approach: "We executed an intensive 3-week market study, incorporating competitor benchmarking, regulatory framework analysis, and qualitative insights from key industry stakeholders.",
    impact: "Delivered actionable intelligence that shaped the final investment roadmap, minimizing entry risk and identifying untapped corridors with a projected 18% higher margin."
  },
  {
    id: 2,
    industry: "Hospitality & F&B",
    client: "Premium Hospitality Group",
    icon: Utensils,
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1934&auto=format&fit=crop",
    challenge: "Timeline: 4 Weeks. The client needed a detailed market study and financial feasibility analysis prior to initiating large-scale hospitality investments in the competitive Gurgaon market.",
    approach: "Conducted deep-dive consumer demographic research, location viability analysis, and competitive positioning strategies tailored to the PBCL sector.",
    impact: "Provided an incisive, data-backed feasibility report that enabled the leadership team to secure ₹50Cr+ funding and accelerate the launch timeline by 3 months."
  },
  {
    id: 3,
    industry: "Consumer Retail",
    client: "National Sports Brand",
    icon: ShoppingBag,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1950&auto=format&fit=crop",
    challenge: "Scale: Pan-India (Tier 1 & 2). Required granular market studies to support a major product launch, including understanding shifting consumer preferences and distribution bottlenecks.",
    approach: "Deployed a hybrid research model utilizing large-scale quantitative surveys (n=5,000+) combined with targeted F2F interviews.",
    impact: "Equipped the marketing team with precise demographic targeting data, directly contributing to a 24% higher adoption rate and a 15% reduction in CAC post-launch."
  }
];

export default function CaseStudies() {
  const [activeCase, setActiveCase] = useState(cases[0]);

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Navigation */}
          <div className="lg:w-1/3 flex flex-col justify-start">
            <div className="mb-12">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                Delivering Strategic Impact
              </h2>
              <p className="text-lg text-gray-600">
                How we partner with organizations to decode market complexity, mitigate risk, and drive scalable growth.
              </p>
            </div>
            
            <div className="flex flex-col gap-4 relative">
              {cases.map((c) => {
                const Icon = c.icon;
                const isActive = activeCase.id === c.id;
                
                return (
                  <button
                    key={c.id}
                    onClick={() => setActiveCase(c)}
                    className={`flex items-center gap-4 p-5 rounded-2xl text-left transition-all duration-300 border ${
                      isActive 
                        ? 'bg-white border-blue-100 shadow-lg shadow-blue-900/5' 
                        : 'bg-transparent border-transparent hover:bg-gray-100/80'
                    }`}
                  >
                    <div className={`p-3 rounded-xl transition-colors ${isActive ? 'bg-blue-50 text-blue-600' : 'bg-gray-100 text-gray-400'}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className={`text-xs font-bold uppercase tracking-wider mb-1 transition-colors ${isActive ? 'text-blue-600' : 'text-gray-400'}`}>
                        {c.industry}
                      </div>
                      <div className={`font-serif font-bold text-lg transition-colors ${isActive ? 'text-gray-900' : 'text-gray-500'}`}>
                        {c.client}
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right Column: Active Content */}
          <div className="lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCase.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 overflow-hidden border border-gray-100 h-full flex flex-col"
              >
                {/* Hero Image */}
                <div className="h-64 sm:h-80 w-full relative overflow-hidden bg-gray-900">
                  <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply z-10"></div>
                  <img 
                    src={activeCase.image} 
                    alt={activeCase.industry} 
                    className="object-cover w-full h-full opacity-80 mix-blend-overlay"
                  />
                  <div className="absolute bottom-0 left-0 p-8 sm:p-12 z-20">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                      {activeCase.industry}
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-serif font-bold text-white">
                      {activeCase.client}
                    </h3>
                  </div>
                </div>

                {/* Content Grid */}
                <div className="p-8 sm:p-12 flex-grow flex flex-col justify-between">
                  <div className="grid sm:grid-cols-2 gap-12 mb-12">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-6 h-[2px] bg-blue-600"></div>
                        <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest">The Challenge</h4>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {activeCase.challenge}
                      </p>
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-6 h-[2px] bg-blue-600"></div>
                        <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest">Our Approach</h4>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {activeCase.approach}
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-50/50 rounded-2xl p-6 sm:p-8 border border-blue-100">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-6 h-[2px] bg-blue-600"></div>
                      <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest">The Impact</h4>
                    </div>
                    <p className="text-blue-900 font-medium leading-relaxed mb-6">
                      {activeCase.impact}
                    </p>
                    <Link href="#" className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors text-sm uppercase tracking-wider">
                      Download Strategy Brief (PDF) <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
