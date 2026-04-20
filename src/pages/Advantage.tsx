import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Cpu, LineChart, Layers, Workflow, Check, X } from "lucide-react";

export default function Advantage() {
  const advantages = [
    {
      title: "Built for Real Operations",
      description: "We design systems that work within your existing workflows. Our solutions are practical, adaptable, and aligned with how your business actually operates.",
      icon: <Workflow className="w-6 h-6 text-brand-blue" />
    },
    {
      title: "Scalable Infrastructure",
      description: "Our systems are designed to grow with your business. Whether you are optimizing current processes or expanding operations, we build solutions that support long-term scalability.",
      icon: <Layers className="w-6 h-6 text-brand-blue" />
    },
    {
      title: "Outcome-Driven Execution",
      description: "We focus on measurable results. Every implementation is aligned with clear business objectives such as improving efficiency, reducing operational costs, and enhancing performance.",
      icon: <LineChart className="w-6 h-6 text-brand-blue" />
    },
    {
      title: "Industry-Specific Implementation",
      description: "We tailor our solutions to the realities of your industry. This ensures faster adoption, better performance, and more relevant outcomes.",
      icon: <Cpu className="w-6 h-6 text-brand-blue" />
    },
    {
      title: "End-to-End Delivery",
      description: "From strategy to deployment, we manage the full lifecycle of your AI and automation systems. This ensures consistency, accountability, and successful implementation.",
      icon: <CheckCircle2 className="w-6 h-6 text-brand-blue" />
    }
  ];

  return (
    <div className="flex flex-col bg-white">
      {/* SECTION 1: POSITIONING (HERO) */}
      <section className="relative overflow-hidden pt-24 pb-16 md:pt-28 md:pb-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-semibold mb-4 border border-brand-blue/20">
                The Macklemore Advantage
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-[44px] font-display font-bold text-slate-900 mb-5 leading-[1.15]">
                We Build Systems That Drive Real Business Outcomes
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-xl mb-7">
                At Macklemore Solutions, we go beyond traditional service delivery. We design and implement AI and automation systems that integrate into your operations, improve efficiency, and support long-term growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/deal-room" className="px-5 py-2.5 rounded-lg bg-brand-blue hover:bg-brand-blue-hover text-white text-[15px] font-medium transition-all shadow-sm shadow-brand-blue/20">
                  Book a Strategy Session
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200"
            >
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                alt="Technology systems"
                className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/20 to-transparent mix-blend-overlay pointer-events-none"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT MAKES US DIFFERENT */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]"
            >
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
                alt="Technology network"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                A Different Approach to AI and Automation
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p className="font-semibold text-brand-blue">
                  Most companies focus on tools. We focus on systems.
                </p>
                <p>
                  Our approach is built around understanding your operations, identifying inefficiencies, and implementing solutions that deliver measurable impact across your business.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CORE ADVANTAGES */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Our Core Advantages</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">The foundational principles that guide every system we build.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((adv, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-slate-100 mb-6">
                  {adv.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{adv.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {adv.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: HOW WE WORK */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-12"
              >
                How We Deliver Value
              </motion.h2>

              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[1.4rem] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-brand-blue before:via-brand-blue/50 before:to-transparent">
                {[
                  { step: "Step 1", title: "Understand Your Operations", desc: "We analyze your current processes, systems, and challenges to identify opportunities for improvement." },
                  { step: "Step 2", title: "Design the System", desc: "We create a structured plan for integrating AI and automation into your workflows." },
                  { step: "Step 3", title: "Implement and Integrate", desc: "We deploy solutions that fit seamlessly into your operations with minimal disruption." },
                  { step: "Step 4", title: "Monitor and Optimize", desc: "We continuously track performance and refine systems to ensure sustained impact." }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                  >
                    {/* Number Icon */}
                    <div className="flex items-center justify-center w-12 h-12 rounded-full border-[3px] border-white bg-brand-blue text-white font-bold shrink-0 z-10 ml-0 md:mx-auto shadow-md">
                      {i + 1}
                    </div>
                    {/* Content */}
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-slate-50 border border-slate-200 ml-4 md:ml-0 md:group-even:mr-auto md:group-odd:ml-auto">
                      <div className="text-brand-blue font-semibold text-sm mb-1">{item.step}</div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="hidden lg:block relative rounded-2xl overflow-hidden aspect-[3/4] shadow-2xl border border-slate-200"
            >
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                alt="Team collaborating on operations strategy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-80" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 5: COMPARISON */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">A Better Way to Build and Scale</h2>
            <p className="text-slate-600">The difference between standard approaches and the Macklemore methodology.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
            <div className="grid grid-cols-2 text-center border-b border-slate-200">
              <div className="p-6 bg-slate-100 font-bold text-slate-500">Traditional Approach</div>
              <div className="p-6 bg-brand-blue text-white font-bold">Macklemore Approach</div>
            </div>

            {[
              ["Generic tools", "Tailored systems"],
              ["Manual processes", "Automated workflows"],
              ["Disconnected platforms", "Integrated infrastructure"],
              ["Short-term fixes", "Scalable solutions"],
              ["Limited visibility", "Data-driven insights"]
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-2 text-center border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                <div className="p-6 text-slate-500 flex items-center justify-center gap-2">
                  <X className="w-4 h-4 text-rose-500" /> {row[0]}
                </div>
                <div className="p-6 font-semibold text-slate-900 flex items-center justify-center gap-2 bg-brand-blue/5">
                  <Check className="w-4 h-4 text-brand-blue" /> {row[1]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: IMPACT */}
      <section className="py-20 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-12">What This Means for Your Business</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Improved operational efficiency",
              "Reduced costs across key processes",
              "Better decision-making through data",
              "Increased scalability and flexibility",
              "Stronger operational control and visibility"
            ].map((impact, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-slate-200 shadow-sm px-6 py-4 rounded-full text-slate-700 font-medium flex items-center gap-2 hover:border-brand-blue hover:text-brand-blue transition-colors cursor-default"
              >
                <CheckCircle2 className="w-4 h-4 text-brand-cyan" />
                {impact}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: CLOSING CTA */}
      <section className="py-24 bg-brand-blue-hover text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-cyan opacity-20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Let’s Build the Right System for Your Business</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Every organization operates differently. We design solutions tailored to your specific needs, ensuring real and measurable impact.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/deal-room"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-brand-blue font-bold hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Book a Demo <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-transparent border-2 border-white/30 text-white font-bold hover:bg-white/10 transition-all"
            >
              Speak With Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
