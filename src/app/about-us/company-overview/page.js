import React from 'react';
import InnerHero from '@/components/InnerHero';

export const metadata = {
  title: 'Company Overview | The India Watch',
  description: 'The India Watch is an independent Market Research and Feasibility Study advisory helping Corporates, Entrepreneurs, and Investors make informed decisions.',
};

export default function CompanyOverview() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '#' },
    { label: 'Company Overview' }
  ];

  return (
    <main>
      <style dangerouslySetInnerHTML={{__html: `
        .hover-lift {
          transition: transform 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-5px) !important;
        }
      `}} />
      <InnerHero title="Company Overview" breadcrumbs={breadcrumbs} />
      
      <section className="section-padding" style={{ backgroundColor: '#ffffff', padding: '6rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', maxWidth: '1000px', margin: '0 auto' }}>
            
            {/* Introduction Section */}
            <div>
              <div style={{ padding: '3rem', backgroundColor: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0', borderLeft: '6px solid #0ea5e9', position: 'relative', overflow: 'hidden' }}>
                <h2 className="headline-medium" style={{ fontSize: '2.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
                  Your Trusted Market Research Partner
                </h2>
                <p style={{ color: '#475569', fontSize: '1.15rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                  The India Watch is an independent Market Research and Feasibility Study advisory. Through our customized research solutions, we help Corporates, Entrepreneurs, Sovereign Agencies, Family Offices, and institutional investors make informed business decisions, reduce risks, and enhance profitability.
                </p>
                <p style={{ color: '#475569', fontSize: '1.15rem', lineHeight: 1.8 }}>
                  We possess in-depth expertise across a diverse range of sectors, including Manufacturing, Infrastructure & Real Estate, Consumer Retail, Technology, E-commerce, F&B, Hospitality & Wellness, Lifestyle, Agribusiness, and Shipping & Logistics.
                </p>
              </div>
            </div>

            {/* Thought Leadership Section */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '3rem', alignItems: 'center' }}>
              <div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                  Industry Thought Leadership
                </h3>
                <div style={{ width: '60px', height: '4px', backgroundColor: '#ea580c', marginBottom: '1.5rem', borderRadius: '2px' }}></div>
                <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1rem' }}>
                  Beyond our advisory services, The India Watch plays a proactive role as a prominent industry thought leader. 
                </p>
                <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.8 }}>
                  We continuously engage with top media houses, news agencies, and news wires, sharing our valuable insights, data points, and macroeconomic forecasts. Our research is frequently published in leading publications like HT Media.
                </p>
              </div>
              <div style={{ 
                height: '350px', 
                borderRadius: '16px', 
                backgroundImage: 'url(/images/insight.png)', 
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
              }}></div>
            </div>

            {/* Solutions Section */}
            <div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#0f172a', marginBottom: '2rem', textAlign: 'center', letterSpacing: '-0.02em' }}>
                Tailor-Made Solutions
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {[
                  { title: 'Market Research', desc: 'We know the nuances of the Indian market and help you design and execute quantitative, qualitative, and secondary research solutions.' },
                  { title: 'Feasibility Studies', desc: 'Detailed study and analysis conducted for business owners and investors to test the viability of a new business or product idea.' },
                  { title: 'Market Entry', desc: 'Comprehensive services including market intelligence, customer assessment, and trade delegation to ensure a successful launch.' },
                ].map((item, idx) => (
                  <div key={idx} className="hover-lift" style={{
                    padding: '2rem',
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                    cursor: 'default'
                  }}>
                    <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0ea5e9', marginBottom: '1rem' }}>{item.title}</h4>
                    <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Global Reach Section */}
            <div style={{ marginTop: '2rem' }}>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#0f172a', marginBottom: '2rem', textAlign: 'center', letterSpacing: '-0.02em' }}>
                Global Reach & Operations
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                
                <div className="hover-lift" style={{ 
                  padding: '2.5rem', 
                  backgroundColor: '#04152e', 
                  borderRadius: '16px', 
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  border: '1px solid #1e293b',
                  color: '#ffffff',
                  cursor: 'default',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.5rem'
                }}>
                  <div style={{ fontSize: '3rem', color: '#0ea5e9' }}>🏢</div>
                  <div>
                    <h4 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.75rem' }}>Corporate Headquarters</h4>
                    <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.6, margin: 0 }}>
                      702, Vipul Business Park<br/>
                      Sector 48, Gurgaon<br/>
                      Haryana, India - 122001
                    </p>
                  </div>
                </div>

                <div className="hover-lift" style={{ 
                  padding: '2.5rem', 
                  backgroundColor: '#ffffff', 
                  borderRadius: '16px', 
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                  border: '1px solid #e2e8f0',
                  color: '#0f172a',
                  cursor: 'default',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.5rem'
                }}>
                  <div style={{ fontSize: '3rem' }}>🌏</div>
                  <div>
                    <h4 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem' }}>International Presence</h4>
                    <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6, margin: 0 }}>
                      While our core expertise lies in the Indian market, we have extensive experience and operational reach across the Middle East, particularly the UAE. We act as the bridge for international firms entering India.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
