import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CornerHover } from '../components/ui/CornerHover';

interface OnboardingProps {
  onComplete: () => void;
}

const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const navigate = useNavigate();

  const handleConnect = () => {
    setIsLoggingIn(true);
    // Fake login delay
    setTimeout(() => {
      onComplete();
      navigate('/dashboard');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-[100] bg-midnight flex flex-col items-center justify-center p-6 bg-grid">
      <div className="absolute top-12 left-12 flex items-center gap-4">
         <div className="w-10 h-10 border border-black/20 flex items-center justify-center">
            <span className="font-bold text-[10px] text-black tracking-tighter">FK</span>
         </div>
         <span className="font-bold text-2xl tracking-[0.3em] text-black font-display">FAKE</span>
      </div>

      <CornerHover className="max-w-md w-full overflow-visible" cornerSize="lg">
      <div className="glass-card p-10 space-y-10 border-black/10 overflow-visible">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tight text-black font-display">Authorize Node</h1>
          <p className="text-xs text-soft-slate leading-relaxed font-light uppercase tracking-widest">
            Connect your wallet to access the FAKE research hub.
          </p>
        </div>

        <div className="space-y-4">
          <CornerHover className="w-full" cornerSize="sm">
          <button 
              onClick={handleConnect}
              disabled={isLoggingIn}
              className="block w-full flex items-center justify-between px-6 py-4 bg-black/5 border border-black/10 hover:border-black/20 hover:bg-black/10 transition-all group disabled:opacity-50"
          >
              <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-[#F6851B]/20 flex items-center justify-center rounded-sm">
                      <svg className="w-5 h-5 text-[#F6851B]" fill="currentColor" viewBox="0 0 24 24"><path d="M22,11.3l-1.5-2.7c-0.1-0.1-0.2-0.2-0.4-0.2h-3.3L15.3,4c-0.1-0.2-0.3-0.3-0.5-0.3c-0.2,0-0.4,0.1-0.5,0.3l-1.5,4.4H9.5L8,4C7.9,3.8,7.7,3.7,7.5,3.7C7.3,3.7,7.1,3.8,7,4l-1.5,4.4H2.2c-0.2,0-0.3,0.1-0.4,0.2C1.7,8.7,1.7,8.9,1.8,9l1.5,2.7l-1.5,2.7c-0.1,0.1-0.1,0.3,0,0.4c0.1,0.2,0.2,0.2,0.4,0.2h3.3l1.5,4.4c0.1,0.2,0.3,0.3,0.5,0.3c0.2,0,0.4-0.1,0.5-0.3l1.5-4.4h3.3l1.5,4.4c0.1,0.2,0.3,0.3,0.5,0.3s0.4-0.1,0.5-0.3l1.5-4.4h3.3c0.2,0,0.3-0.1,0.4-0.2c0.1-0.1,0.1-0.3,0-0.4L22,11.3z"/></svg>
                  </div>
                  <span className="text-xs font-bold font-mono text-black uppercase tracking-widest">MetaMask</span>
              </div>
              <span className="text-[9px] text-black/40 font-mono">BROWSER</span>
          </button>
          </CornerHover>

          <CornerHover className="w-full" cornerSize="sm">
          <button 
              onClick={handleConnect}
              disabled={isLoggingIn}
              className="block w-full flex items-center justify-between px-6 py-4 bg-black/5 border border-black/10 hover:border-black/20 hover:bg-black/10 transition-all group disabled:opacity-50"
          >
              <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-[#3B99FC]/20 flex items-center justify-center rounded-sm">
                      <svg className="w-5 h-5 text-[#3B99FC]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z"/></svg>
                  </div>
                  <span className="text-xs font-bold font-mono text-black uppercase tracking-widest">WalletConnect</span>
              </div>
              <span className="text-[9px] text-black/40 font-mono">MOBILE</span>
          </button>
          </CornerHover>
        </div>

        <div className="pt-8 border-t border-black/10">
           {isLoggingIn ? (
              <div className="flex flex-col items-center gap-4">
                 <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin" />
                 <span className="text-[9px] font-mono text-soft-slate uppercase tracking-widest animate-pulse">Establishing Secure Node...</span>
              </div>
           ) : (
             <div className="space-y-4 text-center">
                <p className="text-[9px] font-mono text-soft-slate/40 uppercase leading-relaxed tracking-wider">
                  Demo access enabled. No real private keys or sensitive data will be stored.
                </p>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-black/40" />
                  <span className="text-[10px] font-mono text-black/60 uppercase tracking-widest">Awaiting Signal</span>
                </div>
             </div>
           )}
        </div>
      </div>
      </CornerHover>
      
      <div className="mt-16 text-[9px] font-mono text-black/20 uppercase tracking-[0.8em]">
        Alpha Tek Division // Systems Cartography Unit // V.5.0.1
      </div>
    </div>
  );
};

export default Onboarding;
