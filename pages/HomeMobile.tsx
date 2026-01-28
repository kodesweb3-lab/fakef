import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Home Page Mobile View
 * 
 * Modern mobile-first landing page with smooth animations and better UI.
 */

const HomeMobile: React.FC = () => {
  const isAuthorized = localStorage.getItem('fake_authorized') === 'true';

  return (
    <div className="pb-8">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex flex-col items-center justify-center px-4 overflow-hidden -mx-4 mb-8">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-electric-blue/10 rounded-full blur-[100px] animate-subtle-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-signal-purple/10 rounded-full blur-[100px] animate-subtle-glow" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="relative z-10 w-full text-center space-y-6">
          <div className="space-y-4">
            <div className="flex flex-col items-center justify-center space-y-2">
              <h1 className="text-5xl font-bold tracking-tight text-white font-display uppercase">
                FAKE
              </h1>
              <h2 className="text-3xl font-bold tracking-tight text-signal-purple font-display uppercase">
                Tek
              </h2>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-soft-slate tracking-[0.2em] uppercase font-light">
                Field Analysis of Kinetic Engagement
              </p>
              <p className="text-[9px] font-mono text-electric-blue uppercase tracking-[0.4em] opacity-60">
                An Alpha Tek Research Initiative
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 pt-4">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-electric-blue/40 to-transparent" />
            <p className="text-xl text-white font-light tracking-tight font-display leading-tight italic px-4">
              "You cannot navigate systems you don't understand."
            </p>
            <div className="flex flex-col gap-3 pt-2 w-full max-w-sm">
              <Link 
                to={isAuthorized ? "/dashboard" : "/auth/login"} 
                className="w-full px-6 py-4 bg-electric-blue text-midnight hover:bg-white transition-all tracking-[0.15em] uppercase text-xs font-bold font-mono shadow-[0_0_30px_rgba(79,140,255,0.3)] text-center rounded-xl active:scale-95"
              >
                {isAuthorized ? 'Enter Research Hub' : 'Join the Research'}
              </Link>
              <Link 
                to="/domains" 
                className="w-full px-6 py-4 border-2 border-white/20 text-white hover:bg-white/10 transition-all tracking-[0.15em] uppercase text-xs font-bold font-mono text-center rounded-xl active:scale-95"
              >
                Observe Domains
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions Cards */}
      <div className="space-y-4 mb-8">
        {isAuthorized ? (
          <Link
            to="/dashboard"
            className="block p-6 bg-white/5 border border-white/10 hover:border-electric-blue/30 rounded-2xl transition-all active:scale-[0.98] backdrop-blur-sm"
          >
            <div className="space-y-2">
              <h3 className="text-base font-bold text-white font-display uppercase">Continue Research</h3>
              <p className="text-sm text-soft-slate font-light">
                Access your research hub and active projects
              </p>
            </div>
          </Link>
        ) : (
          <Link
            to="/auth/login"
            className="block p-6 bg-electric-blue/10 border-2 border-electric-blue/30 hover:border-electric-blue/50 rounded-2xl transition-all active:scale-[0.98] backdrop-blur-sm"
          >
            <div className="space-y-2">
              <h3 className="text-base font-bold text-electric-blue font-display uppercase">Join the Research</h3>
              <p className="text-sm text-soft-slate font-light">
                Authorize to access research tools and instruments
              </p>
            </div>
          </Link>
        )}

        <Link
          to={isAuthorized ? "/scan" : "/auth/login"}
          className="block p-6 bg-white/5 border border-white/10 hover:border-electric-blue/30 rounded-2xl transition-all active:scale-[0.98] backdrop-blur-sm"
        >
          <div className="space-y-2">
            <h3 className="text-base font-bold text-white font-display uppercase">Start a Scan</h3>
            <p className="text-sm text-soft-slate font-light">
              Observe signals and save research items
            </p>
          </div>
        </Link>
      </div>

      {/* Philosophy Section */}
      <div className="space-y-6 mb-8">
        <div className="space-y-3">
          <h2 className="text-2xl font-bold tracking-tight font-display text-white uppercase">The Philosophy</h2>
          <div className="w-16 h-1 bg-electric-blue rounded-full" />
        </div>
        <div className="space-y-4 text-sm text-soft-slate font-light leading-relaxed">
          <p>
            Attention has become the most valuable resource on the internet. It is mined, traded, and manufactured, yet rarely understood by those who provide it.
          </p>
          <ul className="space-y-3 pt-2 border-l-2 border-electric-blue/20 pl-4">
            <li><span className="text-white font-medium">Velocity</span> is rewarded over <span className="italic">Quality</span>.</li>
            <li><span className="text-white font-medium">Coordination</span> favors <span className="italic">Visibility</span> over Creativity.</li>
            <li><span className="text-white font-medium">Engagement</span> is often mistaken for <span className="italic">Truth</span>.</li>
          </ul>
          <p className="pt-4 text-white font-medium uppercase tracking-wider text-xs">
            FAKE exists to deconstruct these mechanics through systematic audit.
          </p>
        </div>
      </div>

      {/* Observational Protocol Card */}
      <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-4 backdrop-blur-sm mb-8">
        <div className="space-y-2">
          <h3 className="text-xs font-mono uppercase tracking-[0.5em] text-electric-blue">Observational Protocol</h3>
          <p className="text-xs text-soft-slate leading-relaxed font-light">
            We are not a marketing agency. We do not provide short-term growth hacks. We build the high-fidelity instruments needed to observe how signals propagate.
          </p>
        </div>
        
        <div className="space-y-3 pt-2">
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 border-b border-white/5 pb-2">Primary Inquiry Tracks</p>
          <div className="space-y-3">
            {[
              { label: "Participation Clustering", detail: "How synchronized activity influences platform distribution." },
              { label: "Visibility Thresholds", detail: "Detecting the breakout points in algorithmic queues." },
              { label: "Kinetic Momentum", detail: "Modeling the energy decay of high-velocity signals." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-3">
                <div className="w-1.5 h-1.5 bg-electric-blue rounded-full mt-1.5 flex-shrink-0" />
                <div>
                  <span className="text-xs font-bold text-white block uppercase tracking-wider">{item.label}</span>
                  <p className="text-[10px] text-soft-slate/60 mt-0.5">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quote Card */}
      <div className="p-6 border border-white/5 bg-midnight/50 rounded-2xl text-center space-y-3 backdrop-blur-sm">
        <p className="text-sm text-soft-slate italic font-light leading-relaxed">
          "Our tools are designed to observe, measure, and experiment — not to fake outcomes or bypass systems."
        </p>
        <div className="w-8 h-px bg-white/10 mx-auto" />
        <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.5em]">FAKE Cartography Unit</p>
      </div>

      {/* Final CTA */}
      <div className="mt-8 text-center space-y-4">
        <div className="space-y-2">
          <h3 className="text-[10px] font-mono uppercase tracking-[0.3em] text-signal-purple">Ready to observe?</h3>
          <h2 className="text-3xl font-bold tracking-tight text-white font-display leading-[0.9]">
            Understand first.<br/>
            Everything second.
          </h2>
        </div>
        <Link 
          to={isAuthorized ? "/dashboard" : "/auth/login"} 
          className="inline-block px-8 py-4 border-2 border-white/20 text-white hover:bg-white/10 transition-all tracking-[0.2em] uppercase text-xs font-bold font-mono rounded-xl active:scale-95"
        >
          Access Research Hub
        </Link>
      </div>
    </div>
  );
};

export default HomeMobile;
