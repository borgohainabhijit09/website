export default function FinalCTA() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-white)', textAlign: 'center' }}>
      <div className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 className="headline-large" style={{ color: 'var(--color-white)', marginBottom: '1.5rem' }}>Planning Your Next Move in India?</h2>
          <p className="body-large" style={{ color: '#E2E8F0', marginBottom: '3rem' }}>
            Talk with our research and advisory specialists to gain the strategic intelligence you need for confident decision-making.
          </p>
          <div className="flex" style={{ gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#book" className="btn-primary" style={{ padding: '1.25rem 2.5rem', fontSize: '1.125rem' }}>
              Book Consultation
            </a>
            <a href="#contact" className="btn-outline" style={{ padding: '1.25rem 2.5rem', fontSize: '1.125rem' }}>
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
