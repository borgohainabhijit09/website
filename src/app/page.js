import Hero from '@/components/Hero';
import WhoWeHelp from '@/components/WhoWeHelp';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import FeaturedInsights from '@/components/FeaturedInsights';
import IndustriesWeServe from '@/components/IndustriesWeServe';
import ClientSuccessStories from '@/components/ClientSuccessStories';
import ResearchMethodology from '@/components/ResearchMethodology';
import AboutUs from '@/components/AboutUs';
import FinalCTA from '@/components/FinalCTA';

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'The India Watch',
    url: 'https://theindiawatch.com',
    description: "Premier research and advisory firm equipping investors, CXOs, and enterprises with actionable market intelligence to navigate and win in India's complex markets.",
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-123-456-7890',
      contactType: 'customer service',
      availableLanguage: ['English', 'Hindi']
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main>
        <Hero />
        <WhoWeHelp />
        <Services />
        <WhyChooseUs />
        <FeaturedInsights />
        <IndustriesWeServe />
        <ClientSuccessStories />
        <FinalCTA />
      </main>
    </>
  );
}
