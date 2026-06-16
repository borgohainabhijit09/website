"use client";
import { ArrowRight, ArrowLeft } from 'lucide-react';

export default function FeaturedInsights() {
  const insights = [
    { title: 'Indian EV Market Outlook: Opportunities', tag: 'WHITE PAPER', readTime: '5 min read', desc: 'A detailed breakdown of the supply chain, regulatory landscape, and domestic competition in the emerging electric vehicle sector in India.' },
    { title: 'CIO Insights Report 2026', tag: 'SURVEY', readTime: '8 min read', desc: 'Understanding how CIOs are navigating digital transformation, AI adoption, and cybersecurity in the Indian enterprise landscape.' },
    { title: 'Healthcare Opportunities Post-Pandemic', tag: 'WHITE PAPER', readTime: '6 min read', desc: 'Analyzing the shift towards digital health platforms, telemedicine adoption, and the growth of Tier 2 city healthcare infrastructure.' },
    { title: 'Consumer Behavior Shifts in Tier 2 Cities', tag: 'INSIGHT PAPER', readTime: '4 min read', desc: 'How rising disposable incomes and digital penetration are reshaping retail strategies for FMCG brands across India.' }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="container">
        <h2 className="headline-medium" style={{ fontSize: '2rem', fontWeight: 400, color: 'var(--color-primary)', marginBottom: '3rem' }}>
          Featured insights
        </h2>

        <div style={{ display: 'flex', gap: '1.5rem', overflowX: 'auto', paddingBottom: '2rem' }}>
          {insights.map((insight, index) => (
            <div key={index} style={{
              flex: '0 0 auto',
              width: '320px',
              backgroundColor: 'var(--color-white)',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative'
            }}>
              <div style={{
                height: '180px',
                backgroundImage: 'url(/images/insight.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: 0,
                  backgroundColor: 'var(--color-white)',
                  color: '#EA580C',
                  padding: '0.25rem 0.75rem',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  border: '1px solid #EA580C',
                  borderLeft: 'none'
                }}>
                  {insight.tag}
                </div>
              </div>
              <div style={{ padding: '1.5rem 1rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.125rem', marginBottom: '1rem', color: 'var(--color-primary)', lineHeight: 1.3, minHeight: '3rem' }}>{insight.title}</h3>
                <div style={{ color: 'var(--color-text-light)', fontSize: '0.75rem', marginBottom: '1rem' }}>{insight.readTime}</div>
                <p className="body-regular" style={{ color: 'var(--color-text-dark)', fontSize: '0.875rem', lineHeight: 1.5, margin: 0 }}>
                  {insight.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginTop: '1rem' }}>
          <button style={{ color: '#94A3B8', backgroundColor: 'transparent' }}><ArrowLeft size={24} /></button>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {[1,2,3,4,5,6].map(i => (
              <div key={i} style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: i === 1 ? 'var(--color-primary)' : '#CBD5E1' }}></div>
            ))}
          </div>
          <button style={{ color: 'var(--color-primary)', backgroundColor: 'transparent' }}><ArrowRight size={24} /></button>
        </div>
      </div>
    </section>
  );
}
