import { Compass, Search, LineChart, Lightbulb } from 'lucide-react';

export default function ResearchMethodology() {
  const steps = [
    { num: '01', title: 'Discover', icon: <Compass size={32} />, desc: 'We align with your strategic objectives, defining the scope and key intelligence questions.' },
    { num: '02', title: 'Research', icon: <Search size={32} />, desc: 'Rigorous data collection leveraging primary interviews and extensive secondary sources.' },
    { num: '03', title: 'Analyze', icon: <LineChart size={32} />, desc: 'Advanced modeling and analytical frameworks to extract actionable patterns from the data.' },
    { num: '04', title: 'Recommend', icon: <Lightbulb size={32} />, desc: 'Strategic advisory and clear, actionable roadmaps for confident decision-making.' }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 className="headline-medium">Our Research Methodology</h2>
          <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--color-accent)', margin: '0 auto', marginBottom: '1.5rem' }}></div>
          <p className="body-large" style={{ maxWidth: '800px', margin: '0 auto' }}>
            A rigorous, structured approach ensuring accuracy, depth, and actionable strategic value in every engagement.
          </p>
        </div>

        <div style={{ position: 'relative', padding: '2rem 0' }}>
          {/* Connecting Line */}
          <div style={{
            position: 'absolute',
            top: '5rem',
            left: '0',
            right: '0',
            height: '2px',
            backgroundColor: '#E2E8F0',
            zIndex: 0
          }} className="hidden-mobile"></div>

          <div className="grid" style={{ 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '2rem',
            position: 'relative',
            zIndex: 1
          }}>
            {steps.map((step, index) => (
              <div key={index} style={{
                textAlign: 'center',
                padding: '0 1rem'
              }}>
                <div style={{
                  width: '6rem',
                  height: '6rem',
                  backgroundColor: 'var(--color-white)',
                  border: '2px solid var(--color-primary)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 2rem auto',
                  color: 'var(--color-primary)',
                  position: 'relative',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}>
                  {step.icon}
                  <div style={{
                    position: 'absolute',
                    top: '-0.5rem',
                    right: '-0.5rem',
                    backgroundColor: 'var(--color-accent)',
                    color: 'var(--color-white)',
                    width: '2rem',
                    height: '2rem',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.875rem',
                    fontWeight: 700
                  }}>
                    {step.num}
                  </div>
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>{step.title}</h3>
                <p className="body-regular" style={{ color: 'var(--color-text-light)' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 768px) {
          .hidden-mobile { display: none; }
        }
      `}} />
    </section>
  );
}
