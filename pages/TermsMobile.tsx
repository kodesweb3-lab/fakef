import React from 'react';

const TermsMobile: React.FC = () => {
  return (
    <div className="px-4 py-6 space-y-8">
      <header className="space-y-4">
        <h1 className="text-2xl font-bold tracking-tight text-white font-display">Terms of Use</h1>
        <p className="text-xs uppercase tracking-wider text-soft-slate font-mono">Revision 3.1 | Division of Conduct</p>
      </header>

      <div className="space-y-8">
        <section className="space-y-4">
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-electric-blue font-display tracking-tight">01. No Illusions</h2>
            <p className="text-soft-slate text-sm font-light leading-relaxed">
              By using FAKE, you acknowledge that you are entering a space of cold analysis. Do not misrepresent activity as "organic" because you want to feel better about it. We know it's all FAKE — that's why we're here. Don't insult the system by pretending otherwise.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-electric-blue font-display tracking-tight">02. Instrument Ownership</h2>
            <p className="text-soft-slate text-sm font-light leading-relaxed">
              We provide the tools. You provide the intent. If you use our data to do something stupid, illegal, or unimaginative, that is your cross to bear. FAKE and Alpha Tek are not responsible for your lack of foresight or technical failure to interpret signals correctly.
            </p>
          </div>
        </section>

        <section className="glass-card p-6 border-l-4 border-l-red-500/40 bg-red-500/5">
          <h2 className="text-base font-bold text-red-400 mb-4 uppercase tracking-wider font-mono">Hard Prohibitions</h2>
          <ul className="space-y-4 text-xs text-muted-white font-light">
            <li className="flex gap-3">
              <span className="text-red-500 font-bold font-mono">×</span>
              <span>Attempting to reverse-engineer our proprietary kinetic observation models. We see you.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red-500 font-bold font-mono">×</span>
              <span>Using our research to harass individuals or small-scale creators. We study systems, not people. Be better.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red-500 font-bold font-mono">×</span>
              <span>Lying to yourself about the nature of engagement. It's a mechanic. Treat it like one or leave.</span>
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-electric-blue font-display tracking-tight">03. Revocation Protocol</h2>
            <p className="text-soft-slate text-sm font-light leading-relaxed">
              We reserve the right to cut your signal at any time. If your usage patterns suggest you are here for low-effort exploitation rather than high-level research, your access will be terminated without a briefing. We don't owe you a "Why".
            </p>
          </div>
        </section>

        <footer className="pt-8 border-t border-white/5 text-center">
            <p className="italic text-soft-slate text-sm font-light">
            "Don't insult us by pretending you're here for any other reason than the truth of the system."
            </p>
            <div className="mt-6 text-[9px] font-mono text-white/20 uppercase tracking-wider">
                SIG_TERM_PROTOCOL_ACTIVE
            </div>
        </footer>
      </div>
    </div>
  );
};

export default TermsMobile;
