import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookie-consent', 'all');
    setIsVisible(false);
    // Trigger GA4 etc.
    window.dispatchEvent(new Event('cookie-consent-updated'));
  };

  const handleRejectAll = () => {
    localStorage.setItem('cookie-consent', 'essential');
    setIsVisible(false);
    window.dispatchEvent(new Event('cookie-consent-updated'));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 left-8 right-8 z-[100] animate-fadeInUp">
      <div className="max-w-4xl mx-auto glass-effect bg-primary/95 border border-white/10 p-8 md:p-10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] relative overflow-hidden">
        {/* Decorative element */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1">
            <h4 className="text-secondary font-bold text-[10px] tracking-[0.4em] mb-4 uppercase">Privacy Governance</h4>
            <h5 className="text-white text-xl font-bold mb-4 tracking-tight">Your data. Your institutional control.</h5>
            <p className="text-white/70 text-sm leading-relaxed max-w-2xl font-light italic">
              Lochaber uses cookies to ensure the highest level of security and performance. Some are essential, 
              others help us improve your experience through anonymized institutional analytics. 
              <Link to="/datenschutz" className="text-secondary hover:underline ml-1 font-bold">Review our data policy.</Link>
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button 
              onClick={() => setSettingsOpen(true)}
              className="px-6 py-4 text-white/60 text-[10px] font-bold tracking-widest uppercase hover:text-white transition-colors"
            >
              Preferences
            </button>
            <button 
              onClick={handleRejectAll}
              className="px-8 py-4 border border-white/20 text-white text-[10px] font-bold tracking-widest uppercase hover:bg-white/10 transition-all"
            >
              Essential Only
            </button>
            <button 
              onClick={handleAcceptAll}
              className="px-10 py-4 bg-secondary text-on-secondary text-[10px] font-bold tracking-widest uppercase shadow-xl hover:bg-secondary-container hover:text-on-secondary-container transition-all"
            >
              Accept All
            </button>
          </div>
        </div>

        {/* Preferences Modal (Simplified for now) */}
        {settingsOpen && (
          <div className="absolute inset-0 bg-primary z-20 p-8 flex flex-col justify-center">
             <div className="flex justify-between items-center mb-6">
                <h6 className="text-white font-bold uppercase tracking-widest text-xs">Detailed Consent Settings</h6>
                <button onClick={() => setSettingsOpen(false)} className="material-symbols-outlined text-white/50 hover:text-white">close</button>
             </div>
             <div className="space-y-6 mb-8">
                <div className="flex justify-between items-center p-4 bg-white/5 border border-white/5">
                   <div>
                      <p className="text-white text-sm font-bold">Essential Cookies</p>
                      <p className="text-white/40 text-[10px]">Required for website functionality. Cannot be disabled.</p>
                   </div>
                   <div className="w-10 h-5 bg-secondary rounded-full relative">
                      <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
                   </div>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/5 border border-white/5">
                   <div>
                      <p className="text-white text-sm font-bold">Institutional Analytics</p>
                      <p className="text-white/40 text-[10px]">Anonymized tracking via GA4 to improve service quality.</p>
                   </div>
                   <div className="w-10 h-5 bg-white/20 rounded-full relative cursor-pointer group">
                      <div className="absolute left-1 top-1 w-3 h-3 bg-white/50 rounded-full"></div>
                   </div>
                </div>
             </div>
             <button 
                onClick={handleAcceptAll}
                className="w-full py-4 bg-secondary text-on-secondary text-[10px] font-bold tracking-widest uppercase"
             >
                Save & Apply Settings
             </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieBanner;
