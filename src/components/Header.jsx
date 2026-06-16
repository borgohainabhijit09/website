"use client";
import React, { useState, useRef } from 'react';
import { Menu, Search, ArrowRight } from 'lucide-react';

const menuData = {
  'Solutions': {
    description: "Transform your business with our comprehensive suite of consulting services tailored for the modern enterprise.",
    columns: [
      {
        title: "Strategy",
        items: ["Business Transformation", "Digital Strategy", "Market Entry", "M&A Advisory"]
      },
      {
        title: "Operations",
        items: ["Supply Chain Optimization", "Process Engineering", "Cost Reduction", "Organizational Design"]
      },
      {
        title: "Technology",
        items: ["Cloud Migration", "Data & Analytics", "Cybersecurity", "Enterprise Architecture"]
      }
    ],
    featured: {
      title: "Featured Service",
      desc: "Accelerate your AI transformation journey with our new GenAI framework.",
      action: "Learn More"
    }
  },
  'Industries': {
    description: "Deep expertise across key sectors driving the global economy forward.",
    columns: [
      {
        title: "Financial Services",
        items: ["Banking & Markets", "Insurance", "Wealth Management", "FinTech"]
      },
      {
        title: "Healthcare",
        items: ["Providers", "Life Sciences", "Digital Health", "Medical Devices"]
      },
      {
        title: "Consumer & Retail",
        items: ["E-commerce", "FMCG", "Retail Operations", "Consumer Goods"]
      }
    ],
    featured: {
      title: "Industry Insights",
      desc: "Read our latest 2024 report on the future of healthcare technology and patient care.",
      action: "Read Report"
    }
  },
  'About Us': {
    description: "Discover who we are, our core values, and the impact we create globally.",
    columns: [
      {
        title: "Our Firm",
        items: ["Leadership Team", "Global Locations", "Our History", "Corporate Governance"]
      },
      {
        title: "Our Impact",
        items: ["Sustainability (ESG)", "Diversity & Inclusion", "Community Engagement", "Client Success Stories"]
      }
    ],
    featured: {
      title: "Join Our Mission",
      desc: "We are committed to delivering exceptional value to our clients and society.",
      action: "Our Vision"
    }
  },
  'Careers': {
    description: "Build a rewarding career solving the world's most complex challenges.",
    columns: [
      {
        title: "Opportunities",
        items: ["Experienced Professionals", "Students & Graduates", "Internships", "Alumni Network"]
      },
      {
        title: "Life at the Firm",
        items: ["Culture & Values", "Learning & Development", "Benefits & Wellbeing", "Career Paths"]
      }
    ],
    featured: {
      title: "Hot Roles",
      desc: "We are actively hiring for Data Scientists and Strategy Consultants globally.",
      action: "View Openings"
    }
  }
};

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
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
        <button className="show-mobile" style={{ display: 'none', backgroundColor: 'transparent', color: '#ffffff', border: 'none', cursor: 'pointer' }}>
          <Menu size={28} />
        </button>
      </div>

      {/* Mega Menu Dropdown */}
      <div 
        className="mega-menu-container"
        style={{
          position: 'absolute',
          top: '80px',
          left: 0,
          right: 0,
          backgroundColor: '#ffffff',
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
          borderTop: '1px solid #e2e8f0',
          opacity: activeMenu ? 1 : 0,
          visibility: activeMenu ? 'visible' : 'hidden',
          transform: activeMenu ? 'translateY(0)' : 'translateY(-10px)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          zIndex: 49,
          pointerEvents: activeMenu ? 'auto' : 'none',
        }}
        onMouseEnter={() => {
          if (activeMenu) handleMouseEnter(activeMenu);
        }}
      >
        {activeMenu && menuData[activeMenu] && (
          <div className="container" style={{ display: 'flex', padding: '3rem 1.5rem', gap: '4rem' }}>
            {/* Intro / Description */}
            <div style={{ flex: '0 0 250px' }}>
              <h3 style={{ 
                fontFamily: 'var(--font-sans)', 
                fontSize: '1.5rem', 
                color: '#04152e', 
                marginBottom: '1rem',
                fontWeight: 600
              }}>
                {activeMenu}
              </h3>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6 }}>
                {menuData[activeMenu].description}
              </p>
            </div>

            {/* Links Columns */}
            <div style={{ flex: 1, display: 'flex', gap: '3rem' }}>
              {menuData[activeMenu].columns.map((col, idx) => (
                <div key={idx} style={{ flex: 1 }}>
                  <h4 style={{ 
                    fontSize: '1rem', 
                    color: '#04152e', 
                    fontWeight: 600, 
                    marginBottom: '1.25rem',
                    paddingBottom: '0.5rem',
                    borderBottom: '2px solid #e2e8f0'
                  }}>
                    {col.title}
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {col.items.map((item, itemIdx) => (
                      <li key={itemIdx}>
                        <a href="#" className="mega-menu-link" style={{ 
                          color: '#475569', 
                          textDecoration: 'none', 
                          fontSize: '0.9rem',
                          transition: 'color 0.2s ease',
                          display: 'inline-block'
                        }}>
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Featured Section */}
            <div style={{ flex: '0 0 300px', backgroundColor: '#f8fafc', padding: '2rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <span style={{ 
                display: 'inline-block', 
                fontSize: '0.75rem', 
                fontWeight: 700, 
                textTransform: 'uppercase', 
                letterSpacing: '0.05em', 
                color: '#0ea5e9',
                marginBottom: '0.75rem'
              }}>
                {menuData[activeMenu].featured.title}
              </span>
              <p style={{ color: '#0f172a', fontWeight: 500, fontSize: '1rem', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                {menuData[activeMenu].featured.desc}
              </p>
              <a href="#" style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.5rem', 
                color: '#0ea5e9', 
                fontWeight: 600, 
                fontSize: '0.9rem',
                textDecoration: 'none' 
              }}>
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
          color: #0ea5e9 !important;
          transform: translateX(4px);
        }
      `}} />
    </header>
  );
}
