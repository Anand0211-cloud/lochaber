import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

const BanksInsurers = () => {
  return (
    <Layout>
      <SEO 
        title="ESG Immobilien Banken & Versicherer Analyse"
        description="Standardisierte ESG-Immobilien-Analysen & Beleihungswert-Checks für Banken und Versicherer. MaRisk-konform und deutschlandweit verfügbar."
      />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative bg-surface overflow-hidden py-24 md:py-32 border-b border-outline-variant/10">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <span className="inline-block bg-secondary text-on-secondary px-3 py-1 text-[0.7rem] font-bold tracking-[0.15em] uppercase mb-6 rounded-sm">
                Lösungen für Banken & Versicherer
              </span>
              <h1 className="text-[3.5rem] leading-[1.1] font-bold text-primary tracking-tight mb-8">
                Sicherheitenbewertung. ESG-Risikoprüfung. MaRisk-konform.
              </h1>
              <p className="text-lg text-on-surface-variant leading-relaxed mb-10 max-w-2xl font-['Inter']">
                Standardisierte KI-Berichte für Kreditakten. ESG-konforme Portfolioanalyse. Deutschlandweite Abdeckung.
              </p>
              
              <div className="bg-surface-container-low p-8 border-l-4 border-primary mb-10">
                <h4 className="text-[0.65rem] font-bold text-outline uppercase tracking-widest mb-4">Relevante Produkte</h4>
                <div className="flex flex-wrap gap-8">
                  <div>
                    <p className="text-primary font-bold">Bank Check</p>
                    <p className="text-secondary font-bold">750 €</p>
                  </div>
                  <div className="w-[1px] bg-outline-variant/30 hidden sm:block"></div>
                  <div>
                    <p className="text-primary font-bold">Portfolio Scan</p>
                    <p className="text-secondary font-bold">ab 2.500 €</p>
                  </div>
                  <div className="w-[1px] bg-outline-variant/30 hidden sm:block"></div>
                  <div>
                    <p className="text-primary font-bold">Rahmenvertrag</p>
                    <p className="text-secondary font-bold">ab 6.500 €/Jahr</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <Link to="/leistungen/rahmenvertrag-banken" className="inline-flex items-center gap-3 editorial-gradient text-on-primary px-8 py-4 font-bold tracking-wide transition-all hover:shadow-xl hover:-translate-y-0.5">
                  Rahmenvertrag für Ihre Institution anfragen <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
                <div className="flex items-center gap-4 text-outline-variant py-2">
                  <span className="material-symbols-outlined text-secondary">database</span>
                  <p className="text-xs font-medium tracking-wide">
                    Modernste KI-Analyse mit <span className="text-primary font-bold">syte.ms</span>-Datenbank: <span className="text-primary font-bold">62 Millionen</span> Datensätze
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 relative">
              <div className="aspect-[3/4] bg-surface-container-high overflow-hidden shadow-2xl relative">
                <img alt="Institutionelles Immobilienportfolio" className="w-full h-full object-cover grayscale contrast-125 opacity-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCadPvgBk-4uQHcMoJ3AvmZkdnFOJUE-RwNByYcv2A23Q_in4QpxXPWD_zZMgOisFjUCHpIgJstfn7oley2ZWIxec4Za5tTSSSIdqhZqByS9fP_Q6tXbE6Xs9g7Za1PPUMSZq5B2950n7NjLCBV_uzJJwLEtyFBahLsQfKWcsl95CQJUk7JbGh-hR5nfN_E8h1TVqu_gBxZWhA5104QcMf-ZqKzUX55fGwwM1Ozqx-euEzsmsUyrChuDwXK3oV3cW8KuPeM4UZQNJ0"/>
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Problem Section */}
        <section className="bg-surface-container-low py-24">
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-16">
              <p className="text-secondary font-bold text-xs tracking-[0.2em] uppercase mb-4">Regulatorisches Umfeld</p>
              <h2 className="text-3xl font-bold text-primary">Regulatorischem Druck begegnen</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-10 border-t-4 border-primary shadow-sm hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-secondary text-3xl mb-6">gavel</span>
                <h4 className="font-bold text-primary mb-4 uppercase tracking-wider text-sm">Regulatorische Hürden</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">Wachsender Druck durch ESG-, MaRisk- und BaFin-Anforderungen erfordert Präzision.</p>
              </div>
              <div className="bg-white p-10 border-t-4 border-primary shadow-sm hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-secondary text-3xl mb-6">trending_down</span>
                <h4 className="font-bold text-primary mb-4 uppercase tracking-wider text-sm">Skalierungsprobleme</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">Bestehende manuelle Bewertungsprozesse skalieren nicht bei steigendem Volumen.</p>
              </div>
              <div className="bg-white p-10 border-t-4 border-primary shadow-sm hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-secondary text-3xl mb-6">verified_user</span>
                <h4 className="font-bold text-primary mb-4 uppercase tracking-wider text-sm">MaRisk-Compliance</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">Fehlende standardisierte, prüfungssichere Daten für institutionelle Kreditakten.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust & Database Section */}
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-8">
            <div className="bg-primary p-12 lg:p-20 relative overflow-hidden text-on-primary">
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-6">Institutionelle Entscheidungen mit massiver Datenbasis.</h3>
                  <p className="text-primary-fixed/70 text-lg leading-relaxed mb-8">
                    Unsere Partnerschaft mit syte.ms bietet Zugang zur umfassendsten Immobiliendatenbank Deutschlands und stellt sicher, dass jede Bewertung durch Millionen von Datenpunkten unterstützt wird.
                  </p>
                  <div className="flex items-center gap-8">
                    <div>
                      <p className="text-4xl font-bold text-secondary mb-1">62 Mio.</p>
                      <p className="text-xs uppercase tracking-widest opacity-60">Datensätze</p>
                    </div>
                    <div className="w-[1px] h-12 bg-white/10"></div>
                    <div>
                      <p className="text-4xl font-bold text-secondary mb-1">100%</p>
                      <p className="text-xs uppercase tracking-widest opacity-60">Compliance</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center lg:justify-end">
                  <div className="bg-white/5 backdrop-blur-sm p-8 border border-white/10 max-w-sm">
                    <p className="text-secondary font-bold text-sm uppercase tracking-widest mb-4">Vertrauenssignal</p>
                    <p className="text-sm italic leading-relaxed opacity-80">
                      „Die standardisierten Berichte von Lochaber haben unseren Kreditbewertungsprozess transformiert, das Prüfungsrisiko reduziert und den Durchsatz erheblich gesteigert."
                    </p>
                    <p className="mt-6 font-bold text-sm">— Leiter Risikomanagement, Institutionelle Bank</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default BanksInsurers;
