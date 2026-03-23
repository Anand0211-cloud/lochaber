import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { blogPosts, categories, faqData } from '../data/knowledgeData';

const Knowledge = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedFaq, setExpandedFaq] = useState(null);

  const filteredPosts = useMemo(() => {
    let posts = activeTab === "FAQ" ? [] : (activeTab === "All" ? blogPosts : blogPosts.filter(post => post.category === activeTab));
    if (searchQuery) {
      posts = posts.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        post.summary.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return posts;
  }, [activeTab, searchQuery]);

  return (
    <Layout>
      <SEO 
        title="Immobilien Potenzialanalyse KI & Fachwissen"
        description="Vertieftes Fachwissen zu Immobilien-Potenzialanalysen, KfW-Förderung und ESG-Trends. Erfahren Sie mehr über die Zukunft der Immobilienberatung."
        schema={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqData.flatMap(group => group.questions.map(q => ({
            "@type": "Question",
            "name": q.q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": q.a
            }
          })))
        }}
      />
      <div className="pt-32 pb-24 bg-surface dark:bg-slate-950 min-h-screen">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Sticky Sidebar */}
            <aside className="lg:w-80 flex-shrink-0">
              <div className="sticky top-32 space-y-12">
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-secondary mb-8">Navigation</h2>
                  <nav className="space-y-2">
                    <button 
                      onClick={() => setActiveTab("All")}
                      className={`w-full text-left px-6 py-4 rounded-xl text-sm font-bold transition-all flex items-center justify-between group ${activeTab === "All" ? 'bg-primary text-white shadow-xl shadow-primary/20' : 'text-on-surface-variant hover:bg-surface-container-low'}`}
                    >
                      Alle Artikel
                      <span className={`material-symbols-outlined text-sm transition-transform group-hover:translate-x-1 ${activeTab === "All" ? 'opacity-100' : 'opacity-0'}`}>arrow_forward</span>
                    </button>
                    {categories.map(cat => (
                      <button 
                        key={cat.id}
                        onClick={() => setActiveTab(cat.label)}
                        className={`w-full text-left px-6 py-4 rounded-xl text-sm font-bold transition-all flex items-center justify-between group ${activeTab === cat.label ? 'bg-primary text-white shadow-xl shadow-primary/20' : 'text-on-surface-variant hover:bg-surface-container-low'}`}
                      >
                        {cat.label}
                        <span className={`material-symbols-outlined text-sm transition-transform group-hover:translate-x-1 ${activeTab === cat.label ? 'opacity-100' : 'opacity-0'}`}>arrow_forward</span>
                      </button>
                    ))}
                    <div className="pt-8 mt-8 border-t border-outline-variant/30">
                      <button 
                        onClick={() => setActiveTab("FAQ")}
                        className={`w-full text-left px-6 py-4 rounded-xl text-sm font-bold transition-all flex items-center justify-between group ${activeTab === "FAQ" ? 'bg-secondary text-on-secondary shadow-xl shadow-secondary/20' : 'text-secondary hover:bg-secondary/5'}`}
                      >
                        FAQ & Antworten
                        <span className={`material-symbols-outlined text-sm transition-transform group-hover:translate-x-1 ${activeTab === "FAQ" ? 'opacity-100' : 'opacity-0'}`}>help</span>
                      </button>
                    </div>
                  </nav>
                </div>

                <div className="p-8 bg-surface-container-low rounded-3xl border border-outline-variant/20 italic">
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    „Fundiertes Fachwissen ist die Grundlage jeder erfolgreichen Immobilientransaktion."
                  </p>
                  <p className="mt-4 text-xs font-bold text-primary not-italic">Wolf Probst</p>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              <div className="max-w-4xl">
                {/* Header Section */}
                <div className="mb-16">
                  <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter text-primary mb-8 leading-none">
                    {activeTab === "FAQ" ? "Häufige Fragen." : (activeTab === "All" ? "Insights & Fachwissen." : activeTab + ".")}
                  </h1>
                  <div className="relative max-w-xl">
                    <input 
                      type="text" 
                      placeholder={activeTab === "FAQ" ? "Fragen durchsuchen..." : "Artikel durchsuchen..."}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-surface-container-low border-none rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-secondary/50 transition-all font-['Inter']"
                    />
                    <span className="material-symbols-outlined absolute right-6 top-1/2 -translate-y-1/2 text-on-surface-variant opacity-50">search</span>
                  </div>
                </div>

                {activeTab === "FAQ" ? (
                  /* FAQ Section */
                  <div className="space-y-12">
                    {faqData.map((group, idx) => (
                      <div key={idx}>
                        <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-secondary mb-6">{group.category}</h3>
                        <div className="space-y-4">
                          {group.questions.map((q, qidx) => (
                            <div key={qidx} className="bg-white dark:bg-slate-900 rounded-2xl border border-outline-variant/20 overflow-hidden transition-all duration-500">
                              <button 
                                onClick={() => setExpandedFaq(expandedFaq === `${idx}-${qidx}` ? null : `${idx}-${qidx}`)}
                                className="w-full text-left px-8 py-6 flex items-center justify-between gap-4 group"
                              >
                                <span className={`text-lg font-bold transition-colors ${expandedFaq === `${idx}-${qidx}` ? 'text-secondary' : 'text-primary'}`}>{q.q}</span>
                                <span className={`material-symbols-outlined transition-transform duration-500 ${expandedFaq === `${idx}-${qidx}` ? 'rotate-45 text-secondary' : ''}`}>add</span>
                              </button>
                              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${expandedFaq === `${idx}-${qidx}` ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="px-8 pb-8 pt-2 text-on-surface-variant leading-relaxed text-sm lg:text-base border-t border-outline-variant/10">
                                  {q.a}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                    <div className="p-12 bg-surface-container-high rounded-[3rem] text-center border border-outline-variant/30">
                      <h4 className="text-2xl font-bold text-primary mb-4">Noch Fragen?</h4>
                      <p className="text-on-surface-variant mb-8 max-w-md mx-auto">Unsere Experten stehen für detaillierte technische Beratungen zu Ihren spezifischen Projektanforderungen zur Verfügung.</p>
                      <Link to="/contact" className="inline-flex items-center gap-3 editorial-gradient px-12 py-4 text-white font-bold rounded-full group">
                        Kontakt aufnehmen
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                      </Link>
                    </div>
                  </div>
                ) : (
                  /* Blog Grid */
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {filteredPosts.map((post) => (
                      <Link 
                        to={`/knowledge/${post.slug}`} 
                        key={post.id}
                        className="group flex flex-col h-full bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden border border-outline-variant/10 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
                      >
                        <div className="aspect-[4/3] overflow-hidden relative">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale-[30%] group-hover:grayscale-0"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                          <span className="absolute top-6 left-6 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-bold uppercase tracking-widest text-white">
                            {post.category}
                          </span>
                        </div>
                        <div className="p-10 flex-1 flex flex-col justify-between">
                          <div>
                            <p className="text-xs text-secondary font-bold tracking-widest uppercase mb-4">{new Date(post.date).toLocaleDateString('de-DE', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                            <h3 className="text-2xl font-bold text-primary leading-tight mb-6 group-hover:text-secondary transition-colors">
                              {post.title}
                            </h3>
                            <p className="text-on-surface-variant text-sm leading-relaxed line-clamp-3 mb-8 opacity-80">
                              {post.summary}
                            </p>
                          </div>
                          <div className="flex items-center gap-2 text-xs font-bold text-primary tracking-widest uppercase border-t border-outline-variant/20 pt-8">
                            Analyse lesen <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform text-secondary">north_east</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                    {filteredPosts.length === 0 && (
                      <div className="col-span-full py-24 text-center">
                        <span className="material-symbols-outlined text-6xl text-on-surface-variant/20 mb-6">search_off</span>
                        <p className="text-on-surface-variant font-medium italic">Keine Ergebnisse für Ihre Kriterien gefunden.</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Knowledge;
