import React from 'react';

const ResponsibleUseMobile: React.FC = () => {
  return (
    <div className="px-4 py-6 space-y-6">
      <header className="space-y-3">
        <h1 className="text-2xl font-bold tracking-tight text-white font-display">Responsible Use</h1>
        <p className="text-soft-slate text-sm font-light leading-relaxed">
          The instruments provided by FAKE are powerful tools for analysis. Their value depends entirely on the responsibility and intent of the user.
        </p>
      </header>

      <section className="p-6 border border-electric-blue/20 bg-electric-blue/5 glass-card">
        <h4 className="text-xs font-mono uppercase tracking-wider text-white mb-3">Core Boundary Statement</h4>
        <p className="text-xs text-soft-slate leading-relaxed">
          FAKE does not provide automated engagement, artificial amplification, or guaranteed outcomes. Any attempt to use our research for metric manipulation or bypassing platform safeguards is strictly prohibited.
        </p>
      </section>

      <section className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white uppercase tracking-tight">User Responsibility</h3>
            <p className="text-xs text-soft-slate leading-relaxed font-light">
              Users are solely responsible for the intent and outcome of their research. FAKE provides the map; the destination and the path chosen are human decisions.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white uppercase tracking-tight">Informational Context</h3>
            <p className="text-xs text-soft-slate leading-relaxed font-light">
              All data surfaced via FAKE research domains is for informational and observational purposes only. No insights provided are prescriptive or guaranteed.
            </p>
          </div>
        </div>

        <div className="glass-card p-6 border border-white/5 space-y-4">
          <h3 className="text-xs font-mono uppercase tracking-wider text-electric-blue">Enforcement & Compliance</h3>
          <p className="text-xs text-soft-slate leading-relaxed font-light">
            FAKE reserves the right to terminate access where usage patterns suggest a conflict with our research-first philosophy. Any attempt to use FAKE instruments for large-scale automation, harassment, or metric manipulation will result in immediate signal revocation.
          </p>
          <div className="h-px bg-white/5 w-full" />
          <p className="text-[10px] font-mono text-white/20 uppercase tracking-wider">
            Division of Protocol Conduct | Ref: 44.92.X
          </p>
        </div>
      </section>
    </div>
  );
};

export default ResponsibleUseMobile;
