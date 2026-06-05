"use client";

const clients = [
  "Tata Consultancy", "Goldman Sachs", "KPMG", "McKinsey & Co.",
  "Bain Capital", "World Bank", "SIDBI", "NASSCOM",
  "EY Advisory", "PwC India", "Invest India", "CII",
];

const stats = [
  { value: "200+", label: "Research Engagements" },
  { value: "40+", label: "Industries Covered" },
  { value: "18", label: "Countries Served" },
  { value: "₹1,200 Cr+", label: "Investments Advised" },
];

export default function ClientBar() {
  return (
    <section className="bg-white border-y border-gray-100 overflow-hidden">
      {/* Scrolling Trust Strip */}
      <div className="py-6 bg-surface/60">
        <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-5">
          Trusted by Global Enterprises and Fast-Growing Ventures
        </p>
        <div className="relative flex overflow-x-hidden">
          <div className="flex animate-marquee whitespace-nowrap items-center">
            {[...clients, ...clients].map((name, i) => (
              <span
                key={i}
                className="mx-8 text-base font-semibold text-gray-400 hover:text-primary transition-colors cursor-default shrink-0"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="py-10 px-6">
        <div className="container mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="text-3xl md:text-4xl font-serif font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-secondary font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
