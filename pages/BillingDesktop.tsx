import React from 'react';

const BillingDesktop: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in duration-500">
      <header className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-white font-display">Billing & Ecosystem</h1>
        <p className="text-soft-slate text-lg font-light leading-relaxed">
          Manage your research credits and platform access. Payments power the infrastructure of our observation domains.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="glass-card p-8 space-y-6 md:col-span-2">
          <h3 className="text-xs font-bold uppercase tracking-widest text-white">Accepted Currencies</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { name: 'Bitcoin', ticker: 'BTC' },
              { name: 'Tether', ticker: 'USDT' },
              { name: 'Litecoin', ticker: 'LTC' },
              { name: 'Ethereum', ticker: 'ETH' },
              { name: 'Solana', ticker: 'SOL' },
              { name: 'FAKE Token', ticker: 'FAKE', highlight: true },
            ].map((coin) => (
              <div key={coin.ticker} className={`p-4 border ${coin.highlight ? 'border-electric-blue/40 bg-electric-blue/5' : 'border-white/5 bg-white/[0.02]'} rounded-sm text-center space-y-1 group hover:border-white/20 transition-all`}>
                <p className="text-xs font-bold text-white uppercase">{coin.name}</p>
                <p className={`text-[9px] font-mono ${coin.highlight ? 'text-electric-blue' : 'text-soft-slate/40'}`}>{coin.ticker}</p>
              </div>
            ))}
          </div>
          <div className="p-6 bg-electric-blue/5 border border-electric-blue/20 space-y-3">
             <h4 className="text-[10px] font-mono font-bold text-electric-blue uppercase tracking-widest">FAKE Token Advantage</h4>
             <p className="text-[11px] text-soft-slate leading-relaxed">
               Settling platform credits with FAKE Token grants access to higher feature tiers and enhanced research module limits. All token usage contributes to ecosystem stability and development bank allocations.
             </p>
          </div>
        </div>

        <div className="glass-card p-8 flex flex-col justify-between border-white/5">
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white">Current Balance</h3>
            <div className="text-4xl font-bold text-white font-display">0.00 <span className="text-lg font-mono text-soft-slate">CRD</span></div>
          </div>
          <div className="space-y-4 pt-8">
            <div className="flex justify-between text-[10px] font-mono uppercase text-white/40">
              <span>XP Multiplier</span>
              <span className="text-electric-blue">1.0x</span>
            </div>
            <button className="w-full py-4 bg-electric-blue text-midnight font-bold font-mono text-xs uppercase tracking-widest hover:bg-white transition-all">
              Top_Up_Credits
            </button>
          </div>
        </div>
      </div>

      <section className="glass-card p-8 border-white/5 space-y-6">
        <h3 className="text-xs font-bold uppercase tracking-widest text-white">Platform Principles</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-xs text-soft-slate leading-relaxed">
          <p>
            Credits are applied strictly to platform access, high-fidelity observation instruments, and research briefs. FAKE does not sell engagement metrics or guarantee visibility outcomes.
          </p>
          <p>
            Purchases contribute to the FAKE ecosystem allocations across liquidity pools, development banks, and team operational funds to ensure long-term research continuity.
          </p>
        </div>
      </section>

      <footer className="text-center">
         <p className="text-[9px] font-mono text-soft-slate/40 uppercase tracking-[0.5em]">No outcomes guaranteed // Non-prescriptive data only</p>
      </footer>
    </div>
  );
};

export default BillingDesktop;
