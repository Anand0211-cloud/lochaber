import Layout from '../../components/Layout';

const Banks = () => {
  return (
    <Layout>
      <main className="pt-24">
        {/* Hero Section */}
        <section className="px-8 py-20 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <span className="inline-block text-secondary font-label text-[0.75rem] font-semibold uppercase tracking-[0.2em] mb-6">Institutional Excellence</span>
            <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary tracking-tight leading-[1.1] mb-8">
              Institutional-Grade <br/>
              <span className="text-secondary-fixed-dim">ESG Compliance</span> and <br/>
              Regulatory Reporting.
            </h1>
            <p className="text-on-surface-variant text-xl max-w-2xl leading-relaxed">
              Navigate the complex landscape of BaFin and EU mandates with precision. Our automated systems provide institutional-grade validation for banks and insurers.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end">
            <div className="w-full h-[400px] bg-primary-container overflow-hidden shadow-2xl relative group">
              <img className="w-full h-full object-cover mix-blend-overlay opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEuops4Rh3gwy3dcDZclcA0jr2TMfHbTmLHy81DtfMtLWptW3sInXrxbt8gzNfmaXejSVTuCE0TGK1ciSwIvJjV2z7dkyLHdSsz5KYfAp0xIMxrALkd4MwS2ALcOwq79b7teToK6rIBmW0vWNu0PgchBhVCh1R1LebFM0Iy8ZTW2BJlWYnDtfWtGcY1Xj_gaCRE8QI4jKqD9YhgOC-1eugTcXmZUcWvWB7zFD97VfbZ5nTdoPCF-2QsJgvcj11LiHU6SXDSKjRno4"/>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="text-on-primary font-headline text-2xl font-semibold mb-2">99.8%</div>
                <p className="text-on-primary-container text-sm uppercase tracking-widest font-semibold">Reporting Accuracy</p>
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
                  <h3 className="font-headline text-2xl font-semibold text-primary mb-4">The Complexity Crisis</h3>
                  <ul className="space-y-4 text-on-surface-variant">
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-sm mt-1">close</span>
                      <span>Escalating ESG mandates and regulatory pressures.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-sm mt-1">close</span>
                      <span>Critical manual review bottlenecks in asset valuation.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-sm mt-1">close</span>
                      <span>Inconsistent data across institutional portfolios.</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* The Solution */}
              <div className="md:col-span-2 bg-primary p-10 relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="font-headline text-3xl font-bold text-on-primary mb-8">Automated Precision Solutions</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    <div>
                      <h4 className="text-secondary-container font-semibold mb-2 flex items-center gap-2">
                        <span className="material-symbols-outlined">auto_awesome</span>
                        Automated Scoring
                      </h4>
                      <p className="text-on-primary-container text-sm leading-relaxed">
                        Real-time ESG scoring modules that integrate directly with existing banking core systems via secure API.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-secondary-container font-semibold mb-2 flex items-center gap-2">
                        <span className="material-symbols-outlined">gavel</span>
                        BaFin-Compliant Reports
                      </h4>
                      <p className="text-on-primary-container text-sm leading-relaxed">
                        Audit-ready documentation generated automatically, satisfying the most stringent regulatory inquiries.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-secondary-container font-semibold mb-2 flex items-center gap-2">
                        <span className="material-symbols-outlined">psychology</span>
                        AI-Powered Validation
                      </h4>
                      <p className="text-on-primary-container text-sm leading-relaxed">
                        Cross-referencing property data against global ESG benchmarks using proprietary machine learning models.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-secondary-container font-semibold mb-2 flex items-center gap-2">
                        <span className="material-symbols-outlined">security</span>
                        Data Integrity
                      </h4>
                      <p className="text-on-primary-container text-sm leading-relaxed">
                        Zero-trust architecture ensuring all sensitive institutional data remains within sovereign boundaries.
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
            <h2 className="font-headline text-4xl font-bold text-primary">Core Institutional Services</h2>
            <div className="h-px flex-grow bg-outline-variant/30 mx-8 hidden md:block"></div>
            <span className="text-secondary font-label font-bold tracking-[0.1em]">THE GOLD STANDARD</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group">
              <div className="bg-surface-container h-[2px] w-full mb-8 group-hover:bg-secondary transition-colors duration-500"></div>
              <h4 className="font-headline text-xl font-bold text-primary mb-2">Bank Check</h4>
              <p className="text-on-surface-variant mb-8 leading-relaxed">Comprehensive risk assessment of real estate collateral under current ESG guidelines.</p>
            </div>
            <div className="group">
              <div className="bg-surface-container h-[2px] w-full mb-8 group-hover:bg-secondary transition-colors duration-500"></div>
              <h4 className="font-headline text-xl font-bold text-primary mb-2">Portfolio Scan</h4>
              <p className="text-on-surface-variant mb-8 leading-relaxed">Aggregated data analysis across diverse holdings to identify systemic ESG exposure.</p>
            </div>
            <div className="group">
              <div className="bg-surface-container h-[2px] w-full mb-8 group-hover:bg-secondary transition-colors duration-500"></div>
              <h4 className="font-headline text-xl font-bold text-primary mb-2">Framework Contract</h4>
              <p className="text-on-surface-variant mb-8 leading-relaxed">Standardized recurring analysis for ongoing compliance and internal auditing.</p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Banks;
