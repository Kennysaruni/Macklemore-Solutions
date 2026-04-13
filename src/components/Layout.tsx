import { Link, Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/src/lib/utils";
import macklemoreLogo from "@/src/assets/macklemorelogo.png";
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
      {/* <AnimatePresence>
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
      </AnimatePresence> */}

      <header className="sticky top-0 w-full z-50 transition-all duration-300 pt-3 px-3 md:pt-4 md:px-6">
        <div className={cn(
          "max-w-7xl mx-auto flex items-center justify-between bg-white rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border border-slate-100/60",
          isScrolled ? "py-2.5 px-5 shadow-[0_8px_30px_rgb(0,0,0,0.08)]" : "py-3.5 px-5"
        )}>
          <Link to="/" className="flex items-center group">
            <img src={macklemoreLogo} alt="Macklemore Solutions Logo" className="h-10" />
          </Link>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 flex-wrap justify-center">
            {/* Services Dropdown */}
            <div className="relative group py-4">
              <button className="text-[15px] font-medium text-slate-600 hover:text-brand-blue transition-colors flex items-center gap-1">
                Services <svg className="w-4 h-4 ml-0.5 text-slate-400 group-hover:text-brand-blue transition-transform group-hover:-rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[600px] bg-white rounded-2xl shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden transform origin-top scale-95 group-hover:scale-100">
                <div className="grid grid-cols-3 p-6 gap-6">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 mb-4 px-2 tracking-wide">AI & Automation</h4>
                    <div className="flex flex-col space-y-1">
                       <Link to="/solutions/automation" className="px-2 py-2 text-sm text-slate-600 hover:text-brand-blue hover:bg-slate-50 rounded-lg font-medium transition-colors">Workflow Automation</Link>
                       <Link to="/solutions/automation" className="px-2 py-2 text-sm text-slate-600 hover:text-brand-blue hover:bg-slate-50 rounded-lg font-medium transition-colors">CRM & Sales Automation</Link>
                       <Link to="/solutions/automation" className="px-2 py-2 text-sm text-slate-600 hover:text-brand-blue hover:bg-slate-50 rounded-lg font-medium transition-colors">AI Chatbots & Assistants</Link>
                       <Link to="/solutions/automation" className="px-2 py-2 text-sm text-slate-600 hover:text-brand-blue hover:bg-slate-50 rounded-lg font-medium transition-colors">Operations Automation</Link>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 mb-4 px-2 tracking-wide">Cybersecurity</h4>
                    <div className="flex flex-col space-y-1">
                       <Link to="/solutions/security" className="px-2 py-2 text-sm text-slate-600 hover:text-brand-blue hover:bg-slate-50 rounded-lg font-medium transition-colors">Vulnerability Assessment</Link>
                       <Link to="/solutions/security" className="px-2 py-2 text-sm text-slate-600 hover:text-brand-blue hover:bg-slate-50 rounded-lg font-medium transition-colors">Security Monitoring</Link>
                       <Link to="/solutions/security" className="px-2 py-2 text-sm text-slate-600 hover:text-brand-blue hover:bg-slate-50 rounded-lg font-medium transition-colors">Compliance & Risk</Link>
                       <Link to="/solutions/security" className="px-2 py-2 text-sm text-slate-600 hover:text-brand-blue hover:bg-slate-50 rounded-lg font-medium transition-colors">Employee Training</Link>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 mb-4 px-2 tracking-wide">AI Education</h4>
                    <div className="flex flex-col space-y-1">
                       <Link to="/solutions/ai-education" className="px-2 py-2 text-sm text-slate-600 hover:text-brand-blue hover:bg-slate-50 rounded-lg font-medium transition-colors">Corporate Training</Link>
                       <Link to="/solutions/ai-education" className="px-2 py-2 text-sm text-slate-600 hover:text-brand-blue hover:bg-slate-50 rounded-lg font-medium transition-colors">Internship Programs</Link>
                       <Link to="/solutions/ai-education" className="px-2 py-2 text-sm text-slate-600 hover:text-brand-blue hover:bg-slate-50 rounded-lg font-medium transition-colors">Certification Programs</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Industries */}
            <div className="relative group py-4">
              <button className="text-[15px] font-medium text-slate-600 hover:text-brand-blue transition-colors flex items-center gap-1">
                Industries <svg className="w-4 h-4 ml-0.5 text-slate-400 group-hover:text-brand-blue transition-transform group-hover:-rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[240px] bg-white rounded-2xl shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 p-3 transform origin-top scale-95 group-hover:scale-100">
                <div className="flex flex-col space-y-1">
                  <Link to="/" className="block px-3 py-2 text-sm text-slate-600 hover:text-brand-blue hover:bg-slate-50 rounded-lg font-medium transition-colors">Logistics Companies</Link>
                  <Link to="/" className="block px-3 py-2 text-sm text-slate-600 hover:text-brand-blue hover:bg-slate-50 rounded-lg font-medium transition-colors">Financial Services</Link>
                  <Link to="/" className="block px-3 py-2 text-sm text-slate-600 hover:text-brand-blue hover:bg-slate-50 rounded-lg font-medium transition-colors">Healthcare</Link>
                  <Link to="/" className="block px-3 py-2 text-sm text-slate-600 hover:text-brand-blue hover:bg-slate-50 rounded-lg font-medium transition-colors">Retail & E-commerce</Link>
                  <Link to="/" className="block px-3 py-2 text-sm text-slate-600 hover:text-brand-blue hover:bg-slate-50 rounded-lg font-medium transition-colors">Education</Link>
                  <Link to="/" className="block px-3 py-2 text-sm text-slate-600 hover:text-brand-blue hover:bg-slate-50 rounded-lg font-medium transition-colors">SMEs & Enterprises</Link>
                </div>
              </div>
            </div>

            {/* Case Studies */}
            <div className="relative group py-4">
              <Link to="/case-studies" className="text-[15px] font-medium text-slate-600 hover:text-brand-blue transition-colors flex items-center gap-1">
                Case Studies <svg className="w-4 h-4 ml-0.5 text-slate-400 group-hover:text-brand-blue transition-transform group-hover:-rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
              </Link>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[260px] bg-white rounded-2xl shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 p-3 transform origin-top scale-95 group-hover:scale-100">
                <div className="flex flex-col space-y-1">
                  <Link to="/case-studies" className="block px-3 py-2 text-sm text-slate-600 hover:text-brand-blue hover:bg-slate-50 rounded-lg font-medium transition-colors">Automation Projects</Link>
                  <Link to="/case-studies" className="block px-3 py-2 text-sm text-slate-600 hover:text-brand-blue hover:bg-slate-50 rounded-lg font-medium transition-colors">Cybersecurity Implementations</Link>
                  <Link to="/case-studies" className="block px-3 py-2 text-sm text-slate-600 hover:text-brand-blue hover:bg-slate-50 rounded-lg font-medium transition-colors">AI Marketing Results</Link>
                </div>
              </div>
            </div>

            {/* Resources */}
            <div className="relative group py-4">
              <button className="text-[15px] font-medium text-slate-600 hover:text-brand-blue transition-colors flex items-center gap-1">
                Resources <svg className="w-4 h-4 ml-0.5 text-slate-400 group-hover:text-brand-blue transition-transform group-hover:-rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[240px] bg-white rounded-2xl shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 p-3 transform origin-top scale-95 group-hover:scale-100">
                <div className="flex flex-col space-y-1">
                  <Link to="/case-studies" className="block px-3 py-2 text-sm text-slate-600 hover:text-brand-blue hover:bg-slate-50 rounded-lg font-medium transition-colors">Blog</Link>
                  <Link to="/case-studies" className="block px-3 py-2 text-sm text-slate-600 hover:text-brand-blue hover:bg-slate-50 rounded-lg font-medium transition-colors">Case Studies</Link>
                  <Link to="/" className="block px-3 py-2 text-sm text-slate-600 hover:text-brand-blue hover:bg-slate-50 rounded-lg font-medium transition-colors">eGuides / Whitepapers</Link>
                  <Link to="/" className="block px-3 py-2 text-sm text-slate-600 hover:text-brand-blue hover:bg-slate-50 rounded-lg font-medium transition-colors">Webinars & Training</Link>
                  <Link to="/" className="block px-3 py-2 text-sm text-slate-600 hover:text-brand-blue hover:bg-slate-50 rounded-lg font-medium transition-colors">AI Playbooks</Link>
                </div>
              </div>
            </div>

            {/* Company */}
            <div className="relative group py-4">
              <button className="text-[15px] font-medium text-slate-600 hover:text-brand-blue transition-colors flex items-center gap-1">
                Company <svg className="w-4 h-4 ml-0.5 text-slate-400 group-hover:text-brand-blue transition-transform group-hover:-rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[240px] bg-white rounded-2xl shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 p-3 transform origin-top scale-95 group-hover:scale-100">
                <div className="flex flex-col space-y-1">
                  <Link to="/about" className="block px-3 py-2 text-sm text-slate-600 hover:text-brand-blue hover:bg-slate-50 rounded-lg font-medium transition-colors">About Us</Link>
                  <Link to="/about" className="block px-3 py-2 text-sm text-slate-600 hover:text-brand-blue hover:bg-slate-50 rounded-lg font-medium transition-colors">The Macklemore Advantage</Link>
                  <Link to="/careers" className="block px-3 py-2 text-sm text-slate-600 hover:text-brand-blue hover:bg-slate-50 rounded-lg font-medium transition-colors">Careers</Link>
                  <Link to="/partners" className="block px-3 py-2 text-sm text-slate-600 hover:text-brand-blue hover:bg-slate-50 rounded-lg font-medium transition-colors">Partner With Us</Link>
                  <Link to="/deal-room" className="block px-3 py-2 text-sm text-brand-blue font-semibold hover:bg-slate-50 rounded-lg transition-colors">Deal Room</Link>
                  <Link to="/payment-hub" className="block px-3 py-2 text-sm text-brand-blue font-semibold hover:bg-slate-50 rounded-lg transition-colors">Payment Hub</Link>
                  <Link to="/" className="block px-3 py-2 text-sm text-slate-600 hover:text-brand-blue hover:bg-slate-50 rounded-lg font-medium transition-colors">Contact</Link>
                </div>
              </div>
            </div>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-10">
              {/* Column 1 */}
              <div className="flex flex-col gap-10">
                <div>
                  <h4 className="text-[13px] text-slate-400 font-medium mb-4 uppercase tracking-wider">Services</h4>
                  <ul className="flex flex-col gap-4">
                    <li><Link to="/solutions/automation" className="text-[16px] leading-[1.3] font-medium text-slate-800 hover:text-brand-blue" onClick={() => setMobileMenuOpen(false)}>AI & Automation</Link></li>
                    <li><Link to="/solutions/security" className="text-[16px] leading-[1.3] font-medium text-slate-800 hover:text-brand-blue" onClick={() => setMobileMenuOpen(false)}>Cybersecurity</Link></li>
                    <li><Link to="/solutions/ai-education" className="text-[16px] leading-[1.3] font-medium text-slate-800 hover:text-brand-blue" onClick={() => setMobileMenuOpen(false)}>AI Education</Link></li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-[13px] text-slate-400 font-medium mb-4 uppercase tracking-wider">Industries</h4>
                  <ul className="flex flex-col gap-4">
                    <li><Link to="/" className="text-[16px] leading-[1.3] font-medium text-slate-800 hover:text-brand-blue" onClick={() => setMobileMenuOpen(false)}>Logistics & Healthcare</Link></li>
                    <li><Link to="/" className="text-[16px] leading-[1.3] font-medium text-slate-800 hover:text-brand-blue" onClick={() => setMobileMenuOpen(false)}>Financial Services</Link></li>
                    <li><Link to="/" className="text-[16px] leading-[1.3] font-medium text-slate-800 hover:text-brand-blue" onClick={() => setMobileMenuOpen(false)}>SMEs & Enterprises</Link></li>
                  </ul>
                </div>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col gap-10">
                <div>
                  <h4 className="text-[13px] text-slate-400 font-medium mb-4 uppercase tracking-wider">Resources</h4>
                  <ul className="flex flex-col gap-4">
                    <li><Link to="/case-studies" className="text-[16px] leading-[1.3] font-medium text-slate-800 hover:text-brand-blue" onClick={() => setMobileMenuOpen(false)}>Case Studies</Link></li>
                    <li><Link to="/deal-room" className="text-[16px] leading-[1.3] font-medium text-slate-800 hover:text-brand-blue" onClick={() => setMobileMenuOpen(false)}>Deal Room</Link></li>
                    <li><Link to="/payment-hub" className="text-[16px] leading-[1.3] font-medium text-slate-800 hover:text-brand-blue" onClick={() => setMobileMenuOpen(false)}>Payment Hub</Link></li>
                    <li><Link to="/" className="text-[16px] leading-[1.3] font-medium text-slate-800 hover:text-brand-blue" onClick={() => setMobileMenuOpen(false)}>AI Playbooks</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[13px] text-slate-400 font-medium mb-4 uppercase tracking-wider">Company</h4>
                  <ul className="flex flex-col gap-4">
                    <li><Link to="/about" className="text-[16px] leading-[1.3] font-medium text-slate-800 hover:text-brand-blue" onClick={() => setMobileMenuOpen(false)}>About Us</Link></li>
                    <li><Link to="/careers" className="text-[16px] leading-[1.3] font-medium text-slate-800 hover:text-brand-blue" onClick={() => setMobileMenuOpen(false)}>Careers</Link></li>
                    <li><Link to="/partners" className="text-[16px] leading-[1.3] font-medium text-slate-800 hover:text-brand-blue" onClick={() => setMobileMenuOpen(false)}>Partner With Us</Link></li>
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
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center mb-6">
              <img src={macklemoreLogo} alt="Macklemore Solutions Logo" className="h-10 brightness-0 invert" />
            </Link>
            <p className="text-slate-400 text-sm">
              Designing intelligent systems that power institutional growth.
            </p>
          </div>

          <div>
            <h4 className="font-display font-medium text-white mb-4">Solutions</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/solutions/automation" className="text-slate-400 hover:text-white transition-colors">AI & Automation</Link></li>
              <li><Link to="/solutions/security" className="text-slate-400 hover:text-white transition-colors">Cybersecurity</Link></li>
              <li><Link to="/solutions/ai-education" className="text-slate-400 hover:text-white transition-colors">AI Education</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-medium text-white mb-4">Industries</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="text-slate-400 hover:text-white transition-colors">Logistics</Link></li>
              <li><Link to="/" className="text-slate-400 hover:text-white transition-colors">Financial Services</Link></li>
              <li><Link to="/" className="text-slate-400 hover:text-white transition-colors">Healthcare</Link></li>
              <li><Link to="/" className="text-slate-400 hover:text-white transition-colors">Retail & E-commerce</Link></li>
              <li><Link to="/" className="text-slate-400 hover:text-white transition-colors">Education</Link></li>
              <li><Link to="/" className="text-slate-400 hover:text-white transition-colors">SMEs & Enterprises</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-medium text-white mb-4">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="text-slate-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/case-studies" className="text-slate-400 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/" className="text-slate-400 hover:text-white transition-colors">eGuides / Whitepapers</Link></li>
              <li><Link to="/" className="text-slate-400 hover:text-white transition-colors">Webinars & Training</Link></li>
              <li><Link to="/" className="text-slate-400 hover:text-white transition-colors">AI Playbooks</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-medium text-white mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors">The Macklemore Advantage</Link></li>
              <li><Link to="/careers" className="text-slate-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/partners" className="text-slate-400 hover:text-white transition-colors">Partner With Us</Link></li>
              <li><Link to="/deal-room" className="text-slate-400 hover:text-white transition-colors">Deal Room</Link></li>
              <li><Link to="/" className="text-slate-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-slate-500 text-sm w-full md:w-auto">
            <span>© {new Date().getFullYear()} Macklemore Solutions. All rights reserved.</span>
            <span className="hidden sm:inline text-slate-700">|</span>
            <div className="flex gap-4">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
