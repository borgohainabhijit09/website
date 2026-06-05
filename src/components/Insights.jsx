import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Insights() {
  return (
    <section id="insights" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Latest Perspectives & Market Analysis
            </h2>
            <p className="text-lg text-secondary">
              Rigorous research and strategic foresight from our analysts.
            </p>
          </div>
          <Link href="#" className="inline-flex items-center text-primary font-semibold hover:text-blue-600 transition-colors shrink-0">
            Access All Insights <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Main Featured Article */}
          <Link href="#" className="lg:col-span-7 group flex flex-col h-full overflow-hidden">
            <div className="relative h-80 sm:h-[420px] w-full overflow-hidden mb-8">
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop"
                alt="Stock market visualization"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="flex-grow flex flex-col justify-start">
              <div className="flex items-center space-x-4 text-sm font-semibold text-gray-500 mb-4 uppercase tracking-widest">
                <span className="text-blue-600">Macroeconomics</span>
                <span>•</span>
                <span>Oct 24, 2024</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                The New Paradigm of Indian Infrastructure: PPP Models in 2024
              </h3>
              <p className="text-gray-600 text-lg line-clamp-3 leading-relaxed">
                An extensive analysis of how shifting government policies are creating unprecedented opportunities for foreign direct investment in large-scale infrastructure projects across Tier-1 and Tier-2 cities.
              </p>
            </div>
          </Link>

          {/* Secondary Articles List */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="border-t-4 border-gray-900 mb-8 pt-4">
              <h4 className="font-serif font-bold text-xl text-gray-900">Latest Briefs</h4>
            </div>
            
            <div className="flex flex-col gap-0 divide-y divide-gray-200">
              <Link href="#" className="group py-6 first:pt-0">
                <div className="flex items-center space-x-3 text-xs font-bold text-gray-400 mb-3 uppercase tracking-wider">
                  <span className="text-blue-600">Industry Brief</span>
                  <span>•</span>
                  <span>Oct 18, 2024</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-snug">
                  Supply Chain Resilience in Indian Electronics Manufacturing
                </h3>
              </Link>

              <Link href="#" className="group py-6">
                <div className="flex items-center space-x-3 text-xs font-bold text-gray-400 mb-3 uppercase tracking-wider">
                  <span className="text-blue-600">Consumer Insights</span>
                  <span>•</span>
                  <span>Oct 12, 2024</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-snug">
                  Decoding the Tier-2 Consumer Mindset: The D2C Expansion
                </h3>
              </Link>

              <Link href="#" className="group py-6">
                <div className="flex items-center space-x-3 text-xs font-bold text-gray-400 mb-3 uppercase tracking-wider">
                  <span className="text-blue-600">Policy Analysis</span>
                  <span>•</span>
                  <span>Sep 28, 2024</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-snug">
                  Implications of the New National Logistics Policy on Last-Mile Delivery
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
