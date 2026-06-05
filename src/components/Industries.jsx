"use client";
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const industries = [
  {
    id: "manufacturing",
    name: "Manufacturing",
    description: "Navigate supply chain complexities and evaluate production feasibility.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    link: "#"
  },
  {
    id: "infrastructure",
    name: "Infrastructure",
    description: "Intelligence on PPP models and commercial real estate viability.",
    image: "https://plus.unsplash.com/premium_photo-1683134181132-d21384512e01?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#"
  },
  {
    id: "retail",
    name: "Retail & Consumer",
    description: "Decode shifting consumer behaviors and tier-2 market potential.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
    link: "#"
  },
  {
    id: "ict",
    name: "ICT & Technology",
    description: "Strategic insights into digital transformation and SaaS ecosystems.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    link: "#"
  },
  {
    id: "services",
    name: "Services Sector",
    description: "Market analysis for healthcare, education, and financial services.",
    image: "https://images.unsplash.com/photo-1566930665082-4ae9dbbb5b6b?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#"
  },
  {
    id: "public-policy",
    name: "Public Policy",
    description: "In-depth tracking of regulatory compliance and economic policies.",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2112&auto=format&fit=crop",
    link: "#"
  }
];

export default function Industries() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Deep Industry Intelligence
            </h2>
            <p className="text-lg text-secondary">
              Specialized knowledge across India's most critical and fast-moving sectors.
            </p>
          </div>
          <Link href="#" className="inline-flex items-center text-primary font-semibold hover:text-blue-600 transition-colors shrink-0">
            View All Sectors <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <Link
              key={industry.id}
              href={industry.link}
              className="group relative h-80 rounded-2xl overflow-hidden block"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${industry.image})` }}
              ></div>

              {/* Overlay Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent transition-opacity duration-500 group-hover:from-primary group-hover:via-primary/80"></div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-2 transform transition-transform duration-300 group-hover:-translate-y-2">
                  {industry.name}
                </h3>
                <div className="overflow-hidden">
                  <p className="text-gray-200 text-sm leading-relaxed transform translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {industry.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
