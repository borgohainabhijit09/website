"use client";
import Link from 'next/link';
import { ArrowRight, Phone, Mail } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=2047&auto=format&fit=crop')" }}
      ></div>
      <div className="absolute inset-0 bg-primary/85 z-10"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Messaging */}
          <div>
            <p className="text-blue-400 text-sm font-bold uppercase tracking-widest mb-4">Start Your Engagement</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              Initiate a Strategic Dialogue.
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Connect with our senior advisory partners to explore how our intelligence can power your strategic decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 text-gray-300">
              <a href="tel:+918076704267" className="flex items-center hover:text-white transition-colors">
                <Phone className="w-5 h-5 mr-3 text-blue-400" /> +91 8076704267
              </a>
              <a href="mailto:info@theindiawatch.com" className="flex items-center hover:text-white transition-colors">
                <Mail className="w-5 h-5 mr-3 text-blue-400" /> info@theindiawatch.com
              </a>
            </div>
          </div>

          {/* Right: Form Card */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-6">Request a Consultation</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Your Full Name"
                className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 px-4 py-3 rounded focus:outline-none focus:border-blue-400 transition-colors"
              />
              <input
                type="email"
                placeholder="Corporate Email Address"
                className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 px-4 py-3 rounded focus:outline-none focus:border-blue-400 transition-colors"
              />
              <input
                type="text"
                placeholder="Company / Organization"
                className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 px-4 py-3 rounded focus:outline-none focus:border-blue-400 transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded font-semibold flex items-center justify-center transition-colors mt-2"
              >
                Submit Request <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </form>
            <p className="text-center text-gray-400 text-xs mt-4">Strictly confidential. No obligations.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
