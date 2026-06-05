"use client";
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Leadership() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Founder Profile */}
          <div className="flex flex-col">
            <div className="mb-10">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
                Leadership & Expertise
              </h2>
              <div className="w-20 h-1 bg-blue-600"></div>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 items-start">
              <div className="w-48 h-48 sm:w-56 sm:h-56 shrink-0 rounded-2xl overflow-hidden shadow-lg border border-gray-100 grayscale hover:grayscale-0 transition-all duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2000&auto=format&fit=crop" 
                  alt="Paritosh, Founder & Managing Director"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-1">Paritosh</h3>
                <p className="text-blue-600 font-medium text-sm uppercase tracking-widest mb-6">Founder & Managing Director</p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  With extensive experience navigating the complexities of the Indian economic landscape, Paritosh has established The India Watch as a premier partner for global enterprises. Under his leadership, the firm has delivered strategic clarity to hundreds of investors, family offices, and corporate leaders.
                </p>
                <Link href="#" className="inline-flex items-center text-gray-900 font-bold hover:text-blue-600 transition-colors">
                  Read Full Bio <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>

          {/* Firm Expertise Metrics */}
          <div className="bg-gray-50 rounded-3xl p-10 lg:p-16 border border-gray-100">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-10">
              The Engine Behind Our Intelligence
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12">
              <div>
                <div className="text-4xl font-serif font-bold text-blue-600 mb-2">15+</div>
                <div className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-2">Years of Expertise</div>
                <p className="text-gray-500 text-sm leading-relaxed">Deep-rooted understanding of India's shifting macroeconomic policies and market dynamics.</p>
              </div>
              
              <div>
                <div className="text-4xl font-serif font-bold text-blue-600 mb-2">50+</div>
                <div className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-2">Sector Analysts</div>
                <p className="text-gray-500 text-sm leading-relaxed">Dedicated industry specialists providing localized, granular intelligence across 40+ sectors.</p>
              </div>

              <div>
                <div className="text-4xl font-serif font-bold text-blue-600 mb-2">Proprietary</div>
                <div className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-2">Research Methodology</div>
                <p className="text-gray-500 text-sm leading-relaxed">A proven framework combining rigorous quantitative data with on-the-ground qualitative insights.</p>
              </div>

              <div>
                <div className="text-4xl font-serif font-bold text-blue-600 mb-2">Pan-India</div>
                <div className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-2">Operational Reach</div>
                <p className="text-gray-500 text-sm leading-relaxed">Extensive capabilities executing complex F2F interviews and feasibility studies in Tier 1 to Tier 3 cities.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
