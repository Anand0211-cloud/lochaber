import Layout from '../components/Layout';
import SEO from '../components/SEO';
import bookCover from '../assets/wolf_probst_book_cover.png';

const Home = () => {
  return (
    <Layout>
      <SEO 
        title="KI Immobilienberatung Deutschland & Grundstücksanalyse"
        description="Lochaber Consulting: Marktführende KI Immobilienberatung & Grundstücksanalyse in Deutschland. 40 Jahre Expertise trifft modernste KI-Diagnose."
        schema={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Lochaber Consulting",
          "image": "https://lochaber.de/src/assets/lochaber-logo.png",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Ulm",
            "addressCountry": "DE"
          },
          "areaServed": "Deutschland",
          "description": "KI-gestützte Immobilienberatung & Grundstücksanalyse bundesweit."
        }}
      />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden bg-primary pt-16">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover opacity-40 mix-blend-overlay" data-alt="Luftaufnahme eines Hochhausviertels mit Datenüberlagerung" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDj6EzFHzTAmOIdsGdjpMZrcPwwgjUyEvGC7DkU3-IDQK8sg9Cb9grY6kIcoH-b75wq4XMXoZGHpZ5jpGvlr64yd6uxPjq8qnXqhRvp6Fe4j9gxmYK6woSCJb-NZLwwdjyGMvvZ-aEgko-z7-_nVkEJ3iljfnJzIqiKZuwFisQIf-WtCDSz4ugUVcK3cN5rxVMSOCeCQCz3eqdETXXnlkzQLV2q6t_PU1QoHewnAk7OvCXbUFpb-KmrbZzFnccmf9YVkJ04N0niH9k"/>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-secondary text-on-secondary text-[10px] font-bold tracking-[0.2em] mb-6">GEGRÜNDET 1984</span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-8">
              Grundstückspotenzial erkennen. Fundiert entscheiden.
            </h1>
            <p className="text-xl text-on-primary-container leading-relaxed mb-10 max-w-xl">
              KI-gestützte Analyse trifft auf 40 Jahre Senior-Consulting-Expertise. Wir verwandeln komplexe Daten in umsetzbare Immobilienstrategien.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 editorial-gradient text-on-primary font-semibold text-sm tracking-wide transition-all hover:shadow-xl hover:-translate-y-0.5">Analyse anfragen</button>
              <button className="px-8 py-4 bg-secondary text-on-secondary font-semibold text-sm tracking-wide transition-all hover:bg-on-secondary-container hover:-translate-y-0.5">Rahmenvertrag</button>
            </div>
          </div>
        </div>
        {/* Floating Data Element */}
        <div className="absolute bottom-20 right-8 hidden lg:block w-80 bg-surface-container-lowest/10 backdrop-blur-md border border-white/10 p-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-[10px] text-white/60 tracking-widest font-bold">LIVE-ANALYSE-FEED</span>
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
      <section className="py-20 md:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-primary mb-4">Die Herausforderung der Immobilienanalyse</h2>
              <h3 className="text-2xl font-bold text-secondary mb-6 leading-tight">Der Markt kennt sein Potenzial nicht.</h3>
              <p className="text-on-surface-variant leading-relaxed mb-10 max-w-xl">
                Grundstücke werden unter Wert verkauft, Bebauungspotenziale bleiben ungenutzt, Banken bewerten ohne KI-Unterstützung. Lochaber löst genau dieses Problem.
              </p>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <span className="material-symbols-outlined text-secondary text-3xl">hub</span>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Technische Komplexität</h4>
                    <p className="text-on-surface-variant leading-relaxed">Regulatorische Veränderungen und ESG-Anforderungen haben Standardprüfungen in vielschichtige strategische Hürden verwandelt.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <span className="material-symbols-outlined text-secondary text-3xl">bolt</span>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Marktgeschwindigkeit</h4>
                    <p className="text-on-surface-variant leading-relaxed">Chancen verschwinden innerhalb von Tagen. Traditionelle Analysezyklen von 4 Wochen sind nicht mehr wettbewerbsfähig.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <span className="material-symbols-outlined text-secondary text-3xl">verified_user</span>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Compliance-Risiko</h4>
                    <p className="text-on-surface-variant leading-relaxed">Banken und Institutionen benötigen forensische Dokumentation, um Risiken in volatilen Märkten zu minimieren.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-square bg-surface-container-low">
              <img className="w-full h-full object-cover grayscale opacity-80" data-alt="Nahaufnahme eines architektonischen Details aus Stahl und Glas" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHPAfp8JS3eYLyfER0yydmuL4zFL0FzpvFKvUKNmiYy2EZ9Fz5Y1ZKtqp_cztOklq4h7SWIBroB9yKb9eJuj3HjdiKIbyupST9uE9PnhwimQls0FyLJ2WQXXLboc2P4YDp1guxqrdTpfNMha2T1a-0n6MutkG86EJfDav4nf_Ipe0TkkKOFNWNBVF9HG8y4R530vgkeQ-aRjrgAEwFt3ZM7Dz55eLzaULLXR4v3-YvCNOgJIvvdvabElvYgGegipHsBlCTQliokPU"/>
              <div className="absolute -bottom-8 -left-8 bg-primary p-10 text-white max-w-xs">
                <p className="text-3xl font-bold mb-2">40+</p>
                <p className="text-sm text-on-primary-container tracking-wider font-medium uppercase">Jahre institutionelles Vertrauen</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USP Cards */}
      <section className="py-16 md:py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            <div className="bg-surface-container-lowest p-8 md:p-12 border-b md:border-b-0 md:border-r border-surface-container">
              <span className="text-secondary font-bold text-4xl md:text-5xl block mb-6">48h</span>
              <h3 className="text-xl font-bold mb-4 text-primary">Maximale Geschwindigkeit</h3>
              <p className="text-on-surface-variant leading-relaxed">Erste Potenzialanalyse in unter 48 Stunden für schnelle Entscheidungsfindung.</p>
            </div>
            <div className="bg-surface-container-lowest p-8 md:p-12 border-b md:border-b-0 md:border-r border-surface-container">
              <span className="text-secondary font-bold text-4xl md:text-5xl block mb-6">40J</span>
              <h3 className="text-xl font-bold mb-4 text-primary">Senior-Expertise</h3>
              <p className="text-on-surface-variant leading-relaxed">Tiefverwurzelte Erfahrung in deutschen Immobilienzyklen und komplexen Asset-Bewertungen.</p>
            </div>
            <div className="bg-surface-container-lowest p-8 md:p-12">
              <span className="material-symbols-outlined text-secondary text-5xl md:text-6xl block mb-6">tactic</span>
              <h3 className="text-xl font-bold mb-4 text-primary">Klare Handlungsempfehlung</h3>
              <p className="text-on-surface-variant leading-relaxed">Keine generischen Reports. Wir liefern klare binäre Empfehlungen: Kaufen, Halten oder Verkaufen.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid (Bento) */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-end mb-16">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold tracking-tight text-primary mb-4">Strategisches Leistungsportfolio</h2>
              <p className="text-on-surface-variant">Modulare Analysetools – konzipiert für institutionelle Genauigkeit und unternehmerische Geschwindigkeit.</p>
            </div>
            <div className="hidden md:block">
              <span className="text-secondary font-bold text-sm tracking-[0.3em]">LEISTUNGSINDEX 01-07</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Basis Check */}
            <div className="md:col-span-4 bg-surface-container-lowest p-6 md:p-8 hover:bg-primary hover:text-white transition-all duration-500 group">
              <div className="flex justify-between mb-12">
                <span className="material-symbols-outlined text-secondary group-hover:text-white">fact_check</span>
                <span className="text-xs font-mono opacity-40">01</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Basis Check</h3>
              <p className="text-sm text-on-surface-variant group-hover:text-on-primary-container leading-relaxed">Die grundlegende Validierung von Grundstücksdaten und regulatorischer Konformität.</p>
            </div>
            {/* Potential Analysis */}
            <div className="md:col-span-4 bg-surface-container-lowest p-6 md:p-8 hover:bg-primary hover:text-white transition-all duration-500 group">
              <div className="flex justify-between mb-12">
                <span className="material-symbols-outlined text-secondary group-hover:text-white">trending_up</span>
                <span className="text-xs font-mono opacity-40">02</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Potenzialanalyse</h3>
              <p className="text-sm text-on-surface-variant group-hover:text-on-primary-container leading-relaxed">Verborgene Werttreiber durch architektonische und Marktmodellierung identifizieren.</p>
            </div>
            {/* Feasibility Study */}
            <div className="md:col-span-4 bg-surface-container-lowest p-6 md:p-8 hover:bg-primary hover:text-white transition-all duration-500 group">
              <div className="flex justify-between mb-12">
                <span className="material-symbols-outlined text-secondary group-hover:text-white">architecture</span>
                <span className="text-xs font-mono opacity-40">03</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Machbarkeitsstudie</h3>
              <p className="text-sm text-on-surface-variant group-hover:text-on-primary-container leading-relaxed">Technische und finanzielle Tiefenanalysen zur Bebaubarkeit.</p>
            </div>
            {/* Bank Check */}
            <div className="md:col-span-6 bg-surface-container-lowest p-6 md:p-8 hover:bg-primary hover:text-white transition-all duration-500 group">
              <div className="flex justify-between mb-12">
                <span className="material-symbols-outlined text-secondary group-hover:text-white">account_balance</span>
                <span className="text-xs font-mono opacity-40">04</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Bank Check</h3>
              <p className="text-sm text-on-surface-variant group-hover:text-on-primary-container leading-relaxed">Unabhängige Drittprüfung, speziell zugeschnitten auf Finanzierungsanforderungen und Risikoabteilungen.</p>
            </div>
            {/* Portfolio Scan */}
            <div className="md:col-span-6 bg-surface-container-lowest p-6 md:p-8 hover:bg-primary hover:text-white transition-all duration-500 group">
              <div className="flex justify-between mb-12">
                <span className="material-symbols-outlined text-secondary group-hover:text-white">folder_managed</span>
                <span className="text-xs font-mono opacity-40">05</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Portfolio Scan</h3>
              <p className="text-sm text-on-surface-variant group-hover:text-on-primary-container leading-relaxed">Ganzheitliche Bewertung mehrerer Assets zur Identifikation von Synergien und Konzentrationsrisiken.</p>
            </div>
            {/* Partner Flat & Framework */}
            <div className="md:col-span-8 bg-surface-container-lowest p-8 flex flex-col md:flex-row gap-8 border-t border-surface-container">
              <div className="flex-1">
                <span className="material-symbols-outlined text-secondary mb-6 block">handshake</span>
                <h3 className="text-lg font-bold mb-2">Partner Flat</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">Retainer-basierte Beratung für laufende Projektbegleitung.</p>
              </div>
              <div className="w-px bg-surface-container hidden md:block"></div>
              <div className="flex-1">
                <span className="material-symbols-outlined text-secondary mb-6 block">contract</span>
                <h3 className="text-lg font-bold mb-2">Rahmenvertrag für Banken</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">Standardisierte Bewertungsprotokolle für großvolumige institutionelle Kreditvergabe.</p>
              </div>
            </div>
            <div className="md:col-span-4 bg-secondary p-8 flex items-center justify-center min-h-[120px]">
              <button className="text-on-secondary font-bold text-sm tracking-widest uppercase hover:underline underline-offset-8">ALLE LEISTUNGEN ANSEHEN</button>
            </div>
          </div>
        </div>
      </section>

      {/* Target Groups */}
      <section className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-center text-3xl font-bold text-primary mb-20 tracking-tight">Entwickelt für Marktführer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-surface-container-lowest p-1 shadow-sm transition-transform hover:-translate-y-2">
              <img className="w-full h-48 object-cover mb-6" data-alt="Nahaufnahme eines Bauplans und gelben Helms" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFlFFeeSOS2Ob5E6PTUaXRmYRcSK9fcrCvdY-qlykabpXtyPnU_ESLTzrYk1gJjMQ-OQIsJZKcPrpVIGu7pX9Spv9UJHS3sFAtFtZrCOfz63iBoYTdsFAaSvdF36vARAS0obbtX92bdwY_fTs6tIClRPRtc0pc4Eqfb6I3k0zqapJtikS9He2z-BWZcCHIC62z0eV6PuLEiAe8mDY9eJQdaiERMoFNerBC-fk6YelUKb_dL3x7DreFXufcXRV7LuYO1a7S6uUzOkw"/>
              <div className="px-6 pb-10">
                <h3 className="text-xl font-bold mb-3">Projektentwickler & Bauträger</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Beschleunigen Sie Ihre Due Diligence und sichern Sie Baugenehmigungen mit fachlicher Expertise.</p>
                <a className="text-secondary font-bold text-xs tracking-widest flex items-center gap-2" href="#">MEHR ERFAHREN <span className="material-symbols-outlined text-sm">chevron_right</span></a>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-1 shadow-sm transition-transform hover:-translate-y-2">
              <img className="w-full h-48 object-cover mb-6" data-alt="Moderne Bürolobby mit klaren architektonischen Linien" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB32z_yYMjUHAcuuHOX7lvpSd8F1zNCsRXZHWxYuhDwyU_n1tQDM2sQ2QpTB0QZJRmoWlgvZuKRdrzsM4duFfJ_0-qZznClSmovxDKIQtePHJkx8SLt6-DwXe3_WQ6K2kq5gvzBEQWRgHBSlbeyKhlMpUI-YDvc0c1S3SKahLQUcZ18_AmkJw5N3W8Uj2zk2bUgVvqG_Ty1Cxfp3llFVzy-Quqsp1eqRVJz8os4hnsbKXZpkPTHDUe8r3B7WIJiMuC-f5UPckJ7X8s"/>
              <div className="px-6 pb-10">
                <h3 className="text-xl font-bold mb-3">Banken & Versicherer</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Minimieren Sie Kreditrisiken mit standardisierten, unabhängigen Analyseberichten, die Compliance-Standards erfüllen.</p>
                <a className="text-secondary font-bold text-xs tracking-widest flex items-center gap-2" href="#">MEHR ERFAHREN <span className="material-symbols-outlined text-sm">chevron_right</span></a>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-1 shadow-sm transition-transform hover:-translate-y-2">
              <img className="w-full h-48 object-cover mb-6" data-alt="Abstrakte architektonische Schatten im Innenraum" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAF8SuhiNF_I-rKsPKoo1M-zvjijTIunzBgSV3A926Vlw1o4HsbtupBr3Ot6phpnU1V530nZuHPsLKSCgO1xXvxzueHVoVaroZ2WgcebCE7KdnvtDd4Z_vYsPh-LIANjvX2idFDHagJizjjOuz40be_tB8GpGEXTNt5zmnDhgzUrwyXvR-MJ3Q-zjpkYdmdbIPmZqX0vSLSJcIZRdYEfImVJeIWb6ImL4gjzuqLRL9kuM4sTEC5SjUl2_KaUuVbDKvatyKtHbNCUkg"/>
              <div className="px-6 pb-10">
                <h3 className="text-xl font-bold mb-3">Makler & Bestandshalter</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Verkürzen Sie den Verkaufszyklus, indem Sie potenziellen Käufern eine verifizierte Potenzialanalyse bereitstellen.</p>
                <a className="text-secondary font-bold text-xs tracking-widest flex items-center gap-2" href="#">MEHR ERFAHREN <span className="material-symbols-outlined text-sm">chevron_right</span></a>
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
              <span className="text-secondary font-bold tracking-[0.3em] text-xs mb-4 block uppercase">Der Lochaber-Vorteil</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">Expertise über Generationen hinweg, angetrieben von den Werkzeugen von morgen.</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border-l-2 border-secondary pl-6">
                  <p className="text-2xl font-bold mb-1">Proprietäre KI</p>
                  <p className="text-on-primary-container text-xs leading-relaxed">Unsere maßgeschneiderten Machine-Learning-Modelle scannen tausende Zoning- und Marktdatenpunkte in Sekunden.</p>
                </div>
                <div className="border-l-2 border-secondary pl-6">
                  <p className="text-2xl font-bold mb-1">Senior-Beratung</p>
                  <p className="text-on-primary-container text-xs leading-relaxed">Jeder automatisierte Bericht wird von einem Berater mit über 20 Jahren Erfahrung überprüft und freigegeben.</p>
                </div>
                <div className="md:col-span-2 border-l-2 border-secondary pl-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group mt-4">
                  <div className="max-w-xl">
                    <p className="text-2xl font-bold mb-1">Publikationen</p>
                    <p className="text-on-primary-container text-xs leading-relaxed">Maßgebliches Fachbuch über zukunftssichere Immobilienstrategien von Wolf Probst.</p>
                  </div>
                  <img src={bookCover} className="w-20 h-28 object-cover shadow-2xl opacity-90 group-hover:opacity-100 transition-all group-hover:scale-105" alt="Zukunftssichere Immobilien von Wolf Probst" />
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-xl p-8 md:p-12 relative">
              <div className="absolute -top-4 -left-4 text-secondary opacity-20"><span className="material-symbols-outlined text-8xl">format_quote</span></div>
              <p className="text-xl italic font-light leading-relaxed mb-8">„Lochaber liefert nicht nur Daten, sondern die Geschichte hinter dem Asset. Ihre Analyse war der entscheidende Faktor bei unserer letzten 45-Mio.-€-Akquisition."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary flex items-center justify-center font-bold">MK</div>
                <div>
                  <p className="font-bold text-sm">Leiter Asset Management</p>
                  <p className="text-xs text-on-primary-container">Top-5 Europäischer Immobilienfonds</p>
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
      <section className="flex flex-col md:flex-row min-h-[600px]">
        <div className="flex-1 bg-secondary text-white p-8 md:p-24 flex flex-col justify-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Projektentwickler, Makler & Eigentümer</h3>
          <p className="text-on-secondary mb-10 max-w-md">Sie benötigen eine einmalige Analyse? Unser Analyse-Service ist auf Ihre spezifischen Projektanforderungen zugeschnitten. Erhalten Sie einen umfassenden Basis Check oder eine Potenzialanalyse innerhalb von 48 Stunden.</p>
          <button className="w-fit px-10 py-4 editorial-gradient text-on-primary font-bold text-sm tracking-widest uppercase hover:shadow-2xl transition-all">Analyse anfragen</button>
        </div>
        <div className="flex-1 bg-primary text-white p-8 md:p-24 flex flex-col justify-center border-t border-white/10 md:border-t-0">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Banken & Versicherer</h3>
          <p className="text-on-primary-container mb-10 max-w-md">Häufige Transaktionen? Unsere Rahmenverträge bieten Mengenrabatte und priorisierte Bearbeitung für institutionelle Partner. Sehen Sie die Rahmenvertragsdetails für Ihre Organisation.</p>
          <button className="w-fit px-10 py-4 bg-secondary text-on-secondary font-bold text-sm tracking-widest uppercase hover:bg-secondary-container transition-colors">Rahmenvertrag ansehen</button>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
