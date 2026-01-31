import React from 'react';

const AllowedUseMobile: React.FC = () => {
  return (
    <div className="px-4 py-6 space-y-6">
      <header className="space-y-3">
        <h1 className="text-2xl font-bold tracking-tight text-black">Allowed Use</h1>
        <p className="text-[#A9B0C2] text-sm font-light leading-relaxed">
          FAKE is designed for rigorous observation and the testing of attention-based hypotheses.
        </p>
      </header>

      <div className="space-y-4">
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
          <div key={i} className="p-6 glass border border-white/5 flex gap-4 items-start">
            <div className="text-xl font-mono text-[#4F8CFF]/40">0{i+1}</div>
            <div className="space-y-2">
              <h3 className="font-bold text-black uppercase tracking-wider text-xs">{item.title}</h3>
              <p className="text-xs text-[#A9B0C2] leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllowedUseMobile;
