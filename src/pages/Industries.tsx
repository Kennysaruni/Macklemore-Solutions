import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, TrendingUp, Shield, Truck, ShoppingCart, GraduationCap, Building2 } from "lucide-react";

export default function Industries() {
  const industries = [
    {
      id: "finance",
      title: "Financial Services",
      icon: <TrendingUp className="w-6 h-6" />,
      content: "We help financial institutions modernize operations with secure, automated systems that improve efficiency while maintaining strong compliance and security standards.",
      capabilities: [
        "Automated customer onboarding",
        "Fraud detection and monitoring",
        "Risk and compliance systems",
        "Workflow automation",
        "Secure infrastructure and data management"
      ],
      outcome: "Faster service delivery, improved security, and more efficient internal processes.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=75"
    },
    {
      id: "healthcare",
      title: "Healthcare",
      icon: <Shield className="w-6 h-6" />,
      content: "We work with healthcare providers to streamline operations, improve patient management, and build secure systems that support reliable service delivery.",
      capabilities: [
        "Patient data management systems",
        "Appointment and workflow automation",
        "Telehealth and digital consultation support",
        "Reporting and analytics",
        "Security and compliance systems"
      ],
      outcome: "Improved patient experience, reduced administrative workload, and more efficient operations.",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=75"
    },
    {
      id: "retail",
      title: "Retail & E-Commerce",
      icon: <ShoppingCart className="w-6 h-6" />,
      content: "We help retail and e-commerce businesses scale through automation, intelligent marketing systems, and optimized customer engagement.",
      capabilities: [
        "Inventory and order management automation",
        "AI-driven customer support",
        "Sales and lead generation systems",
        "Customer behavior analytics",
        "Marketing automation and optimization"
      ],
      outcome: "Higher conversion rates, improved customer experience, and scalable business growth.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=75"
    },
    {
      id: "education",
      title: "Education",
      icon: <GraduationCap className="w-6 h-6" />,
      content: "We support educational institutions and training organizations with systems that enable scalable learning, efficient administration, and improved student engagement.",
      capabilities: [
        "Learning management systems",
        "Student onboarding and tracking",
        "Training program automation",
        "AI-assisted learning tools",
        "Performance analytics"
      ],
      outcome: "Improved learning outcomes, scalable program delivery, and efficient management.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=75"
    },
    {
      id: "enterprises",
      title: "Enterprises",
      icon: <Building2 className="w-6 h-6" />,
      content: "We work with growing and large organizations to build scalable systems that improve operations, enhance decision-making, and support long-term growth.",
      capabilities: [
        "Business process automation",
        "CRM and sales systems",
        "Internal workflow optimization",
        "Data and reporting systems",
        "AI-driven decision support tools"
      ],
      outcome: "Greater operational efficiency, better decision-making, and scalable infrastructure.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=75"
    }
  ];

  const steps = [
    { title: "Understand Your Operations", desc: "We analyze your workflows, systems, and challenges to identify opportunities for improvement." },
    { title: "Design the Solution", desc: "We create a structured system that integrates AI and automation into your operations." },
    { title: "Implement and Integrate", desc: "We deploy solutions that fit seamlessly into your existing environment." },
    { title: "Monitor and Optimize", desc: "We continuously track performance and refine systems to ensure long-term impact." }
  ];

  return (
    <div className="flex flex-col bg-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-slate-50 border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[100px]"></div>
        </div>
        <div className="max-w-[1440px] mx-auto px-6 w-full relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex-1"
            >
              <div className="text-brand-cyan font-bold tracking-wider uppercase text-sm mb-4">Industries We Serve</div>
              <h1 className="text-4xl md:text-5xl lg:text-[64px] font-display font-bold text-slate-900 mb-6 leading-tight">
                AI and Automation Systems Built for Real Business Environments
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                We work with organizations across key industries to design and implement AI and automation systems that improve efficiency, reduce operational costs, and support scalable growth. Our solutions are tailored to the realities of each industry, ensuring practical and measurable impact.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex-1 w-full relative hidden md:block"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
                <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=75" alt="Abstract modern business building" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-brand-blue/20 mix-blend-multiply pointer-events-none"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-cyan/30 rounded-full blur-2xl pointer-events-none"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-blue/30 rounded-full blur-2xl pointer-events-none"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">Tailored Solutions for Every Industry</h2>
          <p className="text-xl text-slate-600 leading-relaxed mb-6">
            Every industry operates differently, with unique processes, challenges, and operational demands. Our approach focuses on understanding these differences and building systems that integrate seamlessly into your environment.
          </p>
          <p className="text-xl font-medium text-slate-900">
            We don’t apply generic solutions. We design systems that align with how your business actually works.
          </p>
        </div>
      </section>

      {/* INDUSTRIES SECTION (ALTERNATING LAYOUT) */}
      <section className="py-12 bg-slate-50 overflow-hidden">
        {industries.map((industry, index) => (
          <motion.div
            key={industry.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6 }}
            className={`py-16 md:py-24 ${index % 2 !== 0 ? 'bg-white' : ''}`}
          >
            <div className="max-w-[1440px] mx-auto px-6">
              <div className={`flex flex-col gap-12 lg:gap-20 items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                <div className="flex-1 w-full">
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl relative group">
                    <img src={industry.image} alt={industry.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-slate-900/10 pointer-events-none group-hover:bg-slate-900/0 transition-colors"></div>
                  </div>
                </div>

                <div className="flex-1 w-full">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-blue/10 text-brand-blue mb-6">
                    {industry.icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">{industry.title}</h2>
                  <p className="text-lg text-slate-600 leading-relaxed mb-8">{industry.content}</p>

                  <h3 className="text-sm font-bold tracking-wider uppercase text-slate-900 mb-4">Key Capabilities</h3>
                  <ul className="space-y-3 mb-8">
                    {industry.capabilities.map((cap, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-700">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-brand-blue/5 border border-brand-blue/10 rounded-2xl p-6">
                    <h3 className="text-sm font-bold tracking-wider uppercase text-brand-blue mb-2">Outcome</h3>
                    <p className="text-slate-800 font-medium">{industry.outcome}</p>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* HOW WE APPROACH EACH INDUSTRY */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">Our Approach</h2>
            <p className="text-xl text-slate-600">
              Our process is consistent across industries, but always tailored to your specific operational needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:border-brand-blue/30 hover:shadow-lg transition-all"
              >
                <div className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-4">Step {i + 1}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY IT WORKS */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-[1440px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">Built for Real Impact</h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Our solutions are designed to deliver measurable results, not just technical improvements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Practical implementation",
              "Seamless integration",
              "Scalable systems",
              "Data-driven performance"
            ].map((feature, i) => (
              <span key={i} className="px-6 py-3 rounded-full bg-slate-50 border border-slate-200 text-slate-800 font-medium">
                {feature}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-24 bg-brand-blue text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=75')] opacity-10 object-cover mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">Let’s Build the Right System for Your Industry</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Every industry has unique challenges. We design solutions tailored to your specific needs, ensuring real and measurable impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/deal-room" className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-brand-blue font-bold hover:bg-slate-50 shadow-md transition-colors text-lg w-full">
                Book a Demo
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-brand-cyan hover:bg-white hover:text-brand-cyan text-white font-bold shadow-md transition-colors text-lg w-full">
                Speak With Our Team
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
