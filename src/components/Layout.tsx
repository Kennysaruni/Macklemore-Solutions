import { Link, Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/src/lib/utils";

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [mobileMenuOpen]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Top Banner */}
      <AnimatePresence>
        {bannerVisible && (
          <motion.div
            initial={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-brand-blue text-white w-full z-[60] relative"
          >
            <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-center text-sm font-medium pr-10 hover:text-white/90 transition-colors cursor-pointer relative">
              The Optimizers Awards: Recognizing Operational Excellence – Nominate Your Work Here &gt;&gt;&gt;
              <button 
                onClick={(e) => { e.stopPropagation(); setBannerVisible(false); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors"
                aria-label="Close banner"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <header
        className={cn(
          "sticky top-0 w-full z-50 transition-all duration-300",
          isScrolled
            ? "bg-white shadow-sm py-4"
            : "bg-white py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <svg viewBox="0 0 40 40" className="w-8 h-8 text-brand-cyan" fill="currentColor">
              <path d="M20 0C8.954 0 0 8.954 0 20s8.954 20 20 20 20-8.954 20-20S31.046 0 20 0zm0 36c-8.837 0-16-7.163-16-16S11.163 4 20 4s16 7.163 16 16-7.163 16-16 16z"/>
              <path opacity="0.3" d="M20 8c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12S26.627 8 20 8zm0 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"/>
            </svg>
            <span className="font-display font-medium text-2xl tracking-tight text-slate-800">
              autofleet
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8 flex-wrap justify-center">
            <Link to="/solutions/automation" className="text-[15px] font-medium text-slate-600 hover:text-brand-blue transition-colors">
              Solutions
            </Link>
            <Link to="/case-studies" className="text-[15px] font-medium text-slate-600 hover:text-brand-blue transition-colors">
              Case Studies
            </Link>
            <Link to="/deal-room" className="text-[15px] font-medium text-slate-600 hover:text-brand-blue transition-colors">
              Deal Room
            </Link>
            <Link to="/about" className="text-[15px] font-medium text-slate-600 hover:text-brand-blue transition-colors">
              Company
            </Link>
            <Link to="/careers" className="text-[15px] font-medium text-slate-600 hover:text-brand-blue transition-colors">
              Careers
            </Link>
            <Link to="/partners" className="text-[15px] font-medium text-slate-600 hover:text-brand-blue transition-colors">
              Partners
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/deal-room"
              className="px-6 py-2.5 rounded-lg bg-brand-blue hover:bg-brand-blue-hover text-[15px] font-medium text-white transition-all shadow-sm shadow-brand-blue/20"
            >
              Book your demo
            </Link>
          </div>

          <button
            className="md:hidden text-slate-800 hover:text-brand-blue z-50 flex items-center p-2 -mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X strokeWidth={1} className="w-9 h-9" />
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <line x1="2" y1="9" x2="22" y2="9" />
                <line x1="2" y1="15" x2="22" y2="15" />
              </svg>
            )}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white pt-[120px] px-6 pb-24 md:hidden overflow-y-auto"
          >
            <div className="grid grid-cols-2 gap-x-4 gap-y-10">
              {/* Column 1 */}
              <div className="flex flex-col gap-10">
                <div>
                  <h4 className="text-[13px] text-slate-400 font-medium mb-4 uppercase tracking-wider">Solutions</h4>
                  <ul className="flex flex-col gap-6">
                    <li><Link to="/solutions/automation" className="text-[16px] leading-[1.3] font-medium text-slate-800 hover:text-brand-blue" onClick={() => setMobileMenuOpen(false)}>Automation Infrastructure</Link></li>
                    <li><Link to="/solutions/ai-education" className="text-[16px] leading-[1.3] font-medium text-slate-800 hover:text-brand-blue" onClick={() => setMobileMenuOpen(false)}>AI Education</Link></li>
                    <li><Link to="/solutions/security" className="text-[16px] leading-[1.3] font-medium text-slate-800 hover:text-brand-blue" onClick={() => setMobileMenuOpen(false)}>Security Services</Link></li>
                  </ul>
                </div>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col gap-10">
                <div>
                  <h4 className="text-[13px] text-slate-400 font-medium mb-4 uppercase tracking-wider">Resources</h4>
                  <ul className="flex flex-col gap-6">
                    <li><Link to="/case-studies" className="text-[16px] leading-[1.3] font-medium text-slate-800 hover:text-brand-blue" onClick={() => setMobileMenuOpen(false)}>Case Studies</Link></li>
                    <li><Link to="/deal-room" className="text-[16px] leading-[1.3] font-medium text-slate-800 hover:text-brand-blue" onClick={() => setMobileMenuOpen(false)}>Deal Room</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[13px] text-slate-400 font-medium mb-4 uppercase tracking-wider">Company</h4>
                  <ul className="flex flex-col gap-6">
                    <li><Link to="/about" className="text-[16px] leading-[1.3] font-medium text-slate-800 hover:text-brand-blue" onClick={() => setMobileMenuOpen(false)}>About</Link></li>
                    <li><Link to="/careers" className="text-[16px] leading-[1.3] font-medium text-slate-800 hover:text-brand-blue" onClick={() => setMobileMenuOpen(false)}>Careers</Link></li>
                    <li><Link to="/partners" className="text-[16px] leading-[1.3] font-medium text-slate-800 hover:text-brand-blue" onClick={() => setMobileMenuOpen(false)}>Partners</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-12 w-full">
              <Link to="/deal-room" onClick={() => setMobileMenuOpen(false)} className="block w-full py-3.5 rounded-lg bg-brand-blue text-white text-center font-medium shadow-sm active:bg-brand-blue/90">
                Request a demo
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>

      <footer className="bg-slate-900 border-t border-slate-800 py-12 md:py-20 mt-auto">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <svg viewBox="0 0 40 40" className="w-8 h-8 text-white" fill="currentColor">
                <path opacity="0.8" d="M20 0C8.954 0 0 8.954 0 20s8.954 20 20 20 20-8.954 20-20S31.046 0 20 0zm0 36c-8.837 0-16-7.163-16-16S11.163 4 20 4s16 7.163 16 16-7.163 16-16 16z"/>
              </svg>
              <span className="font-display font-medium text-xl tracking-tight text-white">
                autofleet
              </span>
            </Link>
            <p className="text-slate-400 max-w-sm mb-8">
              Intelligent fleet and mobility operations, powered by real-time optimization and AI.
            </p>
          </div>
          
          <div>
            <h4 className="font-display font-medium text-white mb-4">Solutions</h4>
            <ul className="space-y-3">
              <li><Link to="/solutions/automation" className="text-slate-400 hover:text-white transition-colors">Automation Infrastructure</Link></li>
              <li><Link to="/solutions/ai-education" className="text-slate-400 hover:text-white transition-colors">AI Education</Link></li>
              <li><Link to="/solutions/security" className="text-slate-400 hover:text-white transition-colors">Security Services</Link></li>
              <li><Link to="/case-studies" className="text-slate-400 hover:text-white transition-colors">Case Studies</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-medium text-white mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-slate-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/partners" className="text-slate-400 hover:text-white transition-colors">Partners</Link></li>
              <li><Link to="/deal-room" className="text-slate-400 hover:text-white transition-colors">Deal Room</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Autofleet. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
