"use client";
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, Search, ArrowRight } from 'lucide-react';

const createSlug = (text) => {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
};

const menuData = {
  'About Us': {
    description: "Discover who we are, our core values, and the leadership team driving our vision forward.",
    columns: [
      {
        title: "About Us & Leadership",
        items: ["Company Overview", "Leadership Profiles", "Vision & Mission"]
      }
    ],
    featured: {
      title: "Our Mission",
      desc: "We are committed to delivering exceptional value to our clients and equipping them with actionable intelligence.",
      action: "Learn More"
    }
  },
  'Services': {
    description: "Transform your business with our comprehensive suite of research and advisory services tailored for the Indian market.",
    columns: [
      {
        title: "Services Module",
        items: [
          "Business Research & Advisory", 
          "Market Research Services", 
          "Strategic Communication Services", 
          "Feasibility Studies", 
          "India Market Entry Services", 
          "Business Plans & Pitch Decks"
        ]
      }
    ],
    featured: {
      title: "Featured Service",
      desc: "Navigate complex regulations and launch successfully with our India Market Entry Services.",
      action: "Explore Service"
    }
  },
  'Industries': {
    description: "Deep expertise and actionable intelligence across key sectors driving the Indian economy forward.",
    columns: [
      {
        title: "Industries Module",
        items: ["Manufacturing", "Infrastructure", "Retail", "ICT", "Services", "Public Policy"]
      }
    ],
    featured: {
      title: "Industry Focus",
      desc: "Discover how the manufacturing landscape in India is transforming under new policies.",
      action: "Read Analysis"
    }
  },
  'Insights & Research': {
    description: "Actionable market intelligence, reports, and analysis to help you navigate and win in India.",
    columns: [
      {
        title: "Insights & Research Module",
        items: ["Market Analysis", "Research Reports", "Publications", "Industry Insights"]
      }
    ],
    featured: {
      title: "Latest Report",
      desc: "The 2024 India Market Entry Guide for foreign investors and multinational corporations.",
      action: "Download Guide"
    }
  }
};

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState(null);
  const timeoutRef = useRef(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (menu) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150); // slight delay to prevent flickering
  };

  return (
    <header 
      style={{ 
        backgroundColor: scrolled ? '#04152e' : 'transparent', 
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid transparent',
        position: 'fixed',
        left: 0,
        right: 0,
        top: 0,
        zIndex: 50,
        transition: 'background-color 0.3s ease, border-bottom 0.3s ease'
      }}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px', position: 'relative' }}>
        {/* Logo Section */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', zIndex: 51 }}>
          <div style={{ 
            fontFamily: 'var(--font-sans)', 
            fontSize: '2.25rem', 
            fontWeight: 400, 
            color: '#ffffff',
            letterSpacing: '0.01em',
            lineHeight: 1,
            display: 'flex',
            alignItems: 'flex-start'
          }}>
            the india watch<sup style={{fontSize: '0.75rem', marginTop: '0.25rem', marginLeft: '0.1rem', color: '#cbd5e1'}}>®</sup>
          </div>
          <div style={{
            color: '#ffffff',
            fontSize: '0.8rem',
            fontStyle: 'italic',
            marginTop: '0.2rem',
            letterSpacing: '0.02em',
            opacity: 0.9
          }}>
            Global Business Consulting
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden-mobile" style={{ display: 'flex', gap: '3rem', alignItems: 'center', height: '100%', zIndex: 51 }}>
          {Object.keys(menuData).map((item) => (
            <div 
              key={item} 
              style={{ height: '100%', display: 'flex', alignItems: 'center' }}
              onMouseEnter={() => handleMouseEnter(item)}
            >
              <a href={`#${item.toLowerCase().replace(' ', '-')}`} style={{ 
                fontSize: '1rem', 
                fontWeight: 500, 
                color: activeMenu === item ? '#cbd5e1' : '#ffffff',
                transition: 'color 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                textDecoration: 'none',
                height: '100%'
              }}>
                {item} 
                <span style={{ 
                  fontSize: '0.7rem', 
                  opacity: 0.8,
                  transform: activeMenu === item ? 'rotate(90deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s ease'
                }}>▸</span>
              </a>
            </div>
          ))}
          
          <div style={{ display: 'flex', alignItems: 'center', height: '100%', marginLeft: '1rem' }}>
            {/* Search Icon */}
            <button style={{ 
              color: '#ffffff', 
              backgroundColor: 'transparent',
              padding: '0 1.5rem',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              border: 'none'
            }}>
              <Search size={20} strokeWidth={1.5} />
            </button>
            
            {/* Divider */}
            <div style={{ width: '1px', height: '32px', backgroundColor: 'rgba(255, 255, 255, 0.3)' }}></div>
            
            {/* Flag Icon */}
            <button style={{ 
              backgroundColor: 'transparent',
              padding: '0 0 0 1.5rem',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              border: 'none'
            }}>
              <img src="https://flagcdn.com/w40/in.png" alt="India Flag" style={{ width: '28px', borderRadius: '2px', objectFit: 'cover' }} />
            </button>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="show-mobile" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ display: 'none', backgroundColor: 'transparent', color: '#ffffff', border: 'none', cursor: 'pointer', zIndex: 51 }}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mega Menu Dropdown */}
      <div 
        className="mega-menu-container"
        style={{
          position: 'absolute',
          top: '80px',
          left: '50%',
          width: 'calc(100% - 2rem)',
          maxWidth: '1100px',
          backgroundColor: 'rgba(2, 8, 23, 0.98)',
          backdropFilter: 'blur(16px)',
          boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.5)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          borderTop: 'none',
          borderRadius: '0 0 16px 16px',
          opacity: activeMenu ? 1 : 0,
          visibility: activeMenu ? 'visible' : 'hidden',
          transform: activeMenu ? 'translate(-50%, 0)' : 'translate(-50%, -10px)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          zIndex: 49,
          pointerEvents: activeMenu ? 'auto' : 'none',
        }}
        onMouseEnter={() => {
          if (activeMenu) handleMouseEnter(activeMenu);
        }}
      >
        {activeMenu && menuData[activeMenu] && (
          <div style={{ display: 'flex', padding: '3rem 2.5rem', gap: '3rem' }}>
            {/* Intro / Description */}
            <div style={{ flex: '0 0 260px' }}>
              <h3 style={{ 
                fontFamily: 'var(--font-sans)', 
                fontSize: '1.75rem', 
                color: '#ffffff', 
                marginBottom: '1rem',
                fontWeight: 300,
                letterSpacing: '-0.02em'
              }}>
                {activeMenu}
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6 }}>
                {menuData[activeMenu].description}
              </p>
            </div>

            {/* Links Columns */}
            <div style={{ flex: 1, display: 'flex', gap: '3rem' }}>
              {menuData[activeMenu].columns.map((col, idx) => (
                <div key={idx} style={{ flex: 1 }}>
                  <h4 style={{ 
                    fontSize: '0.85rem', 
                    color: '#ffffff', 
                    fontWeight: 600, 
                    marginBottom: '1.25rem',
                    paddingBottom: '0.75rem',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    {col.title}
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {col.items.map((item, itemIdx) => {
                      const sectionSlug = createSlug(activeMenu);
                      const itemSlug = createSlug(item);
                      const href = `/${sectionSlug}/${itemSlug}`;
                      
                      return (
                        <li key={itemIdx}>
                          <Link href={href} className="mega-menu-link" style={{ 
                            color: '#cbd5e1', 
                            textDecoration: 'none', 
                            fontSize: '0.95rem',
                            transition: 'all 0.2s ease',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                          }}>
                            <span style={{ 
                              width: '4px', 
                              height: '4px', 
                              borderRadius: '50%', 
                              backgroundColor: '#0ea5e9',
                              opacity: 0.5,
                              transition: 'all 0.2s ease'
                            }} className="menu-dot"></span>
                            {item}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>

            {/* Featured Section */}
            <div style={{ 
              flex: '0 0 320px', 
              backgroundColor: 'rgba(255, 255, 255, 0.03)', 
              padding: '2rem', 
              borderRadius: '12px', 
              border: '1px solid rgba(255, 255, 255, 0.05)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ position: 'absolute', top: 0, right: 0, width: '150px', height: '150px', background: 'radial-gradient(circle, rgba(14, 165, 233, 0.1) 0%, rgba(0, 0, 0, 0) 70%)', borderRadius: '50%' }}></div>
              <span style={{ 
                display: 'inline-flex', 
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.75rem', 
                fontWeight: 600, 
                textTransform: 'uppercase', 
                letterSpacing: '0.05em', 
                color: '#0ea5e9',
                marginBottom: '1rem'
              }}>
                <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#0ea5e9' }}></span>
                {menuData[activeMenu].featured.title}
              </span>
              <p style={{ color: '#f8fafc', fontWeight: 300, fontSize: '1.1rem', lineHeight: 1.5, marginBottom: '2rem', position: 'relative', zIndex: 1 }}>
                {menuData[activeMenu].featured.desc}
              </p>
              <a href="#" style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.5rem', 
                color: '#ffffff', 
                backgroundColor: '#0ea5e9',
                padding: '0.75rem 1.5rem',
                borderRadius: '100px',
                fontWeight: 600, 
                fontSize: '0.9rem',
                textDecoration: 'none',
                transition: 'background-color 0.2s',
                position: 'relative',
                zIndex: 1
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0284c7'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0ea5e9'}
              >
                {menuData[activeMenu].featured.action} <ArrowRight size={16} />
              </a>
            </div>
          </div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 992px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
          .mega-menu-container { display: none !important; }
        }
        
        .mega-menu-link:hover {
          color: #ffffff !important;
          transform: translateX(6px);
        }
        .mega-menu-link:hover .menu-dot {
          opacity: 1 !important;
          transform: scale(1.5);
          box-shadow: 0 0 8px #0ea5e9;
        }
      `}} />

      {/* Mobile Menu Overlay */}
      <div style={{
        position: 'fixed',
        top: '80px',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(4, 21, 46, 0.98)',
        backdropFilter: 'blur(16px)',
        zIndex: 48,
        padding: '2rem 1.5rem',
        overflowY: 'auto',
        opacity: mobileMenuOpen ? 1 : 0,
        visibility: mobileMenuOpen ? 'visible' : 'hidden',
        transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        pointerEvents: mobileMenuOpen ? 'auto' : 'none'
      }}>
        {Object.keys(menuData).map((item) => {
          const isExpanded = expandedMobileMenu === item;
          return (
            <div key={item} style={{ marginBottom: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <button 
                onClick={() => setExpandedMobileMenu(isExpanded ? null : item)}
                style={{ 
                  width: '100%', 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center', 
                  backgroundColor: 'transparent', 
                  border: 'none', 
                  padding: '1.25rem 0',
                  color: isExpanded ? '#0ea5e9' : '#ffffff', 
                  fontSize: '1.25rem',
                  fontWeight: 400,
                  cursor: 'pointer',
                  transition: 'color 0.2s ease'
                }}
              >
                {item}
                <span style={{ 
                  transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease',
                  fontSize: '0.8rem',
                  opacity: 0.7
                }}>
                  ▼
                </span>
              </button>
              
              <div style={{ 
                maxHeight: isExpanded ? '500px' : '0', 
                overflow: 'hidden', 
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                opacity: isExpanded ? 1 : 0,
                paddingLeft: '0.5rem'
              }}>
                <ul style={{ listStyle: 'none', padding: '0 0 1.5rem 0', margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {menuData[item].columns.map(col => col.items.map(subItem => {
                    const sectionSlug = createSlug(item);
                    const itemSlug = createSlug(subItem);
                    const href = `/${sectionSlug}/${itemSlug}`;
                    
                    return (
                      <li key={subItem}>
                        <Link href={href} style={{ 
                          color: '#cbd5e1', 
                          textDecoration: 'none', 
                          fontSize: '1rem', 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '0.5rem' 
                        }} onClick={() => setMobileMenuOpen(false)}>
                          <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#0ea5e9', opacity: 0.5 }}></span>
                          {subItem}
                        </Link>
                      </li>
                    );
                  }))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </header>
  );
}
