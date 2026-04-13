import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-16"
        >
          <div className="text-cyan-400 font-medium mb-4">About Macklemore Solutions</div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Smart Systems. Secure Infrastructure. Measurable Impact.
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            At Macklemore Solutions, we design and implement AI-driven automation and security infrastructure that streamlines operations, strengthens governance, and accelerates institutional growth. Our solutions are engineered for enterprises and institutions, delivering scalable performance, measurable outcomes, and operational resilience across complex organizational environments.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-display font-bold text-white mb-6">Our Expertise Spans</h2>
            <ul className="space-y-4 mb-8">
              {[
                "Automation Infrastructure",
                "AI Education & Enablement",
                "Security & Risk Management"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-400 leading-relaxed">
              We are not just service providers—we design and implement intelligent operational systems that drive measurable performance. From AI-driven automation frameworks and enterprise-grade security infrastructure, to institutional AI training and integration, we help organizations streamline operations, strengthen governance, and scale with precision across complex operational environments.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-navy-800 border border-white/5 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-display font-bold text-white mb-8">Why choose us</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-display font-semibold text-white mb-2">Strategic Delivery</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  We design and implement AI-driven automation and operational systems that streamline complex workflows, strengthen governance, and deliver measurable performance across enterprise environments. Our solutions are structured to optimize efficiency, reduce risk, and support scalable growth.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-display font-semibold text-white mb-2">Proven Impact</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  With a track record of enabling institutional transformation, our team combines technical expertise with operational strategy to deliver quantifiable outcomes. We help organizations integrate intelligent systems that drive performance, compliance, and long-term resilience.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-display font-semibold text-white mb-2">Continuous Operational Assurance</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Our enterprise-grade infrastructure includes monitoring, security, and risk management frameworks, ensuring systems remain reliable, secure, and optimized. Organizations can operate with confidence, knowing their operations are supported at scale.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="text-center">
          <Link
            to="/deal-room"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-navy-900 font-medium hover:bg-slate-100 transition-colors"
          >
            Book a Strategy Session <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
