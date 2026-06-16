"use client";
import { Factory, HeartPulse, ShoppingCart, MonitorPlay, Truck, HardHat, Zap, Package, GraduationCap, Building } from 'lucide-react';

export default function IndustriesWeServe() {
  const industries = [
    { name: 'Manufacturing', icon: <Factory size={24} strokeWidth={1.5} /> },
    { name: 'Healthcare', icon: <HeartPulse size={24} strokeWidth={1.5} /> },
    { name: 'Retail', icon: <ShoppingCart size={24} strokeWidth={1.5} /> },
    { name: 'Technology', icon: <MonitorPlay size={24} strokeWidth={1.5} /> },
    { name: 'Logistics', icon: <Truck size={24} strokeWidth={1.5} /> },
    { name: 'Infrastructure', icon: <HardHat size={24} strokeWidth={1.5} /> },
    { name: 'Renewable Energy', icon: <Zap size={24} strokeWidth={1.5} /> },
    { name: 'FMCG', icon: <Package size={24} strokeWidth={1.5} /> },
    { name: 'Education', icon: <GraduationCap size={24} strokeWidth={1.5} /> },
    { name: 'Financial Services', icon: <Building size={24} strokeWidth={1.5} /> }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <h2 className="headline-medium">Industries We Serve</h2>
          <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--color-accent)', margin: '0 auto' }}></div>
        </div>

        <div className="grid" style={{ 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '1px',
          backgroundColor: '#E2E8F0',
          border: '1px solid #E2E8F0'
        }}>
          {industries.map((industry, index) => (
            <div key={index} style={{
              backgroundColor: 'var(--color-white)',
              padding: '2.5rem 1rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              transition: 'background-color 0.3s ease, color 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-primary)';
              e.currentTarget.style.color = 'var(--color-white)';
              e.currentTarget.children[0].style.color = 'var(--color-accent)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-white)';
              e.currentTarget.style.color = 'var(--color-text-dark)';
              e.currentTarget.children[0].style.color = 'var(--color-primary)';
            }}
            >
              <div style={{ color: 'var(--color-primary)', marginBottom: '1rem', transition: 'color 0.3s ease' }}>
                {industry.icon}
              </div>
              <h3 style={{ fontSize: '1.125rem', margin: 0, fontWeight: 600 }}>{industry.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
