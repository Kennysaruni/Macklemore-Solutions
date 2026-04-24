import { motion } from "motion/react";
import { BookOpen, CheckCircle2, ArrowRight, Settings, Users, LineChart, Truck, Workflow, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useData } from "../context/DataContext";

export default function Playbooks() {
  const { playbooks, loading } = useData();

  const whatYouFind = [
    "Clear problem definition and use cases",
    "Step-by-step implementation framework",
    "Recommended tools and system architecture",
    "Integration with existing workflows",
    "Key performance indicators and expected outcomes"
  ];

  const expectations = [
    "Improved operational efficiency",
    "Reduced manual processes",
    "Better system integration",
    "Increased visibility and control",
    "Scalable infrastructure for growth"
  ];

  const steps = [
    { title: "Identify", desc: "Identify a key operational challenge in your business." },
    { title: "Select", desc: "Select the relevant playbook for your specific needs." },
    { title: "Follow", desc: "Follow the structured implementation steps carefully." },
    { title: "Apply", desc: "Apply insights directly to your existing workflows." },
    { title: "Scale", desc: "Scale the solution across your organization for maximum impact." }
  ];

  return (
    <div className="flex flex-col bg-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[100px]"></div>
        </div>
        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-blue/10 text-brand-blue font-semibold text-sm mb-6 border border-brand-blue/20">
                <BookOpen className="w-4 h-4" /> AI Playbooks
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[64px] font-display font-bold text-slate-900 mb-6 leading-[1.1]">
                Structured Frameworks for Implementing AI and Automation
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
                Our AI Playbooks provide step-by-step frameworks designed to help organizations implement AI and automation systems across their operations. Each playbook is built around real business use cases and focuses on practical execution and measurable outcomes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* OVERVIEW & WHY DIFFERENT */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">From Strategy to Execution</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Most organizations understand the potential of AI but struggle with where to start and how to implement it effectively.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our playbooks bridge that gap by providing structured guidance that moves you from concept to execution. Each playbook outlines clear steps, use cases, and implementation strategies tailored to real operational environments.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Built for Real Business Environments</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Our playbooks are not theoretical. They are designed based on real operational challenges and implementation experience. We focus on:
              </p>
              <ul className="space-y-4">
                {[
                  "Practical execution over abstract concepts",
                  "Systems that integrate into existing operations",
                  "Measurable outcomes and performance improvements",
                  "Scalable solutions that grow with your business"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                    <span className="mt-0.5">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PLAYBOOKS */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="mb-16 max-w-3xl">
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-6">Featured Playbooks</h2>
            <p className="text-xl text-slate-600">Actionable frameworks designed for specific business functions.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
            {playbooks.length > 0 ? (
              playbooks.map((playbook, i) => (
                <Link to={`/playbooks/${playbook.id}`} key={playbook.id || i} className="group flex flex-col h-full bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:shadow-brand-blue/10 hover:border-brand-blue/30 transition-all duration-300">
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    {playbook.image_url ? (
                      <img src={playbook.image_url} alt={playbook.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    ) : (
                      <div className="w-full h-full bg-slate-200" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none opacity-60"></div>
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg text-brand-blue">
                      <BookOpen className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 p-8">
                    <h3 className="text-2xl font-display font-bold text-slate-900 mb-4 group-hover:text-brand-blue transition-colors leading-snug">{playbook.title}</h3>
                    <p className="text-slate-600 text-base leading-relaxed mb-8 flex-1">{playbook.description}</p>

                    <div className="flex items-center text-sm font-bold text-brand-blue group-hover:text-brand-cyan transition-colors mt-auto">
                      Explore Playbook <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-full text-center text-slate-500 py-12">
                {loading ? <div className="flex justify-center"><Loader2 className="w-8 h-8 animate-spin text-brand-blue" /></div> : 'No playbooks found.'}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* WHAT YOU'LL FIND & EXPECTATIONS */}
      <section className="py-24 bg-white text-slate-800 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-blue/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-md">
              <h2 className="text-3xl font-display font-bold mb-8">What Each Playbook Includes</h2>
              <ul className="space-y-6">
                {whatYouFind.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-blue/20 flex items-center justify-center shrink-0 mt-0.5 text-brand-cyan">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <span className="text-lg text-slate-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-md">
              <h2 className="text-3xl font-display font-bold mb-8">Value & Expected Outcomes</h2>
              <ul className="space-y-6">
                {expectations.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5 text-emerald-400">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <span className="text-lg text-slate-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO USE */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-6">How to Use These Playbooks</h2>
            <p className="text-xl text-slate-600">A clear, repeatable process for bringing AI into your organization.</p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative flex flex-col items-center text-center">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-slate-100">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-slate-300"></div>
                  </div>
                )}
                <div className="w-16 h-16 rounded-full bg-brand-blue text-white flex items-center justify-center text-xl font-bold mb-6 relative z-10 shadow-lg shadow-brand-blue/30">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
