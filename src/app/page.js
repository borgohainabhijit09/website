import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ClientBar from '@/components/ClientBar';
import Capabilities from '@/components/Capabilities';
import Industries from '@/components/Industries';
import WhyUs from '@/components/WhyUs';
import Insights from '@/components/Insights';
import CaseStudies from '@/components/CaseStudies';
import CTA from '@/components/CTA';
import Leadership from '@/components/Leadership';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'The India Watch',
    url: 'https://theindiawatch.com',
    logo: 'https://theindiawatch.com/logo.png', // Replace with actual logo URL
    description: "Premier research and advisory firm equipping investors, CXOs, and enterprises with actionable market intelligence to navigate and win in India's complex markets.",
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-123-456-7890', // Replace with actual phone
      contactType: 'customer service',
      availableLanguage: ['English', 'Hindi']
    },
    sameAs: [
      'https://www.linkedin.com/company/the-india-watch/',
      'https://twitter.com/theindiawatch',
      'https://www.facebook.com/theindiawatch'
    ]
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'The India Watch',
    url: 'https://theindiawatch.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://theindiawatch.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <>
      {/* Inject JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      
      <Header />
      <main className="min-h-screen">
        <Hero />
        <ClientBar />
        <Insights />
        <Capabilities />
        <Industries />
        <CaseStudies />
        <Leadership />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
