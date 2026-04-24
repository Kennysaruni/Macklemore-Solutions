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

    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          const y = element.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

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
            className="bg-[#1DA1F2] text-white w-full z-[60] relative"
          >
            <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-center text-sm font-bold pr-10 hover:text-white/90 transition-colors cursor-pointer relative text-center">
              The Optimizers Awards: Recognizing Operational Excellence – Nominate Your Work Here &gt;&gt;&gt;
              <button
                onClick={(e) => { e.stopPropagation(); setBannerVisible(false); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors"
                aria-label="Close banner"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence> */}

      <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 pt-3 px-3 md:pt-4 md:px-6">
        <div className={cn(
          "max-w-[1440px] mx-auto flex items-center justify-between bg-white rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border border-slate-100/60",
          isScrolled ? "py-2.5 px-5 shadow-[0_8px_30px_rgb(0,0,0,0.08)]" : "py-3.5 px-5"
        )}>
          <Link to="/" className="flex items-center group">
            <img src={macklemoreLogo} alt="Macklemore Solutions Logo" className="h-10" />
          </Link>

          <nav className="hidden lg:flex items-center gap-8 xl:gap-12 flex-wrap justify-center">
            {/* Services Dropdown */}
            <div className="relative group py-4">
              <button className="text-[15px] font-medium text-slate-600 hover:text-brand-blue transition-colors flex items-center gap-1">
                Services <svg className="w-4 h-4 ml-0.5 text-slate-400 group-hover:text-brand-blue transition-transform group-hover:-rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[240px] bg-white rounded-2xl shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 p-3 transform origin-top scale-95 group-hover:scale-100">
                <div className="flex flex-col space-y-1">
                  <Link to="/solutions/automation" className="block px-3 py-2 text-sm text-slate-600 hover:text-brand-blue hover:bg-slate-50 rounded-lg font-medium transition-colors">AI & Automation</Link>
                  <Link to="/solutions/security" className="block px-3 py-2 text-sm text-slate-600 hover:text-brand-blue hover:bg-slate-50 rounded-lg font-medium transition-colors">Cybersecurity</Link>
                  <Link to="/solutions/ai-education" className="block px-3 py-2 text-sm text-slate-600 hover:text-brand-blue hover:bg-slate-50 rounded-lg font-medium transition-colors">AI Education</Link>
                </div>
              </div>
            </div>

            {/* Industries */}
            <div className="py-4">
              <Link to="/industries" className="text-[15px] font-medium text-slate-600 hover:text-brand-blue transition-colors flex items-center">
                Industries
              </Link>
            </div>

            {/* Case Studies */}
            <div className="py-4">
              <Link to="/case-studies" className="text-[15px] font-medium text-slate-600 hover:text-brand-blue transition-colors flex items-center">
                Case Studies
              </Link>
            </div>

            {/* Resources */}
            <div className="relative group py-4">
              <button className="text-[15px] font-medium text-slate-600 hover:text-brand-blue transition-colors flex items-center gap-1">
                Resources <svg className="w-4 h-4 ml-0.5 text-slate-400 group-hover:text-brand-blue transition-transform group-hover:-rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[240px] bg-white rounded-2xl shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 p-3 transform origin-top scale-95 group-hover:scale-100">
                <div className="flex flex-col space-y-1">
                  <Link to="/blog" className="block px-3 py-2 text-sm text-slate-600 hover:text-brand-blue hover:bg-slate-50 rounded-lg font-medium transition-colors">Blog</Link>
                  <Link to="/eguides" className="block px-3 py-2 text-sm text-slate-600 hover:text-brand-blue hover:bg-slate-50 rounded-lg font-medium transition-colors">eGuides / Whitepapers</Link>
                  {/* <Link to="/" className="block px-3 py-2 text-sm text-slate-600 hover:text-brand-blue hover:bg-slate-50 rounded-lg font-medium transition-colors">Webinars & Training</Link> */}
                  <Link to="/playbooks" className="block px-3 py-2 text-sm text-slate-600 hover:text-brand-blue hover:bg-slate-50 rounded-lg font-medium transition-colors">AI Playbooks</Link>
                </div>
              </div>
            </div>

            {/* Company */}
            <div className="relative group py-4">
              <button className="text-[15px] font-medium text-slate-600 hover:text-brand-blue transition-colors flex items-center gap-1">
                Company <svg className="w-4 h-4 ml-0.5 text-slate-400 group-hover:text-brand-blue transition-transform group-hover:-rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[240px] bg-white rounded-2xl shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 p-3 transform origin-top scale-95 group-hover:scale-100">
                <div className="flex flex-col space-y-1">
                  <Link to="/about" className="block px-3 py-2 text-sm text-slate-600 hover:text-brand-blue hover:bg-slate-50 rounded-lg font-medium transition-colors">About Us</Link>
                  <Link to="/advantage" className="block px-3 py-2 text-sm text-slate-600 hover:text-brand-blue hover:bg-slate-50 rounded-lg font-medium transition-colors">The Macklemore Advantage</Link>
                  <Link to="/careers" className="block px-3 py-2 text-sm text-slate-600 hover:text-brand-blue hover:bg-slate-50 rounded-lg font-medium transition-colors">Careers</Link>
                  <Link to="/partners" className="block px-3 py-2 text-sm text-slate-600 hover:text-brand-blue hover:bg-slate-50 rounded-lg font-medium transition-colors">Partner With Us</Link>
                  <Link to="/contact" className="block px-3 py-2 text-sm text-slate-600 hover:text-brand-blue hover:bg-slate-50 rounded-lg font-medium transition-colors">Contact</Link>
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
            className="fixed inset-0 z-40 bg-white pt-[100px] px-6 pb-24 md:hidden overflow-y-auto"
          >
            <div className="grid grid-cols-2 gap-x-6 gap-y-12 pr-4">
              {/* Column 1 */}
              <div className="flex flex-col gap-10">
                <div>
                  <h4 className="text-[14px] text-slate-400 font-medium mb-3">Services</h4>
                  <ul className="flex flex-col gap-5">
                    <li><Link to="/solutions/automation" className="text-[15px] leading-snug font-semibold text-slate-800 hover:text-brand-blue block" onClick={() => setMobileMenuOpen(false)}>AI & Automation</Link></li>
                    <li><Link to="/solutions/security" className="text-[15px] leading-snug font-semibold text-slate-800 hover:text-brand-blue block" onClick={() => setMobileMenuOpen(false)}>Cybersecurity</Link></li>
                    <li><Link to="/solutions/ai-education" className="text-[15px] leading-snug font-semibold text-slate-800 hover:text-brand-blue block" onClick={() => setMobileMenuOpen(false)}>AI Education</Link></li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-[14px] text-slate-400 font-medium mb-3">Explore</h4>
                  <ul className="flex flex-col gap-5">
                    <li><Link to="/industries" className="text-[15px] leading-snug font-semibold text-slate-800 hover:text-brand-blue block" onClick={() => setMobileMenuOpen(false)}>Industries We Serve</Link></li>
                    <li><Link to="/case-studies" className="text-[15px] leading-snug font-semibold text-slate-800 hover:text-brand-blue block" onClick={() => setMobileMenuOpen(false)}>Case Studies</Link></li>
                  </ul>
                </div>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col gap-10">
                <div>
                  <h4 className="text-[14px] text-slate-400 font-medium mb-3">Resources</h4>
                  <ul className="flex flex-col gap-5">
                    <li><Link to="/blog" className="text-[15px] leading-snug font-semibold text-slate-800 hover:text-brand-blue block" onClick={() => setMobileMenuOpen(false)}>Blog</Link></li>
                    <li><Link to="/eguides" className="text-[15px] leading-snug font-semibold text-slate-800 hover:text-brand-blue block" onClick={() => setMobileMenuOpen(false)}>eGuides / Whitepapers</Link></li>
                    <li><Link to="/playbooks" className="text-[15px] leading-snug font-semibold text-slate-800 hover:text-brand-blue block" onClick={() => setMobileMenuOpen(false)}>AI Playbooks</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[14px] text-slate-400 font-medium mb-3">Company</h4>
                  <ul className="flex flex-col gap-5">
                    <li><Link to="/about" className="text-[15px] leading-snug font-semibold text-slate-800 hover:text-brand-blue block" onClick={() => setMobileMenuOpen(false)}>About Us</Link></li>
                    <li><Link to="/advantage" className="text-[15px] leading-snug font-semibold text-slate-800 hover:text-brand-blue block" onClick={() => setMobileMenuOpen(false)}>The Macklemore Advantage</Link></li>
                    <li><Link to="/careers" className="text-[15px] leading-snug font-semibold text-slate-800 hover:text-brand-blue block" onClick={() => setMobileMenuOpen(false)}>Careers</Link></li>
                    <li><Link to="/partners" className="text-[15px] leading-snug font-semibold text-slate-800 hover:text-brand-blue block" onClick={() => setMobileMenuOpen(false)}>Partner With Us</Link></li>
                    <li><Link to="/contact" className="text-[15px] leading-snug font-semibold text-slate-800 hover:text-brand-blue block" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
                    <li><Link to="/privacy-policy" className="text-[15px] leading-snug font-semibold text-slate-800 hover:text-brand-blue block" onClick={() => setMobileMenuOpen(false)}>Privacy Policy</Link></li>
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

      <main className={cn("flex-1 flex flex-col", !["/", "/advantage"].includes(location.pathname) && "pt-[100px]")}>
        <Outlet />
      </main>

      <footer className="relative mt-auto pt-24 bg-white">
        {/* CTA Card */}
        <div className="max-w-4xl mx-auto px-6 relative z-10 -mb-24">
          <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-8 md:p-12 text-center flex flex-col items-center justify-center gap-6 border border-slate-100 relative overflow-hidden">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
              Ready to see Macklemore in action?
            </h2>
            <Link to="/deal-room" className="bg-[#1DA1F2] bg-brand-blue hover:bg-brand-blue-hover text-white px-8 py-3.5 rounded-xl font-medium inline-block transition-colors shadow-sm shadow-[#1DA1F2]/20 text-[15px] z-10">
              Book a demo
            </Link>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-slate-50 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>

        {/* The main footer background */}
        <div className="bg-gradient-to-b from-red-100 to-white pt-40 pb-12 px-6">
          <div className="max-w-[1440px] mx-auto">
            {/* Top row: Logo & Links */}
            <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-16">
              {/* Logo Column */}
              <div className="col-span-1 md:col-span-1">
                <Link to="/" className="flex items-start mb-4">
                  <img src={macklemoreLogo} alt="Macklemore Solutions Logo" className="h-10" />
                </Link>
                <p className="text-sm text-slate-600 leading-relaxed pr-2">
                  Designing intelligent systems that power institutional growth.
                </p>
              </div>

              {/* Solutions Column */}
              <div className="hidden md:block col-span-1">
                <h4 className="font-display font-semibold text-slate-900 mb-6 text-[15px]">Solutions</h4>
                <ul className="space-y-4 text-sm">
                  <li><Link to="/solutions/automation" className="text-slate-600 hover:text-brand-blue transition-colors">AI & Automation</Link></li>
                  <li><Link to="/solutions/security" className="text-slate-600 hover:text-brand-blue transition-colors">Cybersecurity</Link></li>
                  <li><Link to="/solutions/ai-education" className="text-slate-600 hover:text-brand-blue transition-colors">AI Education</Link></li>
                </ul>
              </div>

              {/* Industries Column */}
              <div className="hidden md:block col-span-1">
                <h4 className="font-display font-semibold text-slate-900 mb-6 text-[15px]">Industries</h4>
                <ul className="space-y-4 text-sm">
                  <li><Link to="/industries" className="text-slate-600 hover:text-brand-blue transition-colors">Overview</Link></li>
                </ul>
              </div>

              {/* Company Column */}
              <div className="hidden md:block col-span-1">
                <h4 className="font-display font-semibold text-slate-900 mb-6 text-[15px]">Company</h4>
                <ul className="space-y-4 text-sm">
                  <li><Link to="/about" className="text-slate-600 hover:text-brand-blue transition-colors">About Us</Link></li>
                  <li><Link to="/advantage" className="text-slate-600 hover:text-brand-blue transition-colors">The Macklemore Advantage</Link></li>
                  <li><Link to="/careers" className="text-slate-600 hover:text-brand-blue transition-colors">Careers</Link></li>
                  <li><Link to="/partners" className="text-slate-600 hover:text-brand-blue transition-colors">Partner With Us</Link></li>
                  <li><Link to="/deal-room" className="text-slate-600 hover:text-brand-blue transition-colors">Deal Room</Link></li>
                  <li><Link to="/contact" className="text-slate-600 hover:text-brand-blue transition-colors">Contact</Link></li>
                </ul>
              </div>

              {/* Resources Column */}
              <div className="hidden md:block col-span-1">
                <h4 className="font-display font-semibold text-slate-900 mb-6 text-[15px]">Resources</h4>
                <ul className="space-y-4 text-sm">
                  <li><Link to="/blog" className="text-slate-600 hover:text-brand-blue transition-colors">Blog</Link></li>
                  <li><Link to="/case-studies" className="text-slate-600 hover:text-brand-blue transition-colors">Case Studies</Link></li>
                  <li><Link to="/eguides" className="text-slate-600 hover:text-brand-blue transition-colors">eGuides / Whitepapers</Link></li>
                  <li><Link to="/playbooks" className="text-slate-600 hover:text-brand-blue transition-colors">AI Playbooks</Link></li>
                </ul>
              </div>

              {/* Follow Us Column */}
              <div className="hidden md:block col-span-1">
                <h4 className="font-display font-semibold text-slate-900 mb-6 text-[15px]">Follow us</h4>
                <ul className="space-y-4 text-sm">
                  <li><a href="#" className="flex items-center gap-2 text-slate-600 hover:text-[#0077b5] transition-colors"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg> LinkedIn</a></li>
                  <li><a href="#" className="flex items-center gap-2 text-slate-600 hover:text-[#1DA1F2] transition-colors"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg> Twitter</a></li>
                  <li><a href="#" className="flex items-center gap-2 text-slate-600 hover:text-[#1877F2] transition-colors"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg> Facebook</a></li>
                </ul>
              </div>
            </div>

            {/* Bottom row: Legal & Info */}
            <div className="flex flex-col md:flex-row justify-between items-center text-[13px] font-medium text-slate-600 w-full pt-8 border-t border-red-900/5">
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mb-4 md:mb-0">
                <span>All rights reserved to Macklemore Solutions {new Date().getFullYear()}</span>
                <span className="hidden sm:inline">|</span>
                <a href="mailto:Info@macklemoresolutions.com" className="hover:text-slate-900 transition-colors">Info@macklemoresolutions.com</a>
                <span className="hidden sm:inline">|</span>
                <a href="tel:+14374316340" className="hover:text-slate-900 transition-colors">+1 (437) 431-6340</a>
              </div>
              <div>
                <Link to="/privacy-policy" className="hover:text-slate-900 transition-colors">Privacy Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
