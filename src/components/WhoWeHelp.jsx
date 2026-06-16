"use client";
import React from 'react';
import { Target, TrendingUp } from 'lucide-react';

export default function WhoWeHelp() {
  return (
    <section className="section-padding" style={{ backgroundColor: '#f8fafc', padding: '8rem 0', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative Background Shape */}
      <div style={{ 
        position: 'absolute', 
        top: '-10%', 
        right: '-5%', 
        width: '45%', 
        height: '120%', 
        background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.05) 0%, rgba(4, 21, 46, 0.02) 100%)', 
        borderRadius: '40% 0 0 40%', 
        zIndex: 0, 
        transform: 'skewX(-15deg)' 
      }} />
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="who-we-help-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          
          {/* Left Column: Headline */}
          <div className="animate-fade-in">
            <div style={{ 
              display: 'inline-block',
              padding: '0.25rem 0.75rem',
              backgroundColor: 'rgba(4, 21, 46, 0.05)',
              color: '#04152e',
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              borderRadius: '100px',
              marginBottom: '1.5rem'
            }}>
              Our Mission
            </div>
            <h2 style={{ 
              fontSize: '3.25rem', 
              color: '#04152e', 
              fontWeight: 300, 
              lineHeight: 1.15, 
              letterSpacing: '-0.02em',
              marginBottom: '1.5rem'
            }}>
              Market intelligence to enable you to <span style={{ fontWeight: 600, color: '#0ea5e9' }}>grow</span> and <span style={{ fontWeight: 600, color: '#0ea5e9' }}>operate</span> with confidence.
            </h2>
            <div style={{ width: '80px', height: '4px', backgroundColor: '#0ea5e9', borderRadius: '2px', marginBottom: '2rem' }}></div>
          </div>

          {/* Right Column: Description & Action */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p style={{ 
              fontSize: '1.25rem', 
              color: '#475569', 
              fontWeight: 400, 
              lineHeight: 1.6, 
              marginBottom: '3rem' 
            }}>
              By <span style={{ color: '#04152e', fontWeight: 600 }}>researching</span> your markets, listening to you and understanding your strategic needs, we continuously <span style={{ color: '#04152e', fontWeight: 600 }}>collaborate</span> to <span style={{ color: '#04152e', fontWeight: 600 }}>deliver</span> the very best insights and solutions to meet your objectives.
            </p>

            <div className="features-flex" style={{ display: 'flex', gap: '2.5rem', marginBottom: '3.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ padding: '0.75rem', backgroundColor: '#ffffff', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05)' }}>
                  <Target size={26} color="#0ea5e9" />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.1rem', color: '#04152e', fontWeight: 600 }}>Precision</h4>
                  <p style={{ margin: '0.25rem 0 0', fontSize: '0.95rem', color: '#64748b' }}>Data-driven accuracy</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ padding: '0.75rem', backgroundColor: '#ffffff', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05)' }}>
                  <TrendingUp size={26} color="#0ea5e9" />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.1rem', color: '#04152e', fontWeight: 600 }}>Growth</h4>
                  <p style={{ margin: '0.25rem 0 0', fontSize: '0.95rem', color: '#64748b' }}>Actionable strategies</p>
                </div>
              </div>
            </div>

            <a href="#about" style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              padding: '1rem 2.5rem',
              backgroundColor: '#04152e',
              color: '#ffffff',
              fontWeight: 600,
              fontSize: '1rem',
              borderRadius: '4px',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 10px rgba(4, 21, 46, 0.2)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#0ea5e9';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 15px rgba(14, 165, 233, 0.3)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#04152e';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 10px rgba(4, 21, 46, 0.2)';
            }}
            >
              Discover Who We Are
            </a>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 992px) {
          .who-we-help-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
        @media (max-width: 576px) {
          .features-flex {
            flex-direction: column !important;
            gap: 1.5rem !important;
          }
        }
      `}} />
    </section>
  );
}
