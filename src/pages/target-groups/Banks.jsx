import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

const Banks = () => {
  return (
    <Layout>
      <SEO
        title="ESG Immobilien Banken & Finanzierer Lösungen"
        description="MaRisk-konforme Beleihungswert-Indikationen & ESG-Checks für Banken. Lochaber bietet institutionelle Immobilienanalysen deutschlandweit."
      />
      <main className="pt-22">
        {/* Hero Section */}
        <section className="px-8 py-20 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <span className="inline-block text-secondary font-label text-[0.75rem] font-semibold uppercase tracking-[0.2em] mb-6">Institutionelle Exzellenz</span>
            <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary tracking-tight leading-[1.1] mb-8">
              Institutionelle <br/>
              <span className="text-secondary-fixed-dim">ESG-Compliance</span> und <br/>
              regulatorisches Reporting.
            </h1>
            <p className="text-on-surface-variant text-xl max-w-2xl leading-relaxed">
              Navigieren Sie die komplexe Landschaft der BaFin- und EU-Anforderungen mit Präzision. Unsere automatisierten Systeme bieten institutionelle Validierung für Banken und Versicherer.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end">
            <div className="w-full h-[400px] bg-primary-container overflow-hidden shadow-2xl relative group">
              <img className="w-full h-full object-cover mix-blend-overlay opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEuops4Rh3gwy3dcDZclcA0jr2TMfHbTmLHy81DtfMtLWptW3sInXrxbt8gzNfmaXejSVTuCE0TGK1ciSwIvJjV2z7dkyLHdSsz5KYfAp0xIMxrALkd4MwS2ALcOwq79b7teToK6rIBmW0vWNu0PgchBhVCh1R1LebFM0Iy8ZTW2BJlWYnDtfWtGcY1Xj_gaCRE8QI4jKqD9YhgOC-1eugTcXmZUcWvWB7zFD97VfbZ5nTdoPCF-2QsJgvcj11LiHU6SXDSKjRno4"/>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="text-on-primary font-headline text-2xl font-semibold mb-2">99,8%</div>
                <p className="text-on-primary-container text-sm uppercase tracking-widest font-semibold">Berichtsgenauigkeit</p>
              </div>
            </div>
          </div>
        </section>

        {/* Problem/Solution Bento Grid */}
        <section className="bg-surface-container-low py-24 px-8">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* The Challenge */}
              <div className="md:col-span-1 bg-surface-container-lowest p-10 flex flex-col justify-between">
                <div>
                  <span className="material-symbols-outlined text-error text-3xl mb-6">warning</span>
                  <h3 className="font-headline text-2xl font-semibold text-primary mb-4">Die Komplexitätskrise</h3>
                  <ul className="space-y-4 text-on-surface-variant">
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-sm mt-1">close</span>
                      <span>Eskalierende ESG-Vorgaben und regulatorischer Druck.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-sm mt-1">close</span>
                      <span>Kritische manuelle Prüfungsengpässe bei der Objektbewertung.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-sm mt-1">close</span>
                      <span>Inkonsistente Daten über institutionelle Portfolios hinweg.</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* The Solution */}
              <div className="md:col-span-2 bg-primary p-10 relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="font-headline text-3xl font-bold text-on-primary mb-8">Automatisierte Präzisionslösungen</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    <div>
                      <h4 className="text-secondary-container font-semibold mb-2 flex items-center gap-2">
                        <span className="material-symbols-outlined">auto_awesome</span>
                        Automatisiertes Scoring
                      </h4>
                      <p className="text-on-primary-container text-sm leading-relaxed">
                        Echtzeit-ESG-Scoring-Module, die sich direkt über sichere API in bestehende Bankkernsysteme integrieren.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-secondary-container font-semibold mb-2 flex items-center gap-2">
                        <span className="material-symbols-outlined">gavel</span>
                        BaFin-konforme Berichte
                      </h4>
                      <p className="text-on-primary-container text-sm leading-relaxed">
                        Automatisch generierte, prüfungssichere Dokumentation, die strengsten regulatorischen Anfragen standhält.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-secondary-container font-semibold mb-2 flex items-center gap-2">
                        <span className="material-symbols-outlined">psychology</span>
                        KI-gestützte Validierung
                      </h4>
                      <p className="text-on-primary-container text-sm leading-relaxed">
                        Querverweis von Immobiliendaten mit globalen ESG-Benchmarks mittels proprietärer Machine-Learning-Modelle.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-secondary-container font-semibold mb-2 flex items-center gap-2">
                        <span className="material-symbols-outlined">security</span>
                        Datenintegrität
                      </h4>
                      <p className="text-on-primary-container text-sm leading-relaxed">
                        Zero-Trust-Architektur, die sicherstellt, dass alle sensiblen institutionellen Daten innerhalb souveräner Grenzen bleiben.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-24 px-8 max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
            <h2 className="font-headline text-4xl font-bold text-primary">Institutionelle Kernleistungen</h2>
            <div className="h-px flex-grow bg-outline-variant/30 mx-8 hidden md:block"></div>
            <span className="text-secondary font-label font-bold tracking-[0.1em]">DER GOLDSTANDARD</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group">
              <div className="bg-surface-container h-[2px] w-full mb-8 group-hover:bg-secondary transition-colors duration-500"></div>
              <h4 className="font-headline text-xl font-bold text-primary mb-2">Bank Check</h4>
              <p className="text-on-surface-variant mb-8 leading-relaxed">Umfassende Risikobewertung von Immobiliensicherheiten nach aktuellen ESG-Richtlinien.</p>
            </div>
            <div className="group">
              <div className="bg-surface-container h-[2px] w-full mb-8 group-hover:bg-secondary transition-colors duration-500"></div>
              <h4 className="font-headline text-xl font-bold text-primary mb-2">Portfolio Scan</h4>
              <p className="text-on-surface-variant mb-8 leading-relaxed">Aggregierte Datenanalyse über diverse Bestände zur Identifikation systemischer ESG-Exposition.</p>
            </div>
            <div className="group">
              <div className="bg-surface-container h-[2px] w-full mb-8 group-hover:bg-secondary transition-colors duration-500"></div>
              <h4 className="font-headline text-xl font-bold text-primary mb-2">Rahmenvertrag</h4>
              <p className="text-on-surface-variant mb-8 leading-relaxed">Standardisierte wiederkehrende Analyse für fortlaufende Compliance und interne Prüfungen.</p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Banks;
