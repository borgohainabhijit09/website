"use client";
import React, { useRef } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export default function FeaturedInsights() {
  const scrollContainerRef = useRef(null);

  const insights = [
    { title: 'Indian EV Market Outlook: Opportunities', tag: 'WHITE PAPER', readTime: '5 min read', desc: 'A detailed breakdown of the supply chain, regulatory landscape, and domestic competition in the emerging electric vehicle sector in India.' },
    { title: 'CIO Insights Report 2026', tag: 'SURVEY', readTime: '8 min read', desc: 'Understanding how CIOs are navigating digital transformation, AI adoption, and cybersecurity in the Indian enterprise landscape.' },
    { title: 'Healthcare Opportunities Post-Pandemic', tag: 'WHITE PAPER', readTime: '6 min read', desc: 'Analyzing the shift towards digital health platforms, telemedicine adoption, and the growth of Tier 2 city healthcare infrastructure.' },
    { title: 'Consumer Behavior Shifts in Tier 2 Cities', tag: 'INSIGHT PAPER', readTime: '4 min read', desc: 'How rising disposable incomes and digital penetration are reshaping retail strategies for FMCG brands across India.' },
    { title: 'The Future of Fintech Regulations', tag: 'REPORT', readTime: '7 min read', desc: 'Navigating the new compliance mandates and open banking frameworks issued by the RBI for digital lending.' }
  ];

  const [activeDot, setActiveDot] = React.useState(0);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const cardWidth = 372; // 340px width + 32px gap
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveDot(newIndex);
    }
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 372;
      scrollContainerRef.current.scrollBy({ 
        left: direction === 'left' ? -scrollAmount : scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <section className="section-padding" style={{ backgroundColor: '#f1f5f9', padding: '6rem 0' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
          <h2 className="headline-medium" style={{ fontSize: '2.5rem', fontWeight: 300, color: '#0f172a', margin: 0, letterSpacing: '-0.02em' }}>
            Featured insights
          </h2>
          <a href="#" style={{ 
            color: '#2563eb', 
            fontWeight: 600, 
            fontSize: '1rem', 
            textDecoration: 'none', 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.25rem' 
          }}
          onMouseOver={(e) => e.currentTarget.style.color = '#1d4ed8'}
          onMouseOut={(e) => e.currentTarget.style.color = '#2563eb'}
          >
            View All <ArrowRight size={16} />
          </a>
        </div>

        <div ref={scrollContainerRef} onScroll={handleScroll} className="insights-carousel" style={{ 
          display: 'flex', 
          gap: '2rem', 
          overflowX: 'auto', 
          paddingBottom: '2.5rem',
          scrollbarWidth: 'none', /* Firefox */
          msOverflowStyle: 'none', /* IE 10+ */
          paddingLeft: '0.25rem',
          paddingRight: '0.25rem',
          paddingTop: '0.5rem',
          scrollBehavior: 'smooth'
        }}>
          {insights.map((insight, index) => (
            <div key={index} className="insight-card" style={{
              flex: '0 0 auto',
              width: '340px',
              backgroundColor: '#ffffff',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer',
              border: '1px solid #e2e8f0'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)';
            }}
            >
              <div style={{
                height: '190px',
                backgroundImage: 'url(/images/insight.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                backgroundColor: '#0f172a'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  backgroundColor: '#ea580c',
                  color: '#ffffff',
                  padding: '0.35rem 0.85rem',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  borderRadius: '4px',
                  letterSpacing: '0.05em',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}>
                  {insight.tag}
                </div>
              </div>
              <div style={{ padding: '1.75rem 1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ color: '#64748b', fontSize: '0.8rem', fontWeight: 500, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  {insight.readTime}
                </div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#0f172a', lineHeight: 1.4, minHeight: '3.3rem', fontWeight: 700 }}>
                  {insight.title}
                </h3>
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, margin: 0, flexGrow: 1 }}>
                  {insight.desc}
                </p>
                <div style={{ marginTop: '1.5rem', color: '#2563eb', fontWeight: 600, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  Read Article <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation Controls */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.5rem', marginTop: '1rem' }}>
          <button 
            onClick={() => scroll('left')}
            style={{ 
              color: '#64748b', 
              backgroundColor: '#ffffff', 
              border: '1px solid #cbd5e1', 
              borderRadius: '50%', 
              width: '40px', 
              height: '40px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#f1f5f9'; e.currentTarget.style.color = '#0f172a'; }}
            onMouseOut={(e) => { e.currentTarget.style.backgroundColor = '#ffffff'; e.currentTarget.style.color = '#64748b'; }}
          >
            <ArrowLeft size={20} />
          </button>
          
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {insights.map((_, i) => (
              <div key={i} style={{ 
                width: i === activeDot ? '24px' : '8px', 
                height: '8px', 
                borderRadius: '4px', 
                backgroundColor: i === activeDot ? '#ea580c' : '#cbd5e1',
                transition: 'width 0.3s ease, background-color 0.3s ease'
              }}></div>
            ))}
          </div>
          
          <button 
            onClick={() => scroll('right')}
            style={{ 
              color: '#64748b', 
              backgroundColor: '#ffffff', 
              border: '1px solid #cbd5e1', 
              borderRadius: '50%', 
              width: '40px', 
              height: '40px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#f1f5f9'; e.currentTarget.style.color = '#0f172a'; }}
            onMouseOut={(e) => { e.currentTarget.style.backgroundColor = '#ffffff'; e.currentTarget.style.color = '#64748b'; }}
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .insights-carousel::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}
