"use client";
import React, { useRef } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export default function ClientSuccessStories() {
  const scrollContainerRef = useRef(null);

  const stories = [
    {
      client: 'Healthcare Innovator Builds a Reputation for Sustainability',
      desc: 'Delve into how this healthcare innovator drove a sustainability mindset through comprehensive GHG measurement and strategic partnerships.',
      readMore: 'Read more',
      readTime: '5 min read'
    },
    {
      client: 'Warehouse Transformation: Enhancing Operational Efficiency',
      desc: 'Discover how we modernized warehouse operations for a large consumer goods manufacturer using automated data systems.',
      readMore: 'Read more',
      readTime: '6 min read'
    },
    {
      client: 'Transforming Procurement: Enabling Intelligent Decision Making',
      desc: 'Discover how a renowned global brand is using our AI framework to enhance their P2P and procurement decision making.',
      readMore: 'Read more',
      readTime: '4 min read'
    },
    {
      client: 'Retail Expansion: Enhancing the Customer Experience',
      desc: 'Find out how we enabled a major retail chain to dramatically improve customer satisfaction and supply chain efficiency.',
      readMore: 'Read more',
      readTime: '8 min read'
    },
    {
      client: 'FMCG Market Entry Strategy: Navigating the Complexities',
      desc: 'A comprehensive study of how we successfully launched a new product line for a global FMCG giant in the Indian market.',
      readMore: 'Read more',
      readTime: '7 min read'
    }
  ];

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 360; // Card width + gap
      scrollContainerRef.current.scrollBy({ 
        left: direction === 'left' ? -scrollAmount : scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <section className="section-padding" style={{ backgroundColor: '#ffffff', padding: '6rem 0' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
          <h2 className="headline-medium" style={{ fontSize: '2.5rem', fontWeight: 300, color: '#0f172a', margin: 0, letterSpacing: '-0.02em' }}>
            Featured client <span style={{ fontWeight: 600, color: '#0ea5e9' }}>stories</span>
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

        <div ref={scrollContainerRef} className="client-stories-carousel" style={{ 
          display: 'flex', 
          gap: '2rem', 
          overflowX: 'auto', 
          paddingBottom: '2.5rem',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          paddingLeft: '0.25rem',
          paddingRight: '0.25rem',
          paddingTop: '0.5rem',
          scrollBehavior: 'smooth'
        }}>
          {stories.map((story, index) => (
            <div key={index} className="story-card" style={{
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
                backgroundImage: `url(/images/${index % 2 === 0 ? 'hero' : 'insight'}.png)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: '#0f172a'
              }}></div>
              
              <div style={{ padding: '1.75rem 1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ color: '#64748b', fontSize: '0.8rem', fontWeight: 500, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  {story.readTime}
                </div>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '1rem', color: '#0f172a', fontWeight: 700, lineHeight: 1.4, minHeight: '3.2rem' }}>
                  {story.client}
                </h3>
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>
                  {story.desc}
                </p>
                <div style={{ marginTop: 'auto', color: '#2563eb', fontWeight: 600, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  {story.readMore} <ArrowRight size={14} />
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
            {[1,2,3,4].map(i => (
              <div key={i} style={{ 
                width: i === 1 ? '24px' : '8px', 
                height: '8px', 
                borderRadius: '4px', 
                backgroundColor: i === 1 ? '#ea580c' : '#cbd5e1',
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
        .client-stories-carousel::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}
