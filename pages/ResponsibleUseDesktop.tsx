import React from 'react';

const ResponsibleUseDesktop: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 space-y-16 animate-in fade-in duration-500">
      <header className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight text-black font-display">Responsible Use</h1>
        <p className="text-soft-slate text-lg font-light leading-relaxed">
          The instruments provided by FAKE are powerful tools for analysis. Their value depends entirely on the responsibility and intent of the user.
        </p>
      </header>

      <section className="p-10 border border-electric-blue/20 bg-electric-blue/5 glass-card mb-12">
        <h4 className="text-xs font-mono uppercase tracking-widest text-black mb-4">Core Boundary Statement</h4>
        <p className="text-sm text-soft-slate leading-relaxed">
          FAKE does not provide automated engagement, artificial amplification, or guaranteed outcomes. Any attempt to use our research for metric manipulation or bypassing platform safeguards is strictly prohibited.
        </p>
      </section>

      <section className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-black uppercase tracking-tight">User Responsibility</h3>
            <p className="text-sm text-soft-slate leading-relaxed font-light">
              Users are solely responsible for the intent and outcome of their research. FAKE provides the map; the destination and the path chosen are human decisions.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-black uppercase tracking-tight">Informational Context</h3>
            <p className="text-sm text-soft-slate leading-relaxed font-light">
              All data surfaced via FAKE research domains is for informational and observational purposes only. No insights provided are prescriptive or guaranteed.
            </p>
          </div>
        </div>

        <div className="glass-card p-10 border border-black/15 space-y-6">
          <h3 className="text-sm font-mono uppercase tracking-[0.3em] text-electric-blue">Enforcement & Compliance</h3>
          <p className="text-sm text-soft-slate leading-relaxed font-light">
            FAKE reserves the right to terminate access where usage patterns suggest a conflict with our research-first philosophy. Any attempt to use FAKE instruments for large-scale automation, harassment, or metric manipulation will result in immediate signal revocation.
          </p>
          <div className="h-px bg-black/10 w-full" />
          <p className="text-[10px] font-mono text-black/50 uppercase tracking-widest">
            Division of Protocol Conduct | Ref: 44.92.X
          </p>
        </div>
      </section>
    </div>
  );
};

export default ResponsibleUseDesktop;
