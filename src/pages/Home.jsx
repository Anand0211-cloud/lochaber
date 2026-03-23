import Layout from '../components/Layout';
import bookCover from '../assets/wolf_probst_book_cover.png';

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden bg-primary pt-16">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover opacity-40 mix-blend-overlay" data-alt="Aerial view of high-rise architectural district with data overlay" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDj6EzFHzTAmOIdsGdjpMZrcPwwgjUyEvGC7DkU3-IDQK8sg9Cb9grY6kIcoH-b75wq4XMXoZGHpZ5jpGvlr64yd6uxPjq8qnXqhRvp6Fe4j9gxmYK6woSCJb-NZLwwdjyGMvvZ-aEgko-z7-_nVkEJ3iljfnJzIqiKZuwFisQIf-WtCDSz4ugUVcK3cN5rxVMSOCeCQCz3eqdETXXnlkzQLV2q6t_PU1QoHewnAk7OvCXbUFpb-KmrbZzFnccmf9YVkJ04N0niH9k"/>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-secondary text-on-secondary text-[10px] font-bold tracking-[0.2em] mb-6">ESTABLISHED 1984</span>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-8">
              Recognize property potential. Make informed decisions.
            </h1>
            <p className="text-xl text-on-primary-container leading-relaxed mb-10 max-w-xl">
              AI-powered analysis meets 40 years of senior consulting expertise. We transform complex data into actionable real estate strategy.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 editorial-gradient text-on-primary font-semibold text-sm tracking-wide transition-all hover:shadow-xl hover:-translate-y-0.5">Request Analysis</button>
              <button className="px-8 py-4 bg-secondary text-on-secondary font-semibold text-sm tracking-wide transition-all hover:bg-on-secondary-container hover:-translate-y-0.5">Framework Contract</button>
            </div>
          </div>
        </div>
        {/* Floating Data Element */}
        <div className="absolute bottom-20 right-8 hidden lg:block w-80 bg-surface-container-lowest/10 backdrop-blur-md border border-white/10 p-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-[10px] text-white/60 tracking-widest font-bold">LIVE ANALYSIS FEED</span>
            <span className="material-symbols-outlined text-secondary text-sm">analytics</span>
          </div>
          <div className="space-y-3">
            <div className="h-1 bg-white/10 w-full overflow-hidden"><div className="h-full bg-secondary w-2/3"></div></div>
            <div className="h-1 bg-white/10 w-full overflow-hidden"><div className="h-full bg-secondary w-1/2"></div></div>
            <div className="h-1 bg-white/10 w-full overflow-hidden"><div className="h-full bg-secondary w-4/5"></div></div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-primary mb-4">The Challenge of Real Estate Analysis</h2>
              <h3 className="text-2xl font-bold text-secondary mb-6 leading-tight">The market does not know its potential.</h3>
              <p className="text-on-surface-variant leading-relaxed mb-10 max-w-xl">
                Parcels are sold below value, development potentials remain unused, banks assess without AI support. Lochaber solves exactly this problem.
              </p>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <span className="material-symbols-outlined text-secondary text-3xl">hub</span>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Technical Complexity</h4>
                    <p className="text-on-surface-variant leading-relaxed">Regulatory shifts and ESG requirements have turned standard checks into multi-layered strategic hurdles.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <span className="material-symbols-outlined text-secondary text-3xl">bolt</span>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Market Velocity</h4>
                    <p className="text-on-surface-variant leading-relaxed">Opportunities vanish within days. Traditional 4-week analysis cycles are no longer competitive.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <span className="material-symbols-outlined text-secondary text-3xl">verified_user</span>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Compliance Risk</h4>
                    <p className="text-on-surface-variant leading-relaxed">Banks and institutions require forensic-level documentation to mitigate risk in volatile markets.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-square bg-surface-container-low">
              <img className="w-full h-full object-cover grayscale opacity-80" data-alt="Close up architectural detail of steel and glass facade" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHPAfp8JS3eYLyfER0yydmuL4zFL0FzpvFKvUKNmiYy2EZ9Fz5Y1ZKtqp_cztOklq4h7SWIBroB9yKb9eJuj3HjdiKIbyupST9uE9PnhwimQls0FyLJ2WQXXLboc2P4YDp1guxqrdTpfNMha2T1a-0n6MutkG86EJfDav4nf_Ipe0TkkKOFNWNBVF9HG8y4R530vgkeQ-aRjrgAEwFt3ZM7Dz55eLzaULLXR4v3-YvCNOgJIvvdvabElvYgGegipHsBlCTQliokPU"/>
              <div className="absolute -bottom-8 -left-8 bg-primary p-10 text-white max-w-xs">
                <p className="text-3xl font-bold mb-2">40+</p>
                <p className="text-sm text-on-primary-container tracking-wider font-medium uppercase">Years of Institutional Trust</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USP Cards */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-0">
            <div className="bg-surface-container-lowest p-12 border-r border-surface-container">
              <span className="text-secondary font-bold text-5xl block mb-6">48h</span>
              <h3 className="text-xl font-bold mb-4 text-primary">Maximum Speed</h3>
              <p className="text-on-surface-variant leading-relaxed">Initial potential analysis delivered in under 48 hours for rapid decision-making.</p>
            </div>
            <div className="bg-surface-container-lowest p-12 border-r border-surface-container">
              <span className="text-secondary font-bold text-5xl block mb-6">40y</span>
              <h3 className="text-xl font-bold mb-4 text-primary">Senior Expertise</h3>
              <p className="text-on-surface-variant leading-relaxed">Deep-rooted experience in German real estate cycles and complex asset valuations.</p>
            </div>
            <div className="bg-surface-container-lowest p-12">
              <span className="material-symbols-outlined text-secondary text-6xl block mb-6">tactic</span>
              <h3 className="text-xl font-bold mb-4 text-primary">Clear Action</h3>
              <p className="text-on-surface-variant leading-relaxed">No generic reports. We provide clear binary recommendations: Buy, Hold, or Pass.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid (Bento) */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-end mb-16">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold tracking-tight text-primary mb-4">Strategic Service Suite</h2>
              <p className="text-on-surface-variant">Modular analysis tools designed for institutional rigor and entrepreneurial speed.</p>
            </div>
            <div className="hidden md:block">
              <span className="text-secondary font-bold text-sm tracking-[0.3em]">SERVICE INDEX 01-07</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Basis Check */}
            <div className="md:col-span-4 bg-surface-container-lowest p-8 hover:bg-primary hover:text-white transition-all duration-500 group">
              <div className="flex justify-between mb-12">
                <span className="material-symbols-outlined text-secondary group-hover:text-white">fact_check</span>
                <span className="text-xs font-mono opacity-40">01</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Basis Check</h3>
              <p className="text-sm text-on-surface-variant group-hover:text-on-primary-container leading-relaxed">The foundational validation of property data and regulatory alignment.</p>
            </div>
            {/* Potential Analysis */}
            <div className="md:col-span-4 bg-surface-container-lowest p-8 hover:bg-primary hover:text-white transition-all duration-500 group">
              <div className="flex justify-between mb-12">
                <span className="material-symbols-outlined text-secondary group-hover:text-white">trending_up</span>
                <span className="text-xs font-mono opacity-40">02</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Potential Analysis</h3>
              <p className="text-sm text-on-surface-variant group-hover:text-on-primary-container leading-relaxed">Identifying hidden value levers through architectural and market modeling.</p>
            </div>
            {/* Feasibility Study */}
            <div className="md:col-span-4 bg-surface-container-lowest p-8 hover:bg-primary hover:text-white transition-all duration-500 group">
              <div className="flex justify-between mb-12">
                <span className="material-symbols-outlined text-secondary group-hover:text-white">architecture</span>
                <span className="text-xs font-mono opacity-40">03</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Feasibility Study</h3>
              <p className="text-sm text-on-surface-variant group-hover:text-on-primary-container leading-relaxed">Technical and financial deep-dives into development viability.</p>
            </div>
            {/* Bank Check */}
            <div className="md:col-span-6 bg-surface-container-lowest p-8 hover:bg-primary hover:text-white transition-all duration-500 group">
              <div className="flex justify-between mb-12">
                <span className="material-symbols-outlined text-secondary group-hover:text-white">account_balance</span>
                <span className="text-xs font-mono opacity-40">04</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Bank Check</h3>
              <p className="text-sm text-on-surface-variant group-hover:text-on-primary-container leading-relaxed">Third-party verification specifically tailored for financing requirements and risk departments.</p>
            </div>
            {/* Portfolio Scan */}
            <div className="md:col-span-6 bg-surface-container-lowest p-8 hover:bg-primary hover:text-white transition-all duration-500 group">
              <div className="flex justify-between mb-12">
                <span className="material-symbols-outlined text-secondary group-hover:text-white">folder_managed</span>
                <span className="text-xs font-mono opacity-40">05</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Portfolio Scan</h3>
              <p className="text-sm text-on-surface-variant group-hover:text-on-primary-container leading-relaxed">Holistic review of multiple assets to identify synergies and concentration risks.</p>
            </div>
            {/* Partner Flat & Framework */}
            <div className="md:col-span-8 bg-surface-container-lowest p-8 flex flex-col md:flex-row gap-8 border-t border-surface-container">
              <div className="flex-1">
                <span className="material-symbols-outlined text-secondary mb-6 block">handshake</span>
                <h3 className="text-lg font-bold mb-2">Partner Flat</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">Retainer-based consulting for ongoing project support.</p>
              </div>
              <div className="w-px bg-surface-container hidden md:block"></div>
              <div className="flex-1">
                <span className="material-symbols-outlined text-secondary mb-6 block">contract</span>
                <h3 className="text-lg font-bold mb-2">Framework Contract for Banks</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">Standardized assessment protocols for large-scale institutional lending.</p>
              </div>
            </div>
            <div className="md:col-span-4 bg-secondary p-8 flex items-center justify-center">
              <button className="text-on-secondary font-bold text-sm tracking-widest uppercase hover:underline underline-offset-8">VIEW ALL SERVICES</button>
            </div>
          </div>
        </div>
      </section>

      {/* Target Groups */}
      <section className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-center text-3xl font-bold text-primary mb-20 tracking-tight">Built for Market Leaders</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-surface-container-lowest p-1 shadow-sm transition-transform hover:-translate-y-2">
              <img className="w-full h-48 object-cover mb-6" data-alt="Close up of a construction blueprint and yellow helmet" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFlFFeeSOS2Ob5E6PTUaXRmYRcSK9fcrCvdY-qlykabpXtyPnU_ESLTzrYk1gJjMQ-OQIsJZKcPrpVIGu7pX9Spv9UJHS3sFAtFtZrCOfz63iBoYTdsFAaSvdF36vARAS0obbtX92bdwY_fTs6tIClRPRtc0pc4Eqfb6I3k0zqapJtikS9He2z-BWZcCHIC62z0eV6PuLEiAe8mDY9eJQdaiERMoFNerBC-fk6YelUKb_dL3x7DreFXufcXRV7LuYO1a7S6uUzOkw"/>
              <div className="px-6 pb-10">
                <h3 className="text-xl font-bold mb-3">Project developers & builders</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Speed up your due diligence and secure development permits with expert technical backing.</p>
                <a className="text-secondary font-bold text-xs tracking-widest flex items-center gap-2" href="#">LEARN MORE <span className="material-symbols-outlined text-sm">chevron_right</span></a>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-1 shadow-sm transition-transform hover:-translate-y-2">
              <img className="w-full h-48 object-cover mb-6" data-alt="Modern office lobby with clean architectural lines" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB32z_yYMjUHAcuuHOX7lvpSd8F1zNCsRXZHWxYuhDwyU_n1tQDM2sQ2QpTB0QZJRmoWlgvZuKRdrzsM4duFfJ_0-qZznClSmovxDKIQtePHJkx8SLt6-DwXe3_WQ6K2kq5gvzBEQWRgHBSlbeyKhlMpUI-YDvc0c1S3SKahLQUcZ18_AmkJw5N3W8Uj2zk2bUgVvqG_Ty1Cxfp3llFVzy-Quqsp1eqRVJz8os4hnsbKXZpkPTHDUe8r3B7WIJiMuC-f5UPckJ7X8s"/>
              <div className="px-6 pb-10">
                <h3 className="text-xl font-bold mb-3">Banks & insurers</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Mitigate credit risk with standardized, independent analysis reports that meet compliance standards.</p>
                <a className="text-secondary font-bold text-xs tracking-widest flex items-center gap-2" href="#">LEARN MORE <span className="material-symbols-outlined text-sm">chevron_right</span></a>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-1 shadow-sm transition-transform hover:-translate-y-2">
              <img className="w-full h-48 object-cover mb-6" data-alt="Abstract interior architectural shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAF8SuhiNF_I-rKsPKoo1M-zvjijTIunzBgSV3A926Vlw1o4HsbtupBr3Ot6phpnU1V530nZuHPsLKSCgO1xXvxzueHVoVaroZ2WgcebCE7KdnvtDd4Z_vYsPh-LIANjvX2idFDHagJizjjOuz40be_tB8GpGEXTNt5zmnDhgzUrwyXvR-MJ3Q-zjpkYdmdbIPmZqX0vSLSJcIZRdYEfImVJeIWb6ImL4gjzuqLRL9kuM4sTEC5SjUl2_KaUuVbDKvatyKtHbNCUkg"/>
              <div className="px-6 pb-10">
                <h3 className="text-xl font-bold mb-3">Brokers & asset holders</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Shorten the sales cycle by providing prospective buyers with a verified potential analysis.</p>
                <a className="text-secondary font-bold text-xs tracking-widest flex items-center gap-2" href="#">LEARN MORE <span className="material-symbols-outlined text-sm">chevron_right</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-32 bg-primary text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-secondary font-bold tracking-[0.3em] text-xs mb-4 block uppercase">The Lochaber Advantage</span>
              <h2 className="text-4xl font-bold mb-8 leading-tight">Expertise that spans generations, powered by the tools of tomorrow.</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border-l-2 border-secondary pl-6">
                  <p className="text-2xl font-bold mb-1">Proprietary AI</p>
                  <p className="text-on-primary-container text-xs leading-relaxed">Our custom machine learning models scan thousands of zoning and market data points in seconds.</p>
                </div>
                <div className="border-l-2 border-secondary pl-6">
                  <p className="text-2xl font-bold mb-1">Senior Advisory</p>
                  <p className="text-on-primary-container text-xs leading-relaxed">Every automated report is reviewed and signed off by a consultant with 20+ years of experience.</p>
                </div>
                <div className="md:col-span-2 border-l-2 border-secondary pl-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group mt-4">
                  <div className="max-w-xl">
                    <p className="text-2xl font-bold mb-1">Publications</p>
                    <p className="text-on-primary-container text-xs leading-relaxed">Authoritative 'Fachbuch' on future-proof real estate strategy by Wolf Probst.</p>
                  </div>
                  <img src={bookCover} className="w-20 h-28 object-cover shadow-2xl opacity-90 group-hover:opacity-100 transition-all group-hover:scale-105" alt="Zukunftssichere Immobilien by Wolf Probst" />
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-xl p-12 relative">
              <div className="absolute -top-4 -left-4 text-secondary opacity-20"><span className="material-symbols-outlined text-8xl">format_quote</span></div>
              <p className="text-xl italic font-light leading-relaxed mb-8">"Lochaber doesn't just provide data; they provide the narrative behind the asset. Their analysis was the deciding factor in our latest €45m acquisition."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary flex items-center justify-center font-bold">MK</div>
                <div>
                  <p className="font-bold text-sm">Head of Asset Management</p>
                  <p className="text-xs text-on-primary-container">Top 5 European Real Estate Fund</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Decorative Background Element */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <path d="M0,0 L100,0 L100,100 Z" fill="currentColor"></path>
          </svg>
        </div>
      </section>

      {/* Final CTA Split Section */}
      <section className="flex flex-col md:flex-row h-[600px]">
        <div className="flex-1 bg-primary text-white p-12 md:p-24 flex flex-col justify-center">
          <h3 className="text-3xl font-bold mb-6">Project Developers, Brokers & Owners</h3>
          <p className="text-on-primary-container mb-10 max-w-md">Need a one-time analysis? Our Request Analysis service is tailored for your specific project needs. Get a comprehensive Basis Check or Potential Analysis within 48 hours.</p>
          <button className="w-fit px-10 py-4 editorial-gradient text-on-primary font-bold text-sm tracking-widest uppercase hover:shadow-2xl transition-all">Request Analysis</button>
        </div>
        <div className="flex-1 bg-secondary text-on-secondary p-12 md:p-24 flex flex-col justify-center">
          <h3 className="text-3xl font-bold mb-6">Banks & Insurers</h3>
          <p className="text-white mb-10 max-w-md">Frequent transactions? Our Framework Contracts offer volume discounts and priority processing for institutional partners. View framework details for your organization.</p>
          <button className="w-fit px-10 py-4 bg-primary text-white font-bold text-sm tracking-widest uppercase hover:bg-on-primary-container transition-colors">View Framework Details</button>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
