import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Handshake, Network, BookOpen, ShieldCheck } from "lucide-react";

export default function Partners() {
  return (
    <div className="flex flex-col pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Partner With Macklemore Solutions
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            Collaborate to Deliver AI, Automation, and Security Infrastructure at Scale
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-display font-bold text-white mb-6">Why Partner With Us</h2>
            <div className="space-y-6 text-slate-400 leading-relaxed">
              <p>
                Macklemore Solutions is an AI and Automation Infrastructure Company enabling organizations to streamline operations, strengthen security, and scale with precision across global environments.
              </p>
              <p>
                Our partners play a strategic role in delivering these capabilities across industries, supporting the design, implementation, and expansion of intelligent operational systems.
              </p>
              <p>
                Whether you are a consulting firm, technology provider, training institution, or enterprise partner, collaboration with us provides access to structured solutions in automation infrastructure, AI enablement, and security frameworks.
              </p>
              <p className="text-white font-medium">
                Together, we deliver measurable transformation, operational efficiency, and long-term institutional value across markets.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-navy-800 border border-white/5 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-display font-bold text-white mb-8">Our Difference</h2>
            <ul className="space-y-6">
              {[
                "Global-ready AI, automation, and security solutions",
                "Flexible collaboration models aligned to partner capabilities",
                "Operational support and infrastructure for solution delivery",
                "Shared value creation through measurable outcomes"
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                  </div>
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-3xl font-display font-bold text-white mb-12 text-center">Structured Partnership Models</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Handshake className="w-6 h-6 text-cyan-400" />,
                title: "Referral Partners",
                desc: "Organizations and professionals who identify opportunities and connect institutions to our AI, automation, and security capabilities, supporting access to high-impact transformation initiatives."
              },
              {
                icon: <Network className="w-6 h-6 text-blue-400" />,
                title: "Channel & Reseller Partners",
                desc: "Firms that integrate our automation infrastructure, AI enablement, and security frameworks into their offerings, enabling them to deliver advanced operational systems to their clients."
              },
              {
                icon: <ShieldCheck className="w-6 h-6 text-indigo-400" />,
                title: "Delivery Partners",
                desc: "Specialized experts and organizations who collaborate with us in designing and implementing AI-driven automation and security systems across enterprise environments."
              },
              {
                icon: <BookOpen className="w-6 h-6 text-purple-400" />,
                title: "Institutional & Workforce Partners",
                desc: "Educational institutions and workforce organizations that collaborate with us to deliver AI training, develop talent pipelines, and support large-scale digital transformation initiatives."
              }
            ].map((model, i) => (
              <div key={i} className="bg-navy-800 border border-white/5 rounded-2xl p-8 hover:border-white/20 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-navy-900 border border-white/10 flex items-center justify-center mb-6">
                  {model.icon}
                </div>
                <h3 className="text-xl font-display font-semibold text-white mb-3">{model.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{model.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="text-center bg-gradient-to-br from-navy-800 to-navy-900 border border-white/10 rounded-3xl p-12">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Ready to Partner?</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Join our network of partners delivering enterprise-grade AI, automation, and security infrastructure.
          </p>
          <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-navy-900 font-medium hover:bg-slate-100 transition-colors">
            Contact Partnership Team <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
