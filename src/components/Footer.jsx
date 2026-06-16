"use client";
import { Mail, MapPin } from 'lucide-react';

const LinkedinIcon = ({ size = 20, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const TwitterIcon = ({ size = 20, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#051324', color: '#94A3B8', paddingTop: '4rem', paddingBottom: '2rem' }}>
      <div className="container">
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
          <div style={{ gridColumn: '1 / -1', maxWidth: '400px' }}>
            <div style={{ 
              fontFamily: 'var(--font-heading)', 
              fontSize: '1.5rem', 
              fontWeight: 800, 
              color: 'var(--color-white)',
              letterSpacing: '-0.02em',
              lineHeight: 1,
              marginBottom: '1rem'
            }}>
              THE INDIA <span style={{ color: 'var(--color-accent)' }}>WATCH</span>
            </div>
            <p className="body-regular" style={{ marginBottom: '1.5rem' }}>
              Strategic market research and business intelligence equipping leaders to navigate and win in India.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" style={{ color: '#94A3B8', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-accent)'} onMouseOut={(e) => e.currentTarget.style.color = '#94A3B8'}><LinkedinIcon size={20} /></a>
              <a href="#" style={{ color: '#94A3B8', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-accent)'} onMouseOut={(e) => e.currentTarget.style.color = '#94A3B8'}><TwitterIcon size={20} /></a>
              <a href="#" style={{ color: '#94A3B8', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-accent)'} onMouseOut={(e) => e.currentTarget.style.color = '#94A3B8'}><Mail size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 style={{ color: 'var(--color-white)', fontSize: '1rem', fontWeight: 600, marginBottom: '1.5rem' }}>Services</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['Market Research', 'Feasibility Studies', 'India Market Entry', 'Competitive Intelligence', 'Business Advisory'].map(item => (
                <li key={item}><a href="#" style={{ transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-white)'} onMouseOut={(e) => e.currentTarget.style.color = '#94A3B8'}>{item}</a></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 style={{ color: 'var(--color-white)', fontSize: '1rem', fontWeight: 600, marginBottom: '1.5rem' }}>Industries</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['Manufacturing', 'Healthcare', 'Technology', 'Logistics', 'Retail'].map(item => (
                <li key={item}><a href="#" style={{ transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-white)'} onMouseOut={(e) => e.currentTarget.style.color = '#94A3B8'}>{item}</a></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 style={{ color: 'var(--color-white)', fontSize: '1rem', fontWeight: 600, marginBottom: '1.5rem' }}>Contact</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                <MapPin size={18} style={{ flexShrink: 0, marginTop: '0.25rem' }} />
                <span>New Delhi, India<br/>110001</span>
              </li>
              <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <Mail size={18} style={{ flexShrink: 0 }} />
                <span>info@theindiawatch.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div style={{ 
          borderTop: '1px solid #1E293B', 
          paddingTop: '2rem', 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.875rem'
        }}>
          <div>&copy; {new Date().getFullYear()} The India Watch. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" style={{ transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-white)'} onMouseOut={(e) => e.currentTarget.style.color = '#94A3B8'}>Privacy Policy</a>
            <a href="#" style={{ transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-white)'} onMouseOut={(e) => e.currentTarget.style.color = '#94A3B8'}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
