import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Handshake, Network, BookOpen, ShieldCheck } from "lucide-react";

export default function Partners() {
  return (
    <div className="flex flex-col pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
            Partner With Macklemore Solutions
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed font-medium">
            Collaborate to Deliver AI, Automation, and Security Infrastructure at Scale
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">Why Partner With Us</h2>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                Macklemore Solutions is an AI and Automation Infrastructure Company enabling organizations to streamline operations, strengthen security, and scale with precision across global environments.
              </p>
              <p>
                Our partners play a strategic role in delivering these capabilities across industries, supporting the design, implementation, and expansion of intelligent operational systems.
              </p>
              <p>
                Whether you are a consulting firm, technology provider, training institution, or enterprise partner, collaboration with us provides access to structured solutions in automation infrastructure, AI enablement, and security frameworks.
              </p>
              <p className="text-brand-blue font-semibold text-lg">
                Together, we deliver measurable transformation, operational efficiency, and long-term institutional value across markets.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-8">What Makes Us Different</h2>
            <ul className="space-y-6">
              {[
                "Global-ready AI, automation, and security solutions",
                "Flexible collaboration models aligned to partner capabilities",
                "Operational support and infrastructure for solution delivery",
                "Shared value creation through measurable outcomes"
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-brand-cyan/20 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-brand-cyan rounded-full" />
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
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
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-12 text-center">Structured Partnership Models</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Handshake className="w-6 h-6 text-brand-cyan" />,
                title: "Service Partners",
                desc: "Consultancies, integrators, and software vendors that collaborate with us in designing and implementing AI-driven automation and security systems across enterprise environments."
              },
              {
                icon: <Network className="w-6 h-6 text-brand-blue" />,
                title: "Referral Partners",
                desc: "Organizations and professionals who identify opportunities and connect institutions to our AI, automation, and security capabilities, supporting access to high-impact transformation initiatives."
              },
              {
                icon: <BookOpen className="w-6 h-6 text-purple-500" />,
                title: "Universities / Training Institutions",
                desc: "Educational institutions and workforce organizations that collaborate with us to deliver AI training, develop talent pipelines, and support large-scale digital transformation initiatives."
              }
            ].map((model, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl p-8 hover:border-brand-blue/30 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 shadow-inner">
                  {model.icon}
                </div>
                <h3 className="text-xl font-display font-semibold text-slate-900 mb-3">{model.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{model.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="text-center bg-gradient-to-br from-slate-50 to-white shadow-lg border border-slate-200 rounded-3xl p-12">
          <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">Ready to Partner?</h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Join our network of partners delivering enterprise-grade AI, automation, and security infrastructure.
          </p>
          <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-brand-blue text-white font-medium hover:bg-brand-blue-hover shadow-md shadow-brand-blue/20 transition-all text-lg">
            Contact Partnership Team <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
