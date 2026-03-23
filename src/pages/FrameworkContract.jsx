import Layout from '../components/Layout';

const FrameworkContract = () => {
  return (
    <Layout>
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative bg-surface py-24 px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7">
              <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container text-[10px] font-bold tracking-[0.2em] uppercase mb-6">Strategische institutionelle Partnerschaft</span>
              <h1 className="text-5xl md:text-7xl font-bold text-primary tracking-tight leading-[1.1] mb-8">
                Rahmenvertrag: <br/><span className="text-secondary">Ihr strategischer Vorteil.</span>
              </h1>
              <p className="text-xl text-on-surface-variant leading-relaxed mb-10 max-w-xl">
                Beseitigen Sie administrativen Aufwand und nutzen Sie institutionelle Immobilienanalysen in großem Umfang. Unsere Rahmenverträge bieten die Planbarkeit und Präzision, die für globale Portfolios erforderlich sind.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 editorial-gradient text-on-primary font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-2 transition-all hover:shadow-xl hover:-translate-y-0.5">
                  Strategiegespräch buchen
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </button>
                <button className="bg-surface-container-high text-primary px-8 py-4 font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-surface-container-highest transition-all">
                  Info-PDF herunterladen
                  <span className="material-symbols-outlined text-lg">download</span>
                </button>
              </div>
            </div>
            <div className="md:col-span-5 relative">
              <div className="aspect-[4/5] bg-surface-container-low overflow-hidden shadow-2xl">
                <img alt="Moderne Unternehmensarchitektur" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" data-alt="Nahaufnahme einer modernen Glasfassade" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnctYHCz4nTfWDbETdgUu7GjjU_46CAgswx8bVWC3pnURjp8pZLT4fDYfHfNpXvOXpYpRWp3WDRst8kqVtWwnEKJ0_QxsB_8uOKS92rSlczVKi5pKPyq9ZxybXX3C1bpmTxcs6sHmpjqXNBSRruJuJ0CC3bDXhQoSVl9AUWsHYjTIJ17g1LxGIFm2467ZI930cH963QZ8cJEKA9W1EvcDiMFjQUo6UwYLJmnXwMZ4OQReYzmWDt67Qwua4OAgjmB373Ua8MyK3bRk"/>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary p-8 text-on-primary max-w-[200px]">
                <span className="block text-4xl font-bold mb-2">99,8%</span>
                <span className="text-xs uppercase tracking-widest opacity-80">Analysegenauigkeit</span>
              </div>
            </div>
          </div>
        </section>

        {/* Problems Section */}
        <section className="bg-surface-container-low py-24 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="md:col-span-1 border-l-4 border-secondary pl-6">
                <h2 className="text-3xl font-bold text-primary leading-tight">Der Aufwand individueller Beschaffung.</h2>
              </div>
              <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div className="p-8 bg-surface-container-lowest">
                  <span className="material-symbols-outlined text-primary text-4xl mb-6">gavel</span>
                  <h3 className="text-lg font-bold text-primary mb-3">Compliance-Aufwand</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">Wiederholte Prüf- und Beschaffungszyklen, die rechtliche und operative Ressourcen für jede einzelne Objektanalyse binden.</p>
                </div>
                <div className="p-8 bg-surface-container-lowest">
                  <span className="material-symbols-outlined text-primary text-4xl mb-6">payments</span>
                  <h3 className="text-lg font-bold text-primary mb-3">Unplanbare Kosten</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">Schwankende Einzelpreise und versteckter Verwaltungsaufwand machen eine jährliche Budgetplanung für Fondsmanager nahezu unmöglich.</p>
                </div>
                <div className="p-8 bg-surface-container-lowest">
                  <span className="material-symbols-outlined text-primary text-4xl mb-6">description</span>
                  <h3 className="text-lg font-bold text-primary mb-3">Uneinheitliches Reporting</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">Fragmentierte Datenformate verschiedener Anbieter verhindern effektive portfolioweite Vergleiche und Risikobewertungen.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Explanation (Bento) */}
        <section className="bg-surface py-24 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 text-center">
              <h2 className="text-4xl font-bold text-primary tracking-tight">Ein dedizierter KI-gestützter Analysepartner.</h2>
              <p className="mt-4 text-on-surface-variant max-w-2xl mx-auto">Unser Rahmenvertrag ist mehr als eine Dienstleistung – er ist ein Infrastruktur-Upgrade für Ihren Investitionsausschuss.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 bg-primary-container p-12 text-on-primary relative overflow-hidden">
                <h3 className="text-3xl font-bold mb-6">Institutionelle Geschwindigkeit</h3>
                <p className="text-on-primary-container text-lg leading-relaxed max-w-md">Unsere proprietäre KI-Engine verarbeitet komplexe rechtliche und finanzielle Daten in Sekunden und liefert Hochvolumen-Analysen ohne Präzisionsverlust.</p>
                <div className="mt-12 flex gap-12">
                  <div>
                    <span className="block text-4xl font-bold">48h</span>
                    <span className="text-xs uppercase tracking-[0.2em] opacity-60">SLA-Lieferung</span>
                  </div>
                  <div>
                    <span className="block text-4xl font-bold">100%</span>
                    <span className="text-xs uppercase tracking-[0.2em] opacity-60">Deutschlandweite Abdeckung</span>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-high p-12 flex flex-col justify-between">
                <span className="material-symbols-outlined text-primary text-6xl">verified_user</span>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">DSGVO-konform</h3>
                  <p className="text-on-surface-variant text-sm">In Deutschland gehostete Serverinfrastruktur gewährleistet volle Datensouveränität und Konformität mit EU-Datenschutzstandards.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Table */}
        <section className="bg-surface-container-low py-24 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-primary tracking-tight">Planbare Investitionsstrukturen.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-outline-variant">
              {/* Starter */}
              <div className="bg-surface-container-lowest p-10 flex flex-col">
                <span className="text-[10px] font-bold tracking-[0.2em] text-on-surface-variant uppercase mb-4">Einstiegstarif</span>
                <h3 className="text-2xl font-bold text-primary mb-2">Starter</h3>
                <div className="mb-8">
                  <span className="text-4xl font-bold text-primary">2.500 €</span>
                  <span className="text-on-surface-variant">/Monat</span>
                </div>
                <ul className="space-y-4 mb-12 flex-grow">
                  <li className="flex items-start gap-3 text-sm">
                    <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                    Bis zu 5 detaillierte Analysen/Monat
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                    72h SLA-Bearbeitungszeit
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                    Standard-API-Zugang
                  </li>
                </ul>
                <button className="w-full py-4 border-2 border-primary text-primary font-bold text-xs tracking-widest uppercase hover:bg-primary hover:text-on-primary transition-all">Starter wählen</button>
              </div>
              {/* Standard (Recommended) */}
              <div className="bg-primary p-10 flex flex-col text-on-primary relative">
                <div className="absolute top-0 right-0 bg-secondary text-on-secondary-fixed text-[9px] font-black px-4 py-1 uppercase tracking-widest">Empfohlen</div>
                <span className="text-[10px] font-bold tracking-[0.2em] text-primary-fixed uppercase mb-4">Unternehmensgröße</span>
                <h3 className="text-2xl font-bold mb-2">Standard</h3>
                <div className="mb-8">
                  <span className="text-4xl font-bold">7.200 €</span>
                  <span className="opacity-60">/Monat</span>
                </div>
                <ul className="space-y-4 mb-12 flex-grow">
                  <li className="flex items-start gap-3 text-sm">
                    <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    Bis zu 20 detaillierte Analysen/Monat
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    48h SLA-Priorität
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    Erweiterte Datenvisualisierung
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    Dedizierter Key Account Manager
                  </li>
                </ul>
                <button className="w-full py-4 bg-secondary text-on-secondary font-bold text-xs tracking-widest uppercase hover:bg-on-secondary-container transition-all">Standard wählen</button>
              </div>
              {/* Premium */}
              <div className="bg-surface-container-lowest p-10 flex flex-col">
                <span className="text-[10px] font-bold tracking-[0.2em] text-on-surface-variant uppercase mb-4">Institutionell</span>
                <h3 className="text-2xl font-bold text-primary mb-2">Premium</h3>
                <div className="mb-8">
                  <span className="text-4xl font-bold text-primary">Individuell</span>
                  <span className="text-on-surface-variant">/jährlich</span>
                </div>
                <ul className="space-y-4 mb-12 flex-grow">
                  <li className="flex items-start gap-3 text-sm">
                    <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                    Unbegrenzte Analyseanfragen
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                    24h kritische Bearbeitungszeit
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                    Individuelle Enterprise-Integration
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                    White-Label Reporting-Engine
                  </li>
                </ul>
                <button className="w-full py-4 border-2 border-primary text-primary font-bold text-xs tracking-widest uppercase hover:bg-primary hover:text-on-primary transition-all">Premium anfragen</button>
              </div>
            </div>
          </div>
        </section>

        {/* SLA Highlights */}
        <section className="bg-surface py-24 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-8 tracking-tight">Das Lochaber Service Level Agreement.</h2>
                <div className="space-y-10">
                  <div className="flex gap-6">
                    <span className="text-secondary font-bold text-xl">01</span>
                    <div>
                      <h4 className="font-bold text-primary text-lg mb-1">48h-Liefergarantie</h4>
                      <p className="text-on-surface-variant text-sm">Für alle Standard-Analyseanfragen. Wenn wir das Zeitfenster verpassen, ist die Analyse auf uns. Keine Ausnahmen.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <span className="text-secondary font-bold text-xl">02</span>
                    <div>
                      <h4 className="font-bold text-primary text-lg mb-1">Deutsche Sicherheitsstandards</h4>
                      <p className="text-on-surface-variant text-sm">Alle Daten werden innerhalb der deutschen Rechtshoheit gespeichert und verarbeitet. Jederzeit vollständig DSGVO-konform.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <span className="text-secondary font-bold text-xl">03</span>
                    <div>
                      <h4 className="font-bold text-primary text-lg mb-1">Deutschlandweites Reporting</h4>
                      <p className="text-on-surface-variant text-sm">Umfassende Datenabdeckung über alle 16 Bundesländer, einschließlich ländlicher und industrieller Sonderzonen.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-surface-container-high flex flex-col items-center justify-center text-center p-6">
                  <span className="material-symbols-outlined text-primary text-4xl mb-4">public</span>
                  <span className="text-xs font-bold uppercase tracking-widest">Globale Standards</span>
                </div>
                <div className="aspect-square bg-primary text-on-primary flex flex-col items-center justify-center text-center p-6">
                  <span className="material-symbols-outlined text-secondary text-4xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  <span className="text-xs font-bold uppercase tracking-widest">TÜV-zertifizierte KI</span>
                </div>
                <div className="aspect-square bg-surface-container-high flex flex-col items-center justify-center text-center p-6">
                  <span className="material-symbols-outlined text-primary text-4xl mb-4">security</span>
                  <span className="text-xs font-bold uppercase tracking-widest">ISO 27001</span>
                </div>
                <div className="aspect-square bg-surface-container-high flex flex-col items-center justify-center text-center p-6">
                  <span className="material-symbols-outlined text-primary text-4xl mb-4">analytics</span>
                  <span className="text-xs font-bold uppercase tracking-widest">Geprüfte Modelle</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-8 bg-primary">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-on-primary mb-8 leading-tight">Sichern Sie die Zukunft Ihres Portfolios mit strategischer Präzision.</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-10 py-5 bg-secondary text-on-secondary font-bold text-sm tracking-widest uppercase transition-all hover:bg-on-secondary-container hover:-translate-y-0.5">Strategiegespräch buchen</button>
              <button className="bg-transparent border-2 border-on-primary text-on-primary px-10 py-5 font-bold text-sm tracking-widest uppercase hover:bg-on-primary hover:text-primary transition-all">Vertragsübersicht herunterladen</button>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default FrameworkContract;
