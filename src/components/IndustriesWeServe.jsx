"use client";
import React from 'react';
import { Factory, HeartPulse, ShoppingCart, MonitorPlay, Truck, HardHat, Zap, Package, GraduationCap, Building } from 'lucide-react';

export default function IndustriesWeServe() {
  const industries = [
    { name: 'Manufacturing', icon: <Factory size={32} strokeWidth={1.5} /> },
    { name: 'Healthcare', icon: <HeartPulse size={32} strokeWidth={1.5} /> },
    { name: 'Retail', icon: <ShoppingCart size={32} strokeWidth={1.5} /> },
    { name: 'Technology', icon: <MonitorPlay size={32} strokeWidth={1.5} /> },
    { name: 'Logistics', icon: <Truck size={32} strokeWidth={1.5} /> },
    { name: 'Infrastructure', icon: <HardHat size={32} strokeWidth={1.5} /> },
    { name: 'Energy', icon: <Zap size={32} strokeWidth={1.5} /> },
    { name: 'FMCG', icon: <Package size={32} strokeWidth={1.5} /> },
    { name: 'Education', icon: <GraduationCap size={32} strokeWidth={1.5} /> },
    { name: 'Financial', icon: <Building size={32} strokeWidth={1.5} /> }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: '#04152e', padding: '8rem 0', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative glows */}
      <div style={{ position: 'absolute', top: '-20%', left: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, rgba(4, 21, 46, 0) 70%)', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(234, 88, 12, 0.15) 0%, rgba(4, 21, 46, 0) 70%)', zIndex: 0 }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <div style={{ 
            display: 'inline-block',
            padding: '0.25rem 0.75rem',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            color: '#cbd5e1',
            fontSize: '0.8rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            borderRadius: '100px',
            marginBottom: '1.25rem',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            Our Expertise
          </div>
          <h2 style={{ fontSize: '3rem', color: '#ffffff', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
            Industries We <span style={{ fontWeight: 600, color: '#0ea5e9' }}>Serve</span>
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
            Deep sector knowledge driving actionable insights across key pillars of the global economy.
          </p>
        </div>

        <div className="industries-grid" style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '1.5rem',
        }}>
          {industries.map((industry, index) => (
            <div key={index} className="industry-card" style={{
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              padding: '3rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.borderColor = 'rgba(14, 165, 233, 0.3)';
              e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(14, 165, 233, 0.2)';
              e.currentTarget.children[0].style.color = '#ea580c';
              e.currentTarget.children[0].style.transform = 'scale(1.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.children[0].style.color = '#0ea5e9';
              e.currentTarget.children[0].style.transform = 'scale(1)';
            }}
            >
              <div style={{ color: '#0ea5e9', marginBottom: '1.5rem', transition: 'all 0.3s ease' }}>
                {industry.icon}
              </div>
              <h3 style={{ fontSize: '1.15rem', margin: 0, fontWeight: 600, color: '#f8fafc', letterSpacing: '0.01em' }}>
                {industry.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
