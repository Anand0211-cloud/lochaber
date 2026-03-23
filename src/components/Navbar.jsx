import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/lochaber-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-sm dark:shadow-none">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        <Link className="flex items-center gap-2" to="/" onClick={() => setIsOpen(false)}>
          <img src={logo} alt="Lochaber Logo" className="h-8 md:h-10 w-auto object-contain" />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="relative group">
            <button className="font-['Inter'] font-medium text-sm tracking-wide text-slate-600 dark:text-slate-400 hover:text-[#003036] dark:hover:text-white transition-colors flex items-center gap-1">
              Leistungen <span className="material-symbols-outlined text-xs">keyboard_arrow_down</span>
            </button>
            <div className="absolute left-0 top-full pt-4 hidden group-hover:block w-64 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="bg-white dark:bg-slate-800 shadow-xl border border-slate-100 dark:border-slate-700 p-2">
                <Link className="block px-4 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 font-semibold border-b border-slate-100 dark:border-slate-700 mb-1" to="/services">Alle Leistungen</Link>
                <Link className="block px-4 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50" to="/leistungen/basis-check">Basis Check</Link>
                <Link className="block px-4 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50" to="/services/potential-analysis">Potenzialanalyse</Link>
                <Link className="block px-4 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50" to="/services/feasibility-study">Machbarkeitsstudie</Link>
                <Link className="block px-4 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50" to="/services/bank-check">Bank Check</Link>
                <Link className="block px-4 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50" to="/services/portfolio-scan">Portfolio Scan</Link>
                <Link className="block px-4 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50" to="/leistungen/partner-flat">Partner Flat</Link>
              </div>
            </div>
          </div>
          <div className="relative group">
            <button className="font-['Inter'] font-medium text-sm tracking-wide text-slate-600 dark:text-slate-400 hover:text-[#003036] dark:hover:text-white transition-colors flex items-center gap-1">
              Zielgruppen <span className="material-symbols-outlined text-xs">keyboard_arrow_down</span>
            </button>
            <div className="absolute left-0 top-full pt-4 hidden group-hover:block w-56 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="bg-white dark:bg-slate-800 shadow-xl border border-slate-100 dark:border-slate-700 p-2">
                <Link className="block px-4 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50" to="/target-groups/developers">Projektentwickler</Link>
                <Link className="block px-4 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50" to="/target-groups/insurers">Banken & Versicherer</Link>
                <Link className="block px-4 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50" to="/target-groups/brokers">Makler & Bestandshalter</Link>
              </div>
            </div>
          </div>
          <Link className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white transition-colors" to="/about">Über uns</Link>
          <Link className="font-['Inter'] font-medium text-sm tracking-wide text-slate-600 dark:text-slate-400 hover:text-[#003036] dark:hover:text-white transition-colors" to="/knowledge">Wissen</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/contact" className="hidden sm:block px-5 py-2 editorial-gradient text-on-primary font-medium text-sm scale-95 active:scale-100 transition-transform">Analyse anfragen</Link>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white transition-colors"
            onClick={toggleMenu}
            aria-label="Menü umschalten"
          >
            <span className="material-symbols-outlined text-2xl">
              {isOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 shadow-2xl animate-in slide-in-from-top duration-300 overflow-y-auto max-h-[calc(100vh-64px)]">
          <div className="flex flex-col p-6 space-y-6">
            <div className="space-y-4">
              <p className="text-[10px] font-bold tracking-widest text-outline uppercase mb-2">Leistungen</p>
              <Link className="block text-lg font-medium text-primary dark:text-white" to="/services" onClick={toggleMenu}>Übersicht</Link>
              <div className="grid grid-cols-1 gap-3 pl-4">
                <Link className="text-sm text-on-surface-variant hover:text-primary" to="/leistungen/basis-check" onClick={toggleMenu}>Basis Check</Link>
                <Link className="text-sm text-on-surface-variant hover:text-primary" to="/services/potential-analysis" onClick={toggleMenu}>Potenzialanalyse</Link>
                <Link className="text-sm text-on-surface-variant hover:text-primary" to="/services/feasibility-study" onClick={toggleMenu}>Machbarkeitsstudie</Link>
                <Link className="text-sm text-on-surface-variant hover:text-primary" to="/services/bank-check" onClick={toggleMenu}>Bank Check</Link>
                <Link className="text-sm text-on-surface-variant hover:text-primary" to="/services/portfolio-scan" onClick={toggleMenu}>Portfolio Scan</Link>
                <Link className="text-sm text-on-surface-variant hover:text-primary" to="/leistungen/partner-flat" onClick={toggleMenu}>Partner Flat</Link>
              </div>
            </div>

            <div className="space-y-4 pb-4 border-b border-slate-100 dark:border-slate-800">
              <p className="text-[10px] font-bold tracking-widest text-outline uppercase mb-2">Zielgruppen</p>
              <div className="grid grid-cols-1 gap-3 pl-4">
                <Link className="text-sm text-on-surface-variant hover:text-primary" to="/target-groups/developers" onClick={toggleMenu}>Projektentwickler</Link>
                <Link className="text-sm text-on-surface-variant hover:text-primary" to="/target-groups/insurers" onClick={toggleMenu}>Banken & Versicherer</Link>
                <Link className="text-sm text-on-surface-variant hover:text-primary" to="/target-groups/brokers" onClick={toggleMenu}>Makler & Bestandshalter</Link>
              </div>
            </div>

            <Link className="text-lg font-medium text-primary dark:text-white py-2" to="/about" onClick={toggleMenu}>Über uns</Link>
            <Link className="text-lg font-medium text-primary dark:text-white py-2" to="/knowledge" onClick={toggleMenu}>Wissen</Link>
            
            <Link to="/contact" className="w-full text-center py-4 editorial-gradient text-on-primary font-bold text-sm tracking-widest uppercase" onClick={toggleMenu}>
              Analyse anfragen
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
