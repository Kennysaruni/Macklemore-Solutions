import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Activity, Shield, Zap, CheckCircle2, BarChart3 } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-navy-800 via-navy-900 to-navy-900" />
        
        {/* Abstract Data Viz Background */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-6 border border-cyan-500/20">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                Powering Operational Excellence
              </span>
              <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-white mb-8 leading-[1.1]">
                Designing Intelligent Systems That Power <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Institutional Growth</span>.
              </h1>
              <p className="text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
                We build AI-driven automation infrastructure that streamlines operations, strengthens decision-making, and enables organizations to scale with precision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/deal-room"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-navy-900 font-medium hover:bg-slate-100 transition-colors"
                >
                  Book a Strategy Session <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 text-white font-medium hover:bg-white/10 border border-white/10 transition-colors"
                >
                  View Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Block */}
      <section className="py-24 bg-navy-800 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Engineered for Complex Operational Environments
              </h2>
              <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                Modern organizations lose thousands of productive hours to fragmented workflows. Manual processes are liabilities that slow down approval cycles, create inconsistent reporting, and stall growth.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed">
                Our systems are architected to integrate across departments, eliminate fragmented workflows, and create unified, data-driven operations across enterprise functions.
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl rounded-full" />
              <div className="relative bg-navy-900 border border-white/10 rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-8 pb-8 border-b border-white/10">
                  <div>
                    <div className="text-sm font-medium text-red-400 mb-1">Before</div>
                    <div className="text-lg text-white font-medium">Fragmented Workflows</div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-12 h-2 bg-red-500/20 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-red-500/40" />
                    </div>
                    <div className="w-12 h-2 bg-red-500/20 rounded-full" />
                    <div className="w-12 h-2 bg-red-500/20 rounded-full" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-cyan-400 mb-1">After</div>
                    <div className="text-lg text-white font-medium">Unified AI Operations</div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-12 h-2 bg-cyan-500/20 rounded-full overflow-hidden">
                      <motion.div 
                        className="w-full h-full bg-cyan-400"
                        initial={{ x: "-100%" }}
                        whileInView={{ x: "0%" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </div>
                    <div className="w-12 h-2 bg-cyan-500/20 rounded-full overflow-hidden">
                      <motion.div 
                        className="w-full h-full bg-cyan-400"
                        initial={{ x: "-100%" }}
                        whileInView={{ x: "0%" }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                      />
                    </div>
                    <div className="w-12 h-2 bg-cyan-500/20 rounded-full overflow-hidden">
                      <motion.div 
                        className="w-full h-full bg-cyan-400"
                        initial={{ x: "-100%" }}
                        whileInView={{ x: "0%" }}
                        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Pillars */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Delivering Measurable Performance at Scale
            </h2>
            <p className="text-slate-400 text-lg">
              We implement automation, security, and AI frameworks that reduce manual workload, improve operational accuracy, and accelerate organizational efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-6 h-6 text-cyan-400" />,
                title: "Automation for Business Growth",
                desc: "AI-driven systems that streamline operations and improve efficiency across HR, Finance, CRM, and E-commerce.",
                link: "/solutions/automation"
              },
              {
                icon: <Activity className="w-6 h-6 text-blue-400" />,
                title: "AI Education & Enablement",
                desc: "Institutional training and AI integration for workforce transformation, building internal capability and confidence.",
                link: "/solutions/ai-education"
              },
              {
                icon: <Shield className="w-6 h-6 text-indigo-400" />,
                title: "Security Services",
                desc: "Enterprise cybersecurity and risk management infrastructure to protect operations and maintain compliance.",
                link: "/solutions/security"
              }
            ].map((service, i) => (
              <Link key={i} to={service.link} className="group block">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="h-full bg-navy-800 border border-white/5 hover:border-white/20 rounded-2xl p-8 transition-all hover:bg-white/[0.02]"
                >
                  <div className="w-12 h-12 rounded-xl bg-navy-900 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-display font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-slate-400 mb-6">{service.desc}</p>
                  <div className="flex items-center gap-2 text-sm font-medium text-cyan-400 group-hover:text-cyan-300">
                    Explore Solution <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Proof of Performance */}
      <section className="py-24 bg-navy-800 border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            Performance Measured. Results Verified.
          </h2>
        </div>
        
        <div className="flex gap-6 px-6 pb-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar">
          {[
            {
              title: "Business Process Automation",
              region: "West Africa",
              stat: "40%",
              statDesc: "reduction in processing time",
              desc: "Unified core operational workflows into a single, governed system."
            },
            {
              title: "Security Automation",
              region: "Canada",
              stat: "70%",
              statDesc: "reduction in security incidents",
              desc: "Implemented structured security automation and governance program."
            },
            {
              title: "AI Education",
              region: "West Africa",
              stat: "60 Days",
              statDesc: "to operational AI workflows",
              desc: "Structured AI education and implementation program across 4 departments."
            }
          ].map((study, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="min-w-[300px] md:min-w-[400px] snap-center bg-navy-900 border border-white/10 rounded-2xl p-8"
            >
              <div className="text-sm font-medium text-slate-500 mb-4">{study.region}</div>
              <h3 className="text-xl font-display font-semibold text-white mb-6">{study.title}</h3>
              <div className="mb-6">
                <div className="text-4xl font-display font-bold text-cyan-400 mb-1">{study.stat}</div>
                <div className="text-sm text-slate-400">{study.statDesc}</div>
              </div>
              <p className="text-slate-400 text-sm mb-6">{study.desc}</p>
              <Link to="/case-studies" className="text-sm font-medium text-white hover:text-cyan-400 transition-colors flex items-center gap-1">
                Read Case Study <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Why Choose Us
              </h2>
              <p className="text-slate-400 text-lg mb-8">
                We combine advanced technology with proven operational frameworks to implement solutions that are precise, reliable, and adaptable.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/5 text-white font-medium hover:bg-white/10 border border-white/10 transition-colors"
              >
                About Our Company
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
                  <div className="text-xl font-display font-bold text-cyan-500/50">{val.num}</div>
                  <div>
                    <h3 className="text-xl font-display font-semibold text-white mb-2">{val.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{val.desc}</p>
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
