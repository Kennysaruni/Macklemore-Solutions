import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Users, Building2, Workflow, ShoppingCart, Cpu, Smartphone, Shield, Target } from "lucide-react";

export default function Automation() {
  return (
    <div className="flex flex-col pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-16"
        >
          <div className="text-brand-cyan font-medium mb-4 uppercase tracking-wide text-sm">Automation for Business Growth</div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
            We Design Intelligent Systems That Do the Heavy Lifting.
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Macklemore Solutions helps enterprise and institutional clients eliminate manual bottlenecks, reduce operational overhead, and scale confidently through AI-powered automation systems built for real business environments.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">Executive Overview</h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Modern organizations lose thousands of productive hours each year to manual processes that can be automated. At Macklemore Solutions, we design and implement custom automation infrastructure tailored to your workflows, not generic plug-and-play tools that create new problems. Our systems integrate directly into your existing operations, delivering measurable efficiency gains from the first month of deployment.
            </p>

            <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">The Business Problem We Solve</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              As your organization grows, manual processes that once worked become significant liabilities. Approval cycles slow down. Reporting becomes inconsistent. Teams spend more time managing data than acting on it. Errors compound. Costs rise. Growth stalls.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              We solve this by replacing fragile manual workflows with intelligent, automated systems that operate reliably at scale, giving your leadership team the visibility and control they need to drive performance.
            </p>

            <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">Industries We Serve</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                "Logistics and Distribution",
                "Financial Services and Fintech",
                "Healthcare and Medical Administration",
                "Retail and E-Commerce",
                "Education and Academic Institutions",
                "Professional Services and Consulting"
              ].map((item, i) => (
                <motion.li 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  key={i} 
                  className="flex items-start gap-3 text-slate-700 font-medium text-sm"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-2 shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-8"
          >
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">Our Approach</h2>
              <ul className="space-y-4">
                {[
                  "Operational audit to identify the highest-impact automation opportunities",
                  "System design aligned with your existing tools and infrastructure",
                  "Phased implementation to minimize disruption to ongoing operations",
                  "Staff enablement and documentation for long-term adoption",
                  "Ongoing monitoring, optimization, and performance reporting"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">Measurable Outcomes</h2>
              <ul className="space-y-4">
                {[
                  "Reduction in manual processing time across key workflows",
                  "Improved reporting accuracy and real-time operational visibility",
                  "Decreased administrative overhead and staff burnout",
                  "Faster decision cycles driven by automated data aggregation",
                  "Scalable systems that grow with your organization without proportional cost increases"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <Target className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-12 text-center">Our Services</h2>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-6 h-6 text-brand-cyan" />,
                title: "HR Automation Systems",
                desc: "Streamline hiring workflows, onboarding processes, employee record management, and payroll coordination through intelligent automation that reduces administrative burden and improves team performance.",
                image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&q=75"
              },
              {
                icon: <Building2 className="w-6 h-6 text-brand-blue" />,
                title: "Accounting and Finance Workflow Automation",
                desc: "Automate invoice processing, expense tracking, financial reporting, and approval cycles to increase accuracy, reduce processing time, and give your finance team real-time visibility into business performance.",
                image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=75"
              },
              {
                icon: <Workflow className="w-6 h-6 text-indigo-500" />,
                title: "CRM and Sales Automation",
                desc: "Build automated pipelines that capture, qualify, and nurture leads while your sales team focuses on closing. We integrate CRM workflows that keep your customer data clean, current, and actionable.",
                image: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=600&q=75"
              },
              {
                icon: <ShoppingCart className="w-6 h-6 text-emerald-500" />,
                title: "E-Commerce Process Automation",
                desc: "From order management and inventory tracking to customer communications and fulfilment workflows, we automate the backend operations that keep your e-commerce business running at scale.",
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=75"
              },
              {
                icon: <Cpu className="w-6 h-6 text-purple-500" />,
                title: "Custom AI-Powered Operational Systems",
                desc: "For enterprises with complex, non-standard workflows, we build bespoke AI-powered systems that learn from your data, surface actionable insights, and execute repetitive tasks with precision and speed.",
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=75"
              },
              {
                icon: <Smartphone className="w-6 h-6 text-pink-500" />,
                title: "Custom Web and Mobile Platforms Built for Automation",
                desc: "We develop web and mobile applications with automation at their core; platforms that don't just display data, but actively process it, trigger workflows, and reduce human intervention at every stage.",
                image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=75"
              }
            ].map((service, i) => (
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} key={i} whileHover={{ y: -8 }}>
                <div className="bg-white border border-slate-200 rounded-3xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col group h-full">
                <div className="w-full h-48 relative overflow-hidden bg-slate-100">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-brand-blue/5 pointer-events-none mix-blend-multiply"></div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  {/* Floating Icon Layout */}
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-6 relative z-10 -mt-14">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-display font-semibold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed flex-1">{service.desc}</p>
                </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div className="text-center">
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto text-lg">
            Ready to eliminate the manual work that is slowing your organization down? Schedule a no obligation strategy session with our automation team and we will identify exactly where intelligent systems can deliver the greatest return for your business.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
            <Link
              to="/deal-room"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-brand-blue text-white font-medium hover:bg-brand-blue-hover shadow-md shadow-brand-blue/20 transition-all text-lg"
            >
              Book a Strategy Session <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
