import React from 'react';
import { Link } from 'react-router-dom';
import { CornerHover } from '../components/ui/CornerHover';
import { useHeroTyping } from '../hooks/useHeroTyping';
import { WordmarkLogo } from '../components/WordmarkLogo';

const HomeDesktop: React.FC = () => {
  const isAuthorized = localStorage.getItem('fake_authorized') === 'true';
  const { phase, typedLine1, typedLine2, cursorVisible, introComplete, fullLine1, fullLine2 } = useHeroTyping();

  return (
    <div className="pb-24">
      {/* Hero Section — logo → FAKE Tek → live typing → rest */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex flex-col items-center justify-center px-3 sm:px-4 md:px-6 overflow-hidden pt-16 sm:pt-20 md:pt-0 py-[clamp(2rem,6vw,4rem)]">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-15">
          <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-black/5 rounded-full blur-[100px] animate-subtle-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-black/5 rounded-full blur-[100px] animate-subtle-glow" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="relative z-10 max-w-5xl w-full text-center space-y-6 sm:space-y-10 md:space-y-14">
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {/* 1. Logo — appears first */}
            <div className={`flex flex-col items-center justify-center px-2 space-y-2 sm:space-y-3 transition-opacity duration-500 ${phase >= 0 ? 'opacity-100' : 'opacity-0'}`}>
              <div className={`transition-opacity duration-500 ${phase >= 1 ? 'opacity-100' : 'opacity-0'}`}>
                <WordmarkLogo size="xl" stacked />
              </div>
            </div>
            {/* 2. Live typing: Field Analysis... then An Alpha Tek... */}
            <div className="space-y-1.5 sm:space-y-2 min-h-[3.5em] flex flex-col justify-center">
              <p className="text-soft-slate tracking-[0.15em] sm:tracking-[0.3em] md:tracking-[0.4em] uppercase font-light max-w-3xl mx-auto px-3 sm:px-4" style={{ fontSize: 'clamp(0.7rem, 2vmin, 1.5rem)' }}>
                {phase >= 3 ? fullLine1 : typedLine1}
                {phase === 2 && (
                  <span className={`inline-block w-0.5 h-[1em] align-baseline bg-soft-slate ml-0.5 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`} style={{ animation: 'none' }} aria-hidden />
                )}
              </p>
              <p className="font-mono text-soft-slate uppercase tracking-[0.3em] sm:tracking-[0.5em] md:tracking-[0.8em] opacity-60" style={{ fontSize: 'clamp(0.5rem, 1.2vmin, 0.65rem)' }}>
                {phase >= 4 ? fullLine2 : typedLine2}
                {phase === 3 && (
                  <span className={`inline-block w-0.5 h-[0.9em] align-baseline bg-soft-slate ml-0.5 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`} aria-hidden />
                )}
              </p>
            </div>
          </div>

          {/* 3. Rest of hero (quote, buttons) — after typing complete */}
          <div className={`flex flex-col items-center gap-4 sm:gap-6 md:gap-10 pt-4 sm:pt-6 md:pt-10 transition-opacity duration-700 ${introComplete ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className="h-px w-24 sm:w-32 md:w-48 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
            <p className="text-black font-light tracking-tight max-w-4xl font-display leading-tight italic px-3 sm:px-4" style={{ fontSize: 'clamp(1rem, 3vmin, 3rem)' }}>
              "You cannot navigate systems you don't understand."
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 pt-3 sm:pt-4 md:pt-6 w-full sm:w-auto px-3 sm:px-0">
              <CornerHover className="w-full sm:w-auto" cornerSize="sm">
                <Link 
                  to={isAuthorized ? "/dashboard" : "/auth/login"} 
                  className="block w-full px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5 bg-black text-white hover:bg-soft-slate transition-all tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] uppercase text-[10px] sm:text-xs font-bold font-mono shadow-[0_4px_24px_rgba(0,0,0,0.25)] text-center"
                >
                  {isAuthorized ? 'Enter Research Hub' : 'Join the Research'}
                </Link>
              </CornerHover>
              <CornerHover className="w-full sm:w-auto" cornerSize="sm">
                <Link 
                  to="/domains" 
                  className="block w-full px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5 border border-black/10 text-black hover:bg-black/5 transition-all tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] uppercase text-[10px] sm:text-xs font-bold font-mono text-center"
                >
                  Observe Domains
                </Link>
              </CornerHover>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator — after intro */}
        <div className={`absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-20 hidden sm:flex transition-opacity duration-500 ${introComplete ? 'opacity-20' : 'opacity-0 pointer-events-none'}`}>
            <span className="text-[10px] font-mono uppercase tracking-[0.4em]">Scroll</span>
            <div className="w-px h-12 bg-black" />
        </div>
      </section>

      {/* Rest of website — fades in after intro */}
      <div className={`transition-opacity duration-700 ${introComplete ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      {/* Presentation Content */}
      <section className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-16 sm:py-24 md:py-48 border-t border-black/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 md:gap-32 items-start">
          <div className="space-y-6 sm:space-y-8 md:space-y-12">
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-display text-black uppercase">The Philosophy</h2>
              <div className="w-20 sm:w-24 h-1 sm:h-1.5 bg-black" />
            </div>
            <div className="space-y-4 sm:space-y-6 md:space-y-8 text-base sm:text-lg md:text-xl lg:text-2xl text-soft-slate font-light leading-relaxed">
              <p>
                Attention has become the most valuable resource on the internet. It is mined, traded, and manufactured, yet rarely understood by those who provide it.
              </p>
              <ul className="space-y-4 sm:space-y-6 pt-4 sm:pt-6 border-l-2 border-black/20 pl-4 sm:pl-6 md:pl-10">
                <li><span className="text-black font-medium">Velocity</span> is rewarded over <span className="italic">Quality</span>.</li>
                <li><span className="text-black font-medium">Coordination</span> favors <span className="italic">Visibility</span> over Creativity.</li>
                <li><span className="text-black font-medium">Engagement</span> is often mistaken for <span className="italic">Truth</span>.</li>
              </ul>
              <p className="pt-8 text-black font-medium uppercase tracking-widest text-sm">
                FAKE exists to deconstruct these mechanics through systematic audit.
              </p>
            </div>
          </div>

          <div className="space-y-8 sm:space-y-12 md:space-y-16">
            <CornerHover className="overflow-visible" cornerSize="lg">
              <div className="glass-card p-4 sm:p-6 md:p-12 space-y-6 sm:space-y-8 md:space-y-12 border-black/10 bg-black/[0.02] overflow-visible">
                <div className="space-y-2">
                <h3 className="text-xs font-mono uppercase tracking-[0.5em] text-soft-slate">Observational Protocol</h3>
                <p className="text-soft-slate text-sm leading-relaxed font-light">
                  We are not a marketing agency. We do not provide short-term growth hacks. We build the high-fidelity instruments needed to observe how signals propagate.
                </p>
              </div>
              
              <div className="space-y-6">
                <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-black/40 border-b border-black/10 pb-2">Primary Inquiry Tracks</p>
                <div className="grid grid-cols-1 gap-6">
                  {[
                    { label: "Participation Clustering", detail: "How synchronized activity influences platform distribution." },
                    { label: "Visibility Thresholds", detail: "Detecting the breakout points in algorithmic queues." },
                    { label: "Kinetic Momentum", detail: "Modeling the energy decay of high-velocity signals." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="w-1 h-1 bg-black mt-2 flex-shrink-0" />
                      <div>
                        <span className="text-sm font-bold text-black block uppercase tracking-wider">{item.label}</span>
                        <p className="text-xs text-soft-slate/60 mt-1">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              </div>
            </CornerHover>

            <CornerHover className="overflow-visible" cornerSize="lg">
              <div className="p-4 sm:p-6 md:p-12 border border-black/10 bg-black/5 space-y-4 sm:space-y-6 text-center overflow-visible">
                 <p className="text-soft-slate text-sm sm:text-base md:text-lg italic font-light px-2">
                   "Our tools are designed to observe, measure, and experiment — not to fake outcomes or bypass systems."
                 </p>
                 <div className="w-12 h-px bg-black/5 mx-auto" />
                 <p className="text-[10px] font-mono text-black/40 uppercase tracking-[0.5em]">FAKE Cartography Unit</p>
              </div>
            </CornerHover>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="text-center py-20 sm:py-32 md:py-64 px-3 sm:px-4 md:px-6 relative bg-black/[0.01]">
        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12 md:space-y-16">
          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            <h3 className="text-[10px] sm:text-xs md:text-sm font-mono uppercase tracking-[0.3em] sm:tracking-[0.4em] md:tracking-[0.6em] text-soft-slate">Ready to observe?</h3>
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-9xl font-bold tracking-tight text-black font-display leading-[0.85] sm:leading-[0.8] px-2 sm:px-4">
              Understand first.<br/>
              Everything second.
            </h2>
          </div>
          <CornerHover className="inline-block" cornerSize="sm">
            <Link 
              to={isAuthorized ? "/dashboard" : "/auth/login"} 
              className="block px-8 sm:px-12 md:px-20 py-3 sm:py-4 md:py-6 border border-black/20 text-black hover:bg-black hover:text-white transition-all tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.5em] uppercase text-[10px] sm:text-xs font-bold font-mono"
            >
              Access Research Hub
            </Link>
          </CornerHover>
        </div>
      </section>
      </div>
    </div>
  );
};

export default HomeDesktop;
