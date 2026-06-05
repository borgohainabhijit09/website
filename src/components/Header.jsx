"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Mail, Phone, Calendar, ArrowRight, BarChart3, LineChart, MessageSquare, Compass, MapPin, FileText, Settings, Building2, ShoppingBag, Laptop, Briefcase, Landmark } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  
  // Mobile accordion state
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (modalOpen || mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [modalOpen, mobileMenuOpen]);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleModal = () => setModalOpen(!modalOpen);

  const services = [
    { name: "Business Research & Advisory", icon: <BarChart3 className="w-5 h-5 text-blue-600"/>, desc: "Deep dive analysis and strategic recommendations." },
    { name: "Market Research Services", icon: <LineChart className="w-5 h-5 text-blue-600"/>, desc: "Data-driven intelligence on market size and trends." },
    { name: "Strategic Communication", icon: <MessageSquare className="w-5 h-5 text-blue-600"/>, desc: "Positioning and messaging frameworks." },
    { name: "Feasibility Studies", icon: <Compass className="w-5 h-5 text-blue-600"/>, desc: "Assessment of project viability and risk." },
    { name: "India Market Entry", icon: <MapPin className="w-5 h-5 text-blue-600"/>, desc: "End-to-end strategy for foreign enterprises." },
    { name: "Business Plan & Pitch Deck", icon: <FileText className="w-5 h-5 text-blue-600"/>, desc: "Investor-grade documentation for fundraising." }
  ];

  const industries = [
    { name: "Manufacturing", icon: <Settings className="w-5 h-5 text-blue-600"/> },
    { name: "Infrastructure", icon: <Building2 className="w-5 h-5 text-blue-600"/> },
    { name: "Retail & Consumer", icon: <ShoppingBag className="w-5 h-5 text-blue-600"/> },
    { name: "ICT & Technology", icon: <Laptop className="w-5 h-5 text-blue-600"/> },
    { name: "Services Sector", icon: <Briefcase className="w-5 h-5 text-blue-600"/> },
    { name: "Public Policy", icon: <Landmark className="w-5 h-5 text-blue-600"/> }
  ];

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'}`}>
        {/* Top Header */}
        <div className={`bg-primary text-gray-300 text-xs py-2 transition-all duration-300 ${isScrolled ? 'hidden' : 'block'}`}>
          <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center">
            <div className="flex space-x-6">
              <a href="mailto:info@theindiawatch.com" className="flex items-center hover:text-white transition-colors">
                <Mail className="w-3 h-3 mr-2" /> info@theindiawatch.com
              </a>
              <a href="tel:+918076704267" className="flex items-center hover:text-white transition-colors">
                <Phone className="w-3 h-3 mr-2" /> +91 8076704267
              </a>
            </div>
            <div className="hidden sm:flex space-x-4">
              <Link href="#" className="hover:text-white transition-colors">Client Portal</Link>
              <Link href="#" className="hover:text-white transition-colors">Careers</Link>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className={`py-4 ${isScrolled ? 'py-4' : 'py-5'}`}>
          <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-2xl font-serif font-bold text-primary tracking-tight z-50 relative">
              The India Watch<span className="text-blue-600">.</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {/* Services Mega Menu */}
              <div 
                className="relative group"
                onMouseEnter={() => setActiveMenu('services')}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button className="flex items-center space-x-1 text-sm font-medium text-secondary hover:text-primary transition-colors py-2">
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <AnimatePresence>
                  {activeMenu === 'services' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white shadow-2xl border border-gray-100 rounded-xl p-8 grid grid-cols-2 gap-6"
                    >
                      {services.map((service, idx) => (
                        <Link key={idx} href="#" className="group flex items-start space-x-4 p-3 rounded-lg hover:bg-surface transition-colors">
                          <div className="mt-1 bg-blue-50 p-2 rounded shrink-0 group-hover:bg-blue-100 transition-colors">
                            {service.icon}
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-primary mb-1 group-hover:text-blue-600 transition-colors">{service.name}</h4>
                            <p className="text-xs text-secondary leading-relaxed">{service.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Industries Mega Menu */}
              <div 
                className="relative group"
                onMouseEnter={() => setActiveMenu('industries')}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button className="flex items-center space-x-1 text-sm font-medium text-secondary hover:text-primary transition-colors py-2">
                  <span>Industries</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <AnimatePresence>
                  {activeMenu === 'industries' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 w-[400px] bg-white shadow-2xl border border-gray-100 rounded-xl p-6 grid grid-cols-2 gap-2"
                    >
                      {industries.map((industry, idx) => (
                        <Link key={idx} href="#" className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-surface transition-colors">
                          <div className="bg-blue-50 p-2 rounded shrink-0 group-hover:bg-blue-100 transition-colors">
                            {industry.icon}
                          </div>
                          <span className="text-sm font-bold text-primary group-hover:text-blue-600 transition-colors">{industry.name}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="#" className="text-sm font-medium text-secondary hover:text-primary transition-colors">Insights</Link>
              <Link href="#" className="text-sm font-medium text-secondary hover:text-primary transition-colors">About Us</Link>
              
              <button onClick={toggleModal} className="bg-primary text-white px-6 py-2.5 rounded text-sm font-medium hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg transition-all">
                Schedule Consultation
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button className="lg:hidden text-primary z-50 relative" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: '-100%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '-100%' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 z-40 bg-white pt-24 pb-8 px-6 flex flex-col h-screen overflow-y-auto lg:hidden"
            >
              <div className="flex flex-col space-y-6 flex-grow">
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Navigation</h4>
                  <nav className="flex flex-col space-y-2 border-t border-gray-100 pt-2">
                    
                    {/* Mobile Services Accordion */}
                    <div className="border-b border-gray-100">
                      <button 
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)} 
                        className="w-full flex justify-between items-center py-4 text-2xl font-serif font-bold text-primary"
                      >
                        Services
                        <ChevronDown className={`w-6 h-6 transition-transform ${mobileServicesOpen ? 'rotate-180 text-blue-600' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col space-y-3 pb-6 pl-4 border-l-2 border-blue-100 ml-2">
                              {services.map((service, idx) => (
                                <Link key={idx} href="#" className="text-base font-medium text-secondary hover:text-primary">
                                  {service.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Mobile Industries Accordion */}
                    <div className="border-b border-gray-100">
                      <button 
                        onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)} 
                        className="w-full flex justify-between items-center py-4 text-2xl font-serif font-bold text-primary"
                      >
                        Industries
                        <ChevronDown className={`w-6 h-6 transition-transform ${mobileIndustriesOpen ? 'rotate-180 text-blue-600' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {mobileIndustriesOpen && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col space-y-3 pb-6 pl-4 border-l-2 border-blue-100 ml-2">
                              {industries.map((industry, idx) => (
                                <Link key={idx} href="#" className="text-base font-medium text-secondary hover:text-primary">
                                  {industry.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <Link href="#" className="py-4 text-2xl font-serif font-bold text-primary border-b border-gray-100">Insights</Link>
                    <Link href="#" className="py-4 text-2xl font-serif font-bold text-primary border-b border-gray-100">About Us</Link>
                  </nav>
                </div>

                <div className="pt-6 mt-auto">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Contact</h4>
                  <div className="flex flex-col space-y-3 text-secondary">
                    <a href="mailto:info@theindiawatch.com" className="flex items-center hover:text-primary transition-colors font-medium">
                      <Mail className="w-5 h-5 mr-3 text-blue-600" /> info@theindiawatch.com
                    </a>
                    <a href="tel:+918076704267" className="flex items-center hover:text-primary transition-colors font-medium">
                      <Phone className="w-5 h-5 mr-3 text-blue-600" /> +91 8076704267
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button onClick={() => { toggleModal(); setMobileMenuOpen(false); }} className="w-full bg-primary text-white px-6 py-4 rounded text-center text-lg font-medium hover:bg-primary/90 transition-colors shadow-lg">
                  Schedule Consultation
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Schedule Consultation Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={toggleModal}
              className="absolute inset-0 bg-primary/60 backdrop-blur-sm"
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col md:flex-row z-10"
            >
              <button 
                onClick={toggleModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-primary transition-colors z-20 bg-white/50 backdrop-blur rounded-full p-1"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="md:w-2/5 bg-surface p-8 flex flex-col justify-between hidden md:flex">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-primary mb-4">Strategic Clarity Awaits.</h3>
                  <p className="text-sm text-secondary leading-relaxed">Schedule a one-on-one session with our senior advisory team to discuss your market objectives.</p>
                </div>
                <div className="space-y-4 text-sm text-secondary">
                  <div className="flex items-center"><Calendar className="w-4 h-4 mr-3 text-blue-600"/> 30-Minute Intro</div>
                  <div className="flex items-center"><Phone className="w-4 h-4 mr-3 text-blue-600"/> Virtual or Phone</div>
                  <div className="flex items-center"><Mail className="w-4 h-4 mr-3 text-blue-600"/> info@theindiawatch.com</div>
                </div>
              </div>

              <div className="md:w-3/5 p-8 bg-white relative z-10">
                <h3 className="text-xl font-bold text-primary mb-6 md:hidden">Request Consultation</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-xs font-semibold text-secondary uppercase tracking-wider mb-2">Full Name</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-secondary uppercase tracking-wider mb-2">Corporate Email</label>
                    <input type="email" className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" placeholder="john@company.com" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-secondary uppercase tracking-wider mb-2">Company / Organization</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" placeholder="Acme Corp" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-secondary uppercase tracking-wider mb-2">Area of Interest</label>
                    <select className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-primary">
                      <option>Market Entry Strategy</option>
                      <option>Feasibility Study</option>
                      <option>Business Research</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <button className="w-full bg-primary text-white py-3 rounded font-medium hover:bg-primary/90 transition-colors flex justify-center items-center mt-6">
                    Submit Request <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
