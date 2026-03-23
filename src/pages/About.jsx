import Layout from '../components/Layout';
import analysisGraphic from '../assets/real_estate_analysis.png';

const About = () => {
  return (
    <Layout>
      <main className="pb-24">
        {/* Premium Hero Section */}
        <section className="relative bg-primary text-on-primary pt-32 pb-48 overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full -translate-x-1/2 translate-y-1/2 blur-[100px]"></div>
          
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-7">
                <span className="inline-block px-3 py-1 bg-secondary text-on-secondary text-[10px] font-bold uppercase tracking-[0.3em] mb-8 rounded-sm">The Visionary</span>
                <h1 className="text-7xl lg:text-[7rem] font-bold font-headline tracking-tighter leading-[0.9] mb-8">
                  Wolf <br/><span className="text-secondary">Probst.</span>
                </h1>
                <p className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-12 flex items-center gap-4">
                  <span className="h-[1px] w-12 bg-secondary/50"></span>
                  Owner & Principal Consultant
                </p>
                <div className="max-w-xl">
                  <h2 className="text-3xl lg:text-4xl font-light leading-snug mb-8 text-on-primary-container">
                    "Technology alone provides numbers – <span className="text-secondary font-bold italic">Lochaber provides answers.</span>"
                  </h2>
                </div>
              </div>
              <div className="lg:col-span-5 relative mt-12 lg:mt-0">
                <div className="aspect-[4/5] bg-surface-container-low overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] relative border border-white/10 group">
                  <img alt="Wolf Probst Portrait" className="w-full h-full object-cover grayscale brightness-110 group-hover:scale-105 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFO0EvhaA39BkvOT74KEc2mEcGNxIvvJg5EBNLEVzAoaibkwAnoa0qakcIWOwq68BomxAbojyLdQVJY595WziFuNFEHSddUKa2O57emiD0Q4DFyN90BgqmwQOdj3u6mAj1UJI1izuMrQJW1NupxQ3ke2SiWRAlYJIbPDTDqgQVJ9FKSTHnahyl1WDJazroRe_FzZENni6HmxOC6ixYTXenNPM2ZK1WNmqAkYH8IgxMYhUfJhyGIReEqA11M5eq6_7Di3rTYk6obAk"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/5 backdrop-blur-md border border-white/10">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-secondary mb-1">Institutional Legacy</p>
                    <p className="text-white text-xs font-medium">Over 40 years of hands-on industry expertise.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Biography Section */}
        <section className="-mt-24 relative z-20 max-w-5xl mx-auto px-8 mb-32">
          <div className="bg-white dark:bg-slate-900 p-12 lg:p-20 shadow-2xl border-t-8 border-secondary">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <p className="text-2xl lg:text-3xl text-primary font-bold leading-tight mb-8">
                  Energy-efficiency expert, project developer, and author of technical books.
                </p>
                <div className="w-16 h-1 bg-secondary mb-8"></div>
              </div>
              <div className="space-y-6">
                <p className="text-on-surface-variant leading-relaxed text-lg">
                  Wolf Probst brings over 40 years of practical experience in the real estate industry. As a published author, he has defined industry standards for future-proof real estate development.
                </p>
                <p className="text-on-surface-variant leading-relaxed">
                  With Lochaber, he bridges the gap between AI-assisted data analysis and practice-oriented consulting, ensuring that every data point translates into actionable business intelligence.
                </p>
              </div>
            </div>
          </div>
        </section>        {/* Core Competencies - Tonal Layering Style */}
        <section className="mb-32 px-8 max-w-7xl mx-auto">
          <div className="mb-16">
            <h3 className="text-secondary font-bold text-xs uppercase tracking-[0.3em] mb-4">Expertise Portfolio</h3>
            <h2 className="text-4xl font-bold text-primary tracking-tighter">Core Competencies</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-px bg-outline-variant/20 overflow-hidden border border-outline-variant/20">
            <div className="md:col-span-3 lg:col-span-4 bg-surface-container-lowest p-12 flex flex-col justify-between h-[360px] hover:bg-white transition-colors">
              <div>
                <span className="material-symbols-outlined text-secondary text-4xl mb-6">architecture</span>
                <h4 className="text-xl font-bold text-primary mb-4">Project Development</h4>
              </div>
              <p className="text-on-surface-variant leading-relaxed opacity-80">Over 40 years of experience in planning, financing and implementation of complex real estate projects.</p>
            </div>
            <div className="md:col-span-3 lg:col-span-4 bg-surface-container-low p-12 flex flex-col justify-between h-[360px]">
              <div>
                <span className="material-symbols-outlined text-secondary text-4xl mb-6">energy_savings_leaf</span>
                <h4 className="text-xl font-bold text-primary mb-4">Energy Efficiency</h4>
              </div>
              <p className="text-on-surface-variant leading-relaxed opacity-80">Specialist for energy-efficient renovation, KfW funding programs and Sustainability Standards.</p>
            </div>
            <div className="md:col-span-6 lg:col-span-4 bg-surface-container p-12 flex flex-col justify-between h-[360px]">
              <div>
                <span className="material-symbols-outlined text-secondary text-4xl mb-6">library_books</span>
                <h4 className="text-xl font-bold text-primary mb-4">Professional Publications</h4>
              </div>
              <p className="text-on-surface-variant leading-relaxed opacity-80">Author of several professional books as well as numerous practical guides and technical articles defining industry standards.</p>
            </div>
            <div className="md:col-span-3 lg:col-span-6 bg-surface-container-high p-12 flex flex-col justify-between h-[320px]">
              <div>
                <span className="material-symbols-outlined text-secondary text-4xl mb-6">memory</span>
                <h4 className="text-xl font-bold text-primary mb-4 text-secondary">AI Analysis</h4>
              </div>
              <p className="text-on-surface-variant leading-relaxed opacity-80">Early adoption and integration of state-of-the-art AI analysis tools into the institutional consulting process.</p>
            </div>
            <div className="md:col-span-3 lg:col-span-6 bg-surface-container-highest p-12 flex flex-col justify-between h-[320px]">
              <div>
                <span className="material-symbols-outlined text-secondary text-4xl mb-6">hub</span>
                <h4 className="text-xl font-bold text-primary mb-4">Institutional Network</h4>
              </div>
              <p className="text-on-surface-variant leading-relaxed opacity-80">Longstanding strategic contacts with portfolio holders, banks, and the European PropTech ecosystem.</p>
            </div>
          </div>
        </section>

        {/* Philosophy Section - With Graphic */}
        <section className="mb-32 bg-primary text-on-primary">
          <div className="max-w-7xl mx-auto px-8 py-24 lg:py-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
              <div className="py-24 relative z-10 pr-12">
                <h3 className="text-secondary font-bold text-xs uppercase tracking-[0.3em] mb-8">Philosophy</h3>
                <h4 className="text-4xl lg:text-6xl font-bold mb-12 leading-tight tracking-tight">
                  Data is a raw material. <br/><span className="text-secondary italic">Expertise is the added value.</span>
                </h4>
                <div className="space-y-8 text-on-primary-container leading-relaxed max-w-lg">
                  <p className="text-xl">
                    Lochaber combines the analytical power of artificial intelligence with the judgment of an experienced real estate expert.
                  </p>
                  <p className="opacity-70">
                    All analyses and reports appear in the Lochaber design – for a consistent, professional brand image with your clients.
                  </p>
                </div>
              </div>
              <div className="h-full relative overflow-hidden group">
                <img alt="Analysis Graphic" className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" src={analysisGraphic} />
                <div className="absolute inset-0 bg-gradient-to-l from-primary via-transparent to-transparent lg:from-primary lg:via-transparent lg:to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Reduced Height */}
        <section className="text-center py-16 border-t border-outline-variant/20 max-w-4xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-primary mb-6 tracking-tighter">Ready for Expert Consultation?</h2>
          <p className="text-lg text-on-surface-variant mb-10">
            Schedule a private consultation with Wolf Probst to get institutional-grade answers for your real estate portfolio.
          </p>
          <button className="px-10 py-4 editorial-gradient text-on-primary font-bold tracking-widest uppercase transition-all hover:shadow-2xl hover:-translate-y-1">
            Request Private Consultation
          </button>
        </section>
      </main>
    </Layout>
  );
};

export default About;
