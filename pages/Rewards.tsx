
import React from 'react';

const Rewards: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in duration-500 pb-20">
      <header className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-white font-display">Participation Rewards</h1>
        <p className="text-soft-slate text-lg font-light leading-relaxed">
          Active research nodes earn XP through system observation and platform interaction. FAKE Token integration accelerates your research trajectory.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass-card p-8 space-y-10 border-white/5">
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white">Node Identity</h3>
            <div className="flex items-end gap-3">
              <span className="text-5xl font-bold text-electric-blue font-display">Tier 1</span>
              <span className="text-sm font-mono text-soft-slate mb-1">UNRANKED</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between text-[10px] font-mono uppercase">
              <span className="text-white/40">XP Progression</span>
              <span className="text-white">1,240 / 5,000</span>
            </div>
            <div className="w-full h-1 bg-white/5 relative overflow-hidden">
               <div className="absolute top-0 left-0 h-full bg-electric-blue" style={{ width: '24.8%' }} />
            </div>
            <p className="text-[10px] italic text-soft-slate leading-relaxed">
              * Demo placeholder numbers. XP is accrued by using FAKE Token for platform interactions and completing research briefs.
            </p>
          </div>
        </div>

        <div className="glass-card p-8 space-y-6 border-white/5">
           <h3 className="text-xs font-bold uppercase tracking-widest text-white">Tier Privileges</h3>
           <div className="space-y-3">
             {[
               "Enhanced Research Project Limits",
               "Premium Insight Brief Access",
               "Signal Observation Depth Expansion",
               "High-Fidelity Export Protocols",
               "Airdrop & Lotto Eligibility"
             ].map((perk, i) => (
               <div key={i} className="flex items-center gap-3 text-[11px] text-soft-slate">
                 <div className="w-1 h-1 bg-electric-blue" />
                 {perk}
               </div>
             ))}
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="glass-card p-8 space-y-6 border-white/5">
           <div className="flex justify-between items-center">
             <h3 className="text-xs font-bold uppercase tracking-widest text-white">Daily Participation Lotto</h3>
             <span className="px-2 py-1 bg-signal-purple/10 border border-signal-purple/20 text-[8px] font-mono text-signal-purple">ACTIVE</span>
           </div>
           <p className="text-xs text-soft-slate leading-relaxed">
             Active research nodes are automatically entered into daily lotto pools. Distribution rules are dynamic and focus on incentivizing long-term data literacy.
           </p>
           <button className="text-[10px] font-mono uppercase text-electric-blue hover:text-white transition-colors">View_Eligibility_Rules</button>
        </section>

        <section className="glass-card p-8 space-y-6 border-white/5">
           <div className="flex justify-between items-center">
             <h3 className="text-xs font-bold uppercase tracking-widest text-white">System Airdrops</h3>
             <span className="px-2 py-1 bg-white/5 border border-white/10 text-[8px] font-mono text-white/40">PENDING</span>
           </div>
           <p className="text-xs text-soft-slate leading-relaxed">
             Random airdrops are delivered to nodes maintaining high integrity and consistent observational participation. No guarantees of distribution are implied.
           </p>
           <div className="p-4 border border-dashed border-white/10 text-center text-[10px] font-mono text-white/20">No rewards currently pending</div>
        </section>
      </div>

      <footer className="max-w-3xl mx-auto p-8 bg-white/[0.02] border border-white/5 text-center">
         <p className="text-xs text-soft-slate/60 leading-relaxed italic">
           Reward eligibility and distribution mechanics are proprietary to the Alpha Tek research unit. Rewards are incentives for platform usage and carry no financial guarantee or promise of outcome.
         </p>
      </footer>
    </div>
  );
};

export default Rewards;
