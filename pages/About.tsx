
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-16 animate-in fade-in duration-700">
      <header className="space-y-6 border-l border-[#00FFA3] pl-12 py-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white uppercase">The Mission</h1>
        <p className="text-[#A9B0C2] text-xl font-light leading-relaxed max-w-3xl">
          FAKE (Field Analysis of Kinetic Engagement) is a research platform designed to deconstruct digital attention systems and surface the hidden mechanics of participation.
        </p>
      </header>

      <section className="space-y-12">
        <div className="space-y-8">
          <p className="text-[#A9B0C2] leading-relaxed text-lg font-light">
            We operate at the critical intersection of network topology and algorithmic analysis. Our goal is to empower researchers, analysts, and participants with the instruments needed to document how attention is managed, incentivized, and distributed across the digital landscape.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div className="p-8 glass-card space-y-4 border-l-2 border-l-[#00FFA3]/40">
              <h4 className="text-[#00FFA3] font-bold text-xs uppercase tracking-widest font-mono">01. System Legibility</h4>
              <p className="text-sm text-[#A9B0C2] font-light leading-relaxed">
                We believe you cannot navigate systems you do not understand. Our work focuses on making the opaque distribution algorithms of major platforms transparent and predictable.
              </p>
            </div>
            <div className="p-8 glass-card space-y-4 border-l-2 border-l-[#00FFA3]/40">
              <h4 className="text-[#00FFA3] font-bold text-xs uppercase tracking-widest font-mono">02. Kinetic Modeling</h4>
              <p className="text-sm text-[#A9B0C2] font-light leading-relaxed">
                By treating engagement as kinetic force, we can model how coordination patterns trigger visibility. We isolate these signals to study their long-term impact on audience trust.
              </p>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <h2 className="text-2xl font-bold uppercase tracking-widest text-white">Our Framework</h2>
          <p className="text-[#A9B0C2] leading-relaxed text-lg font-light">
            We do not sell influence. We do not automate outcomes. FAKE provides the high-fidelity lenses required to observe the truth of the system, supporting human-led strategic coordination and rigorous academic inquiry.
          </p>
          
          <div className="p-10 glass-card border border-white/10 text-center italic space-y-4">
            <p className="text-white text-lg font-light">
              "We provide the instruments. You provide the intent. Responsibility always."
            </p>
            <div className="h-px w-12 bg-[#00FFA3] mx-auto opacity-40" />
            <p className="text-[9px] font-mono text-[#A9B0C2] uppercase tracking-[0.3em]">Protocol_Ref: FK-MISSION-V.4</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
