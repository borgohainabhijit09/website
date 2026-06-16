export default function AboutUs() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-surface)', padding: '6rem 0' }}>
      <div className="container" style={{ position: 'relative' }}>
        <div style={{ display: 'flex', minHeight: '500px' }}>
          {/* Image taking up left side */}
          <div style={{ 
            width: '65%', 
            backgroundImage: 'url(/images/hero.png)', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            backgroundColor: '#CBD5E1'
          }}></div>
          <div style={{ width: '35%' }}></div>
        </div>

        {/* Overlapping Box */}
        <div style={{
          position: 'absolute',
          top: '50%',
          right: '1.5rem',
          transform: 'translateY(-50%)',
          width: '45%',
          backgroundColor: 'var(--color-primary)',
          color: 'var(--color-white)',
          padding: '3rem',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
        }} className="overlap-box">
          <div style={{ fontSize: '0.875rem', fontWeight: 700, marginBottom: '1rem', letterSpacing: '0.05em' }}>
            About The India Watch
          </div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 600, lineHeight: 1.3 }}>
            Equipping leaders with clarity in a complex market.
          </h3>
          <p className="body-regular" style={{ color: '#E2E8F0', marginBottom: '2rem', fontSize: '0.875rem' }}>
            Our philosophy is rooted in rigorous data collection and profound local expertise. We do not just provide data; we deliver strategic advisory that bridges the gap between market intelligence and business execution. Whether you are validating a startup idea, evaluating a multi-million dollar expansion, or seeking competitive intelligence, our experts are your trusted partners in India.
          </p>
          <a href="#about" style={{
            display: 'inline-block',
            padding: '0.75rem 2rem',
            border: '1px solid var(--color-white)',
            color: 'var(--color-white)',
            fontSize: '0.875rem',
            fontWeight: 600,
            transition: 'background-color 0.3s'
          }}>
            Learn more
          </a>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 768px) {
          .container > div:first-child { flex-direction: column; }
          .container > div:first-child > div:first-child { width: 100% !important; height: 300px; }
          .container > div:first-child > div:last-child { display: none; }
          .overlap-box { position: relative !important; width: 100% !important; right: auto !important; transform: none !important; margin-top: -50px; }
        }
      `}} />
    </section>
  );
}
