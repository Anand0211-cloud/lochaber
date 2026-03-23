import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';

const Brokers = () => {
  return (
    <Layout>
      <main className="pt-24 pb-12">
        {/* Hero Section */}
        <section className="max-w-[1440px] mx-auto px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8">
              <span className="inline-block px-3 py-1 bg-secondary text-on-secondary text-[10px] font-bold uppercase tracking-[0.2em] mb-6 rounded-sm">Brokers & Portfolio Holders</span>
              <h1 className="text-5xl md:text-[4rem] font-bold text-primary tracking-tight leading-[1.1] mb-8">
                See more value. <br/><span className="text-secondary">Advise better.</span>
              </h1>
              <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed mb-10">
                Value potential analysis for properties, identify off-market deals, Renovation planning with KfW funding check – nationwide.
              </p>

              <div className="bg-surface-container-low p-8 border-l-4 border-primary mb-10">
                <h4 className="text-[0.65rem] font-bold text-outline uppercase tracking-widest mb-4">Relevant Products</h4>
                <div className="flex flex-wrap gap-8">
                  <div>
                    <p className="text-primary font-bold">Basis-Check</p>
                    <p className="text-secondary font-bold">€890</p>
                  </div>
                  <div className="w-[1px] bg-outline-variant/30 hidden sm:block"></div>
                  <div>
                    <p className="text-primary font-bold">Portfolio-Scan</p>
                    <p className="text-secondary font-bold">from €2,500</p>
                  </div>
                  <div className="w-[1px] bg-outline-variant/30 hidden sm:block"></div>
                  <div>
                    <p className="text-primary font-bold">Partner-Flat</p>
                    <p className="text-secondary font-bold">from €890 /mo.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <Link to="/contact" className="inline-flex items-center gap-3 editorial-gradient text-on-primary px-10 py-4 font-bold tracking-wide transition-all hover:shadow-xl hover:-translate-y-0.5">
                  Request Partner-Flat <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
                <div className="bg-surface-container-highest/30 p-6 border border-outline/10 max-w-xl">
                  <div className="flex gap-4 items-start">
                    <span className="material-symbols-outlined text-secondary">verified</span>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      <strong className="text-primary">Lochaber USP:</strong> Professional reports strengthen your advisory quality – your client receives premium analyses with the <span className="text-primary font-bold italic tracking-tighter uppercase px-1.5 border border-primary/20 text-[10px]">Lochaber Seal</span>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 relative">
              <div className="aspect-[4/5] bg-primary overflow-hidden shadow-2xl relative">
                <img alt="Modern property facade" className="object-cover w-full h-full opacity-60 mix-blend-luminosity grayscale contrast-125" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaHTzJwG_2XbCMM5y28IPgyN4Ph-dI5utsQvIcacFB_88Xl0DlXzGMzxZCU5rNou2-k_6i5KAuNxTSRWpxGu9gAyzhC3wg8CXDgbRKrn169ZLJIQdDj-ufR5beY-CK4G33vD1VkOWKaCeeXGkyxc-W6SoosN4tckhLmZmAGisG_9__JUbNZe2JkcVl3T9ImMeoaJxUywL7OVkrpEsaXV20n1A9GfIQTFFaTWxBuovFDC4zS_xICdUi0grlJtFoHDKfko4kmGvgtXw"/>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Problem Section */}
        <section className="bg-surface-container-low py-24">
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-16">
              <p className="text-secondary font-bold text-xs tracking-[0.2em] uppercase mb-4">Market Challenges</p>
              <h2 className="text-3xl font-bold text-primary">Facing Competitive Pressure</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-10 border-t-4 border-primary shadow-sm hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-secondary text-3xl mb-6">competition</span>
                <h4 className="font-bold text-primary mb-4 uppercase tracking-wider text-sm">Competitive Pressure</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">Differentiation only through quality of advice. Standing out requires deeper insights than basic listings.</p>
              </div>
              <div className="bg-white p-10 border-t-4 border-primary shadow-sm hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-secondary text-3xl mb-6">search_off</span>
                <h4 className="font-bold text-primary mb-4 uppercase tracking-wider text-sm">Hidden Potentials</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">Valuable potentials in the portfolio remain undiscovered without institutional-grade analysis tools.</p>
              </div>
              <div className="bg-white p-10 border-t-4 border-primary shadow-sm hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-secondary text-3xl mb-6">query_stats</span>
                <h4 className="font-bold text-primary mb-4 uppercase tracking-wider text-sm">Advisory Quality</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">Strengthen your position as a trusted advisor with validated reports and professional benchmarks.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Brokers;
