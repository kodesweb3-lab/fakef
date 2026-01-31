import React from 'react';
import { Link } from 'react-router-dom';
import { CornerHover } from '../components/ui/CornerHover';

/**
 * Home Page Mobile View
 * 
 * Modern mobile-first landing page with smooth animations and better UI.
 */

const HomeMobile: React.FC = () => {
  const isAuthorized = localStorage.getItem('fake_authorized') === 'true';

  return (
    <div className="pb-8">
      {/* Hero Section — bigger, relative; FAKE over logo, tek under */}
      <section className="relative min-h-[70vh] sm:min-h-[75vh] flex flex-col items-center justify-center px-4 overflow-hidden -mx-4 mb-8 py-[clamp(1.5rem,5vw,3rem)]">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-15">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-black/5 rounded-full blur-[100px] animate-subtle-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-black/5 rounded-full blur-[100px] animate-subtle-glow" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="relative z-10 w-full text-center space-y-6">
          <div className="space-y-4">
            {/* Logo block: FAKE over logo, tek under — relative sizing */}
            <div className="flex flex-col items-center justify-center space-y-2 sm:space-y-3">
              <div 
                className="relative flex items-center justify-center"
                style={{ width: 'min(85vw, clamp(10rem, 35vmin, 16rem))', height: 'min(85vw, clamp(10rem, 35vmin, 16rem))' }}
              >
                <img
                  src="./fakeballswhite.svg"
                  alt=""
                  className="absolute inset-0 w-full h-full object-contain opacity-[0.12] invert select-none pointer-events-none"
                  aria-hidden="true"
                />
                <h1 
                  className="relative z-10 font-bold tracking-tight text-black font-display uppercase text-center leading-none"
                  style={{ fontSize: 'clamp(2.5rem, 14vmin, 5rem)' }}
                >
                  FAKE
                </h1>
              </div>
              <h2 
                className="font-bold tracking-tight text-soft-slate font-display uppercase"
                style={{ fontSize: 'clamp(1.25rem, 5vmin, 2.5rem)' }}
              >
                Tek
              </h2>
            </div>
            <div className="space-y-2">
              <p className="text-soft-slate tracking-[0.2em] uppercase font-light" style={{ fontSize: 'clamp(0.75rem, 2.5vmin, 1rem)' }}>
                Field Analysis of Kinetic Engagement
              </p>
              <p className="font-mono text-soft-slate uppercase tracking-[0.4em] opacity-60" style={{ fontSize: 'clamp(0.5rem, 1.5vmin, 0.6rem)' }}>
                An Alpha Tek Research Initiative
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 pt-4">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
            <p className="text-black font-light tracking-tight font-display leading-tight italic px-4" style={{ fontSize: 'clamp(1rem, 4vmin, 1.5rem)' }}>
              "You cannot navigate systems you don't understand."
            </p>
            <div className="flex flex-col gap-3 pt-2 w-full max-w-sm">
              <CornerHover className="w-full" cornerSize="sm">
                <Link 
                  to={isAuthorized ? "/dashboard" : "/auth/login"} 
                  className="block w-full px-6 py-4 bg-black text-white hover:bg-soft-slate transition-all tracking-[0.15em] uppercase text-xs font-bold font-mono shadow-[0_4px_24px_rgba(0,0,0,0.25)] text-center rounded-xl active:scale-95"
                >
                  {isAuthorized ? 'Enter Research Hub' : 'Join the Research'}
                </Link>
              </CornerHover>
              <CornerHover className="w-full" cornerSize="sm">
                <Link 
                  to="/domains" 
                  className="block w-full px-6 py-4 border-2 border-black/20 text-black hover:bg-black/5 transition-all tracking-[0.15em] uppercase text-xs font-bold font-mono text-center rounded-xl active:scale-95"
                >
                  Observe Domains
                </Link>
              </CornerHover>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions Cards */}
      <div className="space-y-4 mb-8">
        {isAuthorized ? (
          <CornerHover className="block overflow-visible" cornerSize="md">
            <Link
              to="/dashboard"
              className="block p-6 bg-black/5 border border-black/10 hover:border-black/20 rounded-2xl transition-all active:scale-[0.98] backdrop-blur-sm overflow-visible"
            >
              <div className="space-y-2">
                <h3 className="text-base font-bold text-black font-display uppercase">Continue Research</h3>
                <p className="text-sm text-soft-slate font-light">
                  Access your research hub and active projects
                </p>
              </div>
            </Link>
          </CornerHover>
        ) : (
          <CornerHover className="block overflow-visible" cornerSize="md">
            <Link
              to="/auth/login"
              className="block p-6 bg-black/5 border-2 border-black/20 hover:border-black/30 rounded-2xl transition-all active:scale-[0.98] backdrop-blur-sm overflow-visible"
            >
              <div className="space-y-2">
                <h3 className="text-base font-bold text-black font-display uppercase">Join the Research</h3>
                <p className="text-sm text-soft-slate font-light">
                  Authorize to access research tools and instruments
                </p>
              </div>
            </Link>
          </CornerHover>
        )}

        <CornerHover className="block overflow-visible" cornerSize="md">
          <Link
            to={isAuthorized ? "/scan" : "/auth/login"}
            className="block p-6 bg-black/5 border border-black/10 hover:border-black/20 rounded-2xl transition-all active:scale-[0.98] backdrop-blur-sm overflow-visible"
          >
            <div className="space-y-2">
              <h3 className="text-base font-bold text-black font-display uppercase">Start a Scan</h3>
              <p className="text-sm text-soft-slate font-light">
                Observe signals and save research items
              </p>
            </div>
          </Link>
        </CornerHover>
      </div>

      {/* Philosophy Section */}
      <div className="space-y-6 mb-8">
        <div className="space-y-3">
          <h2 className="text-2xl font-bold tracking-tight font-display text-black uppercase">The Philosophy</h2>
          <div className="w-16 h-1 bg-black rounded-full" />
        </div>
        <div className="space-y-4 text-sm text-soft-slate font-light leading-relaxed">
          <p>
            Attention has become the most valuable resource on the internet. It is mined, traded, and manufactured, yet rarely understood by those who provide it.
          </p>
          <ul className="space-y-3 pt-2 border-l-2 border-black/20 pl-4">
            <li><span className="text-black font-medium">Velocity</span> is rewarded over <span className="italic">Quality</span>.</li>
            <li><span className="text-black font-medium">Coordination</span> favors <span className="italic">Visibility</span> over Creativity.</li>
            <li><span className="text-black font-medium">Engagement</span> is often mistaken for <span className="italic">Truth</span>.</li>
          </ul>
          <p className="pt-4 text-black font-medium uppercase tracking-wider text-xs">
            FAKE exists to deconstruct these mechanics through systematic audit.
          </p>
        </div>
      </div>

      {/* Observational Protocol Card */}
      <CornerHover className="block overflow-visible mb-8" cornerSize="md">
      <div className="p-6 bg-black/5 border border-black/10 rounded-2xl space-y-4 backdrop-blur-sm overflow-visible">
        <div className="space-y-2">
          <h3 className="text-xs font-mono uppercase tracking-[0.5em] text-soft-slate">Observational Protocol</h3>
          <p className="text-xs text-soft-slate leading-relaxed font-light">
            We are not a marketing agency. We do not provide short-term growth hacks. We build the high-fidelity instruments needed to observe how signals propagate.
          </p>
        </div>
        
        <div className="space-y-3 pt-2">
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-black/50 border-b border-black/10 pb-2">Primary Inquiry Tracks</p>
          <div className="space-y-3">
            {[
              { label: "Participation Clustering", detail: "How synchronized activity influences platform distribution." },
              { label: "Visibility Thresholds", detail: "Detecting the breakout points in algorithmic queues." },
              { label: "Kinetic Momentum", detail: "Modeling the energy decay of high-velocity signals." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-3">
                <div className="w-1.5 h-1.5 bg-white rounded-full mt-1.5 flex-shrink-0" />
                <div>
                  <span className="text-xs font-bold text-black block uppercase tracking-wider">{item.label}</span>
                  <p className="text-[10px] text-soft-slate/60 mt-0.5">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </CornerHover>

      {/* Quote Card */}
      <CornerHover className="block overflow-visible" cornerSize="md">
      <div className="p-6 border border-black/5 bg-midnight/50 rounded-2xl text-center space-y-3 backdrop-blur-sm overflow-visible">
        <p className="text-sm text-soft-slate italic font-light leading-relaxed">
          "Our tools are designed to observe, measure, and experiment — not to fake outcomes or bypass systems."
        </p>
        <div className="w-8 h-px bg-black/5 mx-auto" />
        <p className="text-[10px] font-mono text-black/20 uppercase tracking-[0.5em]">FAKE Cartography Unit</p>
      </div>
      </CornerHover>

      {/* Final CTA */}
      <div className="mt-8 text-center space-y-4">
        <div className="space-y-2">
          <h3 className="text-[10px] font-mono uppercase tracking-[0.3em] text-soft-slate">Ready to observe?</h3>
          <h2 className="text-3xl font-bold tracking-tight text-black font-display leading-[0.9]">
            Understand first.<br/>
            Everything second.
          </h2>
        </div>
        <CornerHover className="inline-block" cornerSize="sm">
          <Link 
            to={isAuthorized ? "/dashboard" : "/auth/login"} 
            className="block px-8 py-4 border-2 border-black/20 text-black hover:bg-black/5 transition-all tracking-[0.2em] uppercase text-xs font-bold font-mono rounded-xl active:scale-95"
          >
            Access Research Hub
          </Link>
        </CornerHover>
      </div>
    </div>
  );
};

export default HomeMobile;
