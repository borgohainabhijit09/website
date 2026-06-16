"use client";
import React from 'react';
import Link from 'next/link';

export default function InnerHero({ title, breadcrumbs }) {
  return (
    <section style={{
      position: 'relative',
      backgroundColor: '#04152e',
      padding: '8rem 0 5rem',
      overflow: 'hidden'
    }}>
      {/* Background Effect */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'url(/images/hero.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.15,
        mixBlendMode: 'overlay',
        pointerEvents: 'none'
      }}></div>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(180deg, rgba(4,21,46,0) 0%, #04152e 100%)',
        pointerEvents: 'none'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Breadcrumbs */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          marginBottom: '1.5rem',
          fontSize: '0.875rem',
          color: '#94a3b8'
        }}>
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              {crumb.href ? (
                <Link href={crumb.href} style={{ color: '#0ea5e9', textDecoration: 'none', transition: 'color 0.2s' }}>
                  {crumb.label}
                </Link>
              ) : (
                <span style={{ color: '#f8fafc' }}>{crumb.label}</span>
              )}
              {index < breadcrumbs.length - 1 && <span>/</span>}
            </React.Fragment>
          ))}
        </div>

        {/* Title */}
        <h1 className="headline-large" style={{ 
          fontSize: '3.5rem', 
          fontWeight: 700, 
          color: '#ffffff', 
          margin: 0, 
          letterSpacing: '-0.02em',
          lineHeight: 1.2
        }}>
          {title}
        </h1>
      </div>
    </section>
  );
}
