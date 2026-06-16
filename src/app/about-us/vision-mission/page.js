import React from 'react';
import InnerHero from '@/components/InnerHero';
import { Target, Compass, Award, Users, Lightbulb, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Vision & Mission | The India Watch',
  description: 'Discover the vision, mission, and core values driving The India Watch forward.',
};

export default function VisionMission() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '#' },
    { label: 'Vision & Mission' }
  ];

  const values = [
    { icon: <ShieldCheck size={32} />, title: 'Integrity', desc: 'We uphold the highest standards of honesty and transparency in all our research and advisory services.' },
    { icon: <Lightbulb size={32} />, title: 'Actionable Intelligence', desc: 'We deliver data that is not just accurate, but directly translates into strategic business moves.' },
    { icon: <Users size={32} />, title: 'Client Success', desc: 'Our ultimate metric of success is the growth, profitability, and market leadership of our clients.' },
    { icon: <Award size={32} />, title: 'Excellence', desc: 'We are committed to delivering exceptional value through rigorous methodologies and deep sector expertise.' }
  ];

  return (
    <main>
      <style dangerouslySetInnerHTML={{__html: `
        .hover-lift-shadow {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-lift-shadow:hover {
          transform: translateY(-8px) !important;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1) !important;
        }
      `}} />
      <InnerHero title="Vision & Mission" breadcrumbs={breadcrumbs} />
      
      {/* Vision & Mission Split Section */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff', padding: '6rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            
            {/* Vision Card */}
            <div className="hover-lift-shadow" style={{
              padding: '4rem 3rem',
              backgroundColor: '#0f172a',
              borderRadius: '24px',
              color: '#ffffff',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'default'
            }}>
              <div style={{ position: 'absolute', top: '-20px', right: '-20px', opacity: 0.05, transform: 'rotate(15deg)' }}>
                <Compass size={250} />
              </div>
              <div style={{ position: 'relative', zIndex: 10 }}>
                <div style={{ 
                  width: '64px', height: '64px', borderRadius: '16px', backgroundColor: 'rgba(14, 165, 233, 0.1)', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0ea5e9', marginBottom: '2rem' 
                }}>
                  <Compass size={32} />
                </div>
                <h2 style={{ color: '#ffffff', fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>Our Vision</h2>
                <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1rem' }}>
                  To be the most trusted and indispensable market intelligence partner for global and domestic enterprises navigating the complexities and opportunities of the Indian market.
                </p>
                <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: 1.8 }}>
                  We aim to establish The India Watch not just as an advisory firm, but as a proactive industry thought leader whose macroeconomic forecasts and data-driven insights continuously shape the future of business in India.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="hover-lift-shadow" style={{
              padding: '4rem 3rem',
              backgroundColor: '#ea580c',
              borderRadius: '24px',
              color: '#ffffff',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'default'
            }}>
              <div style={{ position: 'absolute', top: '-20px', right: '-20px', opacity: 0.1, transform: 'rotate(-15deg)' }}>
                <Target size={250} />
              </div>
              <div style={{ position: 'relative', zIndex: 10 }}>
                <div style={{ 
                  width: '64px', height: '64px', borderRadius: '16px', backgroundColor: 'rgba(255, 255, 255, 0.2)', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', marginBottom: '2rem' 
                }}>
                  <Target size={32} />
                </div>
                <h2 style={{ color: '#ffffff', fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>Our Mission</h2>
                <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1rem' }}>
                  We are committed to delivering exceptional value to our clients and equipping them with actionable intelligence, robust feasibility studies, and bespoke advisory.
                </p>
                <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.1rem', lineHeight: 1.8 }}>
                  Through our tailor-made market research solutions, our daily mission is to empower business owners, investors, and start-ups to rigorously test the viability of their ideas, systematically reduce operational risks, and sustainably enhance profitability.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section-padding" style={{ backgroundColor: '#f8fafc', padding: '6rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '700px', margin: '0 auto 4rem' }}>
            <h2 className="headline-medium" style={{ fontSize: '2.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              Our Core Values
            </h2>
            <p style={{ color: '#64748b', fontSize: '1.1rem', lineHeight: 1.6 }}>
              The foundational principles that guide our research, shape our culture, and define our relationships with clients.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {values.map((val, idx) => (
              <div key={idx} className="hover-lift-shadow" style={{
                backgroundColor: '#ffffff',
                padding: '2.5rem 2rem',
                borderRadius: '16px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                cursor: 'default',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
              }}
              >
                <div style={{ 
                  width: '70px', height: '70px', borderRadius: '50%', backgroundColor: '#f0f9ff', 
                  color: '#0ea5e9', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem'
                }}>
                  {val.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>{val.title}</h3>
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
