"use client";
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Only show once per session so we don't annoy the user constantly
    const seen = sessionStorage.getItem('leadPopupSeen');
    if (!seen) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('leadPopupSeen', 'true');
      }, 5000); // Show popup after 5 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    alert('Thank you for subscribing! We will send you our latest insights shortly.');
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(2, 8, 23, 0.7)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
          backdropFilter: 'blur(4px)'
        }}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              width: '100%',
              maxWidth: '450px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}
          >
            {/* Header */}
            <div style={{ backgroundColor: '#04152e', padding: '2rem 1.5rem', color: '#ffffff', textAlign: 'center', position: 'relative' }}>
              <button 
                onClick={() => setIsOpen(false)}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  border: 'none',
                  color: '#ffffff',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
                aria-label="Close"
              >
                <X size={18} />
              </button>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, margin: '0 0 0.5rem 0', letterSpacing: '-0.01em', color: '#ffffff' }}>
                Gain the India Advantage
              </h3>
              <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.5 }}>
                Subscribe to our newsletter for exclusive market intelligence and strategic insights.
              </p>
            </div>

            {/* Form */}
            <div style={{ padding: '2rem 1.5rem' }}>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '0.5rem' }}>Full Name *</label>
                  <input type="text" required placeholder="John Doe" style={{
                    width: '100%', padding: '0.75rem 1rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.95rem', boxSizing: 'border-box', outline: 'none', transition: 'border-color 0.2s'
                  }} 
                  onFocus={(e) => e.currentTarget.style.borderColor = '#0ea5e9'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#cbd5e1'}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '0.5rem' }}>Business Email *</label>
                  <input type="email" required placeholder="john@company.com" style={{
                    width: '100%', padding: '0.75rem 1rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.95rem', boxSizing: 'border-box', outline: 'none', transition: 'border-color 0.2s'
                  }} 
                  onFocus={(e) => e.currentTarget.style.borderColor = '#0ea5e9'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#cbd5e1'}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '0.5rem' }}>Company Name</label>
                  <input type="text" placeholder="Acme Corp" style={{
                    width: '100%', padding: '0.75rem 1rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.95rem', boxSizing: 'border-box', outline: 'none', transition: 'border-color 0.2s'
                  }} 
                  onFocus={(e) => e.currentTarget.style.borderColor = '#0ea5e9'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#cbd5e1'}
                  />
                </div>
                <button type="submit" style={{
                  backgroundColor: '#0ea5e9',
                  color: '#ffffff',
                  fontWeight: 600,
                  fontSize: '1rem',
                  padding: '0.875rem',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  marginTop: '0.5rem',
                  transition: 'background-color 0.2s, transform 0.1s',
                  boxShadow: '0 4px 6px -1px rgba(14, 165, 233, 0.2)'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0284c7'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0ea5e9'}
                onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
                onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  Get Insights
                </button>
                <p style={{ fontSize: '0.75rem', color: '#64748b', textAlign: 'center', margin: '0' }}>
                  We respect your privacy. No spam ever.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
