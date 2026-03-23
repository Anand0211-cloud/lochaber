import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Services = () => {
  return (
    <Layout>
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative bg-surface overflow-hidden py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7">
              <span className="inline-block bg-secondary-fixed text-on-secondary-fixed text-[0.7rem] font-bold tracking-[0.15em] uppercase px-3 py-1 mb-6 rounded-sm">
                Strategic Portfolio Evaluation
              </span>
              <h1 className="text-[3.5rem] leading-[1.1] font-bold text-primary tracking-tight mb-8">
                Potential Analysis
              </h1>
              <p className="text-lg text-on-surface-variant leading-relaxed mb-10 max-w-xl">
                Identify hidden asset value through AI-driven structural diagnostics. We combine regulatory zoning data with market benchmarks to reveal the untapped capacity of your portfolio.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 editorial-gradient text-on-primary font-bold tracking-wide transition-all hover:shadow-xl hover:-translate-y-0.5">
                  Request Analysis
                </button>
                <button className="border border-outline/20 text-primary px-8 py-4 font-bold tracking-wide hover:bg-surface-container-low transition-colors">
                  View Sample Report
                </button>
              </div>
            </div>
            <div className="md:col-span-5 relative">
              <div className="aspect-[4/5] bg-surface-container-high overflow-hidden shadow-2xl relative">
                <img alt="Modern architectural glass building facade" className="w-full h-full object-cover grayscale contrast-125 opacity-90" data-alt="Close up of modern architectural glass building" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHnlsoiopEHExysvdDxnEkWnsIbkCJxaWgFB6BAmyZmgNolbF-XQWrgy_5qXAYw3ZjLwjwaFwBGZ283PAuoiCh4-sNEovpsTVwotTghXhgIfN6kP8SZTzsBTZtKtEFBJXcFcKAx9FBMDMdOr3cY6bJ4tkIXoFpYNXzUXY4eLeM5zKbfD5VQUHPAsaCfcz7bdiov4XvNJG8rx7t1l2IVX62xJ8LZ3ofwkrVIOt1P2-KNqq5xjVO6aBB__W_SRakao-DvYlPMN3cTFJo"/>
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
              </div>
              {/* Floating Data Card */}
              <div className="absolute -bottom-6 -left-12 hidden lg:block bg-surface-container-lowest p-6 shadow-xl w-64 border-l-4 border-secondary">
                <p className="text-[0.65rem] font-bold uppercase tracking-widest text-outline mb-2">Analysis Insight</p>
                <p className="text-primary font-bold text-lg">+24% Density Potential</p>
                <p className="text-xs text-on-surface-variant mt-1">Found in District B-412 via AI Zoning Scan.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Explanation */}
        <section className="bg-surface-container-low py-24">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
              <div>
                <h2 className="text-[1.75rem] font-semibold text-primary mb-6 leading-tight">
                  Why most potential goes unnoticed.
                </h2>
                <div className="space-y-6 text-on-surface-variant">
                  <p className="leading-relaxed">
                    Traditional property assessment relies on manual research and static benchmarks. In a rapidly shifting regulatory environment, this leads to missed opportunities for densification, repurposing, and yield optimization.
                  </p>
                  <p className="leading-relaxed">
                    Our "Precision Editorial" approach ensures no data point is left unexamined. We bridge the gap between architectural possibility and financial reality.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-surface-container-lowest p-8 flex items-start gap-6">
                  <span className="material-symbols-outlined text-secondary text-3xl">warning</span>
                  <div>
                    <h4 className="font-bold text-primary mb-2">Static Data Silos</h4>
                    <p className="text-sm text-on-surface-variant">Valuations often ignore updated municipal zoning adjustments that allow for increased height or floor area.</p>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-8 flex items-start gap-6">
                  <span className="material-symbols-outlined text-secondary text-3xl">visibility_off</span>
                  <div>
                    <h4 className="font-bold text-primary mb-2">The Visibility Gap</h4>
                    <p className="text-sm text-on-surface-variant">Over 60% of project developers overlook minor attic conversion potential that yields high-margin returns.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-16">
              <p className="text-secondary font-bold text-xs tracking-[0.2em] uppercase mb-4">The Methodology</p>
              <h2 className="text-3xl font-bold text-primary">Core Analytical Services</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Service 1 */}
              <Link to="/leistungen/basis-check" className="bg-white p-8 shadow-sm flex flex-col justify-between border-b-4 border-primary h-full group hover:shadow-xl transition-all duration-300">
                <div>
                  <span className="material-symbols-outlined text-primary text-3xl mb-6 group-hover:scale-110 transition-transform">fact_check</span>
                  <h3 className="text-lg font-bold text-primary mb-2">Basis Check</h3>
                  <p className="text-secondary font-bold text-xl mb-4">€890</p>
                  <p className="text-on-surface-variant text-sm leading-relaxed">Quick property evaluation providing an initial overview of site parameters.</p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
                  Learn More <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </div>
              </Link>
              {/* Service 2 */}
              <Link to="/leistungen/potential-analysis" className="bg-primary p-8 shadow-sm flex flex-col justify-between text-on-primary h-full group hover:shadow-xl transition-all duration-300">
                <div>
                  <span className="material-symbols-outlined text-secondary-fixed text-3xl mb-6 group-hover:scale-110 transition-transform">analytics</span>
                  <h3 className="text-lg font-bold mb-2">Potential Analysis</h3>
                  <p className="text-secondary-fixed text-xl font-bold mb-4">€1,990</p>
                  <p className="text-primary-fixed/80 text-sm leading-relaxed">Detailed profitability analysis identifying specific yield-enhancement opportunities.</p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-xs font-bold text-secondary-fixed opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
                  Learn More <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </div>
              </Link>
              {/* Service 3 */}
              <Link to="/leistungen/feasibility-study" className="bg-white p-8 shadow-sm flex flex-col justify-between border-b-4 border-secondary h-full group hover:shadow-xl transition-all duration-300">
                <div>
                  <span className="material-symbols-outlined text-primary text-3xl mb-6 group-hover:scale-110 transition-transform">architecture</span>
                  <h3 className="text-lg font-bold text-primary mb-2">Feasibility Study</h3>
                  <p className="text-secondary font-bold text-xl mb-4">€4,500+</p>
                  <p className="text-on-surface-variant text-sm leading-relaxed">Full study including building scenarios, investment return models, and government funding pathways.</p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
                  Learn More <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </div>
              </Link>
              {/* Service 4 */}
              <Link to="/leistungen/bank-check" className="bg-white p-8 shadow-sm flex flex-col justify-between border-b-4 border-primary h-full group hover:shadow-xl transition-all duration-300">
                <div>
                  <span className="material-symbols-outlined text-primary text-3xl mb-6 group-hover:scale-110 transition-transform">account_balance</span>
                  <h3 className="text-lg font-bold text-primary mb-2">Bank Check</h3>
                  <p className="text-secondary font-bold text-xl mb-4">€750</p>
                  <p className="text-on-surface-variant text-sm leading-relaxed">Tailored for banks to assess accurate loan value and comprehensive ESG risk metrics.</p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
                  Learn More <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </div>
              </Link>
              {/* Service 5 */}
              <Link to="/leistungen/portfolio-scan" className="bg-white p-8 shadow-sm flex flex-col justify-between border-b-4 border-secondary h-full group hover:shadow-xl transition-all duration-300">
                <div>
                  <span className="material-symbols-outlined text-primary text-3xl mb-6 group-hover:scale-110 transition-transform">lan</span>
                  <h3 className="text-lg font-bold text-primary mb-2">Portfolio Scan</h3>
                  <p className="text-secondary font-bold text-xl mb-4">€2,500+</p>
                  <p className="text-on-surface-variant text-sm leading-relaxed">Simultaneous analysis of multiple properties (5–50) to optimize cross-portfolio allocation.</p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
                  Learn More <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </div>
              </Link>
              {/* Service 6 */}
              <Link to="/leistungen/partner-flat" className="bg-primary p-8 shadow-sm flex flex-col justify-between text-on-primary h-full group hover:shadow-xl transition-all duration-300">
                <div>
                  <span className="material-symbols-outlined text-secondary-fixed text-3xl mb-6 group-hover:scale-110 transition-transform">calendar_month</span>
                  <h3 className="text-lg font-bold mb-2">Partner Flat</h3>
                  <p className="text-secondary-fixed text-xl font-bold mb-4">€890/mo</p>
                  <p className="text-primary-fixed/80 text-sm leading-relaxed">Subscription model providing 5 detailed analyses per month for ongoing pipelines.</p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-xs font-bold text-secondary-fixed opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
                  Learn More <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </div>
              </Link>
              {/* Service 7 */}
              <Link to="/leistungen/rahmenvertrag-banken" className="lg:col-span-2 bg-white p-8 shadow-sm flex flex-col justify-center border-b-4 border-primary h-full group hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center gap-8">
                  <span className="material-symbols-outlined text-primary text-5xl shrink-0 group-hover:scale-110 transition-transform">handshake</span>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Bank Framework Contract</h3>
                    <p className="text-secondary font-bold text-2xl mb-4">From €6,500/year</p>
                    <p className="text-on-surface-variant text-sm leading-relaxed max-w-md">Annual strategic plans designed for institutional partners and heavy-volume lenders requiring continuous audit-ready analysis.</p>
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-2 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest md:justify-end">
                  Learn More <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* 3-Step Process */}
        <section className="py-24 bg-surface-container-low border-y border-outline-variant/10">
          <div className="max-w-7xl mx-auto px-8 text-center">
            <h2 className="text-3xl font-bold text-primary mb-20">The Deployment Path</h2>
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
                  <h4 className="font-bold text-lg mb-4 uppercase tracking-[0.15em] text-primary">Request</h4>
                  <p className="text-sm text-on-surface-variant max-w-[240px] leading-relaxed">Upload basic property IDs or land registry excerpts through our secure portal.</p>
                </div>

                {/* Step 2: Analysis */}
                <div className="flex flex-col items-center group">
                  <div className="w-20 h-20 bg-white border border-outline/10 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-xl rounded-full relative">
                    <span className="material-symbols-outlined text-3xl">query_stats</span>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary text-white text-[0.6rem] font-bold flex items-center justify-center rounded-full">02</div>
                  </div>
                  <h4 className="font-bold text-lg mb-4 uppercase tracking-[0.15em] text-primary">Analysis</h4>
                  <p className="text-sm text-on-surface-variant max-w-[240px] leading-relaxed">Our proprietary algorithms scan thousands of regulatory and market data points in minutes.</p>
                </div>

                {/* Step 3: Result */}
                <div className="flex flex-col items-center group">
                  <div className="w-20 h-20 bg-white border border-outline/10 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-xl rounded-full relative">
                    <span className="material-symbols-outlined text-3xl">verified</span>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary text-white text-[0.6rem] font-bold flex items-center justify-center rounded-full">03</div>
                  </div>
                  <h4 className="font-bold text-lg mb-4 uppercase tracking-[0.15em] text-primary">Result</h4>
                  <p className="text-sm text-on-surface-variant max-w-[240px] leading-relaxed">A senior Lochaber consultant verifies findings and prepares your actionable executive summary.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Target Audience */}
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[3/4] bg-surface-container-high p-8 flex flex-col justify-end group cursor-default">
                  <h5 className="font-bold text-primary text-xl">Project Developers</h5>
                  <p className="text-xs text-on-surface-variant mt-2">Uncover site feasibility before the bid.</p>
                </div>
                <div className="aspect-[3/4] bg-primary p-8 flex flex-col justify-end group cursor-default">
                  <h5 className="font-bold text-white text-xl">Portfolio Owners</h5>
                  <p className="text-xs text-primary-fixed mt-2">Scale yield across established assets.</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 pl-0 md:pl-16">
              <p className="text-secondary font-bold text-xs tracking-[0.2em] uppercase mb-4">Strategic Partners</p>
              <h2 className="text-4xl font-bold text-primary mb-8 leading-tight">Tailored for those who build the future.</h2>
              <p className="text-on-surface-variant leading-relaxed">Whether you are evaluating a single plot or managing a multi-billion euro institutional portfolio, our analysis provides the objective clarity needed for high-stakes decision making.</p>
            </div>
          </div>
        </section>

        {/* Report Preview Section */}
        <section className="py-24 bg-surface-container-high/30">
          <div className="max-w-7xl mx-auto px-8">
            <div className="bg-surface-container-lowest shadow-2xl overflow-hidden max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12">
              <div className="md:col-span-4 bg-primary text-on-primary p-12 flex flex-col justify-between">
                <div>
                  <div className="text-xl font-bold tracking-tighter mb-12">Lochaber</div>
                  <h3 className="text-2xl font-bold leading-tight">Asset Analysis Report 2024</h3>
                  <div className="mt-4 w-12 h-1 bg-secondary"></div>
                </div>
                <div className="text-xs tracking-widest uppercase text-on-primary-container">Confidential Executive Summary</div>
              </div>
              <div className="md:col-span-8 p-12 bg-white">
                <div className="space-y-8">
                  <div className="flex justify-between items-center border-b border-outline-variant/30 pb-4">
                    <span className="text-xs font-bold text-outline uppercase tracking-widest">Asset Reference</span>
                    <span className="text-sm font-semibold text-primary">#BER-4921-X</span>
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <p className="text-xs text-outline mb-1">Base Valuation</p>
                      <p className="text-lg font-bold">€14.2M</p>
                    </div>
                    <div>
                      <p className="text-xs text-outline mb-1">Identified Potential</p>
                      <p className="text-lg font-bold text-secondary">€3.8M</p>
                    </div>
                  </div>
                  <div className="bg-surface-container-low p-6">
                    <p className="text-xs font-bold text-primary mb-3">KEY FINDING: REPURPOSING</p>
                    <p className="text-sm text-on-surface-variant italic">"Current B-Plan allows for a 3rd story conversion of the logistics annex into creative office space with minimal CAPEX..."</p>
                  </div>
                  <button className="w-full border-2 border-primary py-4 font-bold text-primary text-sm flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-all">
                    <span className="material-symbols-outlined">download</span>
                    DOWNLOAD SAMPLE PDF
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
          <div className="max-w-7xl mx-auto px-8 text-center relative z-10">
            <h2 className="text-[2.5rem] font-bold text-white mb-8">Ready to unlock your property's value?</h2>
            <p className="text-primary-fixed/80 max-w-2xl mx-auto text-lg mb-12">
              Get a comprehensive digital assessment within 48 hours. No hidden fees. Institutional-grade precision.
            </p>
            <button className="editorial-gradient text-on-primary px-10 py-5 font-bold text-lg shadow-lg hover:shadow-2xl transition-all">
              Request Analysis Now
            </button>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Services;
