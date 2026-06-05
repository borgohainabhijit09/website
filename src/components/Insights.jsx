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

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Main Featured Article */}
          <Link href="#" className="lg:col-span-7 group flex flex-col h-full rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="relative h-64 sm:h-80 w-full overflow-hidden">
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop"
                alt="Stock market visualization"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-8 md:p-10 flex-grow flex flex-col justify-center bg-white">
              <div className="flex items-center space-x-4 text-sm font-medium text-gray-400 mb-4 uppercase tracking-wider">
                <span className="text-blue-600">Market Report</span>
                <span>•</span>
                <span>Oct 24, 2024</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4 group-hover:text-blue-600 transition-colors">
                The New Paradigm of Indian Infrastructure: PPP Models in 2024
              </h3>
              <p className="text-secondary text-lg line-clamp-3">
                An extensive analysis of how shifting government policies are creating unprecedented opportunities for foreign direct investment in large-scale infrastructure projects across Tier-1 and Tier-2 cities.
              </p>
            </div>
          </Link>

          {/* Secondary Articles */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <Link href="#" className="group flex flex-col sm:flex-row h-full rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 bg-white">
              <div className="sm:w-2/5 relative h-48 sm:h-auto overflow-hidden shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
                  alt="Manufacturing facility"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 flex flex-col justify-center">
                <div className="text-xs font-bold text-blue-600 mb-2 uppercase tracking-wider">Industry Brief</div>
                <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-blue-600 transition-colors leading-snug">
                  Supply Chain Resilience in Indian Manufacturing
                </h3>
                <p className="text-secondary text-sm line-clamp-2">Evaluating the impact of the PLI scheme on localized electronics manufacturing.</p>
              </div>
            </Link>

            <Link href="#" className="group flex flex-col sm:flex-row h-full rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 bg-white">
              <div className="sm:w-2/5 relative h-48 sm:h-auto overflow-hidden shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1544142643-94e4f253ed9d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbnN1bWVyJTIwbWluZHNldHxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Retail environment"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 flex flex-col justify-center">
                <div className="text-xs font-bold text-blue-600 mb-2 uppercase tracking-wider">Consumer Insights</div>
                <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-blue-600 transition-colors leading-snug">
                  Decoding the Tier-2 Consumer Mindset
                </h3>
                <p className="text-secondary text-sm line-clamp-2">How D2C brands are restructuring their strategies to capture non-metro growth.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
