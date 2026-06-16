import React from 'react';
import InnerHero from '@/components/InnerHero';

export const metadata = {
  title: 'Leadership Profiles | The India Watch',
  description: 'Meet the executive team and senior analysts behind The India Watch.',
};

const leadershipTeam = [
  { name: 'Paritosh K', title: 'Managing Partner', bio: 'Paritosh has more than 12 years of experience in market research, business advisory, market-entry, and feasibility studies. He has extensively worked in India and UAE. As a key brain behind the company, he is mainly responsible for shaping the overall vision and devising the strategy.', icon: 'M' },
  { name: 'Preeti J', title: 'Co-founder', bio: 'Preeti has worked with multiple start-ups in various roles. As a seasoned professional, she is adept at managing big teams. A DU Alumni, Preeti is primarily responsible for working on individual assignments, designing the research strategy, and managing the overall project execution.', icon: 'F' },
  { name: 'Tushar K', title: 'Co-founder', bio: 'Tushar is a seasoned entrepreneur and has worked on multiple ventures including lifestyle, real estate advisory, civil construction, and market research. Brewing his rich experience, Tushar brings his unparallel expertise in data & analytics, multi-domain acumen, and business development.', icon: 'M' },
];

const coreTeam = [
  { name: 'Sonam K', title: 'Qualitative Research Lead', bio: 'Sonam primarily works in qualitative research, data collection, and stakeholder interview projects. She holds a double master\'s degree in English literature and Psychology.' },
  { name: 'Ansari A', title: 'Senior Research Analyst', bio: 'Ansari is a seasoned research analyst with in-depth knowledge of multiple sectors such as real estate, F&B, consumer retail, hospitality, tourism, etc.' },
  { name: 'Arjun S', title: 'Research Analyst', bio: 'Arjun is a seasoned research analyst with in-depth knowledge of sectors such as agribusiness, manufacturing, automobiles, automotive, chemicals, HVAC systems, mining, etc.' },
  { name: 'Puneet A', title: 'Research Analyst', bio: 'Puneet is a seasoned research analyst with in-depth knowledge of sectors such as SCM, logistics & mobility, warehousing, shipping, etc.' },
  { name: 'Kamal Y', title: 'Technology Lead', bio: 'Kamal is the key technology resource of The India Watch. He manages web development, CRM, SEO, and digital marketing at the company.' },
  { name: 'Ahmed M', title: 'Creative Lead', bio: 'Ahmed is the creative backbone of The India Watch. He offers his creative prowess in data visualizations, report designs, infographics, etc.' },
  { name: 'Sumit V', title: 'Research Analyst', bio: 'A seasoned research analyst with nearly 6 years of experience in numerous segments such as real estate & infrastructure, construction materials, consumer retail, and BFSI.' },
];

const advisoryTeam = [
  { name: 'Johar D', title: 'Pharma & Wellness Advisor', bio: 'Johar is a seasoned pharma professional with knowledge of SCM, project management, sales, and marketing.' },
  { name: 'Gaurav V', title: 'Financial Advisor', bio: 'Gaurav is a certified CA with expertise in financial planning, technical analysis, due diligence, and budgeting.' },
  { name: 'Neelima T', title: 'Market Research Advisor', bio: 'More than 30 years of experience in market research with a strong understanding of designing and executing market research projects.' },
];

const TeamSection = ({ title, members, highlight }) => (
  <div style={{ marginBottom: '5rem' }}>
    <style dangerouslySetInnerHTML={{__html: `
      .hover-lift-shadow {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      .hover-lift-shadow:hover {
        transform: translateY(-6px) !important;
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1) !important;
      }
    `}} />
    <h2 className="headline-medium" style={{ 
      fontSize: '2rem', 
      fontWeight: 700, 
      color: highlight ? '#ea580c' : '#0ea5e9', 
      marginBottom: '2rem', 
      paddingBottom: '1rem',
      borderBottom: '1px solid #e2e8f0',
      letterSpacing: '-0.02em' 
    }}>
      {title}
    </h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
      {members.map((member, idx) => (
        <div key={idx} className="hover-lift-shadow" style={{
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          border: '1px solid #e2e8f0',
          padding: '2rem',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
          cursor: 'default',
          display: 'flex',
          flexDirection: 'column'
        }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ 
              width: '60px', 
              height: '60px', 
              borderRadius: '50%', 
              backgroundColor: highlight ? '#fff7ed' : '#f0f9ff',
              color: highlight ? '#ea580c' : '#0ea5e9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              fontWeight: 700,
              border: `2px solid ${highlight ? '#fdba74' : '#bae6fd'}`
            }}>
              {member.name.charAt(0)}
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', margin: '0 0 0.25rem 0' }}>{member.name}</h3>
              <p style={{ fontSize: '0.9rem', color: highlight ? '#ea580c' : '#0ea5e9', fontWeight: 600, margin: 0 }}>{member.title}</p>
            </div>
          </div>
          <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, margin: 0, flex: 1 }}>
            {member.bio}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default function LeadershipProfiles() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '#' },
    { label: 'Leadership Profiles' }
  ];

  return (
    <main>
      <InnerHero title="Our Team" breadcrumbs={breadcrumbs} />
      
      <section className="section-padding" style={{ backgroundColor: '#f8fafc', padding: '6rem 0' }}>
        <div className="container">
          <TeamSection title="Leadership Team" members={leadershipTeam} highlight={false} />
          <TeamSection title="Core Team" members={coreTeam} highlight={true} />
          <TeamSection title="Advisory Team" members={advisoryTeam} highlight={false} />
        </div>
      </section>
    </main>
  );
}
