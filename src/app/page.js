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
  return (
    <>
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
