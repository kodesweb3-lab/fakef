import React from 'react';
import { CornerHover } from '../components/ui/CornerHover';

const BillingMobile: React.FC = () => {
  return (
    <div className="px-4 py-6 space-y-6">
      <header className="space-y-3">
        <h1 className="text-2xl font-bold tracking-tight text-black font-display">Billing & Ecosystem</h1>
        <p className="text-soft-slate text-sm font-light leading-relaxed">
          Manage your research credits and platform access. Payments power the infrastructure of our observation domains.
        </p>
      </header>

      <div className="space-y-6">
        <CornerHover className="block overflow-visible" cornerSize="md">
        <div className="glass-card p-6 space-y-4 overflow-visible">
          <h3 className="text-xs font-bold uppercase tracking-wider text-black">Accepted Currencies</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { name: 'Bitcoin', ticker: 'BTC' },
              { name: 'Tether', ticker: 'USDT' },
              { name: 'Litecoin', ticker: 'LTC' },
              { name: 'Ethereum', ticker: 'ETH' },
              { name: 'Solana', ticker: 'SOL' },
              { name: 'FAKE Token', ticker: 'FAKE', highlight: true },
            ].map((coin) => (
              <div key={coin.ticker} className={`p-3 border ${coin.highlight ? 'border-black/20 bg-black/5' : 'border-black/10 bg-black/5'} rounded-sm text-center space-y-1`}>
                <p className="text-xs font-bold text-black uppercase">{coin.name}</p>
                <p className={`text-[9px] font-mono ${coin.highlight ? 'text-black' : 'text-soft-slate/40'}`}>{coin.ticker}</p>
              </div>
            ))}
          </div>
          <div className="p-4 bg-black/5 border border-black/15 space-y-2">
             <h4 className="text-[10px] font-mono font-bold text-black uppercase tracking-wider">FAKE Token Advantage</h4>
             <p className="text-[10px] text-soft-slate leading-relaxed">
               Settling platform credits with FAKE Token grants access to higher feature tiers and enhanced research module limits. All token usage contributes to ecosystem stability and development bank allocations.
             </p>
          </div>
        </div>
        </CornerHover>

        <CornerHover className="block overflow-visible" cornerSize="md">
        <div className="glass-card p-6 space-y-4 border-black/10 overflow-visible">
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-black">Current Balance</h3>
            <div className="text-3xl font-bold text-black font-display">0.00 <span className="text-base font-mono text-soft-slate">CRD</span></div>
          </div>
          <div className="space-y-3 pt-4">
            <div className="flex justify-between text-[10px] font-mono uppercase text-black/40">
              <span>XP Multiplier</span>
              <span className="text-black">1.0x</span>
            </div>
            <CornerHover className="block" cornerSize="sm">
              <button className="block w-full py-3 bg-black text-white font-bold font-mono text-xs uppercase tracking-wider hover:bg-soft-slate transition-all">
                Top_Up_Credits
              </button>
            </CornerHover>
          </div>
        </div>
        </CornerHover>
      </div>

      <CornerHover className="block overflow-visible" cornerSize="md">
      <section className="glass-card p-6 border-black/10 space-y-4 overflow-visible">
        <h3 className="text-xs font-bold uppercase tracking-wider text-black">Platform Principles</h3>
        <div className="space-y-4 text-xs text-soft-slate leading-relaxed">
          <p>
            Credits are applied strictly to platform access, high-fidelity observation instruments, and research briefs. FAKE does not sell engagement metrics or guarantee visibility outcomes.
          </p>
          <p>
            Purchases contribute to the FAKE ecosystem allocations across liquidity pools, development banks, and team operational funds to ensure long-term research continuity.
          </p>
        </div>
      </section>
      </CornerHover>

      <footer className="text-center pt-4">
         <p className="text-[9px] font-mono text-soft-slate/40 uppercase tracking-wider">No outcomes guaranteed // Non-prescriptive data only</p>
      </footer>
    </div>
  );
};

export default BillingMobile;
