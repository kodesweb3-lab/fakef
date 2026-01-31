import React from 'react';

const AboutMobile: React.FC = () => {
  return (
    <div className="px-4 py-6 space-y-8">
      <header className="space-y-4 border-l border-[#00FFA3] pl-4 py-2">
        <h1 className="text-2xl font-bold tracking-tight text-black uppercase">The Mission</h1>
        <p className="text-[#A9B0C2] text-sm font-light leading-relaxed">
          FAKE (Field Analysis of Kinetic Engagement) is a research platform designed to deconstruct digital attention systems and surface the hidden mechanics of participation.
        </p>
      </header>

      <section className="space-y-6">
        <div className="space-y-4">
          <p className="text-[#A9B0C2] leading-relaxed text-sm font-light">
            We operate at the critical intersection of network topology and algorithmic analysis. Our goal is to empower researchers, analysts, and participants with the instruments needed to document how attention is managed, incentivized, and distributed across the digital landscape.
          </p>
          
          <div className="space-y-4 pt-4">
            <div className="p-6 glass-card space-y-3 border-l-2 border-l-[#00FFA3]/40">
              <h4 className="text-[#00FFA3] font-bold text-xs uppercase tracking-wider font-mono">01. System Legibility</h4>
              <p className="text-xs text-[#A9B0C2] font-light leading-relaxed">
                We believe you cannot navigate systems you do not understand. Our work focuses on making the opaque distribution algorithms of major platforms transparent and predictable.
              </p>
            </div>
            <div className="p-6 glass-card space-y-3 border-l-2 border-l-[#00FFA3]/40">
              <h4 className="text-[#00FFA3] font-bold text-xs uppercase tracking-wider font-mono">02. Kinetic Modeling</h4>
              <p className="text-xs text-[#A9B0C2] font-light leading-relaxed">
                By treating engagement as kinetic force, we can model how coordination patterns trigger visibility. We isolate these signals to study their long-term impact on audience trust.
              </p>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-xl font-bold uppercase tracking-wider text-black">Our Framework</h2>
          <p className="text-[#A9B0C2] leading-relaxed text-sm font-light">
            We do not sell influence. We do not automate outcomes. FAKE provides the high-fidelity lenses required to observe the truth of the system, supporting human-led strategic coordination and rigorous academic inquiry.
          </p>
          
          <div className="p-6 glass-card border border-black/15 text-center italic space-y-3">
            <p className="text-black text-sm font-light">
              "We provide the instruments. You provide the intent. Responsibility always."
            </p>
            <div className="h-px w-8 bg-[#00FFA3] mx-auto opacity-40" />
            <p className="text-[9px] font-mono text-[#A9B0C2] uppercase tracking-wider">Protocol_Ref: FK-MISSION-V.4</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMobile;
