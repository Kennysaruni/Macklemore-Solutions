import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Zap, Users, Building2, ShoppingCart, Cpu, Smartphone } from "lucide-react";

export default function Automation() {
  return (
    <div className="flex flex-col pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-16"
        >
          <div className="text-cyan-400 font-medium mb-4 uppercase tracking-wider text-sm">Services Page — Automation for Business Growth</div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            We Design Intelligent Systems That Do the Heavy Lifting.
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            Macklemore Solutions helps enterprise and institutional clients eliminate manual bottlenecks, reduce operational overhead, and scale confidently through AI-powered automation systems built for real business environments.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-display font-bold text-white mb-6">Executive Overview</h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              Modern organizations lose thousands of productive hours each year to manual processes that can be automated. At Macklemore Solutions, we design and implement custom automation infrastructure tailored to your workflows, not generic plug-and-play tools that create new problems. Our systems integrate directly into your existing operations, delivering measurable efficiency gains from the first month of deployment.
            </p>
            
            <h2 className="text-2xl font-display font-bold text-white mb-6">The Business Problem We Solve</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              As your organization grows, manual processes that once worked become significant liabilities. Approval cycles slow down. Reporting becomes inconsistent. Teams spend more time managing data than acting on it. Errors compound. Costs rise. Growth stalls.
            </p>
            <p className="text-slate-400 leading-relaxed">
              We solve this by replacing fragile manual workflows with intelligent, automated systems that operate reliably at scale, giving your leadership team the visibility and control they need to drive performance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-navy-800 border border-white/5 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-display font-bold text-white mb-8">Our Approach</h2>
            <ul className="space-y-4 mb-12">
              {[
                "Operational audit to identify the highest-impact automation opportunities",
                "System design aligned with your existing tools and infrastructure",
                "Phased implementation to minimize disruption to ongoing operations",
                "Staff enablement and documentation for long-term adoption",
                "Ongoing monitoring, optimization, and performance reporting"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-display font-bold text-white mb-8">Measurable Outcomes</h2>
            <ul className="space-y-4">
              {[
                "Reduction in manual processing time across key workflows",
                "Improved reporting accuracy and real-time operational visibility",
                "Decreased administrative overhead and staff burnout",
                "Faster decision cycles driven by automated data aggregation",
                "Scalable systems that grow with your organization without proportional cost increases"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                  <span>{item}</span>
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
          <h2 className="text-3xl font-display font-bold text-white mb-12 text-center">Our Services</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-6 h-6 text-cyan-400" />,
                title: "HR Automation Systems",
                desc: "Streamline hiring workflows, onboarding processes, employee record management, and payroll coordination through intelligent automation that reduces administrative burden and improves team performance."
              },
              {
                icon: <Building2 className="w-6 h-6 text-blue-400" />,
                title: "Accounting and Finance Workflow Automation",
                desc: "Automate invoice processing, expense tracking, financial reporting, and approval cycles to increase accuracy, reduce processing time, and give your finance team real-time visibility into business performance."
              },
              {
                icon: <Zap className="w-6 h-6 text-indigo-400" />,
                title: "CRM and Sales Automation",
                desc: "Build automated pipelines that capture, qualify, and nurture leads while your sales team focuses on closing. We integrate CRM workflows that keep your customer data clean, current, and actionable."
              },
              {
                icon: <ShoppingCart className="w-6 h-6 text-purple-400" />,
                title: "E-Commerce Process Automation",
                desc: "From order management and inventory tracking to customer communications and fulfilment workflows, we automate the backend operations that keep your e-commerce business running at scale."
              },
              {
                icon: <Cpu className="w-6 h-6 text-pink-400" />,
                title: "Custom AI-Powered Operational Systems",
                desc: "For enterprises with complex, non-standard workflows, we build bespoke AI-powered systems that learn from your data, surface actionable insights, and execute repetitive tasks with precision and speed."
              },
              {
                icon: <Smartphone className="w-6 h-6 text-teal-400" />,
                title: "Custom Web and Mobile Platforms Built for Automation",
                desc: "We develop web and mobile applications with automation at their core; platforms that don't just display data, but actively process it, trigger workflows, and reduce human intervention at every stage."
              }
            ].map((service, i) => (
              <div key={i} className="bg-navy-800 border border-white/5 rounded-2xl p-8 hover:border-white/20 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-navy-900 border border-white/10 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-display font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="text-center bg-gradient-to-br from-navy-800 to-navy-900 border border-white/10 rounded-3xl p-12">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Ready to eliminate manual work?</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Schedule a no-obligation strategy session with our automation team and we will identify exactly where intelligent systems can deliver the greatest return for your business.
          </p>
          <Link to="/deal-room" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-navy-900 font-medium hover:bg-slate-100 transition-colors">
            Book a Strategy Session <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
