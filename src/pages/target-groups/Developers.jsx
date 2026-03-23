import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

const Developers = () => {
  return (
    <Layout>
      <SEO 
        title="Bebauungspotenzial bundesweit | Projektentwickler Tools"
        description="Maximieren Sie das Bebauungspotenzial Ihrer Grundstücke. Lochaber bietet präzise KI-Analysen & Machbarkeitsstudien für Projektentwickler deutschlandweit."
      />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="px-8 py-24 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-8">
            <span className="inline-block bg-secondary-fixed text-on-secondary-fixed text-[0.7rem] font-bold tracking-[0.15em] uppercase px-3 py-1 mb-6 rounded-sm">
              Lösungen für Projektentwickler
            </span>
            <h1 className="text-[3.5rem] leading-[1.1] font-bold text-primary tracking-tight mb-8">
              Kaufentscheidungen beschleunigen. Risiken minimieren.
            </h1>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-10 max-w-xl font-['Inter']">
              KI-basierte Analyse: Bebauungspotenzial, Renditeprognose, Handlungsempfehlung in Tagen – deutschlandweit.
            </p>
            <div className="bg-surface-container-low p-8 border-l-4 border-primary mb-10">
              <h4 className="text-[0.65rem] font-bold text-outline uppercase tracking-widest mb-4">Relevante Produkte</h4>
              <div className="flex flex-wrap gap-8">
                <div>
                  <p className="text-primary font-bold">Potenzialanalyse</p>
                  <p className="text-secondary font-bold">1.990 €</p>
                </div>
                <div className="w-[1px] bg-outline-variant/30 hidden sm:block"></div>
                <div>
                  <p className="text-primary font-bold">Machbarkeitsstudie</p>
                  <p className="text-secondary font-bold">ab 4.500 €</p>
                </div>
              </div>
            </div>
            <Link to="/contact" className="inline-flex items-center gap-3 editorial-gradient text-on-primary px-8 py-4 font-bold tracking-wide transition-all hover:shadow-xl hover:-translate-y-0.5">
              Immobilie analysieren lassen <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
          <div className="md:col-span-4 relative">
            <div className="aspect-[3/4] bg-surface-container-high overflow-hidden shadow-2xl relative">
              <img alt="Modernes Projektentwicklungsgelände" className="w-full h-full object-cover grayscale contrast-125 opacity-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC11mPuAJ3zr45nQbi6ga4m73vIQ0yWVM3VNro-cn1krFDJKPEzCC1ZYREE1qL8ThHNbgiZUAj-vpqL-LWXoXTkbOHjkCXH6ELR7Up5V6hwEoVE4rtjxPCp2fGhoeiHHSEblMtwqdEWf9MtqO6I3vz-KQ0Kkb2QDo9g7D93YWzLfz2j5K6aVhnfG9miGSiRnq7Bb4g8k4ISIg0nC3an6oG0V_S3zycN_XiFgFu5qq31LZeRiYcimOkb6iddF6Y8uIVuBu0UUCiY1xk"/>
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
            </div>
          </div>
        </section>

        {/* Core Problem Section */}
        <section className="bg-surface-container-low py-24">
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-16">
              <p className="text-secondary font-bold text-xs tracking-[0.2em] uppercase mb-4">Die Herausforderung</p>
              <h2 className="text-3xl font-bold text-primary">Das Kernproblem überwinden</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-10 border-t-4 border-primary shadow-sm hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-secondary text-3xl mb-6">schedule</span>
                <h4 className="font-bold text-primary mb-4 uppercase tracking-wider text-sm">Lange Wartezeiten</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">Wochen bis Monate für traditionelle Grundstücksprüfungen verzögern Ihre Pipeline.</p>
              </div>
              <div className="bg-white p-10 border-t-4 border-primary shadow-sm hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-secondary text-3xl mb-6">cancel_schedule_send</span>
                <h4 className="font-bold text-primary mb-4 uppercase tracking-wider text-sm">Verpasste Chancen</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">Wettbewerber gewinnen, während Sie auf manuelle architektonische Bewertungen warten.</p>
              </div>
              <div className="bg-white p-10 border-t-4 border-primary shadow-sm hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-secondary text-3xl mb-6">error</span>
                <h4 className="font-bold text-primary mb-4 uppercase tracking-wider text-sm">Fehlentscheidungen</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">Kostspielige Investitionsfehler durch unvollständige oder statische Zoning-Datenanalyse.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Developers;
