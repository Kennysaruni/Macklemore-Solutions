import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { PlayCircle, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-36 md:pb-28 overflow-hidden bg-slate-50 min-h-[90vh] flex flex-col justify-center">
        {/* Abstract 3D Graphic Placeholder mimicking Autofleet's background */}
        <div className="absolute right-0 top-0 w-full md:w-[70%] h-full opacity-50 md:opacity-100 pointer-events-none z-0 overflow-hidden hidden md:block">
           <div className="absolute top-10 -right-20 w-[800px] h-[800px] border-[40px] border-white rounded-full opacity-60 shadow-[0_0_100px_rgba(34,211,238,0.1)] transform rotate-12 scale-150"></div>
           <div className="absolute top-40 right-20 w-[600px] h-[600px] bg-gradient-to-br from-white to-slate-100 rounded-3xl shadow-2xl transform rotate-12"></div>
           <div className="absolute top-60 right-60 w-32 h-64 bg-slate-200 rounded-xl shadow-xl transform rotate-12 -skew-x-12 hidden lg:block"></div>
           <div className="absolute top-96 right-10 w-48 h-32 bg-white rounded-xl shadow-xl transform rotate-12 skew-x-12 hidden lg:block border border-slate-100"></div>
           {/* Connecting stylized lines */}
           <svg className="absolute inset-0 w-full h-full stroke-brand-cyan/20 fill-none" preserveAspectRatio="none">
              <path d="M400,200 C500,200 600,400 800,400" strokeWidth="20" strokeLinecap="round" />
              <path d="M200,600 C400,600 500,300 900,300" strokeWidth="15" strokeLinecap="round" />
              <path d="M600,800 C700,800 800,500 1000,500" strokeWidth="25" strokeLinecap="round" />
           </svg>
        </div>

        {/* Mobile background subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-100 md:hidden z-0"></div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex-1 flex flex-col justify-center">
          <div className="max-w-xl lg:max-w-2xl bg-white/40 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-6 md:p-0 rounded-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-[44px] md:text-[60px] lg:text-[72px] font-display font-bold tracking-tight text-slate-800 mb-6 leading-[1.05]">
                Designing Intelligent Systems That Power Institutional Growth
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-lg leading-relaxed font-medium">
                We build AI driven automation infrastructure that streamlines operations, strengthens decision making, and enables organizations to scale with precision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/deal-room"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-brand-blue text-white font-medium hover:bg-brand-blue-hover transition-colors shadow-lg shadow-brand-blue/30 text-[17px]"
                >
                  Request a demo
                </Link>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-white/80 border border-slate-200 text-slate-700 font-medium hover:bg-white transition-colors shadow-sm text-[17px]"
                >
                  Autofleet in 90 seconds 
                  <PlayCircle className="w-6 h-6 text-brand-blue fill-brand-blue/10" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Logo Bar */}
      <section className="bg-slate-800 border-t-4 border-brand-cyan relative z-20">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-10 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Mock Logos matching the image */}
             <div className="text-white font-display font-bold tracking-widest text-2xl">SCANIA</div>
             <div className="text-white font-display font-semibold flex items-center gap-2">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full border-2 border-white"></div>
                  <div className="w-4 border-t-2 border-white"></div>
                  <div className="w-3 h-3 rounded-full border-2 border-white flex justify-center items-center">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                  </div>
                </div>
                pedal me
             </div>
             <div className="text-white font-display italic font-medium flex items-center gap-2 text-xl">
               <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                 <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
               </svg>
               Mobility-on-Demand
             </div>
             <div className="text-white font-display font-bold flex items-center gap-2 text-xl">
               <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                 <circle cx="12" cy="12" r="10" />
                 <path d="M12 8v8M8 12h8" />
               </svg>
               AVL TAXI
             </div>
             <div className="text-white font-sans font-bold text-2xl tracking-tighter">
               zTrip
             </div>
          </div>
        </div>
      </section>

      {/* Engineered Block */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-slate-900">
                Engineered for Complex Operational Environments
              </h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Our systems are architected to integrate across departments, eliminate fragmented workflows, and create unified, data driven operations across enterprise functions.
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan/20 to-brand-blue/20 blur-3xl rounded-full" />
              <div className="relative bg-white border border-slate-200 rounded-2xl p-8 shadow-xl">
                <div className="flex items-center justify-between mb-8 pb-8 border-b border-slate-100">
                  <div>
                    <div className="text-sm font-medium text-slate-500 mb-1">Before</div>
                    <div className="text-lg text-slate-800 font-medium">Fragmented Workflows</div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-12 h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-slate-300" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-brand-blue mb-1">After</div>
                    <div className="text-lg text-slate-800 font-medium">Unified Platform</div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-12 h-2 bg-brand-blue/10 rounded-full overflow-hidden">
                      <motion.div 
                        className="w-full h-full bg-brand-blue"
                        initial={{ x: "-100%" }}
                        whileInView={{ x: "0%" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Approach & Delivering Performance */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="text-brand-blue font-semibold tracking-wider uppercase text-sm mb-4 block">Creative Approach</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-slate-900 leading-tight">
              Powering Operational Excellence Through AI and Automation Infrastructure
            </h2>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              Macklemore Solutions designs and implements intelligent systems that streamline operations, strengthen security, and enable data driven decision making across enterprise environments. Our capabilities span automation infrastructure, AI enablement, and security frameworks, allowing organizations to eliminate manual processes, integrate fragmented systems, and operate with greater efficiency and control. 
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              We work with institutions to build scalable operational architectures that improve performance, reduce risk, and support long term growth.
            </p>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-16 mt-24">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-slate-900">
              Delivering Measurable Performance at Scale
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              We implement automation, security, and AI frameworks that reduce manual workload, improve operational accuracy, and accelerate organizational efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Automation for Business Growth",
                desc: "AI driven systems that streamline operations and improve efficiency",
                link: "/solutions/automation"
              },
              {
                title: "AI Education",
                desc: "Institutional training and AI integration for workforce transformation",
                link: "/solutions/ai-education"
              },
              {
                title: "Security Services",
                desc: "Enterprise cybersecurity and risk management infrastructure",
                link: "/solutions/security"
              }
            ].map((service, i) => (
              <Link key={i} to={service.link} className="group block">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="h-full bg-white border border-slate-200 hover:border-brand-blue/30 rounded-2xl p-8 transition-all hover:shadow-lg hover:shadow-brand-blue/5"
                >
                  <h3 className="text-xl font-display font-semibold text-slate-800 mb-4">{service.title}</h3>
                  <p className="text-slate-600 mb-6">{service.desc}</p>
                  <div className="flex items-center gap-2 text-sm font-medium text-brand-blue">
                    Explore Solution <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-slate-900">
                Why Choose Us
              </h2>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-brand-blue text-white font-medium hover:bg-brand-blue-hover transition-colors shadow-md shadow-brand-blue/20 mt-4"
              >
                About Our Company <ArrowRight className="w-4 h-4"/>
              </Link>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  num: "01",
                  title: "Strategic Impact",
                  desc: "We design AI-driven systems and automation frameworks that directly streamline operations, reduce manual workload, and enable measurable organizational performance. Every solution is structured to deliver tangible business outcomes at scale."
                },
                {
                  num: "02",
                  title: "Trust and Governance",
                  desc: "Our enterprise-grade approach ensures security, compliance, and operational integrity. We operate with transparency and accountability, creating systems and processes that institutions can rely on for long-term resilience and growth."
                },
                {
                  num: "03",
                  title: "Scalable Excellence",
                  desc: "We combine advanced technology with proven operational frameworks to implement solutions that are precise, reliable, and adaptable. Our focus is on delivering infrastructure that supports sustainable growth, efficiency, and institutional readiness."
                }
              ].map((val, i) => (
                <div key={i} className="flex gap-6">
                  <div className="text-xl font-display font-bold text-brand-cyan/50">{val.num}</div>
                  <div>
                    <h3 className="text-xl font-display font-semibold text-slate-800 mb-2">{val.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
