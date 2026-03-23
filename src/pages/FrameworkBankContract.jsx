import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const FrameworkBankContract = () => {
  return (
    <Layout>
      <main className="pt-24 bg-surface min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-24 md:py-32 bg-[#003036] text-on-primary">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)', backgroundSize: '60px 60px' }}></div>
          </div>
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-block bg-secondary text-on-secondary text-[0.7rem] font-bold tracking-[0.2em] uppercase px-3 py-1 mb-8">
                Institutionelle Partnerschaft
              </span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.05]">
                Planbare Immobilienanalyse für Ihr Haus – <span className="text-secondary">ohne Beschaffungsaufwand.</span>
              </h1>
              <p className="text-xl text-primary-fixed/80 leading-relaxed mb-12 max-w-2xl font-['Inter']">
                Ein Rahmenvertrag. Feste Konditionen. Ein Ansprechpartner. Deutschlandweit. Speziell entwickelt für Sparkassen, Genossenschaftsbanken und Versicherer.
              </p>
              <div className="flex flex-wrap gap-6">
                <Link to="/contact" className="editorial-gradient px-10 py-5 font-bold tracking-wider uppercase text-sm shadow-2xl hover:translate-y-[-2px] transition-transform">
                  Erstgespräch vereinbaren
                </Link>
                <button className="border border-white/20 px-10 py-5 font-bold tracking-wider uppercase text-sm hover:bg-white/5 transition-colors">
                  PDF-Broschüre herunterladen
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Presentation */}
        <section className="py-24 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-20 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-6">Den Beschaffungsengpass überwinden.</h2>
              <p className="text-on-surface-variant font-['Inter']">Die Verwaltung einzelner Immobilienanalysen über Abteilungen hinweg führt zu erheblichem operativem Aufwand.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="p-10 bg-surface-container-low border-t-4 border-primary">
                <span className="material-symbols-outlined text-secondary text-4xl mb-6">task_alt</span>
                <h4 className="font-bold text-xl mb-4 text-primary">Compliance-Aufwand</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">Jeder Auftrag erfordert Beschaffungsfreigabe, Lieferantenbewertung und Dokumentation. Das bindet Ressourcen und verlangsamt Prozesse.</p>
              </div>
              <div className="p-10 bg-surface-container-low border-t-4 border-primary">
                <span className="material-symbols-outlined text-secondary text-4xl mb-6">payments</span>
                <h4 className="font-bold text-xl mb-4 text-primary">Fehlende Planbarkeit</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">Schwankende Kosten erschweren die Budgetierung. Ohne Rahmenvertrag sind Kosten weder planbar noch verhandelbar.</p>
              </div>
              <div className="p-10 bg-surface-container-low border-t-4 border-primary">
                <span className="material-symbols-outlined text-secondary text-4xl mb-6">dynamic_feed</span>
                <h4 className="font-bold text-xl mb-4 text-primary">Wechselnde Anbieter</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">Uneinheitliche Berichte und Qualitätsstandards erzeugen Onboarding-Aufwand. Wir bieten einen einheitlichen Standard deutschlandweit.</p>
              </div>
            </div>

            <div className="mt-20 p-12 bg-primary text-on-primary text-center rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Die Lochaber-Lösung</h3>
              <p className="text-primary-fixed/80 max-w-2xl mx-auto font-['Inter']">
                Ein Jahresvertrag mit festen Konditionen, einem einzigen Ansprechpartner und einheitlicher Berichtsqualität im Lochaber-Design – für alle Standorte deutschlandweit.
              </p>
            </div>
          </div>
        </section>

        {/* Models Table */}
        <section className="py-24 bg-surface-container-high/30">
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="text-3xl font-bold text-primary mb-16 text-center">Institutionelle Modelle</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white border-collapse shadow-2xl">
                <thead>
                  <tr className="bg-primary text-on-primary">
                    <th className="p-6 text-left border-b border-white/10 uppercase tracking-widest text-xs font-bold">Merkmal</th>
                    <th className="p-6 text-center border-b border-white/10 uppercase tracking-widest text-xs font-bold bg-white/5 font-['Inter']">Bank Starter</th>
                    <th className="p-6 text-center border-b border-white/10 uppercase tracking-widest text-xs font-bold bg-white/10 font-['Inter']">Bank Standard</th>
                    <th className="p-6 text-center border-b border-white/10 uppercase tracking-widest text-xs font-bold bg-secondary text-on-secondary font-['Inter']">Bank Premium</th>
                  </tr>
                </thead>
                <tbody className="font-['Inter']">
                  <tr className="border-b border-outline/5 hover:bg-surface-container-lowest transition-colors">
                    <td className="p-6 font-bold text-primary">Jahrespreis (netto)</td>
                    <td className="p-6 text-center text-on-surface-variant">6.500 €/Jahr</td>
                    <td className="p-6 text-center text-on-surface-variant">17.500 €/Jahr</td>
                    <td className="p-6 text-center font-bold text-primary text-lg">32.000 €/Jahr</td>
                  </tr>
                  <tr className="border-b border-outline/5 hover:bg-surface-container-lowest transition-colors">
                    <td className="p-6 font-bold text-primary">Enthaltene Analysen</td>
                    <td className="p-6 text-center text-on-surface-variant">10 Analysen/Jahr</td>
                    <td className="p-6 text-center text-on-surface-variant">30 Analysen/Jahr</td>
                    <td className="p-6 text-center font-bold text-secondary">Unbegrenzt</td>
                  </tr>
                  <tr className="border-b border-outline/5 hover:bg-surface-container-lowest transition-colors">
                    <td className="p-6 font-bold text-primary">Analysetypen</td>
                    <td className="p-6 text-center text-sm text-on-surface-variant">Basis Check + Bank-Check</td>
                    <td className="p-6 text-center text-sm text-on-surface-variant">Alle Einzelpakete</td>
                    <td className="p-6 text-center text-sm text-on-surface-variant">Alle Pakete inkl. Machbarkeitsstudien</td>
                  </tr>
                  <tr className="border-b border-outline/5 hover:bg-surface-container-lowest transition-colors">
                    <td className="p-6 font-bold text-primary">Lieferzeit (SLA)</td>
                    <td className="p-6 text-center text-on-surface-variant">5 Werktage</td>
                    <td className="p-6 text-center font-bold text-primary">48 Stunden</td>
                    <td className="p-6 text-center font-bold text-primary">48h (priorisiert)</td>
                  </tr>
                  <tr className="border-b border-outline/5 hover:bg-surface-container-lowest transition-colors">
                    <td className="p-6 font-bold text-primary">Ansprechpartner</td>
                    <td className="p-6 text-center text-on-surface-variant">Ja</td>
                    <td className="p-6 text-center text-on-surface-variant">Ja (dediziert)</td>
                    <td className="p-6 text-center text-on-surface-variant">Ja (Direktdurchwahl)</td>
                  </tr>
                  <tr className="border-b border-outline/5 hover:bg-surface-container-lowest transition-colors">
                    <td className="p-6 font-bold text-primary">Quartalsbericht</td>
                    <td className="p-6 text-center text-outline">—</td>
                    <td className="p-6 text-center text-on-surface-variant">Ja</td>
                    <td className="p-6 text-center text-on-surface-variant">Ja (inkl. Portfolio)</td>
                  </tr>
                  <tr className="border-b border-outline/5 hover:bg-surface-container-lowest transition-colors">
                    <td className="p-6 font-bold text-primary">Schulung / Onboarding</td>
                    <td className="p-6 text-center text-outline">—</td>
                    <td className="p-6 text-center text-on-surface-variant">1x jährlich</td>
                    <td className="p-6 text-center text-on-surface-variant">2x jährlich + Ad-hoc</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SLA & Trust */}
        <section className="py-24 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-12">SLA-Zusicherung & Vertrauen</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-secondary">acute</span>
                    <div>
                      <h5 className="font-bold text-sm uppercase tracking-widest text-primary mb-1">48h Vorlaufzeit</h5>
                      <p className="text-xs text-on-surface-variant font-['Inter']">Standard- & Premium-Modelle.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-secondary">security</span>
                    <div>
                      <h5 className="font-bold text-sm uppercase tracking-widest text-primary mb-1">DSGVO-konform</h5>
                      <p className="text-xs text-on-surface-variant font-['Inter']">Daten werden in Deutschland verarbeitet und gespeichert.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-secondary">map</span>
                    <div>
                      <h5 className="font-bold text-sm uppercase tracking-widest text-primary mb-1">Deutschlandweit</h5>
                      <p className="text-xs text-on-surface-variant font-['Inter']">Analysen für jede deutsche Immobilie.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-secondary">branding_watermark</span>
                    <div>
                      <h5 className="font-bold text-sm uppercase tracking-widest text-primary mb-1">Einheitliche Qualität</h5>
                      <p className="text-xs text-on-surface-variant font-['Inter']">Professionelles Lochaber-Design.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-low p-12 border border-outline/10">
                <span className="material-symbols-outlined text-4xl text-primary mb-6">verified</span>
                <ul className="space-y-6">
                  <li className="flex items-center gap-4 text-primary font-bold">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    Entwickelt für Sparkassen & Genossenschaftsbanken
                  </li>
                  <li className="flex items-center gap-4 text-primary font-bold">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    Versicherer & institutionelle Portfoliomanager
                  </li>
                  <li className="flex items-center gap-4 text-primary font-bold">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    MaRisk-konforme Bewertungsgrundlagen
                  </li>
                </ul>
                <p className="mt-12 text-xs text-outline font-bold italic">Referenzen auf Anfrage verfügbar. NDA erforderlich.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Area */}
        <section className="py-24 bg-[#003036] text-on-primary">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <h2 className="text-3xl font-bold mb-8">Bereit, Ihre Immobilienanalyse zu optimieren?</h2>
            <p className="text-primary-fixed/60 mb-12 font-['Inter']">
              Laden Sie unsere PDF-Broschüre herunter oder vereinbaren Sie ein unverbindliches Gespräch mit unserem institutionellen Beziehungsteam.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/contact" className="editorial-gradient px-10 py-5 font-bold tracking-wider uppercase text-sm shadow-2xl hover:translate-y-[-2px] transition-transform">
                Unverbindliches Beratungsgespräch anfragen
              </Link>
              <button className="bg-white/10 hover:bg-white/20 transition-colors px-10 py-5 font-bold tracking-wider uppercase text-sm">
                PDF-Übersicht herunterladen
              </button>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default FrameworkBankContract;
