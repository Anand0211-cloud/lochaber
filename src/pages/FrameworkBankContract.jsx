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
                Institutional Partnership
              </span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.05]">
                Planned real estate analysis for your home – <span className="text-secondary">without procurement effort.</span>
              </h1>
              <p className="text-xl text-primary-fixed/80 leading-relaxed mb-12 max-w-2xl font-['Inter']">
                A framework agreement. Fixed terms. One contact person. Nationwide. Designed specifically for Sparkassen, cooperative banks, and insurers.
              </p>
              <div className="flex flex-wrap gap-6">
                <Link to="/contact" className="editorial-gradient px-10 py-5 font-bold tracking-wider uppercase text-sm shadow-2xl hover:translate-y-[-2px] transition-transform">
                  Schedule Initial Consultation
                </Link>
                <button className="border border-white/20 px-10 py-5 font-bold tracking-wider uppercase text-sm hover:bg-white/5 transition-colors">
                  Download PDF Brochure
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Presentation */}
        <section className="py-24 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-20 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-6">Overcoming the procurement bottleneck.</h2>
              <p className="text-on-surface-variant font-['Inter']">Managing individual real estate analyses across departments leads to significant operational friction.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="p-10 bg-surface-container-low border-t-4 border-primary">
                <span className="material-symbols-outlined text-secondary text-4xl mb-6">task_alt</span>
                <h4 className="font-bold text-xl mb-4 text-primary">Compliance Effort</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">Each order requires procurement approval, vendor evaluation and documentation. This ties up resources and slows down processes.</p>
              </div>
              <div className="p-10 bg-surface-container-low border-t-4 border-primary">
                <span className="material-symbols-outlined text-secondary text-4xl mb-6">payments</span>
                <h4 className="font-bold text-xl mb-4 text-primary">Missing Predictability</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">Fluctuating costs complicate budgeting. Without a framework agreement, costs are neither predictable nor negotiable.</p>
              </div>
              <div className="p-10 bg-surface-container-low border-t-4 border-primary">
                <span className="material-symbols-outlined text-secondary text-4xl mb-6">dynamic_feed</span>
                <h4 className="font-bold text-xl mb-4 text-primary">Changing Providers</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">Disconnected reports and quality standards create onboarding overhead. We provide a single uniform standard nationwide.</p>
              </div>
            </div>

            <div className="mt-20 p-12 bg-primary text-on-primary text-center rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">The Lochaber Solution</h3>
              <p className="text-primary-fixed/80 max-w-2xl mx-auto font-['Inter']">
                An annual contract with fixed terms, a single contact person and uniform report quality in Lochaber design – for all locations nationwide.
              </p>
            </div>
          </div>
        </section>

        {/* Models Table */}
        <section className="py-24 bg-surface-container-high/30">
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="text-3xl font-bold text-primary mb-16 text-center">Institutional Models</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white border-collapse shadow-2xl">
                <thead>
                  <tr className="bg-primary text-on-primary">
                    <th className="p-6 text-left border-b border-white/10 uppercase tracking-widest text-xs font-bold">Feature</th>
                    <th className="p-6 text-center border-b border-white/10 uppercase tracking-widest text-xs font-bold bg-white/5 font-['Inter']">Bank Starter</th>
                    <th className="p-6 text-center border-b border-white/10 uppercase tracking-widest text-xs font-bold bg-white/10 font-['Inter']">Bank Standard</th>
                    <th className="p-6 text-center border-b border-white/10 uppercase tracking-widest text-xs font-bold bg-secondary text-on-secondary font-['Inter']">Bank Premium</th>
                  </tr>
                </thead>
                <tbody className="font-['Inter']">
                  <tr className="border-b border-outline/5 hover:bg-surface-container-lowest transition-colors">
                    <td className="p-6 font-bold text-primary">Annual Price (net)</td>
                    <td className="p-6 text-center text-on-surface-variant">€6,500/year</td>
                    <td className="p-6 text-center text-on-surface-variant">€17,500/year</td>
                    <td className="p-6 text-center font-bold text-primary text-lg">€32,000/year</td>
                  </tr>
                  <tr className="border-b border-outline/5 hover:bg-surface-container-lowest transition-colors">
                    <td className="p-6 font-bold text-primary">Included Analyses</td>
                    <td className="p-6 text-center text-on-surface-variant">10 analyses/year</td>
                    <td className="p-6 text-center text-on-surface-variant">30 analyses/year</td>
                    <td className="p-6 text-center font-bold text-secondary">Unlimited</td>
                  </tr>
                  <tr className="border-b border-outline/5 hover:bg-surface-container-lowest transition-colors">
                    <td className="p-6 font-bold text-primary">Analysis Types</td>
                    <td className="p-6 text-center text-sm text-on-surface-variant">Basis check + Bank-Check</td>
                    <td className="p-6 text-center text-sm text-on-surface-variant">All individual packages</td>
                    <td className="p-6 text-center text-sm text-on-surface-variant">All packages incl. Feasibility studies</td>
                  </tr>
                  <tr className="border-b border-outline/5 hover:bg-surface-container-lowest transition-colors">
                    <td className="p-6 font-bold text-primary">Delivery Time (SLA)</td>
                    <td className="p-6 text-center text-on-surface-variant">5 working days</td>
                    <td className="p-6 text-center font-bold text-primary">48 hours</td>
                    <td className="p-6 text-center font-bold text-primary">48h (prioritized)</td>
                  </tr>
                  <tr className="border-b border-outline/5 hover:bg-surface-container-lowest transition-colors">
                    <td className="p-6 font-bold text-primary">Contact Person</td>
                    <td className="p-6 text-center text-on-surface-variant">Yes</td>
                    <td className="p-6 text-center text-on-surface-variant">Yes (dedicated)</td>
                    <td className="p-6 text-center text-on-surface-variant">Yes (direct extension)</td>
                  </tr>
                  <tr className="border-b border-outline/5 hover:bg-surface-container-lowest transition-colors">
                    <td className="p-6 font-bold text-primary">Quarterly Report</td>
                    <td className="p-6 text-center text-outline">—</td>
                    <td className="p-6 text-center text-on-surface-variant">Yes</td>
                    <td className="p-6 text-center text-on-surface-variant">Yes (incl. Portfolio)</td>
                  </tr>
                  <tr className="border-b border-outline/5 hover:bg-surface-container-lowest transition-colors">
                    <td className="p-6 font-bold text-primary">Training / Onboarding</td>
                    <td className="p-6 text-center text-outline">—</td>
                    <td className="p-6 text-center text-on-surface-variant">1x annually</td>
                    <td className="p-6 text-center text-on-surface-variant">2x annually + Ad-hoc</td>
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
                <h2 className="text-3xl font-bold text-primary mb-12">SLA Commitment & Trust</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-secondary">acute</span>
                    <div>
                      <h5 className="font-bold text-sm uppercase tracking-widest text-primary mb-1">48h Lead Time</h5>
                      <p className="text-xs text-on-surface-variant font-['Inter']">Standard & Premium models.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-secondary">security</span>
                    <div>
                      <h5 className="font-bold text-sm uppercase tracking-widest text-primary mb-1">GDPR Compliant</h5>
                      <p className="text-xs text-on-surface-variant font-['Inter']">Data processed and stored in Germany.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-secondary">map</span>
                    <div>
                      <h5 className="font-bold text-sm uppercase tracking-widest text-primary mb-1">Nationwide</h5>
                      <p className="text-xs text-on-surface-variant font-['Inter']">Analyses for any German property.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-secondary">branding_watermark</span>
                    <div>
                      <h5 className="font-bold text-sm uppercase tracking-widest text-primary mb-1">Uniform Quality</h5>
                      <p className="text-xs text-on-surface-variant font-['Inter']">Professional Lochaber design.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-low p-12 border border-outline/10">
                <span className="material-symbols-outlined text-4xl text-primary mb-6">verified</span>
                <ul className="space-y-6">
                  <li className="flex items-center gap-4 text-primary font-bold">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    Designed for Sparkassen & Cooperative Banks
                  </li>
                  <li className="flex items-center gap-4 text-primary font-bold">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    Insurers & Institutional Portfolio Managers
                  </li>
                  <li className="flex items-center gap-4 text-primary font-bold">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    MaRisk-compliant valuation bases
                  </li>
                </ul>
                <p className="mt-12 text-xs text-outline font-bold italic">References available upon request. NDA required.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Area */}
        <section className="py-24 bg-[#003036] text-on-primary">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to streamline your property analysis?</h2>
            <p className="text-primary-fixed/60 mb-12 font-['Inter']">
              Download our PDF brochure or schedule a non-binding call with our institutional relations team.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/contact" className="editorial-gradient px-10 py-5 font-bold tracking-wider uppercase text-sm shadow-2xl hover:translate-y-[-2px] transition-transform">
                Request Non-binding Consultation
              </Link>
              <button className="bg-white/10 hover:bg-white/20 transition-colors px-10 py-5 font-bold tracking-wider uppercase text-sm">
                Download PDF Overview
              </button>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default FrameworkBankContract;
