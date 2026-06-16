"use client";
import React from 'react';
import { LineChart, Compass, Briefcase, FileText } from 'lucide-react';

export default function WhyChooseUs() {
  const competencies = [
    {
      title: 'Market Feasibility',
      desc: 'Comprehensive assessments to evaluate market entry, product viability, and competitive landscapes in India.',
      icon: <Compass size={24} color="#0ea5e9" />
    },
    {
      title: 'Go-To-Market Strategy',
      desc: 'Actionable blueprints for launching new products, expanding operations, and scaling revenue rapidly.',
      icon: <LineChart size={24} color="#0ea5e9" />
    },
    {
      title: 'B2B Intelligence',
      desc: 'Deep-dive primary and secondary research across complex supply chains and niche enterprise sectors.',
      icon: <Briefcase size={24} color="#0ea5e9" />
    },
    {
      title: 'Regulatory Advisory',
      desc: 'Strategic guidance on navigating India\'s dynamic compliance environment and FDI policies safely.',
      icon: <FileText size={24} color="#0ea5e9" />
    }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: '#04152e', color: '#ffffff', position: 'relative', overflow: 'hidden', padding: '8rem 0' }}>
      {/* Decorative background element */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '-10%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(14, 165, 233, 0.08) 0%, rgba(4, 21, 46, 0) 70%)',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="why-choose-us-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '6rem', alignItems: 'center' }}>
          
          {/* Left Column */}
          <div>
            <div style={{ 
              display: 'inline-block',
              padding: '0.25rem 0.75rem',
              backgroundColor: 'rgba(14, 165, 233, 0.1)',
              color: '#38bdf8',
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              borderRadius: '100px',
              marginBottom: '1.5rem',
              border: '1px solid rgba(14, 165, 233, 0.2)'
            }}>
              Why Partner With Us
            </div>
            
            <h2 style={{ 
              fontSize: '2.75rem', 
              color: '#ffffff', 
              fontWeight: 300, 
              lineHeight: 1.2, 
              letterSpacing: '-0.02em',
              marginBottom: '1.5rem'
            }}>
              Empowering your <br />
              <span style={{ fontWeight: 600, color: '#0ea5e9' }}>Strategic Vision</span>
            </h2>
            
            <div style={{ width: '60px', height: '4px', backgroundColor: '#0ea5e9', marginBottom: '2rem', borderRadius: '2px' }}></div>
            
            <p style={{ color: '#cbd5e1', fontSize: '1.15rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              We bring unparalleled local expertise and a rigorous research methodology to help you navigate the complexities of the Indian market. Our insights are built on robust data, deep industry knowledge, and a commitment to your strategic success.
            </p>
            
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                'Extensive local network and ground-level intelligence', 
                'Tailored advisory aligned with your strategic goals', 
                'Actionable recommendations, not just data points', 
                'Proven track record with global enterprises'
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ marginTop: '0.25rem', color: '#0ea5e9' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span style={{ fontSize: '1.05rem', color: '#f8fafc', fontWeight: 400 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Right Column: Competencies Grid instead of Stats */}
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            {competencies.map((comp, index) => (
              <div key={index} className="competency-card" style={{
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                padding: '2rem',
                transition: 'all 0.3s ease',
                cursor: 'default'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'rgba(14, 165, 233, 0.3)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
              }}
              >
                <div style={{ 
                  width: '50px', 
                  height: '50px', 
                  borderRadius: '10px', 
                  backgroundColor: 'rgba(14, 165, 233, 0.1)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginBottom: '1.5rem'
                }}>
                  {comp.icon}
                </div>
                <h3 style={{ fontSize: '1.2rem', color: '#ffffff', fontWeight: 600, marginBottom: '1rem', letterSpacing: '0.01em' }}>
                  {comp.title}
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                  {comp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 992px) {
          .why-choose-us-grid {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
          }
        }
      `}} />
    </section>
  );
}
