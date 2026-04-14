import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { PlayCircle, ArrowRight } from "lucide-react";
import { cn } from "@/src/lib/utils";

function AdvantageTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "1",
      title: "Strategic Impact",
      desc: "We design AI-driven systems and automation frameworks that directly streamline operations, reduce manual workload, and enable measurable organizational performance. Every solution is structured to deliver tangible business outcomes at scale."
    },
    {
      num: "2",
      title: "Trust and Governance",
      desc: "Our enterprise-grade approach ensures security, compliance, and operational integrity. We operate with transparency and accountability, creating systems and processes that institutions can rely on for long-term resilience and growth."
    },
    {
      num: "3",
      title: "Scalable Excellence",
      desc: "We combine advanced technology with proven operational frameworks to implement solutions that are precise, reliable, and adaptable. Our focus is on delivering infrastructure that supports sustainable growth, efficiency, and institutional readiness."
    }
  ];

  return (
    <div className="relative border-l-2 border-slate-200 ml-4 md:ml-6 pb-2 mt-4 md:mt-0">
      {steps.map((val, i) => {
        const isActive = activeStep === i;
        return (
          <motion.div
            key={i}
            onViewportEnter={() => setActiveStep(i)}
            viewport={{ margin: "-45% 0px -45% 0px" }}
            className="relative pl-10 pb-16 last:pb-0 group"
          >
            {/* The circle on the vertical line */}
            <div className={cn(
              "absolute -left-[17px] top-0 w-8 h-8 rounded-full border-2 flex items-center justify-center font-display font-bold text-sm bg-white transition-all duration-500",
              isActive
                ? "border-brand-blue text-brand-blue scale-110 shadow-[0_0_15px_rgba(255,36,0,0.3)]"
                : "border-slate-300 text-slate-400 group-hover:border-brand-blue/50"
            )}>
              {val.num}
            </div>

            <div className={cn("transition-opacity duration-500", isActive ? "opacity-100" : "opacity-60")}>
              <h3 className={cn(
                "text-xl font-display font-semibold mb-2 transition-colors duration-500",
                isActive ? "text-brand-blue" : "text-slate-800"
              )}>
                {val.title}
              </h3>
              <p className={cn(
                "leading-relaxed transition-colors duration-500",
                isActive ? "text-slate-700" : "text-slate-500"
              )}>
                {val.desc}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-36 md:pb-28 overflow-hidden bg-slate-50 min-h-[90vh] flex flex-col justify-end md:justify-center">
        {/* Abstract 3D Graphic Placeholder mimicking Autofleet's background */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
          {/* Faux 3D elements to match graphic feel */}
          <div className="absolute top-[-5%] left-[-10%] md:top-10 md:right-[-10%] w-[120%] h-[120%] md:w-[800px] md:h-[800px] border-[30px] border-white/40 rounded-[100px] opacity-40 transform rotate-[25deg] scale-[1.5]"></div>
          <div className="absolute top-[30%] -right-10 md:top-40 md:right-20 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-gradient-to-br from-white/80 to-transparent rounded-[40px] shadow-[0_20px_100px_rgba(255,36,0,0.05)] transform rotate-12"></div>

          {/* <svg className="absolute inset-0 w-full h-full stroke-brand-blue/10 fill-none" preserveAspectRatio="none">
            <path d="M-100,200 C300,200 400,450 800,450" strokeWidth="12" strokeLinecap="round" />
            <path d="M200,600 C400,600 500,300 900,300" strokeWidth="8" strokeLinecap="round" />
            <path d="M0,800 C300,800 600,600 1200,600" strokeWidth="16" strokeLinecap="round" />
          </svg> */}
          <img
            src="https://images.pexels.com/photos/1181408/pexels-photo-1181408.jpeg"
            alt="Hero Background"
            className="absolute inset-0 w-full h-full object-cover opacity-45 mix-blend-luminosity pointer-events-none"
          />
          {/* Subtle brand tint overlay to ensure it blends with the red consistency */}
          <div className="absolute inset-0 bg-brand-blue/5 pointer-events-none"></div>
        </div>

        {/* Mobile background subtle gradient fading into content */}
        <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-slate-50 via-slate-50/80 to-transparent z-0"></div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex-1 flex flex-col justify-end md:justify-center pb-[80px] md:pb-0 pt-[300px] md:pt-0">
          <div className="w-full md:max-w-xl lg:max-w-2xl text-center md:text-left mx-auto md:mx-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-[28px] sm:text-[44px] md:text-[60px] lg:text-[72px] font-display font-extrabold tracking-tight text-slate-800 mb-6 leading-[1.15] max-w-[400px] mx-auto md:mx-0 md:max-w-none">
                We Build AI & Automation Systems for Modern Businesses
              </h1>
              <p className="text-[15px] sm:text-lg md:text-xl text-slate-600 mb-10 max-w-[380px] mx-auto md:mx-0 md:max-w-lg leading-snug font-medium">
                Designing intelligent infrastructure that streamlines operations, strengthens decision making, and enables organizations to scale with precision.
              </p>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <Link
                  to="/deal-room"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-brand-blue text-white font-bold hover:bg-brand-blue-hover transition-colors shadow-md text-[16px] w-[200px]"
                >
                  Request a Demo
                </Link>
                <Link
                  to="/"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-lg bg-brand-blue/5 border border-brand-blue/20 text-slate-800 font-semibold hover:bg-brand-blue/10 transition-colors text-[16px] w-[260px]"
                >
                  Book a Call
                  <PlayCircle className="w-6 h-6 text-white fill-brand-blue" strokeWidth={1} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

      </section>

      {/* Logo Bar */}
      <section className="bg-slate-800 border-t-4 border-brand-cyan relative z-20">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-10 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Mock Logos matching the image */}
            <div className="text-white font-display font-bold tracking-widest text-2xl">SCANIA</div>
            <div className="text-white font-display font-semibold flex items-center gap-2">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full border-2 border-white"></div>
                <div className="w-4 border-t-2 border-white"></div>
                <div className="w-3 h-3 rounded-full border-2 border-white flex justify-center items-center">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
              </div>
              pedal me
            </div>
            <div className="text-white font-display italic font-medium flex items-center gap-2 text-xl">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
              </svg>
              Mobility-on-Demand
            </div>
            <div className="text-white font-display font-bold flex items-center gap-2 text-xl">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v8M8 12h8" />
              </svg>
              AVL TAXI
            </div>
            <div className="text-white font-sans font-bold text-2xl tracking-tighter">
              zTrip
            </div>
          </div>
        </div>
      </section>

      {/* Engineered Block */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-slate-900">
                Engineered for Complex Operational Environments
              </h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Our systems are architected to integrate across departments, eliminate fragmented workflows, and create unified, data driven operations across enterprise functions.
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan/20 to-brand-blue/20 blur-3xl rounded-full" />
              <div className="relative bg-white border border-slate-200 rounded-2xl p-8 shadow-xl">
                <div className="flex items-center justify-between mb-8 pb-8 border-b border-slate-100">
                  <div>
                    <div className="text-sm font-medium text-slate-500 mb-1">Before</div>
                    <div className="text-lg text-slate-800 font-medium">Fragmented Workflows</div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-12 h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-slate-300" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-brand-blue mb-1">After</div>
                    <div className="text-lg text-slate-800 font-medium">Unified Platform</div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-12 h-2 bg-brand-blue/10 rounded-full overflow-hidden">
                      <motion.div
                        className="w-full h-full bg-brand-blue"
                        initial={{ x: "-100%" }}
                        whileInView={{ x: "0%" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Approach & Delivering Performance */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="text-brand-blue font-semibold tracking-wider uppercase text-sm mb-4 block">Creative Approach</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-slate-900 leading-tight">
              Powering Operational Excellence Through AI and Automation Infrastructure
            </h2>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              Macklemore Solutions designs and implements intelligent systems that streamline operations, strengthen security, and enable data driven decision making across enterprise environments. Our capabilities span automation infrastructure, AI enablement, and security frameworks, allowing organizations to eliminate manual processes, integrate fragmented systems, and operate with greater efficiency and control.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              We work with institutions to build scalable operational architectures that improve performance, reduce risk, and support long term growth.
            </p>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-16 mt-24">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-slate-900">
              Delivering Measurable Performance at Scale
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              We implement automation, security, and AI frameworks that reduce manual workload, improve operational accuracy, and accelerate organizational efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Automation",
                image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=2070&auto=format&fit=crop",
                desc: "AI driven systems that streamline operations, eliminate fragmented workflows, and improve enterprise efficiency.",
                link: "/solutions/automation"
              },
              {
                title: "Cybersecurity",
                image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
                desc: "Enterprise cybersecurity and risk management infrastructure tailored to secure and harden modern operational models.",
                link: "/solutions/security"
              },
              {
                title: "AI Training",
                image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
                desc: "Institutional training and AI integration for workforce transformation from corporate seminars to certified programs.",
                link: "/solutions/ai-education"
              }
            ].map((service, i) => (
              <Link key={i} to={service.link} className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-3xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="h-full bg-white border border-slate-200 hover:border-brand-blue/30 rounded-3xl hover:shadow-lg hover:shadow-brand-blue/5 transition-all overflow-hidden flex flex-col"
                >
                  <div className="w-full h-48 relative overflow-hidden bg-slate-100">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-brand-blue/5 pointer-events-none mix-blend-multiply"></div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-xl font-display font-semibold text-slate-800 mb-4">{service.title}</h3>
                    <p className="text-slate-600 mb-6 flex-1 text-[15px] leading-relaxed">{service.desc}</p>
                    <div className="flex items-center gap-2 text-sm font-medium text-brand-blue mt-auto">
                      Explore Solution <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-slate-900">
                The Macklemore Advantage
              </h2>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-brand-blue text-white font-medium hover:bg-brand-blue-hover transition-colors shadow-md shadow-brand-blue/20 mt-4"
              >
                About Our Company <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <AdvantageTimeline />
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-slate-900">
              Industries We Serve
            </h2>
            <p className="text-slate-600 text-lg">
              We deploy advanced automation and security frameworks tailored specifically to the operational constraints and regulatory needs of complex sectors.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {["Logistics companies", "Financial Services", "Healthcare", "Retail & E-commerce", "Education", "SMEs & Enterprises"].map((industry, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm text-center hover:shadow-md hover:border-brand-blue/30 transition-all">
                <h3 className="font-display font-semibold text-slate-800 text-lg">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-slate-900">
                Recent Impact
              </h2>
              <p className="text-slate-600 text-lg max-w-xl">
                See how we transform operational capacity through precision implementation.
              </p>
            </div>
            <Link to="/case-studies" className="hidden md:flex items-center gap-2 text-brand-blue font-medium hover:text-brand-blue-hover transition-colors">
              View all cases <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Automation Projects",
                image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=2070&auto=format&fit=crop",
                desc: "Scaling supply chain operations with intelligent workflow integration, eliminating data silos by 80%.",
                category: "Logistics"
              },
              {
                title: "Cybersecurity Implementations",
                image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
                desc: "Enterprise hardening against zero-day threats in regulated data environments with automated monitoring.",
                category: "Finance"
              },
              {
                title: "AI Marketing Results",
                image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop",
                desc: "Deploying predictive analytics and AI-driven campaign automation, multiplying lead qualification rates.",
                category: "E-Commerce"
              }
            ].map((study, i) => (
              <Link key={i} to="/case-studies" className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-3xl">
                <div className="h-full bg-slate-50 border border-slate-200 hover:border-brand-blue/30 rounded-3xl shadow-sm hover:shadow-lg transition-all overflow-hidden flex flex-col">
                  <div className="w-full h-48 relative overflow-hidden bg-slate-100">
                    <img src={study.image} alt={study.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-brand-blue/5 pointer-events-none mix-blend-multiply"></div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <span className="inline-block px-3 py-1 bg-white text-xs font-semibold text-brand-blue border border-brand-blue/20 rounded-full mb-4 w-fit">
                      {study.category}
                    </span>
                    <h3 className="text-xl font-display font-semibold text-slate-900 mb-4 group-hover:text-brand-blue transition-colors">{study.title}</h3>
                    <p className="text-slate-600 mb-6 flex-1 text-[15px] leading-relaxed">{study.desc}</p>
                    <div className="text-sm font-medium text-slate-800 flex items-center gap-2 mt-auto">
                      Read Case Study <ArrowRight className="w-4 h-4 text-brand-blue group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-brand-blue font-medium hover:text-brand-blue-hover transition-colors">
              View all cases <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-blue-hover text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to Scale Your Infrastructure?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Speak directly with our team to architect the right automation, security, and AI integrations for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/deal-room" className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-brand-blue font-bold hover:bg-slate-50 shadow-md transition-colors text-lg">
              Request a Demo
            </Link>
            <Link to="/" className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-brand-blue border border-white/20 text-white font-bold hover:bg-brand-cyan/20 transition-colors text-lg">
              Book a Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
