import Link from 'next/link';

const pillars = [
  {
    number: "01",
    title: "Data-Driven Accuracy",
    description: "Every recommendation is backed by rigorous primary and secondary research—empirical evidence, not intuition.",
  },
  {
    number: "02",
    title: "Local Expertise",
    description: "India is not one market. Our ground-level networks decode regional nuances that global generalists miss.",
  },
  {
    number: "03",
    title: "Actionable Outcomes",
    description: "We deliver clarity, not just data. Our reports translate intelligence into precise strategic frameworks.",
  },
];

export default function WhyUs() {
  return (
    <section className="relative py-24 bg-primary overflow-hidden">
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/60 to-primary"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">Why The India Watch</p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
            Unmatched Ground-Level Intelligence.<br className="hidden md:block" /> Global Strategic Standards.
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
            We bridge the gap between macro-economic trends and micro-market realities. Our proprietary research methodologies and deep local networks provide an informational edge that drives confident decision-making.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="border-l-2 border-blue-500/50 pl-6 py-2 hover:border-blue-400 transition-colors group"
            >
              <div className="text-3xl font-serif font-bold text-blue-400/60 mb-3 group-hover:text-blue-400 transition-colors">
                {p.number}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{p.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{p.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="border-t border-white/10 pt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-gray-400 text-sm max-w-md">
            Trusted by global investors, family offices, and Fortune 500 enterprises navigating the Indian market.
          </p>
          <a
            href="#"
            className="inline-flex items-center border border-white/30 text-white px-8 py-3 rounded font-medium hover:bg-white hover:text-primary transition-all duration-300 whitespace-nowrap"
          >
            Meet Our Leadership Team
          </a>
        </div>
      </div>
    </section>
  );
}

