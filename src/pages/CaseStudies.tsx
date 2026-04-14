import { motion } from "motion/react";
import { ArrowRight, BarChart3, ShieldCheck, BookOpen, Calculator } from "lucide-react";

export default function CaseStudies() {
  const studies = [
    {
      id: "01",
      title: "Business Process Automation",
      image: "https://images.pexels.com/photos/19317897/pexels-photo-19317897.jpeg",
      industry: "Logistics and Distribution",
      region: "West Africa",
      size: "120 Employees",
      icon: <BarChart3 className="w-6 h-6 text-brand-cyan" />,
      situation: "The client was managing procurement, fleet coordination, and performance reporting through a combination of spreadsheets, email chains, and disconnected tools. Approval cycles were slow and inconsistent. Management had no real-time visibility into operational performance, and data discrepancies between departments were creating costly delays and poor decision-making.",
      solution: "Macklemore Solutions designed and implemented a custom automation framework that unified the client's core operational workflows into a single, governed system.",
      deliverables: [
        "End-to-end workflow automation for procurement approvals and multi-level reporting",
        "A centralized operations dashboard providing real-time data visibility across departments",
        "AI-driven performance tracking with automated alerts and threshold notifications",
        "Automated communication workflows to eliminate delays caused by manual follow-ups"
      ],
      impact: [
        "40% reduction in process turnaround time across core operational workflows",
        "60% improvement in reporting accuracy, eliminating data discrepancies between departments",
        "Management gained full real-time visibility into operational performance for the first time",
        "Administrative overhead reduced by 30%, freeing staff for higher-value responsibilities"
      ]
    },
    {
      id: "02",
      title: "Security Automation and Risk Management",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
      industry: "Professional Services",
      region: "Canada",
      size: "75 Employees",
      icon: <ShieldCheck className="w-6 h-6 text-indigo-500" />,
      situation: "The client lacked a structured cybersecurity posture. Security processes were manual, reactive, and inconsistently applied across the organization. Phishing incidents had occurred, staff had received no formal security training, and compliance readiness was poor. Leadership recognized the growing exposure but lacked an internal team to address it systematically.",
      solution: "Macklemore Solutions implemented a structured security automation and governance program.",
      deliverables: [
        "Automated threat detection and real-time alert systems across all endpoints",
        "Security awareness training delivered across the full organization",
        "Endpoint monitoring and access control management tools",
        "Automated compliance reporting and risk assessment workflows"
      ],
      impact: [
        "70% reduction in security incidents within the first quarter of deployment",
        "Compliance readiness significantly improved, enabling the client to pass an external audit",
        "Incident response time reduced from days to hours through automated escalation workflows",
        "All staff completed structured security awareness training with measurable knowledge improvement"
      ]
    },
    {
      id: "03",
      title: "AI Education and Workforce Enablement",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
      industry: "Corporate Services",
      region: "West Africa",
      size: "200 Staff",
      icon: <BookOpen className="w-6 h-6 text-purple-500" />,
      situation: "The organization had made the strategic decision to integrate AI into its operations but lacked the internal knowledge and structured guidance to do so effectively. Previous attempts to adopt AI tools had produced inconsistent results due to poor training and no governance framework. Leadership needed a structured approach to AI adoption that would produce measurable outcomes.",
      solution: "Macklemore Solutions designed and delivered a structured AI education and implementation program.",
      deliverables: [
        "Cohort-based AI training workshops delivered across four departments",
        "Department-specific AI implementation playbooks tailored to actual use cases",
        "Pilot automation workflows built and deployed during the program",
        "Leadership training on AI governance, risk management, and strategic decision-making"
      ],
      impact: [
        "3 AI-driven workflows deployed and operational within 60 days of program completion",
        "Measurable productivity improvements across 4 departments",
        "Internal AI champions identified, trained, and positioned to sustain adoption",
        "A phased AI adoption roadmap established, aligned to the organization's 3-year strategy"
      ]
    },
    {
      id: "04",
      title: "AI-Powered Tax Portal",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop",
      client: "Lowe Levinson Financial Solutions",
      industry: "Financial Services",
      icon: <Calculator className="w-6 h-6 text-brand-blue" />,
      situation: "The client required a secure, intelligent system to replace a manual and error-prone tax estimation and submission process. The existing workflow created significant processing delays, introduced compliance risks, and produced a poor experience for clients submitting complex tax documentation.",
      solution: "Macklemore Solutions developed a secure, web-based tax management portal integrated with an AI assistant. The system provided real-time calculation insights, automated validation checks, and a guided submission experience that reduced errors at every stage of the process.",
      impact: [
        "40% reduction in tax processing time from submission to completion",
        "Measurable improvement in submission accuracy and compliance readiness",
        "Significant increase in client satisfaction scores following deployment",
        "Reduced staff time spent on manual error correction and client support"
      ]
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
            Performance Measured. Results Verified.
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Enterprise clients do not invest based on promises. They invest based on proof. The case studies below demonstrate how Macklemore Solutions has delivered measurable operational transformation for organizations across multiple industries and geographies. Each engagement is defined by a clear problem, a structured solution, and outcomes we can stand behind.
          </p>
        </motion.div>

        <div className="space-y-24">
          {studies.map((study, i) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm overflow-hidden"
            >
              <div className="w-full h-56 md:h-80 mb-10 overflow-hidden rounded-2xl relative group">
                <img src={study.image} alt={study.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-brand-blue/5 pointer-events-none mix-blend-multiply"></div>
              </div>
              <div className="flex flex-col md:flex-row gap-12">
                <div className="md:w-1/3">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-6">
                    {study.icon}
                  </div>
                  <div className="text-sm font-medium text-brand-cyan mb-2">Case Study {study.id}</div>
                  <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">{study.title}</h2>

                  <div className="space-y-4 text-sm">
                    {study.client && (
                      <div>
                        <div className="text-slate-500 mb-1">Client</div>
                        <div className="text-slate-900 font-medium">{study.client}</div>
                      </div>
                    )}
                    <div>
                      <div className="text-slate-500 mb-1">Industry</div>
                      <div className="text-slate-900 font-medium">{study.industry}</div>
                    </div>
                    {study.region && (
                      <div>
                        <div className="text-slate-500 mb-1">Region</div>
                        <div className="text-slate-900 font-medium">{study.region}</div>
                      </div>
                    )}
                    {study.size && (
                      <div>
                        <div className="text-slate-500 mb-1">Organization Size</div>
                        <div className="text-slate-900 font-medium">{study.size}</div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="md:w-2/3 space-y-8">
                  <div>
                    <h3 className="text-lg font-display font-semibold text-slate-900 mb-3">Situation</h3>
                    <p className="text-slate-600 leading-relaxed">{study.situation}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-display font-semibold text-slate-900 mb-3">Solution</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">{study.solution}</p>
                    {study.deliverables && (
                      <ul className="space-y-2">
                        {study.deliverables.map((item, j) => (
                          <li key={j} className="flex gap-3 text-slate-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-2 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                    <h3 className="text-lg font-display font-semibold text-slate-900 mb-4">Impact</h3>
                    <ul className="space-y-3">
                      {study.impact.map((item, j) => (
                        <li key={j} className="flex gap-3 text-slate-700">
                          <ArrowRight className="w-5 h-5 text-brand-cyan shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">Additional Case Studies</h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto text-lg">
            We have delivered further engagements across fintech, healthcare administration, institutional education, and enterprise operations that are available upon request. If you would like a curated portfolio aligned to your industry or business challenge, contact our team directly.
          </p>
          <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-brand-blue text-white font-medium hover:bg-brand-blue-hover shadow-md shadow-brand-blue/20 transition-all text-lg">
            Request Our Full Portfolio <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
