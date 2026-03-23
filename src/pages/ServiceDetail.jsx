import { useParams, useNavigate, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { servicesData } from '../data/servicesData';

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find service by slug or id (to handle both /services/ and /leistungen/)
  const service = servicesData.find(s => s.slug === id || s.id === id);

  if (!service) {
    return (
      <Layout>
        <div className="pt-40 pb-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Service not found</h1>
          <button onClick={() => navigate('/services')} className="text-emerald-600 hover:underline">Back to Services</button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <main className="pt-32 pb-20 bg-surface min-h-screen">
        <div className="max-w-7xl mx-auto px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-outline mb-12">
            <Link to="/leistungen" className="hover:text-primary transition-colors">Services</Link>
            <span className="material-symbols-outlined text-[10px]">chevron_right</span>
            <span className="text-primary">{service.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left Column: Content */}
            <div className="lg:col-span-7">
              <span className="inline-block bg-secondary-fixed text-on-secondary-fixed text-[0.65rem] font-bold tracking-[0.2em] uppercase px-3 py-1 mb-6 rounded-sm">
                Professional Analysis
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight mb-8 leading-[1.1]">
                {service.headline}
              </h1>
              <p className="text-xl text-on-surface-variant leading-relaxed mb-12 font-['Inter']">
                {service.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="bg-surface-container-low p-8 border-l-4 border-primary">
                  <h4 className="text-[0.65rem] font-bold text-outline uppercase tracking-widest mb-4">Target Group</h4>
                  <p className="text-primary font-bold leading-relaxed">{service.targetGroup}</p>
                </div>
                <div className="bg-surface-container-low p-8 border-l-4 border-secondary">
                  <h4 className="text-[0.65rem] font-bold text-outline uppercase tracking-widest mb-4">Delivery Time</h4>
                  <p className="text-primary font-bold leading-relaxed">{service.deliveryTime}</p>
                </div>
              </div>

              <div className="space-y-12">
                <section>
                  <h3 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
                    <span className="w-8 h-[1px] bg-primary/20"></span>
                    Scope of Services
                  </h3>
                  <p className="text-lg text-on-surface-variant leading-relaxed font-['Inter'] italic pl-11 relative">
                    <span className="absolute left-0 top-0 text-3xl text-secondary opacity-30 select-none">"</span>
                    {service.scope}
                  </p>
                </section>

                {service.exampleOutput && (
                  <section>
                    <h3 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
                      <span className="w-8 h-[1px] bg-primary/20"></span>
                      Example Output
                    </h3>
                    <div className="bg-white p-6 shadow-xl shadow-primary/5 border border-outline/5 ml-11 flex items-center gap-6">
                      <span className="material-symbols-outlined text-4xl text-primary">picture_as_pdf</span>
                      <p className="text-sm font-medium text-primary">{service.exampleOutput}</p>
                    </div>
                  </section>
                )}

                {service.differentiation && (
                  <section>
                    <h3 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
                      <span className="w-8 h-[1px] bg-primary/20"></span>
                      Differentiation
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed pl-11 font-['Inter']">
                      {service.differentiation}
                    </p>
                  </section>
                )}

                {service.usp && (
                  <section>
                    <h3 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
                      <span className="w-8 h-[1px] bg-primary/20"></span>
                      Unique Selling Point
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed pl-11 font-['Inter']">
                      {service.usp}
                    </p>
                  </section>
                )}

                {service.keywords && (
                  <div className="flex flex-wrap gap-2 pt-8 pl-11">
                    {service.keywords.split(', ').map(kw => (
                      <span key={kw} className="px-3 py-1 bg-surface-container-high text-outline text-[0.65rem] font-bold uppercase tracking-widest rounded-sm">
                        {kw}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Dynamic Pricing Card */}
            <div className="lg:col-span-5">
              <div className="sticky top-32">
                <div className="bg-[#003036] p-12 text-on-primary shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 editorial-gradient opacity-20 blur-3xl group-hover:opacity-40 transition-opacity"></div>
                  
                  <div className="relative z-10">
                    <span className="material-symbols-outlined text-4xl text-secondary mb-8">{service.icon}</span>
                    <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
                    <p className="text-primary-fixed/60 text-sm mb-8 font-['Inter']">{service.keyMessage}</p>
                    
                    <div className="py-8 border-y border-white/10 mb-8">
                      <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-secondary mb-2">Investment</p>
                      <p className="text-4xl font-bold tracking-tight">{service.price}</p>
                    </div>

                    <ul className="space-y-4 mb-12">
                      <li className="flex items-center gap-3 text-sm font-['Inter'] text-primary-fixed/80">
                        <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                        Lochaber Premium Quality Seal
                      </li>
                      <li className="flex items-center gap-3 text-sm font-['Inter'] text-primary-fixed/80">
                        <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                        Institutional-grade Analysis
                      </li>
                      <li className="flex items-center gap-3 text-sm font-['Inter'] text-primary-fixed/80">
                        <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                        Nationwide Coverage
                      </li>
                    </ul>

                    <Link to="/contact" className="block w-full text-center editorial-gradient py-5 font-bold tracking-[0.1em] uppercase text-sm hover:translate-y-[-2px] transition-transform">
                      Request this Package
                    </Link>
                  </div>
                </div>

                <div className="mt-8 p-8 border border-outline/10 bg-surface-container-low text-center">
                  <p className="text-xs font-bold text-outline uppercase tracking-widest mb-4">Need a custom approach?</p>
                  <Link to="/contact" className="text-primary font-bold hover:text-secondary transition-colors text-sm">Schedule a consultation →</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default ServiceDetail;
