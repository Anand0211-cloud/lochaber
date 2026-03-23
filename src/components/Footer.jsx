import { Link } from 'react-router-dom';
import logo from '../assets/lochaber-logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#f2f4f6] dark:bg-slate-950 w-full pt-16 pb-8 border-t border-slate-200 dark:border-slate-800">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto px-8">
        <div className="md:col-span-1">
          <Link className="mb-6 block" to="/">
            <img src={logo} alt="Lochaber Logo" className="h-10 md:h-12 w-auto object-contain contrast-125" />
          </Link>
          <p className="font-['Inter'] text-sm leading-relaxed text-slate-500 dark:text-slate-400">Präzise Analysen für die Immobilienbranche. Seit 1984 schaffen wir Klarheit durch fachkundige Expertise.</p>
        </div>
        <div className="md:col-span-1">
          <h4 className="font-bold text-sm text-[#003036] mb-6 uppercase tracking-wider">Leistungen</h4>
          <ul className="space-y-4">
            <li><Link className="font-['Inter'] text-sm text-slate-500 dark:text-slate-400 hover:text-[#003036] dark:hover:text-white underline decoration-[#755b00]/30 decoration-1 underline-offset-4 hover:decoration-[#755b00]" to="/leistungen/potential-analysis">Potenzialanalyse</Link></li>
            <li><Link className="font-['Inter'] text-sm text-slate-500 dark:text-slate-400 hover:text-[#003036] dark:hover:text-white underline decoration-[#755b00]/30 decoration-1 underline-offset-4 hover:decoration-[#755b00]" to="/leistungen/feasibility-study">Machbarkeitsstudie</Link></li>
            <li><Link className="font-['Inter'] text-sm text-slate-500 dark:text-slate-400 hover:text-[#003036] dark:hover:text-white underline decoration-[#755b00]/30 decoration-1 underline-offset-4 hover:decoration-[#755b00]" to="/leistungen/bank-check">Bank Check</Link></li>
          </ul>
        </div>
        <div className="md:col-span-1">
          <h4 className="font-bold text-sm text-[#003036] mb-6 uppercase tracking-wider">Zielgruppen</h4>
          <ul className="space-y-3 mb-6">
            <li><Link className="font-['Inter'] text-sm text-slate-500 dark:text-slate-400 hover:text-[#003036] dark:hover:text-white" to="/target-groups/insurers">Banken & Versicherer</Link></li>
            <li><Link className="font-['Inter'] text-sm text-slate-500 dark:text-slate-400 hover:text-[#003036] dark:hover:text-white" to="/target-groups/brokers">Immobilienmakler</Link></li>
            <li><Link className="font-['Inter'] text-sm text-slate-500 dark:text-slate-400 hover:text-[#003036] dark:hover:text-white" to="/target-groups/developers">Projektentwickler</Link></li>
            <li><Link className="font-['Inter'] text-sm text-secondary font-bold hover:text-[#003036] dark:hover:text-white" to="/landing/banks-appointment">Termin für Banken</Link></li>
          </ul>
        </div>
        <div className="md:col-span-1">
          <h4 className="font-bold text-sm text-[#003036] mb-6 uppercase tracking-wider">Kontakt</h4>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary text-lg">alternate_email</span>
              <a href="mailto:info@lochaber.de" className="font-['Inter'] text-sm text-slate-500 dark:text-slate-400 hover:text-[#003036] dark:hover:text-white transition-colors">info@lochaber.de</a>
            </div>
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary text-lg">call</span>
              <a href="tel:+491708913692" className="font-['Inter'] text-sm text-slate-500 dark:text-slate-400 hover:text-[#003036] dark:hover:text-white transition-colors">+49 (0) 170 8913692</a>
            </div>
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary text-lg">location_on</span>
              <p className="font-['Inter'] text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Ulm / Baden-Württemberg<br />
                Deutschland
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
        <span className="font-['Inter']">© {new Date().getFullYear()} Lochaber Consulting. Alle Rechte vorbehalten.</span>
        <div className="flex gap-8 font-bold uppercase tracking-widest text-[10px]">
          <Link className="hover:text-[#003036] dark:hover:text-white transition-colors" to="/impressum">Impressum</Link>
          <Link className="hover:text-[#003036] dark:hover:text-white transition-colors" to="/datenschutz">Datenschutz</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
