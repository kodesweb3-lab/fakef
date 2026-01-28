
import React from 'react';
import { RESEARCH_DOMAINS, FULL_INVENTORY } from '../constants';

const Tools: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">
      <header className="space-y-8 max-w-5xl">
        <div className="text-xs font-mono uppercase tracking-[0.6em] text-electric-blue mb-4">Research Domains</div>
        <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-white font-display">Systems Legibility</h1>
        <p className="text-soft-slate text-2xl font-light leading-relaxed max-w-3xl">
          We reframe digital platforms as research domains. Our tools observe, measure, and analyze how signals interact with platform distribution thresholds.
        </p>
      </header>

      {/* Primary Disclaimer Banner */}
      <section className="p-10 border border-electric-blue/20 bg-electric-blue/5 glass-card">
        <div className="flex items-start gap-8">
          <div className="w-10 h-10 flex-shrink-0 border border-electric-blue flex items-center justify-center text-electric-blue font-bold text-sm">!</div>
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white">Observational Instrument Disclaimer</h4>
            <p className="text-sm text-soft-slate leading-relaxed max-w-4xl">
              FAKE tools are built for research, observation, and responsible experimentation. FAKE does not provide automated engagement, artificial amplification, or guaranteed outcomes. The following categories represent our current observational surfaces.
            </p>
          </div>
        </div>
      </section>

      {/* Full Inventory Catalog */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {FULL_INVENTORY.map((category, idx) => (
          <div key={idx} className="glass-card border-white/5 p-8 space-y-8 group hover:border-electric-blue/20 transition-all">
            <div className="space-y-2">
              <h3 className="text-sm font-mono text-electric-blue uppercase tracking-widest">{category.title}</h3>
              <div className="h-px w-12 bg-white/10" />
            </div>
            
            <div className="space-y-4">
              <p className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em]">Current Observational Signals:</p>
              <ul className="grid grid-cols-1 gap-3">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-soft-slate group-hover:text-white/80 transition-colors">
                    <div className="w-1 h-1 bg-signal-purple/40" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-white/5 opacity-40">
              <p className="text-[10px] italic text-soft-slate leading-relaxed">
                * All interactions within this domain are monitored for research-intent consistency.
              </p>
            </div>
          </div>
        ))}
      </div>

      <footer className="max-w-4xl mx-auto text-center space-y-10 pt-20">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="space-y-6">
            <p className="text-soft-slate text-lg font-light leading-relaxed">
            Access to specific research protocols requires active Alpha Tek credentials. FAKE does not automate delivery or guarantee visibility metrics.
            </p>
            <button className="px-14 py-5 border border-white/10 text-[11px] font-mono tracking-[0.5em] uppercase text-soft-slate hover:text-white hover:border-electric-blue transition-all bg-midnight">
            Request_Protocol_Authorization
            </button>
        </div>
      </footer>
    </div>
  );
};

export default Tools;
