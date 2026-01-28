import React from 'react';

const DisallowedUseDesktop: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 space-y-16">
      <header className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight text-white">Disallowed Use</h1>
        <p className="text-[#A9B0C2] text-lg font-light leading-relaxed">
          The following activities represent a misuse of FAKE instruments and are strictly prohibited.
        </p>
      </header>

      <section className="space-y-6">
        {[
          {
            title: "Automated Engagement Delivery",
            desc: "Using FAKE to bypass platform safeguards or deliver synthetic engagement at scale."
          },
          {
            title: "Metric Manipulation",
            desc: "Intentional inflation of metrics for the purpose of deceiving audience trust or platform moderators."
          },
          {
            title: "Account Reselling",
            desc: "Using observational data to create and sell 'boosted' accounts as organic assets."
          },
          {
            title: "System Harassment",
            desc: "Applying coordination patterns to silence individuals, harass creators, or disrupt public discourse."
          }
        ].map((item, i) => (
          <div key={i} className="p-8 border-l-2 border-l-red-500/30 bg-red-500/5 space-y-2">
            <h3 className="font-bold text-red-500 uppercase tracking-widest text-xs">{item.title}</h3>
            <p className="text-sm text-[#EDEFF6] leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </section>

      <div className="p-8 glass border border-white/5 text-center italic text-[#A9B0C2] text-sm">
        "Misuse of a lens does not change the nature of the light, but it does change the viewer. FAKE is for clarity, not distortion."
      </div>
    </div>
  );
};

export default DisallowedUseDesktop;
