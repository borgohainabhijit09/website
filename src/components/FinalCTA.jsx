"use client";
import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="section-padding" style={{ 
      background: 'linear-gradient(135deg, #04152e 0%, #020817 100%)', 
      color: '#ffffff', 
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '8rem 0'
    }}>
      {/* Decorative Glows */}
      <div style={{ position: 'absolute', top: '0', left: '20%', width: '60%', height: '100%', background: 'radial-gradient(circle, rgba(14, 165, 233, 0.1) 0%, rgba(0, 0, 0, 0) 60%)', zIndex: 0 }} />
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '3.5rem', color: '#ffffff', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '1.5rem', lineHeight: 1.1 }}>
            Planning Your Next <br/> Move in <span style={{ fontWeight: 600, color: '#0ea5e9' }}>India?</span>
          </h2>
          <p style={{ color: '#cbd5e1', fontSize: '1.25rem', marginBottom: '3.5rem', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto 3.5rem auto' }}>
            Talk with our research and advisory specialists to gain the strategic intelligence you need for confident decision-making.
          </p>
          <div className="flex" style={{ gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#book" style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: '#0ea5e9',
              color: '#ffffff',
              padding: '1rem 2.5rem',
              borderRadius: '100px',
              fontSize: '1.1rem',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(14, 165, 233, 0.3)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(14, 165, 233, 0.4)';
              e.currentTarget.style.backgroundColor = '#0284c7';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(14, 165, 233, 0.3)';
              e.currentTarget.style.backgroundColor = '#0ea5e9';
            }}
            >
              Book Consultation <ArrowRight size={20} />
            </a>
            <a href="#contact" style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'transparent',
              color: '#ffffff',
              padding: '1rem 2.5rem',
              borderRadius: '100px',
              fontSize: '1.1rem',
              fontWeight: 600,
              textDecoration: 'none',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
            }}
            >
              <Mail size={20} /> Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
