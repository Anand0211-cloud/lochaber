import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import serviceHero from '../assets/service-hero.png';
import targetDev from '../assets/target-developers.png';
import targetPortfolio from '../assets/target-portfolio.png';

const Services = () => {
  return (
    <Layout>
      <SEO 
        title="KI Immobilienanalyse Leistungen & Services"
        description="Entdecken Sie unsere KI-gestützten Immobilienanalyse-Services: Vom Basis Check bis zur Machbarkeitsstudie. Deutschlandweite Expertise für Ihren Erfolg."
      />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative bg-surface overflow-hidden py-24 md:py-32 border-b border-outline-variant/10">
          <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7">
              <span className="inline-block bg-secondary-fixed text-on-secondary-fixed text-[0.7rem] font-bold tracking-[0.15em] uppercase px-3 py-1 mb-6 rounded-sm">
                Strategische Portfolio-Bewertung
              </span>
              <h1 className="text-3xl sm:text-5xl md:text-[3.5rem] leading-[1.1] font-bold text-primary tracking-tight mb-8">
                Potenzialanalyse
              </h1>
              <p className="text-lg text-on-surface-variant leading-relaxed mb-10 max-w-xl">
                Verborgene Objektwerte durch KI-gestützte Strukturdiagnostik identifizieren. Wir kombinieren regulatorische Zoning-Daten mit Markt-Benchmarks, um ungenutzte Kapazitäten Ihres Portfolios aufzudecken.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 editorial-gradient text-on-primary font-bold tracking-wide transition-all hover:shadow-xl hover:-translate-y-0.5">
                  Analyse anfragen
                </button>
                <button className="border border-outline/20 text-primary px-8 py-4 font-bold tracking-wide hover:bg-surface-container-low transition-colors">
                  Musterbericht ansehen
                </button>
              </div>
            </div>
            <div className="md:col-span-5 relative">
              <div className="aspect-[4/5] bg-surface-container-high overflow-hidden shadow-2xl relative">
                <img alt="Moderne architektonische Glasfassade" className="w-full h-full object-cover grayscale contrast-125 opacity-90" data-alt="Nahaufnahme eines modernen Glasgebäudes" src={serviceHero}/>
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
              </div>
              {/* Floating Data Card */}
              <div className="absolute -bottom-6 -left-12 hidden lg:block bg-surface-container-lowest p-6 shadow-xl w-80 border-l-4 border-secondary">
                <p className="text-[0.65rem] font-bold uppercase tracking-widest text-outline mb-2">Analyse-Erkenntnis</p>
                <p className="text-primary font-bold text-lg">+24% Nachverdichtungspotenzial</p>
                <p className="text-xs text-on-surface-variant mt-1">Entdeckt im Bezirk B-412 via KI-Zoning-Scan.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Explanation */}
        <section className="bg-surface-container-low py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
              <div>
                <h2 className="text-[1.75rem] font-semibold text-primary mb-6 leading-tight">
                  Warum das meiste Potenzial unentdeckt bleibt.
                </h2>
                <div className="space-y-6 text-on-surface-variant">
                  <p className="leading-relaxed">
                    Traditionelle Immobilienbewertung basiert auf manueller Recherche und statischen Benchmarks. In einem sich schnell verändernden regulatorischen Umfeld führt dies zu verpassten Chancen bei Nachverdichtung, Umnutzung und Renditeoptimierung.
                  </p>
                  <p className="leading-relaxed">
                    Unser „Precision Editorial"-Ansatz stellt sicher, dass kein Datenpunkt ungeprüft bleibt. Wir überbrücken die Lücke zwischen architektonischer Möglichkeit und finanzieller Realität.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-surface-container-lowest p-6 md:p-8 flex items-start gap-6">
                  <span className="material-symbols-outlined text-secondary text-3xl">warning</span>
                  <div>
                    <h4 className="font-bold text-primary mb-2">Statische Datensilos</h4>
                    <p className="text-sm text-on-surface-variant">Bewertungen ignorieren häufig aktualisierte kommunale Zoning-Anpassungen, die eine erhöhte Höhe oder Geschossfläche ermöglichen.</p>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-8 flex items-start gap-6">
                  <span className="material-symbols-outlined text-secondary text-3xl">visibility_off</span>
                  <div>
                    <h4 className="font-bold text-primary mb-2">Die Sichtbarkeitslücke</h4>
                    <p className="text-sm text-on-surface-variant">Über 60% der Projektentwickler übersehen marginale Dachausbaupotenziale, die hohe Margenrenditen erzielen.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 md:py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="mb-16">
              <p className="text-secondary font-bold text-xs tracking-[0.2em] uppercase mb-4">Die Methodik</p>
              <h2 className="text-3xl font-bold text-primary">Kern-Analyseleistungen</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Service 1 */}
              <Link to="/leistungen/basis-check" className="bg-white p-8 shadow-sm flex flex-col justify-between border-b-4 border-primary h-full group hover:shadow-xl transition-all duration-300">
                <div>
                  <span className="material-symbols-outlined text-primary text-3xl mb-6 group-hover:scale-110 transition-transform">fact_check</span>
                  <h3 className="text-lg font-bold text-primary mb-2">Basis Check</h3>
                  <p className="text-secondary font-bold text-xl mb-4">890 €</p>
                  <p className="text-on-surface-variant text-sm leading-relaxed">Schnelle Grundstücksbewertung mit einem ersten Überblick über Standortparameter.</p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
                  Mehr erfahren <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </div>
              </Link>
              {/* Service 2 */}
              <Link to="/leistungen/potential-analysis" className="bg-primary p-8 shadow-sm flex flex-col justify-between text-on-primary h-full group hover:shadow-xl transition-all duration-300">
                <div>
                  <span className="material-symbols-outlined text-secondary-fixed text-3xl mb-6 group-hover:scale-110 transition-transform">analytics</span>
                  <h3 className="text-lg font-bold mb-2">Potenzialanalyse</h3>
                  <p className="text-secondary-fixed text-xl font-bold mb-4">1.990 €</p>
                  <p className="text-primary-fixed/80 text-sm leading-relaxed">Detaillierte Rentabilitätsanalyse zur Identifikation spezifischer Rendite-Optimierungsmöglichkeiten.</p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-xs font-bold text-secondary-fixed opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
                  Mehr erfahren <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </div>
              </Link>
              {/* Service 3 */}
              <Link to="/leistungen/feasibility-study" className="bg-white p-8 shadow-sm flex flex-col justify-between border-b-4 border-secondary h-full group hover:shadow-xl transition-all duration-300">
                <div>
                  <span className="material-symbols-outlined text-primary text-3xl mb-6 group-hover:scale-110 transition-transform">architecture</span>
                  <h3 className="text-lg font-bold text-primary mb-2">Machbarkeitsstudie</h3>
                  <p className="text-secondary font-bold text-xl mb-4">ab 4.500 €</p>
                  <p className="text-on-surface-variant text-sm leading-relaxed">Vollständige Studie inkl. Bebauungsszenarien, Investitionsrenditemodelle und Förderwege.</p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
                  Mehr erfahren <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </div>
              </Link>
              {/* Service 4 */}
              <Link to="/leistungen/bank-check" className="bg-white p-8 shadow-sm flex flex-col justify-between border-b-4 border-primary h-full group hover:shadow-xl transition-all duration-300">
                <div>
                  <span className="material-symbols-outlined text-primary text-3xl mb-6 group-hover:scale-110 transition-transform">account_balance</span>
                  <h3 className="text-lg font-bold text-primary mb-2">Bank Check</h3>
                  <p className="text-secondary font-bold text-xl mb-4">750 €</p>
                  <p className="text-on-surface-variant text-sm leading-relaxed">Speziell für Banken zur Ermittlung des Beleihungswerts und umfassender ESG-Risikokennzahlen.</p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
                  Mehr erfahren <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </div>
              </Link>
              {/* Service 5 */}
              <Link to="/leistungen/portfolio-scan" className="bg-white p-8 shadow-sm flex flex-col justify-between border-b-4 border-secondary h-full group hover:shadow-xl transition-all duration-300">
                <div>
                  <span className="material-symbols-outlined text-primary text-3xl mb-6 group-hover:scale-110 transition-transform">lan</span>
                  <h3 className="text-lg font-bold text-primary mb-2">Portfolio Scan</h3>
                  <p className="text-secondary font-bold text-xl mb-4">ab 2.500 €</p>
                  <p className="text-on-surface-variant text-sm leading-relaxed">Simultane Analyse mehrerer Immobilien (5–50) zur Optimierung der portfolioübergreifenden Allokation.</p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
                  Mehr erfahren <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </div>
              </Link>
              {/* Service 6 */}
              <Link to="/leistungen/partner-flat" className="bg-primary p-8 shadow-sm flex flex-col justify-between text-on-primary h-full group hover:shadow-xl transition-all duration-300">
                <div>
                  <span className="material-symbols-outlined text-secondary-fixed text-3xl mb-6 group-hover:scale-110 transition-transform">calendar_month</span>
                  <h3 className="text-lg font-bold mb-2">Partner Flat</h3>
                  <p className="text-secondary-fixed text-xl font-bold mb-4">890 €/Monat</p>
                  <p className="text-primary-fixed/80 text-sm leading-relaxed">Abo-Modell mit 5 detaillierten Analysen pro Monat für laufende Pipelines.</p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-xs font-bold text-secondary-fixed opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
                  Mehr erfahren <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </div>
              </Link>
              {/* Service 7 */}
              <Link to="/leistungen/rahmenvertrag-banken" className="lg:col-span-2 bg-white p-8 shadow-sm flex flex-col justify-center border-b-4 border-primary h-full group hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center gap-8">
                  <span className="material-symbols-outlined text-primary text-5xl shrink-0 group-hover:scale-110 transition-transform">handshake</span>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Rahmenvertrag für Banken</h3>
                    <p className="text-secondary font-bold text-2xl mb-4">Ab 6.500 €/Jahr</p>
                    <p className="text-on-surface-variant text-sm leading-relaxed max-w-md">Jährliche Strategiepläne für institutionelle Partner und Großvolumen-Kreditgeber mit kontinuierlichem Analysebedarf.</p>
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-2 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest md:justify-end">
                  Mehr erfahren <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* 3-Step Process */}
        <section className="py-20 md:py-24 bg-surface-container-low border-y border-outline-variant/10">
          <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-3xl font-bold text-primary mb-20">Der Ablauf</h2>
            <div className="relative">
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-[2.4rem] left-[15%] right-[15%] h-[1px] bg-outline-variant/30 z-0"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                {/* Step 1: Request */}
                <div className="flex flex-col items-center group">
                  <div className="w-20 h-20 bg-white border border-outline/10 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-xl rounded-full relative">
                    <span className="material-symbols-outlined text-3xl">edit_note</span>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary text-white text-[0.6rem] font-bold flex items-center justify-center rounded-full">01</div>
                  </div>
                  <h4 className="font-bold text-lg mb-4 uppercase tracking-[0.15em] text-primary">Anfrage</h4>
                  <p className="text-sm text-on-surface-variant max-w-[240px] leading-relaxed">Laden Sie grundlegende Grundstücksdaten oder Grundbuchauszüge über unser sicheres Portal hoch.</p>
                </div>

                {/* Step 2: Analysis */}
                <div className="flex flex-col items-center group">
                  <div className="w-20 h-20 bg-white border border-outline/10 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-xl rounded-full relative">
                    <span className="material-symbols-outlined text-3xl">query_stats</span>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary text-white text-[0.6rem] font-bold flex items-center justify-center rounded-full">02</div>
                  </div>
                  <h4 className="font-bold text-lg mb-4 uppercase tracking-[0.15em] text-primary">Analyse</h4>
                  <p className="text-sm text-on-surface-variant max-w-[240px] leading-relaxed">Unsere proprietären Algorithmen scannen tausende regulatorische und Marktdatenpunkte in Minuten.</p>
                </div>

                {/* Step 3: Result */}
                <div className="flex flex-col items-center group">
                  <div className="w-20 h-20 bg-white border border-outline/10 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-xl rounded-full relative">
                    <span className="material-symbols-outlined text-3xl">verified</span>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary text-white text-[0.6rem] font-bold flex items-center justify-center rounded-full">03</div>
                  </div>
                  <h4 className="font-bold text-lg mb-4 uppercase tracking-[0.15em] text-primary">Ergebnis</h4>
                  <p className="text-sm text-on-surface-variant max-w-[240px] leading-relaxed">Ein Senior-Berater von Lochaber verifiziert die Ergebnisse und erstellt Ihre umsetzbare Zusammenfassung.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Target Audience */}
        <section className="py-20 md:py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[3/4] bg-surface-container-high flex flex-col group cursor-default overflow-hidden border border-outline/10">
                  <div className="h-2/3 overflow-hidden">
                    <img src={targetDev} alt="Projektentwickler" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale contrast-125" />
                  </div>
                  <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
                    <h5 className="font-bold text-primary text-xl">Projektentwickler</h5>
                    <p className="text-xs text-on-surface-variant mt-2">Machbarkeit vor dem Gebot prüfen.</p>
                  </div>
                </div>
                <div className="aspect-[3/4] bg-primary flex flex-col group cursor-default overflow-hidden">
                  <div className="h-2/3 overflow-hidden">
                    <img src={targetPortfolio} alt="Bestandshalter" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale opacity-80" />
                  </div>
                  <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
                    <h5 className="font-bold text-white text-xl">Bestandshalter</h5>
                    <p className="text-xs text-primary-fixed mt-2">Rendite über etablierte Assets skalieren.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 pl-0 md:pl-16">
              <p className="text-secondary font-bold text-xs tracking-[0.2em] uppercase mb-4">Strategische Partner</p>
              <h2 className="text-4xl font-bold text-primary mb-8 leading-tight">Maßgeschneidert für die Gestalter der Zukunft.</h2>
              <p className="text-on-surface-variant leading-relaxed">Ob Sie ein einzelnes Grundstück bewerten oder ein milliardenschweres institutionelles Portfolio verwalten – unsere Analyse liefert die objektive Klarheit für fundierte Entscheidungen.</p>
            </div>
          </div>
        </section>

        {/* Report Preview Section */}
        <section className="py-20 md:py-24 bg-surface-container-high/30">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="bg-surface-container-lowest shadow-2xl overflow-hidden max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12">
              <div className="md:col-span-4 bg-primary text-on-primary p-8 md:p-12 flex flex-col justify-between min-h-[200px]">
                <div>
                  <div className="text-xl font-bold tracking-tighter mb-12">Lochaber</div>
                  <h3 className="text-2xl font-bold leading-tight">Asset-Analysebericht 2024</h3>
                  <div className="mt-4 w-12 h-1 bg-secondary"></div>
                </div>
                <div className="text-xs tracking-widest uppercase text-on-primary-container">Vertrauliche Zusammenfassung</div>
              </div>
              <div className="md:col-span-8 p-8 md:p-12 bg-white">
                <div className="space-y-8">
                  <div className="flex justify-between items-center border-b border-outline-variant/30 pb-4">
                    <span className="text-xs font-bold text-outline uppercase tracking-widest">Asset-Referenz</span>
                    <span className="text-sm font-semibold text-primary">#BER-4921-X</span>
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <p className="text-xs text-outline mb-1">Grundbewertung</p>
                      <p className="text-lg font-bold">14,2 Mio. €</p>
                    </div>
                    <div>
                      <p className="text-xs text-outline mb-1">Identifiziertes Potenzial</p>
                      <p className="text-lg font-bold text-secondary">3,8 Mio. €</p>
                    </div>
                  </div>
                  <div className="bg-surface-container-low p-6">
                    <p className="text-xs font-bold text-primary mb-3">KERNERKENNTNIS: UMNUTZUNG</p>
                    <p className="text-sm text-on-surface-variant italic">„Der aktuelle B-Plan erlaubt eine 3. Geschossaufstockung des Logistikanbaus zu kreativem Büroraum mit minimalem CAPEX..."</p>
                  </div>
                  <button className="w-full border-2 border-primary py-4 font-bold text-primary text-sm flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-all">
                    <span className="material-symbols-outlined">download</span>
                    MUSTER-PDF HERUNTERLADEN
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-32 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
          </div>
          <div className="max-w-7xl mx-auto px-6 md:px-8 text-center relative z-10">
            <h2 className="text-3xl md:text-[2.5rem] font-bold text-white mb-8">Bereit, den Wert Ihrer Immobilie zu entdecken?</h2>
            <p className="text-primary-fixed/80 max-w-2xl mx-auto text-lg mb-12">
              Erhalten Sie eine umfassende digitale Bewertung innerhalb von 48 Stunden. Keine versteckten Kosten. Institutionelle Präzision.
            </p>
            <button className="editorial-gradient text-on-primary px-10 py-5 font-bold text-lg shadow-lg hover:shadow-2xl transition-all">
              Jetzt Analyse anfragen
            </button>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Services;
