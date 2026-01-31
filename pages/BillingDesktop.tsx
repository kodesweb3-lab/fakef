import React from 'react';
import { CornerHover } from '../components/ui/CornerHover';

const BillingDesktop: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in duration-500">
      <header className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-black font-display">Billing & Ecosystem</h1>
        <p className="text-soft-slate text-lg font-light leading-relaxed">
          Manage your research credits and platform access. Payments power the infrastructure of our observation domains.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <CornerHover className="overflow-visible md:col-span-2" cornerSize="lg">
        <div className="glass-card p-8 space-y-6 overflow-visible">
          <h3 className="text-xs font-bold uppercase tracking-widest text-black">Accepted Currencies</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { name: 'Bitcoin', ticker: 'BTC' },
              { name: 'Tether', ticker: 'USDT' },
              { name: 'Litecoin', ticker: 'LTC' },
              { name: 'Ethereum', ticker: 'ETH' },
              { name: 'Solana', ticker: 'SOL' },
              { name: 'FAKE Token', ticker: 'FAKE', highlight: true },
            ].map((coin) => (
              <div key={coin.ticker} className={`p-4 border ${coin.highlight ? 'border-black/20 bg-black/5' : 'border-black/10 bg-black/5'} rounded-sm text-center space-y-1 group hover:border-black/15 transition-all`}>
                <p className="text-xs font-bold text-black uppercase">{coin.name}</p>
                <p className={`text-[9px] font-mono ${coin.highlight ? 'text-black' : 'text-soft-slate/40'}`}>{coin.ticker}</p>
              </div>
            ))}
          </div>
          <div className="p-6 bg-black/5 border border-black/15 space-y-3">
             <h4 className="text-[10px] font-mono font-bold text-black uppercase tracking-widest">FAKE Token Advantage</h4>
             <p className="text-[11px] text-soft-slate leading-relaxed">
               Settling platform credits with FAKE Token grants access to higher feature tiers and enhanced research module limits. All token usage contributes to ecosystem stability and development bank allocations.
             </p>
          </div>
        </div>
        </CornerHover>

        <CornerHover className="overflow-visible" cornerSize="lg">
        <div className="glass-card p-8 flex flex-col justify-between border-black/10 overflow-visible">
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-widest text-black">Current Balance</h3>
            <div className="text-4xl font-bold text-black font-display">0.00 <span className="text-lg font-mono text-soft-slate">CRD</span></div>
          </div>
          <div className="space-y-4 pt-8">
            <div className="flex justify-between text-[10px] font-mono uppercase text-black/40">
              <span>XP Multiplier</span>
              <span className="text-black">1.0x</span>
            </div>
            <CornerHover className="block" cornerSize="sm">
              <button className="block w-full py-4 bg-black text-white font-bold font-mono text-xs uppercase tracking-widest hover:bg-soft-slate transition-all">
                Top_Up_Credits
              </button>
            </CornerHover>
          </div>
        </div>
        </CornerHover>
      </div>

      <CornerHover className="overflow-visible block" cornerSize="lg">
        <section className="glass-card p-8 border-black/10 space-y-6 overflow-visible">
        <h3 className="text-xs font-bold uppercase tracking-widest text-black">Platform Principles</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-xs text-soft-slate leading-relaxed">
          <p>
            Credits are applied strictly to platform access, high-fidelity observation instruments, and research briefs. FAKE does not sell engagement metrics or guarantee visibility outcomes.
          </p>
          <p>
            Purchases contribute to the FAKE ecosystem allocations across liquidity pools, development banks, and team operational funds to ensure long-term research continuity.
          </p>
        </div>
        </section>
      </CornerHover>

      <footer className="text-center">
         <p className="text-[9px] font-mono text-soft-slate/40 uppercase tracking-[0.5em]">No outcomes guaranteed // Non-prescriptive data only</p>
      </footer>
    </div>
  );
};

export default BillingDesktop;
