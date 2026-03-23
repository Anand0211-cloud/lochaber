import { useState } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    privacy: false
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const services = [
    "Lochaber Basis Check",
    "Lochaber Potential Analysis",
    "Lochaber Feasibility Study",
    "Lochaber Bank Check",
    "Lochaber Portfolio Scan",
    "Lochaber Partner Flat",
    "Framework agreement",
    "Other"
  ];

  return (
    <Layout>
      <main className="pt-32 pb-24 px-8 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="mb-24">
          <div className="editorial-grid">
            <div className="col-span-12 lg:col-span-8">
              <h1 className="text-6xl md:text-7xl font-bold text-primary tracking-tight leading-[1.1] mb-8 font-headline text-balance">
                Precision contact for strategic excellence.
              </h1>
              <p className="text-xl text-on-surface-variant leading-relaxed max-w-2xl">
                Engage with Wolf Probst directly to discuss structural transformations, risk mitigation, or tailored real estate consulting projects.
              </p>
            </div>
            <div className="hidden lg:flex col-span-4 items-end justify-end">
              <div className="w-32 h-32 bg-secondary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-on-secondary-container text-5xl">contact_support</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Info Grid */}
        <div className="editorial-grid">
          {/* Left: Contact Form */}
          <div className="col-span-12 lg:col-span-7 bg-surface-container-lowest p-10 lg:p-16 border-b-4 border-primary shadow-sm">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary text-4xl">done_all</span>
                </div>
                <h2 className="text-3xl font-bold text-primary mb-4">Request Received</h2>
                <p className="text-on-surface-variant max-w-md">
                  Thank you for your inquiry. An automatic confirmation has been sent to your email. Wolf Probst will review your request and respond within 24 hours.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-10 text-primary font-bold uppercase tracking-widest text-sm hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative">
                    <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-outline mb-2">Full Name *</label>
                    <input 
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-surface-container-high border-none border-b-2 border-primary-container focus:ring-0 text-primary font-medium p-4 transition-all" 
                      placeholder="Your Name" 
                      type="text"
                    />
                  </div>
                  <div className="relative">
                    <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-outline mb-2">Company</label>
                    <input 
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-surface-container-high border-none border-b-2 border-primary-container focus:ring-0 text-primary font-medium p-4 transition-all" 
                      placeholder="Your Organization" 
                      type="text"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative">
                    <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-outline mb-2">Email Address *</label>
                    <input 
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-surface-container-high border-none border-b-2 border-primary-container focus:ring-0 text-primary font-medium p-4 transition-all" 
                      placeholder="email@example.com" 
                      type="email"
                    />
                  </div>
                  <div className="relative">
                    <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-outline mb-2">Phone</label>
                    <input 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-surface-container-high border-none border-b-2 border-primary-container focus:ring-0 text-primary font-medium p-4 transition-all" 
                      placeholder="+49 (0) 000 0000 000" 
                      type="tel"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-outline mb-2">Requested Service *</label>
                  <select 
                    required
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-surface-container-high border-none border-b-2 border-primary-container focus:ring-0 text-primary font-medium p-4 transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select a service package...</option>
                    {services.map(service => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                  
                  {formData.service === 'Framework agreement' && (
                    <div className="mt-4 p-4 bg-secondary-container/30 border-l-4 border-secondary flex items-start gap-3">
                      <span className="material-symbols-outlined text-secondary text-sm mt-0.5">info</span>
                      <p className="text-sm text-primary">
                        For framework agreements we recommend our special offer for banks and insurers. <Link to="/leistungen/rahmenvertrag-banken" className="underline font-bold hover:text-secondary transition-colors">Learn more here</Link>.
                      </p>
                    </div>
                  )}
                </div>

                <div className="relative">
                  <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-outline mb-2">Your Message *</label>
                  <textarea 
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-surface-container-high border-none border-b-2 border-primary-container focus:ring-0 text-primary font-medium p-4 transition-all resize-none" 
                    placeholder="Brief outline of your requirements..." 
                    rows="4"
                  ></textarea>
                </div>

                <div className="space-y-6">
                  <label className="flex items-start gap-4 cursor-pointer group">
                    <input 
                      required
                      type="checkbox"
                      name="privacy"
                      checked={formData.privacy}
                      onChange={handleChange}
                      className="mt-1 w-5 h-5 border-2 border-primary-container rounded-none text-primary focus:ring-primary focus:ring-offset-0"
                    />
                    <span className="text-sm text-on-surface-variant leading-snug group-hover:text-primary transition-colors">
                      I agree that my details for contacting and for allocation for any queries will be saved. Review our <Link to="/datenschutz" className="text-primary font-bold hover:underline">Privacy Policy (GDPR)</Link>.
                    </span>
                  </label>

                  <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2 text-primary font-semibold text-xs uppercase tracking-wider">
                        <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                        <span>Encrypted & Proxy Secure</span>
                      </div>
                      <div className="w-1.5 h-1.5 rounded-full bg-outline-variant"></div>
                      <div className="text-[10px] text-outline uppercase font-medium tracking-tight">24h Response Promise</div>
                    </div>
                    <button type="submit" className="w-full md:w-auto bg-primary text-on-primary px-12 py-5 font-bold text-sm tracking-widest uppercase shadow-xl hover:bg-primary-container transition-all">
                      Submit Request
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* Right: Info Panels */}
          <div className="col-span-12 lg:col-span-5 flex flex-col space-y-8">
            <div className="bg-surface-container-low p-10 flex flex-col space-y-8 h-full">
              <div>
                <h3 className="text-[10px] font-bold tracking-[0.3em] text-outline uppercase mb-6">Contact Channels</h3>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined text-secondary text-2xl">alternate_email</span>
                    <div>
                      <p className="text-[10px] font-bold tracking-widest text-outline uppercase mb-1">Direct Email</p>
                      <a href="mailto:info@lochaber.de" className="text-primary font-bold text-xl hover:text-secondary transition-colors underline underline-offset-4">info@lochaber.de</a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined text-secondary text-2xl">location_on</span>
                    <div>
                      <p className="text-[10px] font-bold tracking-widest text-outline uppercase mb-1">Location</p>
                      <p className="text-primary font-bold text-xl leading-snug">Ulm / Baden-Württemberg</p>
                      <p className="text-sm text-on-surface-variant mt-1">Active throughout Germany</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined text-secondary text-2xl">schedule</span>
                    <div>
                      <p className="text-[10px] font-bold tracking-widest text-outline uppercase mb-1">Response Time</p>
                      <p className="text-primary font-bold text-xl leading-snug">Within 24 hours</p>
                      <p className="text-sm text-on-surface-variant mt-1">Institutional-grade reliability</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-outline-variant">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="material-symbols-outlined text-secondary text-2xl">security</span>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-primary">Absolute Confidentiality</h3>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Lochaber operates under strict professional secrecy mandates. All inquiries are treated with institutional-grade confidentiality and routed directly to Wolf Probst.
                </p>
              </div>
            </div>

            {/* Visual Branding */}
            <div className="relative h-48 bg-primary overflow-hidden group">
              <img 
                className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-50 grayscale transition-transform duration-700 group-hover:scale-105" 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
                alt="Architecture detail"
              />
              <div className="absolute inset-0 bg-primary/20 backdrop-blur-[1px]"></div>
              <div className="relative h-full flex items-center justify-center">
                <div className="text-center p-6 border border-on-primary/20 bg-primary/30 backdrop-blur-md">
                   <p className="text-on-primary font-bold text-lg tracking-widest uppercase">Consulting Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bank Note Section */}
        <section className="mt-24 p-12 bg-primary text-on-primary relative overflow-hidden">
          <div className="absolute right-0 top-0 w-1/3 h-full bg-secondary transition-all opacity-10 skew-x-12 translate-x-20"></div>
          <div className="relative z-10 editorial-grid items-center gap-12">
            <div className="col-span-12 lg:col-span-8">
              <h2 className="text-3xl font-bold mb-4">Are you representing a bank or an insurer?</h2>
              <p className="text-xl text-on-primary-container leading-relaxed">
                Learn about our framework agreements with fixed conditions and SLA guarantees. Achieve maximum efficiency in collateral assessment and ESG risk checks.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-4 flex justify-start lg:justify-end">
              <Link 
                to="/leistungen/rahmenvertrag-banken" 
                className="bg-secondary text-on-secondary px-8 py-4 font-bold text-sm tracking-widest uppercase shadow-2xl hover:bg-secondary-container hover:text-on-secondary-container transition-all text-center inline-block"
              >
                Request a framework agreement for your organization →
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Contact;
