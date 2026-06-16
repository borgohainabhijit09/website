"use client";
import React from 'react';

export default function Services() {
  const services = [
    { title: 'MARKET RESEARCH', subtitle: 'Unlock the full potential of your business', desc: 'Deep-dive qualitative and quantitative research tailored to the Indian market landscape.', link: 'Learn more' },
    { title: 'FEASIBILITY STUDIES', subtitle: 'Unlocking Opportunity', desc: 'Comprehensive assessments of project viability, risk factors, and ROI in India.', link: 'Read more' },
    { title: 'INDIA MARKET ENTRY', subtitle: 'Unlocking productivity for all generations', desc: 'End-to-end strategic guidance for navigating regulatory and competitive challenges.', link: 'Learn more' }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: '#ffffff', position: 'relative', overflow: 'hidden', padding: '6rem 0' }}>
      {/* Subtle curved background overlay to match the image */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '65%',
        backgroundColor: '#f1f5f9',
        borderBottomRightRadius: '100vw 15vw',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="grid" style={{ 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '3rem' 
        }}>
          {services.map((service, index) => (
            <div key={index} className="service-card" style={{
              display: 'flex',
              gap: '1.5rem',
              alignItems: 'flex-start',
            }}>
              {/* Thumbnail Container */}
              <div style={{ 
                flexShrink: 0, 
                width: '140px', 
                height: '190px', 
                backgroundImage: 'url(/images/insight.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: '#0f172a',
                boxShadow: '0 12px 24px -6px rgba(0, 0, 0, 0.25), 0 4px 10px -2px rgba(0, 0, 0, 0.1)',
                borderRadius: '2px',
                border: '1px solid rgba(255,255,255,0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 12px 24px -6px rgba(0, 0, 0, 0.25), 0 4px 10px -2px rgba(0, 0, 0, 0.1)';
              }}
              ></div>
              
              {/* Text Container */}
              <div style={{ display: 'flex', flexDirection: 'column', marginTop: '0.25rem', height: '100%' }}>
                <h3 style={{ 
                  fontSize: '0.85rem', 
                  color: '#ea580c',
                  fontWeight: 700, 
                  letterSpacing: '0.02em',
                  marginBottom: '0.5rem', 
                  textTransform: 'uppercase' 
                }}>
                  {service.title}
                </h3>
                <h4 style={{ 
                  fontSize: '1.15rem', 
                  color: '#0f172a',
                  fontWeight: 700, 
                  marginBottom: '1rem', 
                  lineHeight: 1.3 
                }}>
                  {service.subtitle}
                </h4>
                <p style={{ 
                  color: '#475569', 
                  fontSize: '0.95rem', 
                  marginBottom: '1.5rem', 
                  lineHeight: 1.5,
                  flexGrow: 1
                }}>
                  {service.desc}
                </p>
                <a href="#" style={{ 
                  color: '#2563eb',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  transition: 'color 0.2s ease',
                  marginTop: 'auto'
                }}
                onMouseOver={(e) => e.currentTarget.style.color = '#1d4ed8'}
                onMouseOut={(e) => e.currentTarget.style.color = '#2563eb'}
                >
                  {service.link}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
