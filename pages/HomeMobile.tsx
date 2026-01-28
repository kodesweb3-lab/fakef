import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Home Page Mobile View
 * 
 * Landing page similar to desktop version, optimized for mobile.
 */

const HomeMobile: React.FC = () => {
  const isAuthorized = localStorage.getItem('fake_authorized') === 'true';

  return (
    <div className="pb-24">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center px-4 overflow-hidden pt-8">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-electric-blue/10 rounded-full blur-[100px] animate-subtle-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-signal-purple/10 rounded-full blur-[100px] animate-subtle-glow" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="relative z-10 max-w-5xl w-full text-center space-y-6">
          <div className="space-y-4">
            <div className="flex flex-col items-center justify-center px-2 space-y-2">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white font-display uppercase">
                FAKE
              </h1>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-signal-purple font-display uppercase">
                Tek
              </h2>
            </div>
            <div className="space-y-1.5">
              <p className="text-xs sm:text-sm text-soft-slate tracking-[0.2em] sm:tracking-[0.3em] uppercase font-light max-w-3xl mx-auto px-3">
                Field Analysis of Kinetic Engagement
              </p>
              <p className="text-[8px] sm:text-[9px] font-mono text-electric-blue uppercase tracking-[0.3em] sm:tracking-[0.5em] opacity-40">An Alpha Tek Research Initiative</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 pt-4">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-electric-blue/40 to-transparent" />
            <p className="text-lg sm:text-xl text-white font-light tracking-tight max-w-4xl font-display leading-tight italic px-3">
              "You cannot navigate systems you don't understand."
            </p>
            <div className="flex flex-col gap-3 pt-3 w-full px-3">
              <Link 
                to={isAuthorized ? "/dashboard" : "/auth/login"} 
                className="w-full px-6 py-3 bg-electric-blue text-midnight hover:bg-white transition-all tracking-[0.15em] uppercase text-[10px] font-bold font-mono shadow-[0_0_30px_rgba(79,140,255,0.2)] text-center"
              >
                {isAuthorized ? 'Enter Research Hub' : 'Join the Research'}
              </Link>
              <Link 
                to="/domains" 
                className="w-full px-6 py-3 border border-white/10 text-white hover:bg-white/5 transition-all tracking-[0.15em] uppercase text-[10px] font-bold font-mono text-center"
              >
                Observe Domains
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Presentation Content */}
      <section className="max-w-7xl mx-auto px-4 py-12 border-t border-white/5">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight font-display text-white uppercase">The Philosophy</h2>
              <div className="w-16 h-1 bg-electric-blue" />
            </div>
            <div className="space-y-4 text-sm text-soft-slate font-light leading-relaxed">
              <p>
                Attention has become the most valuable resource on the internet. It is mined, traded, and manufactured, yet rarely understood by those who provide it.
              </p>
              <ul className="space-y-3 pt-4 border-l-2 border-electric-blue/20 pl-4">
                <li><span className="text-white font-medium">Velocity</span> is rewarded over <span className="italic">Quality</span>.</li>
                <li><span className="text-white font-medium">Coordination</span> favors <span className="italic">Visibility</span> over Creativity.</li>
                <li><span className="text-white font-medium">Engagement</span> is often mistaken for <span className="italic">Truth</span>.</li>
              </ul>
              <p className="pt-6 text-white font-medium uppercase tracking-widest text-xs">
                FAKE exists to deconstruct these mechanics through systematic audit.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-card p-6 space-y-6 border-white/10 bg-white/[0.02]">
              <div className="space-y-2">
                <h3 className="text-xs font-mono uppercase tracking-[0.5em] text-electric-blue">Observational Protocol</h3>
                <p className="text-soft-slate text-xs leading-relaxed font-light">
                  We are not a marketing agency. We do not provide short-term growth hacks. We build the high-fidelity instruments needed to observe how signals propagate.
                </p>
              </div>
              
              <div className="space-y-4">
                <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 border-b border-white/5 pb-2">Primary Inquiry Tracks</p>
                <div className="space-y-4">
                  {[
                    { label: "Participation Clustering", detail: "How synchronized activity influences platform distribution." },
                    { label: "Visibility Thresholds", detail: "Detecting the breakout points in algorithmic queues." },
                    { label: "Kinetic Momentum", detail: "Modeling the energy decay of high-velocity signals." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-3">
                      <div className="w-1 h-1 bg-electric-blue mt-2 flex-shrink-0" />
                      <div>
                        <span className="text-xs font-bold text-white block uppercase tracking-wider">{item.label}</span>
                        <p className="text-[10px] text-soft-slate/60 mt-1">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 border border-white/5 bg-midnight space-y-4 text-center">
               <p className="text-soft-slate text-xs italic font-light px-2">
                 "Our tools are designed to observe, measure, and experiment — not to fake outcomes or bypass systems."
               </p>
               <div className="w-8 h-px bg-white/10 mx-auto" />
               <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.5em]">FAKE Cartography Unit</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="text-center py-16 px-4 relative bg-white/[0.01]">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="space-y-3">
            <h3 className="text-[10px] font-mono uppercase tracking-[0.3em] text-signal-purple">Ready to observe?</h3>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display leading-[0.85] px-2">
              Understand first.<br/>
              Everything second.
            </h2>
          </div>
          <Link 
            to={isAuthorized ? "/dashboard" : "/auth/login"} 
            className="inline-block px-8 py-3 border border-white/20 text-white hover:bg-white hover:text-midnight transition-all tracking-[0.2em] uppercase text-[10px] font-bold font-mono"
          >
            Access Research Hub
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomeMobile;
