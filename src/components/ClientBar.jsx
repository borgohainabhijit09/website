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

      {/* Impact Metrics & Media */}
      <div className="py-16 px-6 bg-gray-50/50">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
          <div className="pt-6 md:pt-0">
            <div className="text-4xl font-serif font-bold text-gray-900 mb-2">500+</div>
            <div className="text-sm text-gray-600 font-medium uppercase tracking-wider">Market Reports Published</div>
          </div>
          <div className="pt-6 md:pt-0">
            <div className="text-4xl font-serif font-bold text-gray-900 mb-2">50+</div>
            <div className="text-sm text-gray-600 font-medium uppercase tracking-wider">Global Enterprise Partners</div>
          </div>
          <div className="pt-6 md:pt-0 flex flex-col items-center justify-center">
            <div className="text-sm text-gray-600 font-medium uppercase tracking-wider mb-4">Featured In</div>
            <div className="flex flex-wrap justify-center gap-6 opacity-60 grayscale">
              <span className="font-serif font-bold text-lg">Bloomberg</span>
              <span className="font-serif font-bold text-lg">Forbes</span>
              <span className="font-serif font-bold text-lg">Economic Times</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
