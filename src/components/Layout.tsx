import { Link, Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/src/lib/utils";

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
          isScrolled
            ? "bg-navy-900/80 backdrop-blur-md border-white/10 py-4"
            : "bg-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
              <div className="w-3 h-3 bg-navy-900 rounded-sm group-hover:scale-110 transition-transform" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-white">
              Macklemore
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-white transition-colors">
                Solutions <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
                <div className="bg-navy-800 border border-white/10 rounded-xl p-2 w-64 shadow-xl backdrop-blur-xl">
                  <Link
                    to="/solutions/automation"
                    className="block px-4 py-3 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <div className="text-sm font-medium text-white mb-1">Automation</div>
                    <div className="text-xs text-slate-400">Business growth & efficiency</div>
                  </Link>
                  <Link
                    to="/solutions/ai-education"
                    className="block px-4 py-3 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <div className="text-sm font-medium text-white mb-1">AI Education</div>
                    <div className="text-xs text-slate-400">Workforce transformation</div>
                  </Link>
                  <Link
                    to="/solutions/security"
                    className="block px-4 py-3 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <div className="text-sm font-medium text-white mb-1">Security Services</div>
                    <div className="text-xs text-slate-400">Risk management infrastructure</div>
                  </Link>
                </div>
              </div>
            </div>
            <Link to="/case-studies" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Case Studies
            </Link>
            <Link to="/deal-room" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Deal Room
            </Link>
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-white transition-colors">
                Company <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
                <div className="bg-navy-800 border border-white/10 rounded-xl p-2 w-48 shadow-xl backdrop-blur-xl">
                  <Link to="/about" className="block px-4 py-2 rounded-lg hover:bg-white/5 text-sm text-slate-300 hover:text-white transition-colors">About Us</Link>
                  <Link to="/partners" className="block px-4 py-2 rounded-lg hover:bg-white/5 text-sm text-slate-300 hover:text-white transition-colors">Partners</Link>
                  <Link to="/careers" className="block px-4 py-2 rounded-lg hover:bg-white/5 text-sm text-slate-300 hover:text-white transition-colors">Careers</Link>
                </div>
              </div>
            </div>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/deal-room"
              className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-medium text-white transition-all hover:border-white/20"
            >
              Book Strategy Session
            </Link>
          </div>

          <button
            className="md:hidden text-slate-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-navy-900/95 backdrop-blur-xl pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-lg">
              <div className="space-y-4">
                <div className="font-display font-medium text-white/50 text-sm uppercase tracking-wider">Solutions</div>
                <Link to="/solutions/automation" className="block text-white">Automation</Link>
                <Link to="/solutions/ai-education" className="block text-white">AI Education</Link>
                <Link to="/solutions/security" className="block text-white">Security Services</Link>
              </div>
              <div className="space-y-4">
                <div className="font-display font-medium text-white/50 text-sm uppercase tracking-wider">Company</div>
                <Link to="/about" className="block text-white">About Us</Link>
                <Link to="/partners" className="block text-white">Partners</Link>
                <Link to="/careers" className="block text-white">Careers</Link>
              </div>
              <Link to="/case-studies" className="block text-white">Case Studies</Link>
              <Link to="/deal-room" className="block text-white">Deal Room</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>

      <footer className="bg-navy-900 border-t border-white/10 py-12 md:py-20 mt-auto">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 rounded bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                <div className="w-2 h-2 bg-navy-900 rounded-sm" />
              </div>
              <span className="font-display font-bold text-lg tracking-tight text-white">
                Macklemore Solutions
              </span>
            </Link>
            <p className="text-slate-400 max-w-sm mb-8">
              Designing Intelligent Systems That Power Institutional Growth. We build AI-driven automation infrastructure that streamlines operations.
            </p>
            <Link
              to="/partners"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
            >
              Partner With Macklemore Solutions <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
          
          <div>
            <h4 className="font-display font-medium text-white mb-4">Solutions</h4>
            <ul className="space-y-3">
              <li><Link to="/solutions/automation" className="text-slate-400 hover:text-white transition-colors">Automation</Link></li>
              <li><Link to="/solutions/ai-education" className="text-slate-400 hover:text-white transition-colors">AI Education</Link></li>
              <li><Link to="/solutions/security" className="text-slate-400 hover:text-white transition-colors">Security Services</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-medium text-white mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/case-studies" className="text-slate-400 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/deal-room" className="text-slate-400 hover:text-white transition-colors">Deal Room</Link></li>
              <li><Link to="/careers" className="text-slate-400 hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Macklemore Solutions. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm">
            Collaborate to Deliver Infrastructure at Scale
          </p>
        </div>
      </footer>
    </div>
  );
}
