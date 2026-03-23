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
          <p className="font-['Inter'] text-sm leading-relaxed text-slate-500 dark:text-slate-400">Precision editorial for the real estate sector. Delivering clarity through expert analysis since 1984.</p>
        </div>
        <div className="md:col-span-1">
          <h4 className="font-bold text-sm text-[#003036] mb-6">Services</h4>
          <ul className="space-y-4">
            <li><Link className="font-['Inter'] text-sm text-slate-500 dark:text-slate-400 hover:text-[#003036] dark:hover:text-white underline decoration-[#755b00] decoration-2 underline-offset-4" to="/leistungen">Potential Analysis</Link></li>
            <li><Link className="font-['Inter'] text-sm text-slate-500 dark:text-slate-400 hover:text-[#003036] dark:hover:text-white underline decoration-[#755b00] decoration-2 underline-offset-4" to="/zielgruppen/banken">Bank Check</Link></li>
            <li><Link className="font-['Inter'] text-sm text-slate-500 dark:text-slate-400 hover:text-[#003036] dark:hover:text-white underline decoration-[#755b00] decoration-2 underline-offset-4" to="/leistungen/rahmenvertrag-banken">Framework Contract</Link></li>
            <li><Link className="font-['Inter'] text-sm text-slate-500 dark:text-slate-400 hover:text-[#003036] dark:hover:text-white underline decoration-[#755b00] decoration-2 underline-offset-4" to="/landing/banks-appointment">Banks Landing (Temp)</Link></li>
          </ul>
        </div>
        <div className="md:col-span-1">
          <h4 className="font-bold text-sm text-[#003036] mb-6">Company</h4>
          <ul className="space-y-4">
            <li><Link className="font-['Inter'] text-sm text-slate-500 dark:text-slate-400 hover:text-[#003036] dark:hover:text-white underline decoration-[#755b00] decoration-2 underline-offset-4" to="/ueber-uns">About</Link></li>
            <li><Link className="font-['Inter'] text-sm text-slate-500 dark:text-slate-400 hover:text-[#003036] dark:hover:text-white underline decoration-[#755b00] decoration-2 underline-offset-4" to="/knowledge">Knowledge</Link></li>
            <li><Link className="font-['Inter'] text-sm text-slate-500 dark:text-slate-400 hover:text-[#003036] dark:hover:text-white underline decoration-[#755b00] decoration-2 underline-offset-4" to="/kontakt">Contact</Link></li>
          </ul>
        </div>
        <div className="md:col-span-1">
          <h4 className="font-bold text-sm text-[#003036] mb-6">Newsletter</h4>
          <p className="text-sm text-slate-500 mb-4">Market insights delivered monthly.</p>
          <div className="flex">
            <input className="w-full bg-white border-none text-sm p-3 focus:ring-1 focus:ring-secondary" placeholder="Email address" type="email"/>
            <button className="editorial-gradient text-on-primary p-3 transition-all hover:shadow-lg"><span className="material-symbols-outlined">arrow_forward</span></button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
        <span className="font-['Inter']">© {new Date().getFullYear()} Lochaber Consulting. All rights reserved.</span>
        <div className="flex gap-8 font-bold uppercase tracking-widest text-[10px]">
          <Link className="hover:text-[#003036] dark:hover:text-white transition-colors" to="/impressum">Impressum</Link>
          <Link className="hover:text-[#003036] dark:hover:text-white transition-colors" to="/datenschutz">Datenschutz</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
