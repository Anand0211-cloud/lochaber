import { Link } from 'react-router-dom';
import logo from '../assets/lochaber-logo.png';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-sm dark:shadow-none">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        <Link className="flex items-center gap-2" to="/">
          <img src={logo} alt="Lochaber Logo" className="h-8 md:h-10 w-auto object-contain" />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link className="font-['Inter'] font-medium text-sm tracking-wide text-slate-600 dark:text-slate-400 hover:text-[#003036] dark:hover:text-white transition-colors" to="/services">Services</Link>
          <div className="relative group">
            <button className="font-['Inter'] font-medium text-sm tracking-wide text-slate-600 dark:text-slate-400 hover:text-[#003036] dark:hover:text-white transition-colors flex items-center gap-1">
              Target Groups <span className="material-symbols-outlined text-xs">keyboard_arrow_down</span>
            </button>
            <div className="absolute left-0 top-full pt-4 hidden group-hover:block w-56 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="bg-white dark:bg-slate-800 shadow-xl border border-slate-100 dark:border-slate-700 p-2">
                <Link className="block px-4 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50" to="/target-groups/developers">Project Developers</Link>
                <Link className="block px-4 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50" to="/target-groups/insurers">Banks & Insurers</Link>
                <Link className="block px-4 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50" to="/target-groups/brokers">Brokers & Portfolio Holders</Link>
              </div>
            </div>
          </div>
          <Link className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white transition-colors" to="/about">About</Link>
          <Link className="font-['Inter'] font-medium text-sm tracking-wide text-slate-600 dark:text-slate-400 hover:text-[#003036] dark:hover:text-white transition-colors" to="/knowledge">Knowledge</Link>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/contact" className="px-5 py-2 editorial-gradient text-on-primary font-medium text-sm scale-95 active:scale-100 transition-transform">Request Analysis</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
