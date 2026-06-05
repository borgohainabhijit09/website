import Link from 'next/link';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0A192F] text-white pt-24 pb-12 border-t border-[#1E3A5F]">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Top Section: Newsletter & Brand */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div>
            <Link href="/" className="text-3xl font-serif font-bold text-white tracking-tight mb-6 inline-block">
              The India Watch<span className="text-blue-500">.</span>
            </Link>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              Empowering global and domestic enterprises with actionable market intelligence and strategic advisory for the Indian subcontinent.
            </p>
          </div>
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <h4 className="text-xl font-bold mb-2">Subscribe to our Insights</h4>
            <p className="text-gray-400 text-sm mb-6">Get the latest market intelligence delivered to your inbox.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Corporate Email Address" 
                className="bg-transparent border-b border-gray-500 text-white px-2 py-3 w-full focus:outline-none focus:border-blue-500 transition-colors placeholder-gray-500"
              />
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded transition-colors flex items-center whitespace-nowrap">
                Subscribe <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </form>
          </div>
        </div>

        {/* Middle Section: Links & Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-gray-300 uppercase tracking-widest mb-6">Capabilities</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Business Research & Advisory</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Market Research Services</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Strategic Communication</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Feasibility Studies</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">India Market Entry</Link></li>
            </ul>
          </div>

          {/* Insights */}
          <div>
            <h4 className="text-sm font-bold text-gray-300 uppercase tracking-widest mb-6">Intellectual Capital</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Latest Reports</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Market Analysis</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Media Mentions</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-gray-300 uppercase tracking-widest mb-6">Contact Us</h4>
            <div className="grid sm:grid-cols-2 gap-8">
              <address className="not-italic text-gray-300 space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-blue-500 mr-3 mt-1 shrink-0" />
                  <p>Vipul Business Park, Central Park II Rd,<br/>Vipul World, Sector 48,<br/>Gurugram, Haryana 122018</p>
                </div>
              </address>
              <div className="space-y-4 text-gray-300">
                <a href="mailto:info@theindiawatch.com" className="flex items-center hover:text-white transition-colors">
                  <Mail className="w-5 h-5 text-blue-500 mr-3 shrink-0" />
                  info@theindiawatch.com
                </a>
                <a href="tel:+918076704267" className="flex items-center hover:text-white transition-colors">
                  <Phone className="w-5 h-5 text-blue-500 mr-3 shrink-0" />
                  +91 8076704267
                </a>
                <div className="flex space-x-4 pt-2 ml-8">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <span className="sr-only">Twitter</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} The India Watch. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
