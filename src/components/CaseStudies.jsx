"use client";
import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const cases = [
  {
    id: 1,
    metric: "$50M",
    metricLabel: "Manufacturing Facility",
    quote: "The India Watch provided the granular intelligence we needed to de-risk our market entry and optimize our facility location.",
    author: "VP of Operations, Global Electronics Firm",
    challenge: "A European electronics manufacturer needed to evaluate three distinct Indian states for a new production facility, requiring complex data on labor costs, supply chain logistics, and state-level incentives.",
    outcome: "Delivered a comprehensive feasibility study that identified a high-potential SEZ, reducing projected operational costs by 18% over a 5-year horizon.",
  },
  {
    id: 2,
    metric: "300%",
    metricLabel: "Growth in Retail Footprint",
    quote: "Their strategic communication framework completely changed how we positioned ourselves to domestic stakeholders and regulatory bodies.",
    author: "Managing Director, International Retail Chain",
    challenge: "An expanding retail brand faced regulatory hurdles and negative sentiment from local competitors during their aggressive market expansion phase.",
    outcome: "Developed a robust stakeholder engagement strategy and localized PR messaging that shifted public perception and smoothed regulatory approvals.",
  }
];

export default function CaseStudies() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCase = () => setCurrentIndex((prev) => (prev + 1) % cases.length);
  const prevCase = () => setCurrentIndex((prev) => (prev === 0 ? cases.length - 1 : prev - 1));

  const current = cases[currentIndex];

  return (
    <section className="py-24 bg-surface border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            Delivering Measurable Strategic Value
          </h2>
          <p className="text-lg text-secondary max-w-2xl">
            How we partner with organizations to scale operations, enter new markets, and mitigate risk.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-2 h-auto lg:h-[500px]"
            >
              {/* Impact Metric & Quote */}
              <div className="p-10 lg:p-16 bg-primary text-white flex flex-col justify-between">
                <div>
                  <div className="text-5xl md:text-7xl font-bold text-blue-400 mb-2">
                    {current.metric}
                  </div>
                  <div className="text-xl text-gray-300 font-medium mb-12">
                    {current.metricLabel}
                  </div>
                </div>
                <div>
                  <blockquote className="text-xl md:text-2xl font-serif italic text-gray-100 mb-6 leading-relaxed">
                    "{current.quote}"
                  </blockquote>
                  <div className="text-gray-400 font-medium uppercase tracking-wider text-sm">
                    — {current.author}
                  </div>
                </div>
              </div>

              {/* Challenge & Outcome */}
              <div className="p-10 lg:p-16 flex flex-col justify-center bg-white">
                <div className="mb-10">
                  <h4 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">The Challenge</h4>
                  <p className="text-secondary text-lg leading-relaxed">
                    {current.challenge}
                  </p>
                </div>
                <div className="mb-12">
                  <h4 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">The Outcome</h4>
                  <p className="text-primary text-lg font-medium leading-relaxed">
                    {current.outcome}
                  </p>
                </div>
                <div>
                  <Link href="#" className="inline-flex items-center text-primary font-bold hover:text-blue-600 transition-colors">
                    Read Full Case Study <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute bottom-0 right-0 flex bg-white border-t border-l border-gray-100 z-10">
            <button onClick={prevCase} className="p-4 hover:bg-surface text-primary transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="w-px bg-gray-100"></div>
            <button onClick={nextCase} className="p-4 hover:bg-surface text-primary transition-colors">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
