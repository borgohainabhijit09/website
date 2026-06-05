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

      {/* Institutional Fact-Sheet */}
      <div className="py-16 px-6 bg-gray-50/50">
        <div className="container mx-auto max-w-6xl grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
          <div className="pt-6 lg:pt-0">
            <div className="text-4xl font-serif font-bold text-gray-900 mb-2">500+</div>
            <div className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">Data Precision</div>
            <div className="text-xs text-gray-400 font-medium">Proprietary Reports Published</div>
          </div>
          <div className="pt-6 lg:pt-0">
            <div className="text-4xl font-serif font-bold text-gray-900 mb-2">40+</div>
            <div className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">Sector Depth</div>
            <div className="text-xs text-gray-400 font-medium">Core Industries Analyzed</div>
          </div>
          <div className="pt-6 lg:pt-0">
            <div className="text-4xl font-serif font-bold text-gray-900 mb-2">₹1.2K Cr</div>
            <div className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">Strategic Scale</div>
            <div className="text-xs text-gray-400 font-medium">Investments Advised</div>
          </div>
          <div className="pt-6 lg:pt-0 flex flex-col items-center justify-center">
            <div className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-4">Global Recognition</div>
            <div className="flex flex-wrap justify-center gap-4 opacity-50 grayscale">
              <span className="font-serif font-bold text-sm">Bloomberg</span>
              <span className="font-serif font-bold text-sm">Forbes</span>
              <span className="font-serif font-bold text-sm">ET</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
