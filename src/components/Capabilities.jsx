"use client";
import Link from 'next/link';
import { ArrowRight, BarChart3, LineChart, MessageSquare, Compass, MapPin, FileText } from 'lucide-react';

const capabilities = [
  {
    number: "01",
    title: "Business Research & Advisory",
    description: "Rigorous analysis and strategic recommendations for complex market challenges.",
    icon: BarChart3,
  },
  {
    number: "02",
    title: "Market Research Services",
    description: "Intelligence on market size, trends, and competitive dynamics.",
    icon: LineChart,
  },
  {
    number: "03",
    title: "Strategic Communication",
    description: "High-impact positioning and messaging for investors and stakeholders.",
    icon: MessageSquare,
  },
  {
    number: "04",
    title: "Feasibility Studies",
    description: "Assessment of project viability, regulatory risk, and ROI potential.",
    icon: Compass,
  },
  {
    number: "05",
    title: "India Market Entry",
    description: "End-to-end strategy for foreign enterprises entering India.",
    icon: MapPin,
  },
  {
    number: "06",
    title: "Business Plan & Pitch Deck",
    description: "Investor-grade documentation for fundraising and board presentations.",
    icon: FileText,
  }
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-24 bg-surface">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <p className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-3">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
              Strategic Capabilities
            </h2>
          </div>
          <Link href="#" className="inline-flex items-center text-primary font-semibold hover:text-blue-600 transition-colors shrink-0 text-sm">
            Explore All Services <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        {/* 2x3 Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <Link
                key={idx}
                href="#"
                className="group bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 bg-surface rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-2xl font-serif font-bold text-gray-100 group-hover:text-blue-100 transition-colors select-none">
                    {cap.number}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-blue-600 transition-colors">
                  {cap.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed flex-grow">
                  {cap.description}
                </p>
                <div className="mt-6 flex items-center text-sm font-semibold text-gray-300 group-hover:text-blue-600 transition-all duration-300">
                  Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

