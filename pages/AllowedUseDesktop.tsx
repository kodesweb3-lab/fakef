import React from 'react';

const AllowedUseDesktop: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 space-y-16">
      <header className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight text-white">Allowed Use</h1>
        <p className="text-[#A9B0C2] text-lg font-light leading-relaxed">
          FAKE is designed for rigorous observation and the testing of attention-based hypotheses.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-8">
        {[
          {
            title: "Academic & Market Research",
            desc: "Studying the distribution patterns and kinetic energy required for visibility in digital domains."
          },
          {
            title: "Human-Driven Coordination",
            desc: "Understanding how synchronized participation influences perceived legitimacy and algorithmic weighting."
          },
          {
            title: "Hypothesis Testing",
            desc: "Running small-scale, controlled experiments to observe timing sensitivity and distribution bottlenecks."
          },
          {
            title: "Data Literacy Training",
            desc: "Educating teams and individuals on the difference between organic growth and kinetic engagement."
          }
        ].map((item, i) => (
          <div key={i} className="p-8 glass border border-white/5 flex gap-8 items-start">
            <div className="text-2xl font-mono text-[#4F8CFF]/40">0{i+1}</div>
            <div className="space-y-2">
              <h3 className="font-bold text-white uppercase tracking-widest text-sm">{item.title}</h3>
              <p className="text-sm text-[#A9B0C2] leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllowedUseDesktop;
