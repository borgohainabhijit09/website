"use client";
import { ArrowRight, ArrowLeft } from 'lucide-react';

export default function ClientSuccessStories() {
  const stories = [
    {
      client: 'Healthcare Innovator Builds a Reputation for Sustainability',
      desc: 'Delve into how this healthcare innovator drove a sustainability mindset through comprehensive GHG measurement and strategic partnerships.',
      readMore: 'Read more'
    },
    {
      client: 'Warehouse Transformation with SAP WMDS: Enhancing Operational Efficiency',
      desc: 'Discover how Protiviti modernized warehouse operations for a large consumer goods manufacturer using SAP WMDS.',
      readMore: 'Read more'
    },
    {
      client: 'Transforming Procurement with SAP Business AI: Enabling Intelligent Decision Making',
      desc: 'Discover how a renowned global brand is using SAP Business AI to enhance their P2P and procurement decision making.',
      readMore: 'Read more'
    },
    {
      client: 'RISE WITH SAP: Enhancing the Customer Experience',
      desc: 'Find out how we enabled a major retail chain to dramatically improve customer satisfaction and supply chain efficiency.',
      readMore: 'Read more'
    }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-surface)', paddingTop: '0' }}>
      <div className="container">
        <h2 className="headline-medium" style={{ fontSize: '2rem', fontWeight: 400, color: 'var(--color-primary)', marginBottom: '3rem' }}>
          Featured client stories
        </h2>

        <div style={{ display: 'flex', gap: '1.5rem', overflowX: 'auto', paddingBottom: '2rem' }}>
          {stories.map((story, index) => (
            <div key={index} style={{
              flex: '0 0 auto',
              width: '320px',
              backgroundColor: 'var(--color-white)',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{
                height: '180px',
                backgroundImage: `url(/images/${index % 2 === 0 ? 'hero' : 'insight'}.png)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: '#CBD5E1'
              }}></div>
              
              <div style={{ padding: '1.5rem 0', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem', color: 'var(--color-primary)', fontWeight: 700, lineHeight: 1.3 }}>{story.client}</h3>
                <div style={{ color: 'var(--color-text-light)', fontSize: '0.75rem', marginBottom: '1rem', textTransform: 'uppercase' }}>5 min read</div>
                <p className="body-regular" style={{ color: 'var(--color-text-dark)', fontSize: '0.875rem', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                  {story.desc}
                </p>
                <div style={{ marginTop: 'auto' }}>
                  <a href="#" style={{ 
                    color: 'var(--color-secondary)', 
                    fontWeight: 600,
                    fontSize: '0.875rem'
                  }}>
                    {story.readMore}
                  </a>
                </div>
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
