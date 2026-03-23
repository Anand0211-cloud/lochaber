import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../../components/Layout';

const BanksAppointment = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const bankNameInput = searchParams.get('bank') || '';
  const bankName = bankNameInput ? decodeURIComponent(bankNameInput) : '[Bankname]';

  useEffect(() => {
    const metaR = document.createElement('meta');
    metaR.name = 'robots';
    metaR.content = 'noindex';
    document.head.appendChild(metaR);
    
    const originalTitle = document.title;
    document.title = `Persönliches Angebot - ${bankName}`;
    
    return () => {
      document.head.removeChild(metaR);
      document.title = originalTitle;
    };
  }, [bankName]);

  return (
    <Layout>
      <main className="bg-surface dark:bg-slate-950 font-body antialiased">
        
        {/* ULTRA PREMIUM HERO SECTION */}
        <section className="relative min-h-[70vh] md:min-h-screen flex items-center overflow-hidden bg-primary pt-32 md:pt-40 pb-20 md:pb-32">
          <div className="absolute inset-0 z-0">
            <img 
              className="w-full h-full object-cover opacity-30 mix-blend-overlay" 
              alt="Banking district at dusk" 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full">
            <div className="max-w-4xl animate-fadeIn">
              <span className="inline-block px-3 py-1 bg-secondary text-on-secondary text-[10px] font-bold tracking-[0.3em] mb-8 rounded-sm">PERSONALISIERTES STRATEGIEANGEBOT</span>
              <h1 className="text-3xl sm:text-5xl md:text-[5.5rem] font-bold text-white tracking-tighter leading-[1] mb-6 sm:mb-8">
                Ihr persönliches Angebot – <br className="hidden sm:block"/>
                Immobilienanalyse für <span className="text-secondary italic">{bankName}</span>
              </h1>
              <p className="text-xl md:text-2xl text-on-primary-container leading-relaxed mb-12 max-w-2xl font-light">
                Die Brücke zwischen KI-gestützter Datenpräzision und institutioneller Beratungsexpertise. 
                Maßgeschneidert für die einzigartige regulatorische Landschaft des <span className="text-white font-medium italic">modernen Bankwesens.</span>
              </p>
              <div className="flex flex-wrap gap-6">
                <button className="px-10 py-5 editorial-gradient text-on-primary font-bold text-xs tracking-[0.2em] uppercase transition-all hover:shadow-[0_0_40px_rgba(27,71,77,0.5)] hover:-translate-y-1">
                  Beratungstermin vereinbaren
                </button>
                <div className="flex items-center gap-4 px-6 py-4 bg-white/5 backdrop-blur-md border border-white/10">
                  <span className="material-symbols-outlined text-secondary">verified_user</span>
                  <span className="text-xs text-white/80 font-bold tracking-widest uppercase">Institutionell vertraut</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Data Badge */}
          <div className="absolute bottom-20 right-8 hidden lg:block w-72 glass-effect bg-white/5 border border-white/10 p-6 rounded-sm shadow-2xl animate-float">
            <div className="flex justify-between items-center mb-4">
              <span className="text-[10px] text-secondary tracking-widest font-bold uppercase">Analysestatus</span>
              <span className="material-symbols-outlined text-secondary text-sm">shield_with_heart</span>
            </div>
            <p className="text-white text-sm font-light mb-4">Regulatorische Konformität: <span className="text-secondary font-bold">100% MaRisk</span></p>
            <div className="space-y-2">
              <div className="h-[2px] bg-white/10 w-full overflow-hidden relative">
                <div className="h-full bg-secondary w-full animate-progress"></div>
              </div>
              <div className="flex justify-between text-[8px] text-white/40 tracking-widest font-bold">
                <span>ESG-SCORING</span>
                <span>AKTIV</span>
              </div>
            </div>
          </div>
        </section>

        {/* STRATEGIC CONTEXT - BENTO STYLE INTRODUCTION */}
        <section className="py-20 md:py-32 bg-surface overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="grid md:grid-cols-2 gap-24 items-center">
              <div className="max-w-xl">
                <h2 className="text-secondary font-bold text-xs uppercase tracking-[0.4em] mb-6">Der institutionelle Imperativ</h2>
                <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-primary mb-8 leading-[1.1]">
                  Compliance ist keine Checkliste mehr. Es ist ein <span className="italic">strategisches Asset.</span>
                </h3>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-10">
                  Lochaber liefert die forensische Tiefe, die Risikoabteilungen benötigen, und die Marktgeschwindigkeit, die Transaktionsteams brauchen. 
                  Unsere Analysen sind der Goldstandard für die Navigation durch BaFin-Anforderungen und ESG-Vorgaben.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-outline-variant/30">
                  <div>
                    <span className="text-3xl font-bold text-primary block mb-1 tracking-tighter">48h</span>
                    <span className="text-[10px] text-secondary font-bold tracking-widest uppercase">Bearbeitungszeit</span>
                  </div>
                  <div>
                    <span className="text-3xl font-bold text-primary block mb-1 tracking-tighter">1984</span>
                    <span className="text-[10px] text-secondary font-bold tracking-widest uppercase">Tradition seit</span>
                  </div>
                </div>
              </div>
              <div className="relative aspect-[4/5] bg-surface-container-low overflow-hidden shadow-2xl">
                <img className="w-full h-full object-cover grayscale opacity-70" alt="Architektonisches Raster" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHPAfp8JS3eYLyfER0yydmuL4zFL0FzpvFKvUKNmiYy2EZ9Fz5Y1ZKtqp_cztOklq4h7SWIBroB9yKb9eJuj3HjdiKIbyupST9uE9PnhwimQls0FyLJ2WQXXLboc2P4YDp1guxqrdTpfNMha2T1a-0n6MutkG86EJfDav4nf_Ipe0TkkKOFNWNBVF9HG8y4R530vgkeQ-aRjrgAEwFt3ZM7Dz55eLzaULLXR4v3-YvCNOgJIvvdvabElvYgGegipHsBlCTQliokPU"/>
                <div className="absolute inset-0 bg-primary/20 mix-blend-color"></div>
                <div className="absolute top-8 -right-4 md:top-12 md:-right-12 bg-secondary p-8 md:p-12 text-on-secondary shadow-2xl rotate-3">
                  <p className="text-2xl md:text-4xl font-bold tracking-tighter mb-1 font-headline">MaRisk</p>
                  <p className="text-[8px] md:text-[10px] font-bold tracking-[0.2em] uppercase opacity-80">Volle Compliance</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BENTO ADVANTAGES GRID */}
        <section className="py-20 md:py-32 bg-surface-container-low px-6 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-secondary font-bold text-xs uppercase tracking-[0.4em] mb-4">Kernvorteile</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">Planbare Präzision. Unübertroffene Geschwindigkeit.</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Cost Predictability */}
              <div className="md:col-span-8 bg-surface-container-lowest p-8 md:p-12 border border-outline-variant/30 flex flex-col justify-between group overflow-hidden relative min-h-[320px]">
                <div className="relative z-10 transition-transform group-hover:-translate-y-2 duration-500">
                  <span className="material-symbols-outlined text-secondary text-5xl mb-8 font-light">account_balance_wallet</span>
                  <h4 className="text-2xl md:text-3xl font-bold text-primary mb-6">Planbare Kosten</h4>
                  <p className="text-on-surface-variant max-w-lg leading-relaxed text-base italic">
                    „Transparenz ist die Grundlage institutionellen Vertrauens. Unsere Festpreismodelle beseitigen die Mehrdeutigkeit traditioneller Beratungshonorare."
                  </p>
                </div>
                <div className="absolute bottom-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <span className="material-symbols-outlined text-[15rem]">payments</span>
                </div>
                <div className="z-10 text-[10px] font-bold text-secondary tracking-widest uppercase">Strategische Wertebene 01</div>
              </div>

              {/* Delivery Time */}
              <div className="md:col-span-4 bg-primary p-8 md:p-12 flex flex-col justify-between text-on-primary group hover:bg-primary-container transition-colors duration-500 min-h-[280px]">
                <div>
                  <span className="text-7xl font-bold text-secondary tracking-tighter mb-4 block group-hover:scale-110 transition-transform origin-left">48h</span>
                  <h4 className="text-2xl font-bold mb-4">Lieferzeit</h4>
                </div>
                <p className="text-on-primary-container text-sm leading-relaxed opacity-80">
                  Erste Potenzialanalysen und regulatorisches Scoring innerhalb von 48 Stunden für schnelle institutionelle Entscheidungsfindung.
                </p>
              </div>

              {/* One Contact Person */}
              <div className="md:col-span-12 bg-surface-container-low p-8 md:p-12 border border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-8 group">
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-primary mb-2 italic">Senior-Beratungskontinuität</h4>
                  <p className="text-on-surface-variant leading-relaxed">
                    Institutionellen Aufwand eliminieren. Arbeiten Sie direkt mit Wolf Probst – keine Junioren, keine Zwischenhändler, nur direkte Kompetenz.
                  </p>
                </div>
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                  <span className="material-symbols-outlined text-on-secondary text-2xl">person</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INSTITUTIONAL MODELS - GLASSMORPHISM OVERLAY */}
        <section className="py-32 bg-primary relative overflow-hidden">
          {/* Decorative gradients */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-[150px]"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full -translate-x-1/2 translate-y-1/2 blur-[100px]"></div>

          <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
            <div className="text-center mb-16 md:mb-24">
              <span className="text-secondary font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Rahmenvertrags-Modelle</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">Strukturierte Exzellenz.</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
              {[
                { name: 'Starter', status: 'Essentielle Compliance', items: ['Standard ESG-Scoring', '48h digitale Lieferung'] },
                { name: 'Standard', status: 'Institutionelle Wahl', items: ['Vollständige ESG-Tiefenanalyse', 'Sichere API-Integration', 'Monatlicher Portfolio-Scan'], featured: true },
                { name: 'Premium', status: 'Strategische Partnerschaft', items: ['Unbegrenzte Beratungsstunden', 'MaRisk-Konformität', 'Vor-Ort-Beratung'] }
              ].map((model) => (
                <div key={model.name} className={`relative p-8 md:p-12 glass-effect flex flex-col h-full transition-all duration-500 hover:-translate-y-4 ${model.featured ? 'bg-white/10 border-2 border-secondary scale-100 md:scale-105 z-20 shadow-2xl' : 'bg-white/5 border border-white/10'}`}>
                  {model.featured && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-on-secondary px-4 py-1 text-[8px] font-bold uppercase tracking-widest">Empfohlen</div>}
                  <h4 className="text-3xl font-bold text-white mb-2">{model.name}</h4>
                  <div className="text-secondary font-bold text-[10px] tracking-widest uppercase mb-10 opacity-80">{model.status}</div>
                  <ul className="space-y-6 mb-12 flex-grow">
                    {model.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-4 group/item">
                        <span className="material-symbols-outlined text-secondary text-sm group-hover/item:scale-125 transition-transform">check_circle</span>
                        <span className="text-white/70 text-sm font-light italic">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-5 text-[10px] font-bold tracking-[0.2em] uppercase transition-all ${model.featured ? 'bg-secondary text-on-secondary shadow-[0_0_30px_rgba(117,91,0,0.3)]' : 'border border-white/20 text-white hover:bg-white/10'}`}>
                    Details anfragen
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SIGNATURE EXPERTISE - WOLF PROBST */}
        <section className="py-20 md:py-32 bg-surface overflow-hidden px-6 md:px-8">
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-20">
            <div className="relative group">
              <div className="absolute inset-0 bg-secondary rounded-[2rem] rotate-3 group-hover:rotate-6 transition-transform duration-700 opacity-20"></div>
              <div className="w-[320px] h-[400px] rounded-[2rem] overflow-hidden bg-primary-container relative z-10 shadow-2xl border-2 border-white">
                <img 
                  className="w-full h-full object-cover grayscale brightness-110 group-hover:scale-105 transition-transform duration-1000" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFO0EvhaA39BkvOT74KEc2mEcGNxIvvJg5EBNLEVzAoaibkwAnoa0qakcIWOwq68BomxAbojyLdQVJY595WziFuNFEHSddUKa2O57emiD0Q4DFyN90BgqmwQOdj3u6mAj1UJI1izuMrQJW1NupxQ3ke2SiWRAlYJIbPDTDqgQVJ9FKSTHnahyl1WDJazroRe_FzZENni6HmxOC6ixYTXenNPM2ZK1WNmqAkYH8IgxMYhUfJhyGIReEqA11M5eq6_7Di3rTYk6obAk" 
                  alt="Wolf Probst"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
              </div>
            </div>
            <div className="flex-1 text-center lg:text-left">
              <span className="text-secondary font-bold text-[10px] tracking-[0.4em] mb-4 block uppercase leading-none">Senior-Beratung</span>
              <h3 className="text-4xl md:text-6xl font-bold text-primary mb-4 tracking-tighter">Wolf Probst</h3>
              <p className="text-primary font-bold italic text-lg mb-10 max-w-lg leading-relaxed opacity-80 decoration-secondary decoration-wavy underline-offset-8 underline">
                „Wir liefern nicht nur Daten – wir liefern die Geschichte hinter dem Asset."
              </p>
              
              <div className="space-y-4">
                <a href="mailto:wolf.probst@lochaber.at" className="flex items-center justify-center lg:justify-start gap-4 p-4 md:p-6 bg-surface-container-low hover:bg-white transition-all group border border-outline-variant/10 overflow-hidden">
                  <span className="material-symbols-outlined text-secondary group-hover:scale-110 transition-transform flex-shrink-0">mail</span>
                  <span className="font-bold text-[10px] md:text-sm tracking-widest text-primary uppercase truncate">Direktzugang: wolf.probst@lochaber.at</span>
                </a>
                <button className="w-full lg:w-fit px-12 py-6 editorial-gradient text-on-primary font-bold text-xs tracking-[0.3em] uppercase shadow-2xl hover:-translate-y-1 transition-all">
                  Persönliches Gespräch vereinbaren
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CALENDAR INTEGRATION AREA */}
        <section className="py-20 md:py-32 bg-surface-container-low border-t border-outline-variant/20 px-6 md:px-8 text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 tracking-tight">Ihren Termin sichern</h2>
            <p className="text-on-surface-variant font-light italic">Bestätigen Sie ein 15-minütiges Einführungsgespräch, um Ihre institutionellen Anforderungen zu besprechen.</p>
          </div>
          
          <div className="max-w-6xl mx-auto bg-white shadow-[0_64px_128px_-16px_rgba(0,0,0,0.1)] rounded-[2rem] overflow-hidden min-h-[600px] flex items-center justify-center border border-outline-variant/30 relative group">
             {/* Calendar Interface Placeholder */}
             <div className="absolute inset-0 bg-primary/2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <div className="text-center z-10 px-8">
               <span className="material-symbols-outlined text-7xl text-secondary/40 mb-6 font-light">calendar_today</span>
               <p className="text-primary font-bold text-xl mb-2">Kalenderintegration aktiv</p>
               <p className="text-on-surface-variant text-sm font-light max-w-md mx-auto">
                 Eingebettetes Terminplanung-Widget (Calendly/HubSpot) lädt dynamisch die institutionelle Verfügbarkeit für <span className="font-bold italic">{bankName}</span>.
               </p>
             </div>
          </div>
        </section>

      </main>
      
      {/* GLOBAL NO-INDEX LAYER */}
      <div className="hidden pointer-events-none" aria-hidden="true">Diese Seite ist privat und wird nicht von Suchmaschinen indexiert.</div>
    </Layout>
  );
};

export default BanksAppointment;
