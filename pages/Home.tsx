
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const isAuthorized = localStorage.getItem('fake_authorized') === 'true';

  return (
    <div className="pb-24">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex flex-col items-center justify-center px-6 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-blue/10 rounded-full blur-[100px] animate-subtle-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-signal-purple/10 rounded-full blur-[100px] animate-subtle-glow" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="relative z-10 max-w-5xl w-full text-center space-y-14">
          <div className="space-y-8">
            <h1 className="text-[10rem] md:text-[16rem] font-bold tracking-[-0.05em] leading-[0.75] text-white font-display">
              FAKE
            </h1>
            <div className="space-y-2">
              <p className="text-xl md:text-2xl text-soft-slate tracking-[0.4em] uppercase font-light max-w-3xl mx-auto">
                Field Analysis of Kinetic Engagement
              </p>
              <p className="text-[10px] font-mono text-electric-blue uppercase tracking-[0.8em] opacity-40">An Alpha Tek Research Initiative</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-10 pt-10">
            <div className="h-px w-48 bg-gradient-to-r from-transparent via-electric-blue/40 to-transparent" />
            <p className="text-3xl md:text-5xl text-white font-light tracking-tight max-w-4xl font-display leading-tight italic">
              “You cannot navigate systems you don’t understand.”
            </p>
            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <Link 
                to={isAuthorized ? "/dashboard" : "/auth/login"} 
                className="px-12 py-5 bg-electric-blue text-midnight hover:bg-white transition-all tracking-[0.3em] uppercase text-xs font-bold font-mono shadow-[0_0_30px_rgba(79,140,255,0.2)]"
              >
                {isAuthorized ? 'Enter Research Hub' : 'Join the Research'}
              </Link>
              <Link 
                to="/domains" 
                className="px-12 py-5 border border-white/10 text-white hover:bg-white/5 transition-all tracking-[0.3em] uppercase text-xs font-bold font-mono"
              >
                Observe Domains
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-20">
            <span className="text-[10px] font-mono uppercase tracking-[0.4em]">Scroll</span>
            <div className="w-px h-12 bg-white" />
        </div>
      </section>

      {/* Presentation Content */}
      <section className="max-w-7xl mx-auto px-6 py-48 border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-6xl font-bold tracking-tight font-display text-white uppercase">The Philosophy</h2>
              <div className="w-24 h-1.5 bg-electric-blue" />
            </div>
            <div className="space-y-8 text-2xl text-soft-slate font-light leading-relaxed">
              <p>
                Attention has become the most valuable resource on the internet. It is mined, traded, and manufactured, yet rarely understood by those who provide it.
              </p>
              <ul className="space-y-6 pt-6 border-l-2 border-electric-blue/20 pl-10">
                <li><span className="text-white font-medium">Velocity</span> is rewarded over <span className="italic">Quality</span>.</li>
                <li><span className="text-white font-medium">Coordination</span> favors <span className="italic">Visibility</span> over Creativity.</li>
                <li><span className="text-white font-medium">Engagement</span> is often mistaken for <span className="italic">Truth</span>.</li>
              </ul>
              <p className="pt-8 text-white font-medium uppercase tracking-widest text-sm">
                FAKE exists to deconstruct these mechanics through systematic audit.
              </p>
            </div>
          </div>

          <div className="space-y-16">
            <div className="glass-card p-12 space-y-12 border-white/10 bg-white/[0.02]">
              <div className="space-y-2">
                <h3 className="text-xs font-mono uppercase tracking-[0.5em] text-electric-blue">Observational Protocol</h3>
                <p className="text-soft-slate text-sm leading-relaxed font-light">
                  We are not a marketing agency. We do not provide short-term growth hacks. We build the high-fidelity instruments needed to observe how signals propagate.
                </p>
              </div>
              
              <div className="space-y-6">
                <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 border-b border-white/5 pb-2">Primary Inquiry Tracks</p>
                <div className="grid grid-cols-1 gap-6">
                  {[
                    { label: "Participation Clustering", detail: "How synchronized activity influences platform distribution." },
                    { label: "Visibility Thresholds", detail: "Detecting the breakout points in algorithmic queues." },
                    { label: "Kinetic Momentum", desc: "Modeling the energy decay of high-velocity signals." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="w-1 h-1 bg-electric-blue mt-2 flex-shrink-0" />
                      <div>
                        <span className="text-sm font-bold text-white block uppercase tracking-wider">{item.label}</span>
                        <p className="text-xs text-soft-slate/60 mt-1">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-12 border border-white/5 bg-midnight space-y-6 text-center">
               <p className="text-soft-slate text-lg italic font-light">
                 "Our tools are designed to observe, measure, and experiment — not to fake outcomes or bypass systems."
               </p>
               <div className="w-12 h-px bg-white/10 mx-auto" />
               <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.5em]">FAKE Cartography Unit</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="text-center py-64 px-6 relative bg-white/[0.01]">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="space-y-6">
            <h3 className="text-sm font-mono uppercase tracking-[0.6em] text-signal-purple">Ready to observe?</h3>
            <h2 className="text-7xl md:text-9xl font-bold tracking-tight text-white font-display leading-[0.8]">
              Understand first.<br/>
              Everything second.
            </h2>
          </div>
          <Link 
            to={isAuthorized ? "/dashboard" : "/auth/login"} 
            className="inline-block px-20 py-6 border border-white/20 text-white hover:bg-white hover:text-midnight transition-all tracking-[0.5em] uppercase text-xs font-bold font-mono"
          >
            Access Research Hub
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
