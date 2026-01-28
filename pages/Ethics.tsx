
import React from 'react';

const Ethics: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 space-y-24">
      <header className="space-y-8">
        <div className="text-xs uppercase tracking-[0.8em] text-electric-blue font-bold font-mono">Research Ethics</div>
        <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-white font-display">A Manifesto for Systems Cartographers</h1>
        <p className="text-soft-slate text-2xl font-light leading-relaxed italic border-l-2 border-electric-blue pl-10">
          "The first step in navigating a dark room is turning on the light. The second is realizing how the light changes the room."
        </p>
      </header>

      <div className="space-y-20">
        <section className="space-y-10">
          <div className="glass-card p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-electric-blue/5 rounded-full blur-3xl" />
            <h2 className="text-3xl font-bold mb-8 tracking-tight text-white font-display">The Illusion of Organicism</h2>
            <div className="space-y-6 text-soft-slate text-lg font-light leading-relaxed">
                <p>
                In the modern digital landscape, the distinction between "organic" and "coordinated" is often an artificial one created by platform owners to maintain perceived legitimacy. We believe that all engagement is kinetic — the result of force applied to a system.
                </p>
                <div className="py-8">
                    <p className="text-2xl font-medium text-white italic tracking-tight">
                    "To call a movement 'fake' because it was understood and navigated is to misunderstand the nature of movement itself."
                    </p>
                </div>
                <p>
                FAKE does not create phantom signals. We provide the instruments to see how signals propagate. If a tree falls in a forest and someone coordinates the recording, the sound is no less real.
                </p>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4 p-8 border-l border-white/5">
            <h3 className="text-xl font-bold text-electric-blue font-display">01. Neutral Observation</h3>
            <p className="text-sm text-soft-slate leading-relaxed">
              We do not moralize engagement. We study its velocity, density, and impact. A system is neither good nor evil; it is functional or dysfunctional.
            </p>
          </div>
          <div className="space-y-4 p-8 border-l border-white/5">
            <h3 className="text-xl font-bold text-electric-blue font-display">02. Decoupling Truth</h3>
            <p className="text-sm text-soft-slate leading-relaxed">
              Attention is a currency, not a verification tool. FAKE exists to help researchers separate the volume of a signal from its inherent truth.
            </p>
          </div>
          <div className="space-y-4 p-8 border-l border-white/5">
            <h3 className="text-xl font-bold text-electric-blue font-display">03. Strategic Legibility</h3>
            <p className="text-sm text-soft-slate leading-relaxed">
              Legibility should be accessible to all, not just those who own the platforms. Our tools level the analytical playing field for the observer.
            </p>
          </div>
          <div className="space-y-4 p-8 border-l border-white/5">
            <h3 className="text-xl font-bold text-electric-blue font-display">04. Intentional Coordination</h3>
            <p className="text-sm text-soft-slate leading-relaxed">
              We promote the study of coordinated effort as a legitimate field of inquiry, moving beyond the pejorative labels used by incumbents.
            </p>
          </div>
        </section>

        <section className="glass-card p-16 text-center border-signal-purple/10">
          <h2 className="text-4xl font-bold mb-6 text-white font-display">Responsibility Always.</h2>
          <p className="text-soft-slate text-lg font-light max-w-2xl mx-auto leading-relaxed">
            FAKE is not a weapon of mass influence. It is a lens of mass clarity. Those who use our tools are expected to bring their own moral compass; we merely provide the map.
          </p>
          <div className="pt-12 text-[10px] font-mono uppercase tracking-[0.5em] text-white/10">
            Alpha Tek Systems Cartography Unit
          </div>
        </section>
      </div>
    </div>
  );
};

export default Ethics;
