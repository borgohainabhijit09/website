"use client";
import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-section" style={{ 
      position: 'relative', 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center',
      backgroundColor: '#020c1b', 
      color: 'var(--color-white)',
      overflow: 'hidden',
    }}>
      {/* Background Image Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'url(/images/hero.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 0
      }} />
      {/* Dark gradient overlay matching the header */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(90deg, #04152e 0%, rgba(4, 21, 46, 0.8) 45%, rgba(4, 21, 46, 0.1) 100%)',
        zIndex: 1
      }} />
      
      <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <div style={{ maxWidth: '800px', marginTop: '4rem' }} className="animate-fade-in-up">
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center',
            padding: '0.4rem 1.25rem', 
            backgroundColor: 'rgba(14, 165, 233, 0.15)', 
            border: '1px solid rgba(14, 165, 233, 0.3)',
            borderRadius: '100px',
            fontSize: '0.85rem',
            fontWeight: 600,
            letterSpacing: '0.05em',
            color: '#38bdf8',
            marginBottom: '2rem',
            backdropFilter: 'blur(4px)'
          }}>
            REDEFINING INTELLIGENCE <ArrowRight size={14} style={{ marginLeft: '0.5rem' }}/>
          </div>
          <h1 className="headline-large" style={{ 
            fontWeight: 300, 
            letterSpacing: '-0.02em', 
            marginBottom: '1.5rem', 
            lineHeight: 1.1,
            fontSize: '4.5rem',
            color: '#ffffff'
          }}>
            India Market Intelligence <br />
            <span style={{ fontWeight: 600, color: '#0ea5e9' }}>For Confident Decisions</span>
          </h1>
          <p style={{
            fontSize: '1.25rem',
            lineHeight: 1.6,
            color: '#cbd5e1',
            marginBottom: '3rem',
            maxWidth: '650px',
            fontWeight: 400
          }}>
            We deliver actionable insights and strategic consulting to help modern enterprises navigate and win in the complex Indian market.
          </p>
          <div className="flex" style={{ gap: '1rem', alignItems: 'center' }}>
            <a href="#services" style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#0ea5e9',
              color: '#ffffff',
              padding: '1rem 2.5rem', 
              fontSize: '1rem', 
              fontWeight: 600,
              borderRadius: '4px',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
              boxShadow: '0 4px 14px 0 rgba(14, 165, 233, 0.39)'
            }}
            onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#0284c7'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseOut={(e) => { e.currentTarget.style.backgroundColor = '#0ea5e9'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Our Solutions
            </a>
            <a href="#about" style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'transparent',
              border: '1px solid rgba(255,255,255,0.4)',
              color: '#ffffff',
              padding: '1rem 2.5rem', 
              fontSize: '1rem', 
              fontWeight: 600,
              borderRadius: '4px',
              textDecoration: 'none',
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = '#ffffff'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Who We Are
            </a>
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @media (max-width: 768px) {
          .hero-section .headline-large {
            font-size: 3rem !important;
          }
        }
      `}} />
    </section>
  );
}
