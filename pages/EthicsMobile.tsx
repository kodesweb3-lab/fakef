import React from 'react';

const EthicsMobile: React.FC = () => {
  return (
    <div className="px-4 py-6 space-y-12">
      <header className="space-y-4">
        <div className="text-[10px] uppercase tracking-wider text-electric-blue font-bold font-mono">Research Ethics</div>
        <h1 className="text-3xl font-bold tracking-tight text-black font-display">A Manifesto for Systems Cartographers</h1>
        <p className="text-soft-slate text-base font-light leading-relaxed italic border-l-2 border-electric-blue pl-4">
          "The first step in navigating a dark room is turning on the light. The second is realizing how the light changes the room."
        </p>
      </header>

      <div className="space-y-8">
        <section className="space-y-6">
          <div className="glass-card p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-electric-blue/5 rounded-full blur-2xl" />
            <h2 className="text-xl font-bold mb-4 tracking-tight text-black font-display">The Illusion of Organicism</h2>
            <div className="space-y-4 text-soft-slate text-sm font-light leading-relaxed">
                <p>
                In the modern digital landscape, the distinction between "organic" and "coordinated" is often an artificial one created by platform owners to maintain perceived legitimacy. We believe that all engagement is kinetic — the result of force applied to a system.
                </p>
                <div className="py-4">
                    <p className="text-lg font-medium text-black italic tracking-tight">
                    "To call a movement 'fake' because it was understood and navigated is to misunderstand the nature of movement itself."
                    </p>
                </div>
                <p>
                FAKE does not create phantom signals. We provide the instruments to see how signals propagate. If a tree falls in a forest and someone coordinates the recording, the sound is no less real.
                </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <div className="space-y-3 p-6 border-l border-black/15">
            <h3 className="text-base font-bold text-electric-blue font-display">01. Neutral Observation</h3>
            <p className="text-xs text-soft-slate leading-relaxed">
              We do not moralize engagement. We study its velocity, density, and impact. A system is neither good nor evil; it is functional or dysfunctional.
            </p>
          </div>
          <div className="space-y-3 p-6 border-l border-black/15">
            <h3 className="text-base font-bold text-electric-blue font-display">02. Decoupling Truth</h3>
            <p className="text-xs text-soft-slate leading-relaxed">
              Attention is a currency, not a verification tool. FAKE exists to help researchers separate the volume of a signal from its inherent truth.
            </p>
          </div>
          <div className="space-y-3 p-6 border-l border-black/15">
            <h3 className="text-base font-bold text-electric-blue font-display">03. Strategic Legibility</h3>
            <p className="text-xs text-soft-slate leading-relaxed">
              Legibility should be accessible to all, not just those who own the platforms. Our tools level the analytical playing field for the observer.
            </p>
          </div>
          <div className="space-y-3 p-6 border-l border-black/15">
            <h3 className="text-base font-bold text-electric-blue font-display">04. Intentional Coordination</h3>
            <p className="text-xs text-soft-slate leading-relaxed">
              We promote the study of coordinated effort as a legitimate field of inquiry, moving beyond the pejorative labels used by incumbents.
            </p>
          </div>
        </section>

        <section className="glass-card p-8 text-center border-signal-purple/10">
          <h2 className="text-2xl font-bold mb-4 text-black font-display">Responsibility Always.</h2>
          <p className="text-soft-slate text-sm font-light leading-relaxed">
            FAKE is not a weapon of mass influence. It is a lens of mass clarity. Those who use our tools are expected to bring their own moral compass; we merely provide the map.
          </p>
          <div className="pt-6 text-[9px] font-mono uppercase tracking-wider text-black/40">
            Alpha Tek Systems Cartography Unit
          </div>
        </section>
      </div>
    </div>
  );
};

export default EthicsMobile;
