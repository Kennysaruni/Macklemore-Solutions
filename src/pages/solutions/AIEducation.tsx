import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, GraduationCap, Lightbulb, TrendingUp } from "lucide-react";

export default function AIEducation() {
  return (
    <div className="flex flex-col pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-16"
        >
          <div className="text-brand-cyan font-medium mb-4 uppercase tracking-wider text-sm">Services Page — AI Education</div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Equip Your Organization to Operate in an AI-First World.
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Macklemore Solutions designs and delivers structured AI education programs for enterprises and institutions, building the internal knowledge, capability, and confidence your teams need to adopt AI effectively and responsibly.
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
              Artificial intelligence is no longer an experimental technology. It is an operational reality reshaping how organizations hire, communicate, analyze, and compete. Yet most institutions are attempting to integrate AI without a structured foundation, leading to inconsistent adoption, wasted investment, and growing risk exposure. Macklemore Solutions bridges this gap with tailored AI education programs designed specifically for enterprise and institutional environments, delivered by practitioners with real-world implementation experience.
            </p>
            
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">The Business Problem We Solve</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The majority of AI implementation failures are not technology failures, they are knowledge failures. Teams do not understand the tools they are expected to use. Leadership cannot evaluate AI investments without a framework. Compliance teams cannot govern what they do not understand. The result is an organization spending on AI while capturing very little of its potential.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We solve this by building structured, practical AI knowledge across your organization, from leadership orientation to department-specific implementation playbooks, ensuring that your investment in AI translates directly into operational results.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-sm"
          >
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-8">Our Approach</h2>
            <ul className="space-y-4 mb-12">
              {[
                "Organizational readiness assessment and skills gap analysis",
                "Custom curriculum design aligned to your industry and operational context",
                "Cohort-based or self-paced delivery across your teams",
                "Department-specific implementation playbooks and use case development",
                "Leadership briefings on AI governance, risk, and strategic opportunity",
                "Post-program support and adoption tracking"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-display font-bold text-slate-900 mb-8">Measurable Outcomes</h2>
            <ul className="space-y-4">
              {[
                "Increased AI adoption across departments with measurable productivity gains",
                "Reduction in implementation errors and misapplied AI investment",
                "Stronger governance and compliance posture around AI usage",
                "Identification and development of internal AI champions",
                "A clear, phased AI adoption roadmap customized to your institution"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 shrink-0" />
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
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-12 text-center">Our Services</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <BookOpen className="w-6 h-6 text-brand-cyan" />,
                title: "AI Curriculum Development for Institutions",
                desc: "We design structured, institution-specific AI curricula that align with your organizational goals, existing skill levels, and compliance requirements. Every program is built for measurable learning outcomes, not general awareness."
              },
              {
                icon: <GraduationCap className="w-6 h-6 text-brand-blue" />,
                title: "AI Integration into Learning Environments",
                desc: "For academic institutions and corporate training departments, we integrate AI tools directly into existing learning management systems and workflows, creating adaptive, data-informed learning environments that improve outcomes at scale."
              },
              {
                icon: <Lightbulb className="w-6 h-6 text-indigo-500" />,
                title: "Institutional Digital Transformation Advisory",
                desc: "We advise institutional leadership on AI strategy, technology selection, governance frameworks, and change management, providing the structured guidance needed to make sound decisions and execute transformation with confidence."
              },
              {
                icon: <TrendingUp className="w-6 h-6 text-purple-500" />,
                title: "Certification and Structured AI Training Programs",
                desc: "We deliver structured training programs across key AI domains including machine learning fundamentals, AI governance and ethics, automation strategy, and practical tool implementation, with certification pathways designed for professional credibility."
              }
            ].map((service, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-display font-semibold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="text-center">
          <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">Assess Your AI Readiness</h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto text-lg">
            AI capability is becoming a fundamental competitive requirement. Let us assess your organization's current AI readiness and design a structured education program that delivers real adoption, not just awareness.
          </p>
          <Link to="/deal-room" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-brand-blue text-white font-medium hover:bg-brand-blue-hover shadow-md shadow-brand-blue/20 transition-all text-lg">
            Schedule an AI Readiness Assessment <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
