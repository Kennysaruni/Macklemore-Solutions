import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Zap, Settings, BookOpen, ShieldCheck } from "lucide-react";

export default function DealRoom() {
  const packages = [
    {
      id: "01",
      title: "HR Automation Implementation Package",
      icon: <Zap className="w-6 h-6 text-brand-cyan" />,
      description: "Designed for organizations experiencing inefficiency and inconsistency in core HR operations including hiring, onboarding, records management, and payroll processing.",
      includes: [
        "End-to-end audit of current HR workflows and identification of automation opportunities",
        "Design and implementation of custom HR automation systems",
        "Integration with existing HRIS, payroll, and communication tools",
        "Staff enablement and governance documentation",
        "30-day post-deployment performance review"
      ],
      idealFor: "Mid-size to enterprise organizations with 50+ employees experiencing HR process bottlenecks."
    },
    {
      id: "02",
      title: "Enterprise Operations Optimization Package",
      icon: <Settings className="w-6 h-6 text-brand-blue" />,
      description: "Designed for organizations seeking to eliminate operational inefficiency across multiple departments through a coordinated, phased automation strategy.",
      includes: [
        "Cross-departmental operations audit and process mapping",
        "Prioritized automation roadmap aligned to business impact",
        "Custom automation development and systems integration",
        "Centralized operations dashboard for real-time visibility",
        "Phased implementation with milestone-based reviews",
        "Ongoing performance monitoring and optimization support"
      ],
      idealFor: "Enterprise clients managing complex multi-department operations with significant manual workflow overhead."
    },
    {
      id: "03",
      title: "Institutional AI Integration Package",
      icon: <BookOpen className="w-6 h-6 text-purple-500" />,
      description: "Designed for enterprises and academic institutions seeking to embed AI into their operations through a structured, governed, and measurable implementation program.",
      includes: [
        "Organizational AI readiness assessment and skills gap analysis",
        "Custom AI education program design and delivery",
        "Department-specific implementation playbooks and pilot workflows",
        "Leadership advisory on AI governance, risk, and strategy",
        "AI champion identification and advanced training",
        "Phased adoption roadmap and post-program performance review"
      ],
      idealFor: "Organizations with 100+ staff that have made a strategic commitment to AI adoption and require structured implementation support."
    },
    {
      id: "04",
      title: "Security Hardening Package",
      icon: <ShieldCheck className="w-6 h-6 text-indigo-500" />,
      description: "Designed for organizations seeking to move from a reactive to a proactive security posture through structured infrastructure hardening, automated monitoring, and compliance readiness.",
      includes: [
        "Comprehensive security audit and risk assessment",
        "Infrastructure hardening across network, endpoint, and cloud environments",
        "Deployment of automated threat detection and incident response workflows",
        "Staff security awareness training program",
        "Compliance gap analysis and governance framework implementation",
        "Ongoing managed security support and quarterly reporting"
      ],
      idealFor: "Organizations that have identified security gaps, experienced incidents, or require structured compliance readiness for upcoming audits."
    }
  ];

  return (
    <div className="flex flex-col pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Structured Engagement Packages for Enterprise Clients.
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            The Macklemore Solutions Deal Room is not a promotions page. It is a structured engagement framework designed for organizations that are ready to move from exploration to implementation. Each package below represents a defined scope of work, a clear methodology, and a commitment to measurable outcomes, built for institutional clients who value precision over promises.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-50 border border-slate-200 rounded-3xl p-8 flex flex-col h-full shadow-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm">
                  {pkg.icon}
                </div>
                <div>
                  <div className="text-sm font-medium text-brand-cyan mb-1">Engagement Package {pkg.id}</div>
                  <h2 className="text-xl font-display font-bold text-slate-900 leading-tight">{pkg.title}</h2>
                </div>
              </div>
              
              <p className="text-slate-600 mb-8 flex-grow">{pkg.description}</p>
              
              <div className="mb-8">
                <h3 className="text-sm font-display font-semibold text-slate-900 uppercase tracking-wider mb-4">What is included:</h3>
                <ul className="space-y-3">
                  {pkg.includes.map((item, j) => (
                    <li key={j} className="flex gap-3 text-slate-700 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-5 mt-auto shadow-sm">
                <h3 className="text-sm font-display font-semibold text-slate-900 mb-2">Ideal for:</h3>
                <p className="text-slate-600 text-sm">{pkg.idealFor}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">How to Engage</h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto text-lg">
            Each package begins with a scoping conversation to confirm fit and define the engagement parameters. Our team does not use a one-size-fits-all approach. Once the scope is agreed, a formal proposal and timeline are issued within 3 business days.
          </p>
          <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-brand-blue text-white font-medium hover:bg-brand-blue-hover shadow-md shadow-brand-blue/20 transition-all text-lg">
            Start the Conversation <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
