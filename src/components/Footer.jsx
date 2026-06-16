"use client";
import React from 'react';
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
    <footer style={{ backgroundColor: '#020817', color: '#94a3b8', paddingTop: '6rem', paddingBottom: '2rem', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', justifyContent: 'space-between', marginBottom: '5rem' }}>
          
          {/* Brand Column */}
          <div style={{ flex: '1 1 300px', maxWidth: '400px' }}>
            <div style={{ 
              fontSize: '1.5rem', 
              fontWeight: 300, 
              color: '#ffffff',
              letterSpacing: '0.05em',
              marginBottom: '1.5rem'
            }}>
              the india <span style={{ color: '#0ea5e9', fontWeight: 600 }}>watch</span><sup style={{fontSize: '0.5rem', marginLeft: '0.1rem', color: '#64748b'}}>®</sup>
            </div>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2rem', color: '#64748b' }}>
              Strategic market research and business intelligence equipping leaders to navigate and win in India's complex markets.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" style={{ 
                display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)', color: '#94a3b8', transition: 'all 0.3s ease'
              }} onMouseOver={(e) => { e.currentTarget.style.color = '#ffffff'; e.currentTarget.style.borderColor = '#0ea5e9'; e.currentTarget.style.backgroundColor = 'rgba(14, 165, 233, 0.1)'; }} onMouseOut={(e) => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.backgroundColor = 'transparent'; }}><LinkedinIcon size={16} /></a>
              <a href="#" style={{ 
                display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)', color: '#94a3b8', transition: 'all 0.3s ease'
              }} onMouseOver={(e) => { e.currentTarget.style.color = '#ffffff'; e.currentTarget.style.borderColor = '#0ea5e9'; e.currentTarget.style.backgroundColor = 'rgba(14, 165, 233, 0.1)'; }} onMouseOut={(e) => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.backgroundColor = 'transparent'; }}><TwitterIcon size={16} /></a>
            </div>
          </div>
          
          {/* Links Columns */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', flex: '2 1 400px' }}>
            <div style={{ flex: '1 1 150px' }}>
              <h4 style={{ color: '#ffffff', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>Services</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {['Market Research', 'Feasibility Studies', 'India Market Entry', 'Business Advisory'].map(item => (
                  <li key={item}><a href="#" style={{ color: '#64748b', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#0ea5e9'} onMouseOut={(e) => e.currentTarget.style.color = '#64748b'}>{item}</a></li>
                ))}
              </ul>
            </div>
            
            <div style={{ flex: '1 1 150px' }}>
              <h4 style={{ color: '#ffffff', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>Industries</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {['Manufacturing', 'Healthcare', 'Technology', 'Logistics'].map(item => (
                  <li key={item}><a href="#" style={{ color: '#64748b', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#0ea5e9'} onMouseOut={(e) => e.currentTarget.style.color = '#64748b'}>{item}</a></li>
                ))}
              </ul>
            </div>

            <div style={{ flex: '1 1 200px' }}>
              <h4 style={{ color: '#ffffff', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>Contact</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <MapPin size={18} color="#0ea5e9" style={{ flexShrink: 0, marginTop: '0.1rem' }} />
                  <span style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: 1.5 }}>New Delhi, India<br/>110001</span>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  <Mail size={18} color="#0ea5e9" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '0.95rem', color: '#64748b' }}>info@theindiawatch.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div style={{ 
          borderTop: '1px solid rgba(255, 255, 255, 0.05)', 
          paddingTop: '2rem', 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem',
          fontSize: '0.85rem',
          color: '#64748b'
        }}>
          <div>&copy; {new Date().getFullYear()} The India Watch. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <a href="#" style={{ color: '#64748b', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#ffffff'} onMouseOut={(e) => e.currentTarget.style.color = '#64748b'}>Privacy Policy</a>
            <a href="#" style={{ color: '#64748b', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#ffffff'} onMouseOut={(e) => e.currentTarget.style.color = '#64748b'}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
