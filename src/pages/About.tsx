import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Linkedin } from "lucide-react";
import { useData } from "../context/DataContext";


export default function About() {
  const { team, partners, loading } = useData();
  return (
    <div className="flex flex-col pt-32 pb-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex-1"
          >
            <div className="text-brand-cyan font-medium mb-4 uppercase tracking-wide text-sm">About Macklemore Solutions</div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
              Smart Systems. Secure Infrastructure. Measurable Impact.
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              At Macklemore Solutions, we design and implement AI-driven automation and security infrastructure that streamlines operations, strengthens governance, and accelerates institutional growth. Our solutions are engineered for enterprises and institutions, delivering scalable performance, measurable outcomes, and operational resilience across complex organizational environments.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex-1 w-full relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
              <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop" alt="Corporate office team working on infrastructure" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-brand-blue/10 mix-blend-multiply pointer-events-none"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-cyan/20 rounded-full blur-2xl pointer-events-none"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-blue/20 rounded-full blur-2xl pointer-events-none"></div>
          </motion.div>
        </div>

        {/* Team Section */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-brand-blue font-semibold tracking-wider uppercase text-sm mb-4 block">Our Team</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-slate-900">
                Meet the Experts Behind Macklemore Solutions
              </h2>
              <p className="text-slate-600 text-lg">
                Our leadership team brings together decades of experience in technology, strategy, and enterprise operations to deliver scalable solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.length > 0 ? (
                team.map((member, i) => (
                  <motion.div
                    key={member.id || i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="group flex flex-col bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-brand-blue/30 transition-all duration-300"
                  >
                    {/* Image Container */}
                    <div className="w-full aspect-square bg-slate-200 relative overflow-hidden">
                      {member.image_url ? (
                        <img
                          src={member.image_url}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center bg-slate-100 text-slate-400 group-hover:bg-slate-200 transition-colors">
                          <svg className="w-12 h-12 mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                          </svg>
                          <span className="text-xs font-medium uppercase tracking-wider"></span>
                        </div>
                      )}
                      {/* Subtle gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1 relative bg-white">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-display font-bold text-slate-900 group-hover:text-brand-blue transition-colors">
                          {member.name}
                        </h3>
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target={member.linkedin !== "#" ? "_blank" : "_self"}
                            rel={member.linkedin !== "#" ? "noopener noreferrer" : ""}
                            className="text-slate-400 hover:text-[#0077b5] transition-colors"
                            aria-label={`${member.name}'s LinkedIn profile`}
                          >
                            <Linkedin className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                      <p className="text-brand-blue font-medium text-sm leading-snug">
                        {member.role}
                      </p>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full text-center text-slate-500 py-12">
                  {loading ? 'Loading team members...' : 'No team members found.'}
                </div>
              )}
            </div>
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">Our Expertise Spans</h2>
            <ul className="space-y-4 mb-8">
              {[
                "Automation Infrastructure",
                "AI Education & Enablement",
                "Security & Risk Management"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-600 leading-relaxed">
              We are not just service providers—we design and implement intelligent operational systems that drive measurable performance. From AI-driven automation frameworks and enterprise-grade security infrastructure, to institutional AI training and integration, we help organizations streamline operations, strengthen governance, and scale with precision across complex operational environments.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-8">Why choose us</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-display font-semibold text-slate-900 mb-2">Strategic Delivery</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We design and implement AI-driven automation and operational systems that streamline complex workflows, strengthen governance, and deliver measurable performance across enterprise environments. Our solutions are structured to optimize efficiency, reduce risk, and support scalable growth.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display font-semibold text-slate-900 mb-2">Proven Impact</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  With a track record of enabling institutional transformation, our team combines technical expertise with operational strategy to deliver quantifiable outcomes. We help organizations integrate intelligent systems that drive performance, compliance, and long-term resilience.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display font-semibold text-slate-900 mb-2">Continuous Operational Assurance</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Our enterprise-grade infrastructure includes monitoring, security, and risk management frameworks, ensuring systems remain reliable, secure, and optimized. Organizations can operate with confidence, knowing their operations are supported at scale.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="text-center">
          <Link
            to="/deal-room"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-brand-blue text-white font-medium hover:bg-brand-blue-hover shadow-md shadow-brand-blue/20 transition-all text-lg"
          >
            Book a Strategy Session <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
