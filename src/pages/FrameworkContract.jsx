import Layout from '../components/Layout';

const FrameworkContract = () => {
  return (
    <Layout>
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative bg-surface py-24 px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7">
              <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container text-[10px] font-bold tracking-[0.2em] uppercase mb-6">Strategic Institutional Partnership</span>
              <h1 className="text-5xl md:text-7xl font-bold text-primary tracking-tight leading-[1.1] mb-8">
                Framework Contract: <br/><span className="text-secondary">Your Strategic Advantage.</span>
              </h1>
              <p className="text-xl text-on-surface-variant leading-relaxed mb-10 max-w-xl">
                Eliminate administrative friction and unlock institutional-grade real estate analysis at scale. Our framework contracts provide the predictability and precision required for global portfolios.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 editorial-gradient text-on-primary font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-2 transition-all hover:shadow-xl hover:-translate-y-0.5">
                  Book a Strategy Meeting
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </button>
                <button className="bg-surface-container-high text-primary px-8 py-4 font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-surface-container-highest transition-all">
                  Download Info PDF
                  <span className="material-symbols-outlined text-lg">download</span>
                </button>
              </div>
            </div>
            <div className="md:col-span-5 relative">
              <div className="aspect-[4/5] bg-surface-container-low overflow-hidden shadow-2xl">
                <img alt="Modern corporate architecture" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" data-alt="Close up of a modern glass skyscraper reflection" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnctYHCz4nTfWDbETdgUu7GjjU_46CAgswx8bVWC3pnURjp8pZLT4fDYfHfNpXvOXpYpRWp3WDRst8kqVtWwnEKJ0_QxsB_8uOKS92rSlczVKi5pKPyq9ZxybXX3C1bpmTxcs6sHmpjqXNBSRruJuJ0CC3bDXhQoSVl9AUWsHYjTIJ17g1LxGIFm2467ZI930cH963QZ8cJEKA9W1EvcDiMFjQUo6UwYLJmnXwMZ4OQReYzmWDt67Qwua4OAgjmB373Ua8MyK3bRk"/>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary p-8 text-on-primary max-w-[200px]">
                <span className="block text-4xl font-bold mb-2">99.8%</span>
                <span className="text-xs uppercase tracking-widest opacity-80">Analysis Accuracy Rate</span>
              </div>
            </div>
          </div>
        </section>

        {/* Problems Section */}
        <section className="bg-surface-container-low py-24 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="md:col-span-1 border-l-4 border-secondary pl-6">
                <h2 className="text-3xl font-bold text-primary leading-tight">The Friction of Individual Procurement.</h2>
              </div>
              <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div className="p-8 bg-surface-container-lowest">
                  <span className="material-symbols-outlined text-primary text-4xl mb-6">gavel</span>
                  <h3 className="text-lg font-bold text-primary mb-3">Compliance Burdens</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">Repeated vetting and procurement cycles draining legal and operational resources for every individual asset analysis.</p>
                </div>
                <div className="p-8 bg-surface-container-lowest">
                  <span className="material-symbols-outlined text-primary text-4xl mb-6">payments</span>
                  <h3 className="text-lg font-bold text-primary mb-3">Unpredictable Costs</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">Fluctuating spot prices and hidden administrative overhead making annual budget planning nearly impossible for fund managers.</p>
                </div>
                <div className="p-8 bg-surface-container-lowest">
                  <span className="material-symbols-outlined text-primary text-4xl mb-6">description</span>
                  <h3 className="text-lg font-bold text-primary mb-3">Inconsistent Reporting</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">Fragmented data formats from multiple vendors preventing effective portfolio-wide comparisons and risk assessment.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Explanation (Bento) */}
        <section className="bg-surface py-24 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 text-center">
              <h2 className="text-4xl font-bold text-primary tracking-tight">A Dedicated AI-Powered Analysis Partner.</h2>
              <p className="mt-4 text-on-surface-variant max-w-2xl mx-auto">Our Framework Contract is more than a service—it's an infrastructure upgrade for your investment committee.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 bg-primary-container p-12 text-on-primary relative overflow-hidden">
                <h3 className="text-3xl font-bold mb-6">Institutional Velocity</h3>
                <p className="text-on-primary-container text-lg leading-relaxed max-w-md">Our proprietary AI engine processes complex legal and financial data in seconds, delivering high-volume analysis without sacrificing precision.</p>
                <div className="mt-12 flex gap-12">
                  <div>
                    <span className="block text-4xl font-bold">48h</span>
                    <span className="text-xs uppercase tracking-[0.2em] opacity-60">SLA Delivery</span>
                  </div>
                  <div>
                    <span className="block text-4xl font-bold">100%</span>
                    <span className="text-xs uppercase tracking-[0.2em] opacity-60">Nationwide Coverage</span>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-high p-12 flex flex-col justify-between">
                <span className="material-symbols-outlined text-primary text-6xl">verified_user</span>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">DSGVO Compliant</h3>
                  <p className="text-on-surface-variant text-sm">German-hosted server infrastructure ensures full data sovereignty and regulatory alignment with EU privacy standards.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Table */}
        <section className="bg-surface-container-low py-24 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-primary tracking-tight">Predictable Investment Structures.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-outline-variant">
              {/* Starter */}
              <div className="bg-surface-container-lowest p-10 flex flex-col">
                <span className="text-[10px] font-bold tracking-[0.2em] text-on-surface-variant uppercase mb-4">Entry Tier</span>
                <h3 className="text-2xl font-bold text-primary mb-2">Starter</h3>
                <div className="mb-8">
                  <span className="text-4xl font-bold text-primary">€2.5k</span>
                  <span className="text-on-surface-variant">/month</span>
                </div>
                <ul className="space-y-4 mb-12 flex-grow">
                  <li className="flex items-start gap-3 text-sm">
                    <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                    Up to 5 Detailed Analyses / mo
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                    72h SLA Turnaround
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                    Standard API Access
                  </li>
                </ul>
                <button className="w-full py-4 border-2 border-primary text-primary font-bold text-xs tracking-widest uppercase hover:bg-primary hover:text-on-primary transition-all">Select Starter</button>
              </div>
              {/* Standard (Recommended) */}
              <div className="bg-primary p-10 flex flex-col text-on-primary relative">
                <div className="absolute top-0 right-0 bg-secondary text-on-secondary-fixed text-[9px] font-black px-4 py-1 uppercase tracking-widest">Recommended</div>
                <span className="text-[10px] font-bold tracking-[0.2em] text-primary-fixed uppercase mb-4">Corporate Scale</span>
                <h3 className="text-2xl font-bold mb-2">Standard</h3>
                <div className="mb-8">
                  <span className="text-4xl font-bold">€7.2k</span>
                  <span className="opacity-60">/month</span>
                </div>
                <ul className="space-y-4 mb-12 flex-grow">
                  <li className="flex items-start gap-3 text-sm">
                    <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    Up to 20 Detailed Analyses / mo
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    48h SLA Priority
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    Advanced Data Visualization
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    Dedicated Key Account Manager
                  </li>
                </ul>
                <button className="w-full py-4 bg-secondary text-on-secondary font-bold text-xs tracking-widest uppercase hover:bg-on-secondary-container transition-all">Select Standard</button>
              </div>
              {/* Premium */}
              <div className="bg-surface-container-lowest p-10 flex flex-col">
                <span className="text-[10px] font-bold tracking-[0.2em] text-on-surface-variant uppercase mb-4">Institutional</span>
                <h3 className="text-2xl font-bold text-primary mb-2">Premium</h3>
                <div className="mb-8">
                  <span className="text-4xl font-bold text-primary">Custom</span>
                  <span className="text-on-surface-variant">/annual</span>
                </div>
                <ul className="space-y-4 mb-12 flex-grow">
                  <li className="flex items-start gap-3 text-sm">
                    <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                    Unlimited Analysis Requests
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                    24h Critical Turnaround
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                    Custom Enterprise Integration
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                    White-label Reporting Engine
                  </li>
                </ul>
                <button className="w-full py-4 border-2 border-primary text-primary font-bold text-xs tracking-widest uppercase hover:bg-primary hover:text-on-primary transition-all">Inquire Custom</button>
              </div>
            </div>
          </div>
        </section>

        {/* SLA Highlights */}
        <section className="bg-surface py-24 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-8 tracking-tight">The Lochaber Service Level Agreement.</h2>
                <div className="space-y-10">
                  <div className="flex gap-6">
                    <span className="text-secondary font-bold text-xl">01</span>
                    <div>
                      <h4 className="font-bold text-primary text-lg mb-1">48h Delivery Guarantee</h4>
                      <p className="text-on-surface-variant text-sm">For all standard analysis requests. If we miss the window, the analysis is on us. No exceptions.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <span className="text-secondary font-bold text-xl">02</span>
                    <div>
                      <h4 className="font-bold text-primary text-lg mb-1">German Security Standards</h4>
                      <p className="text-on-surface-variant text-sm">All data stored and processed within German jurisdiction. Fully DSGVO / GDPR compliant at all times.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <span className="text-secondary font-bold text-xl">03</span>
                    <div>
                      <h4 className="font-bold text-primary text-lg mb-1">Nationwide Reporting</h4>
                      <p className="text-on-surface-variant text-sm">Comprehensive data coverage across all 16 federal states, including rural and industrial specialized zones.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-surface-container-high flex flex-col items-center justify-center text-center p-6">
                  <span className="material-symbols-outlined text-primary text-4xl mb-4">public</span>
                  <span className="text-xs font-bold uppercase tracking-widest">Global Standards</span>
                </div>
                <div className="aspect-square bg-primary text-on-primary flex flex-col items-center justify-center text-center p-6">
                  <span className="material-symbols-outlined text-secondary text-4xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  <span className="text-xs font-bold uppercase tracking-widest">TÜV Certified AI</span>
                </div>
                <div className="aspect-square bg-surface-container-high flex flex-col items-center justify-center text-center p-6">
                  <span className="material-symbols-outlined text-primary text-4xl mb-4">security</span>
                  <span className="text-xs font-bold uppercase tracking-widest">ISO 27001</span>
                </div>
                <div className="aspect-square bg-surface-container-high flex flex-col items-center justify-center text-center p-6">
                  <span className="material-symbols-outlined text-primary text-4xl mb-4">analytics</span>
                  <span className="text-xs font-bold uppercase tracking-widest">Audited Models</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-8 bg-primary">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-on-primary mb-8 leading-tight">Secure Your Portfolio's Future with Strategic Precision.</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-10 py-5 bg-secondary text-on-secondary font-bold text-sm tracking-widest uppercase transition-all hover:bg-on-secondary-container hover:-translate-y-0.5">Book Strategy Meeting</button>
              <button className="bg-transparent border-2 border-on-primary text-on-primary px-10 py-5 font-bold text-sm tracking-widest uppercase hover:bg-on-primary hover:text-primary transition-all">Download Contract Overview</button>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default FrameworkContract;
