import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

const Brokers = () => {
  return (
    <Layout>
      <SEO 
        title="Off-Market Immobilien analysieren | Makler & Bestandshalter"
        description="Analysieren Sie Off-Market Immobilien mit Lochaber. Beschleunigen Sie den Verkauf durch verifizierte Potenzialanalysen bundesweit."
      />
      <main className="pt-24 pb-12">
        {/* Hero Section */}
        <section className="max-w-[1440px] mx-auto px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8">
              <span className="inline-block px-3 py-1 bg-secondary text-on-secondary text-[10px] font-bold uppercase tracking-[0.2em] mb-6 rounded-sm">Makler & Bestandshalter</span>
              <h1 className="text-5xl md:text-[4rem] font-bold text-primary tracking-tight leading-[1.1] mb-8">
                Mehr Wert sehen. <br/><span className="text-secondary">Besser beraten.</span>
              </h1>
              <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed mb-10">
                Wertpotenzialanalyse für Immobilien, Off-Market-Deals identifizieren, Sanierungsplanung mit KfW-Förder-Check – deutschlandweit.
              </p>

              <div className="bg-surface-container-low p-8 border-l-4 border-primary mb-10">
                <h4 className="text-[0.65rem] font-bold text-outline uppercase tracking-widest mb-4">Relevante Produkte</h4>
                <div className="flex flex-wrap gap-8">
                  <div>
                    <p className="text-primary font-bold">Basis-Check</p>
                    <p className="text-secondary font-bold">890 €</p>
                  </div>
                  <div className="w-[1px] bg-outline-variant/30 hidden sm:block"></div>
                  <div>
                    <p className="text-primary font-bold">Portfolio-Scan</p>
                    <p className="text-secondary font-bold">ab 2.500 €</p>
                  </div>
                  <div className="w-[1px] bg-outline-variant/30 hidden sm:block"></div>
                  <div>
                    <p className="text-primary font-bold">Partner-Flat</p>
                    <p className="text-secondary font-bold">ab 890 €/Monat</p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <Link to="/contact" className="inline-flex items-center gap-3 editorial-gradient text-on-primary px-10 py-4 font-bold tracking-wide transition-all hover:shadow-xl hover:-translate-y-0.5">
                  Partner-Flat anfragen <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
                <div className="bg-surface-container-highest/30 p-6 border border-outline/10 max-w-xl">
                  <div className="flex gap-4 items-start">
                    <span className="material-symbols-outlined text-secondary">verified</span>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      <strong className="text-primary">Lochaber USP:</strong> Professionelle Berichte stärken Ihre Beratungsqualität – Ihr Kunde erhält Premium-Analysen mit dem <span className="text-primary font-bold italic tracking-tighter uppercase px-1.5 border border-primary/20 text-[10px]">Lochaber Siegel</span>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 relative">
              <div className="aspect-[4/5] bg-primary overflow-hidden shadow-2xl relative">
                <img alt="Moderne Immobilienfassade" className="object-cover w-full h-full opacity-60 mix-blend-luminosity grayscale contrast-125" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaHTzJwG_2XbCMM5y28IPgyN4Ph-dI5utsQvIcacFB_88Xl0DlXzGMzxZCU5rNou2-k_6i5KAuNxTSRWpxGu9gAyzhC3wg8CXDgbRKrn169ZLJIQdDj-ufR5beY-CK4G33vD1VkOWKaCeeXGkyxc-W6SoosN4tckhLmZmAGisG_9__JUbNZe2JkcVl3T9ImMeoaJxUywL7OVkrpEsaXV20n1A9GfIQTFFaTWxBuovFDC4zS_xICdUi0grlJtFoHDKfko4kmGvgtXw"/>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Problem Section */}
        <section className="bg-surface-container-low py-24">
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-16">
              <p className="text-secondary font-bold text-xs tracking-[0.2em] uppercase mb-4">Marktherausforderungen</p>
              <h2 className="text-3xl font-bold text-primary">Dem Wettbewerbsdruck begegnen</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-10 border-t-4 border-primary shadow-sm hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-secondary text-3xl mb-6">competition</span>
                <h4 className="font-bold text-primary mb-4 uppercase tracking-wider text-sm">Wettbewerbsdruck</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">Differenzierung nur durch Beratungsqualität. Herausstechen erfordert tiefere Einblicke als einfache Objektlisten.</p>
              </div>
              <div className="bg-white p-10 border-t-4 border-primary shadow-sm hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-secondary text-3xl mb-6">search_off</span>
                <h4 className="font-bold text-primary mb-4 uppercase tracking-wider text-sm">Verborgene Potenziale</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">Wertvolle Potenziale im Portfolio bleiben ohne institutionelle Analysetools unentdeckt.</p>
              </div>
              <div className="bg-white p-10 border-t-4 border-primary shadow-sm hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-secondary text-3xl mb-6">query_stats</span>
                <h4 className="font-bold text-primary mb-4 uppercase tracking-wider text-sm">Beratungsqualität</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">Stärken Sie Ihre Position als vertrauenswürdiger Berater mit validierten Berichten und professionellen Benchmarks.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Brokers;
