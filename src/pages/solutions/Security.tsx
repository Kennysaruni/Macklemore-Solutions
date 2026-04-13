import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Server, FileCheck, Lock, Activity } from "lucide-react";

export default function Security() {
  return (
    <div className="flex flex-col pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-16"
        >
          <div className="text-brand-cyan font-medium mb-4 uppercase tracking-wider text-sm">Services Page — Security Services</div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Protect What You Have Built. Govern What Comes Next.
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Macklemore Solutions delivers enterprise-grade security infrastructure that protects your operations, maintains compliance, and automates your risk management, so your business can scale without exposure.
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
              Cybersecurity is no longer a technical concern reserved for IT teams. It is a board-level business risk. A single breach can shut down operations, compromise client trust, and trigger regulatory penalties that take years to recover from. At Macklemore Solutions, we build security frameworks that match the sophistication of modern threats, combining managed protection, automated monitoring, and compliance governance into a single, coherent strategy for your organization.
            </p>
            
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">The Business Problem We Solve</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Most organizations operate with fragmented security postures: reactive tools, inconsistent policies, undertrained staff, and no clear visibility into their exposure. As your digital footprint grows, so does your attack surface. The question is no longer whether a threat will target your organization, but whether your defenses are ready when it does.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We bring structure, automation, and expertise to your security environment, transforming a reactive posture into a proactive, governable framework built for enterprise operations.
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
                "Security audit and risk assessment across your current environment",
                "Threat modelling aligned to your industry and operational profile",
                "Infrastructure hardening and policy implementation",
                "Deployment of automated monitoring and detection systems",
                "Staff security awareness training and governance enablement",
                "Ongoing managed support, reporting, and quarterly reviews"
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
                "Significant reduction in security incidents and breach exposure",
                "Faster detection and response times through automation",
                "Improved compliance readiness and audit performance",
                "Increased employee awareness and security-conscious culture",
                "Clear, real-time visibility into your organization's risk posture"
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
                icon: <Shield className="w-6 h-6 text-brand-cyan" />,
                title: "Managed IT Security",
                desc: "We provide ongoing management of your security infrastructure, monitoring threats, responding to incidents, and keeping your systems hardened against evolving attack vectors, without the overhead of building an in-house security operations team."
              },
              {
                icon: <Server className="w-6 h-6 text-brand-blue" />,
                title: "Infrastructure and Cloud Protection",
                desc: "From on-premise server environments to multi-cloud deployments, we secure your infrastructure at every layer - network, application, endpoint, and data with policies and controls designed for enterprise-level resilience."
              },
              {
                icon: <FileCheck className="w-6 h-6 text-indigo-500" />,
                title: "Compliance and Governance Systems",
                desc: "We help your organization achieve and maintain compliance with relevant regulatory frameworks including GDPR, NDPR, SOC 2, ISO 27001, and industry-specific standards, building governance structures that satisfy auditors and protect your business."
              },
              {
                icon: <Activity className="w-6 h-6 text-purple-500" />,
                title: "Security Automation Frameworks",
                desc: "Manual security processes introduce delays and human error at the worst possible moments. We automate threat detection, incident response workflows, access control management, and compliance reporting so your security posture remains strong without depending on constant manual intervention."
              },
              {
                icon: <Lock className="w-6 h-6 text-pink-500" />,
                title: "Enterprise-Level Risk Mitigation",
                desc: "We conduct structured risk assessments to identify your most critical vulnerabilities, prioritize remediation, and build mitigation strategies that protect your highest-value assets - people, data, systems, and reputation."
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
          <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">Request a Security Assessment</h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto text-lg">
            Your organization's security posture is only as strong as its weakest point. Let our team conduct a comprehensive security assessment and show you exactly where you are exposed, and how we will fix it.
          </p>
          <Link to="/deal-room" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-brand-blue text-white font-medium hover:bg-brand-blue-hover shadow-md shadow-brand-blue/20 transition-all text-lg">
            Request a Security Assessment <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
