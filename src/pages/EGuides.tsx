import { useState } from "react";
import { motion } from "motion/react";
import { Download } from "lucide-react";

export default function EGuides() {
  const [activeFilter, setActiveFilter] = useState("All Resources");

  const resources = [
    {
      title: "Getting Started with AI in Your Business",
      desc: "A practical introduction to AI, including where to begin, what to expect, and how to identify opportunities for automation.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      category: "eGuide"
    },
    {
      title: "Building Scalable AI Infrastructure for Businesses",
      desc: "An in-depth look at how organizations can design systems that support long-term growth and operational efficiency.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
      category: "Whitepaper"
    },
    {
      title: "AI for Non-Technical Leaders",
      desc: "Designed for executives and decision-makers, this guide explains AI concepts without technical complexity.",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop",
      category: "eGuide"
    },
    {
      title: "Reducing Operational Costs Through Automation",
      desc: "A strategic perspective on how automation can drive cost efficiency across business functions.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      category: "Whitepaper"
    },
    {
      title: "Automating Business Workflows",
      desc: "A step-by-step guide to identifying repetitive processes and implementing automation to improve efficiency.",
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=2070&auto=format&fit=crop",
      category: "eGuide"
    },
    {
      title: "AI in Logistics and Operations",
      desc: "How intelligent systems are transforming logistics, routing, and operational performance.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8ed7c663b0?q=80&w=2070&auto=format&fit=crop",
      category: "Whitepaper"
    },
    {
      title: "Scaling Operations with AI Systems",
      desc: "How businesses can use AI to support growth, improve performance, and manage increasing operational demands.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
      category: "eGuide"
    },
    {
      title: "Workforce Transformation Through AI Systems",
      desc: "Exploring how AI is changing the way organizations structure teams and manage work.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
      category: "Whitepaper"
    }
  ];

  const filters = ["All Resources", "eGuides", "Whitepapers"];

  const filteredResources = activeFilter === "All Resources" 
    ? resources 
    : resources.filter(r => r.category + "s" === activeFilter);

  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      {/* MINIMAL HERO SECTION */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
              eGuides & Whitepapers
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Practical guides and strategic insights for AI-driven businesses. Our resources provide clear, structured insights to help organizations understand, plan, and implement AI and automation systems effectively.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FILTER BAR */}
      <section className="sticky top-[72px] z-30 bg-white/80 backdrop-blur-md border-b border-slate-200 py-4 shadow-sm">
        <div className="max-w-[1440px] mx-auto px-6 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 whitespace-nowrap pb-3">
            {filters.map((filter, i) => (
              <button 
                key={i} 
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === filter 
                    ? "bg-brand-blue text-white shadow-sm shadow-brand-blue/20" 
                    : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GRID SECTION */}
      <section className="py-16 bg-white min-h-[50vh]">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-10">
            {filteredResources.map((resource, i) => (
              <div key={i} className="group flex flex-col h-full overflow-hidden border border-slate-200 rounded-2xl bg-white hover:shadow-xl hover:shadow-brand-blue/5 hover:border-brand-blue/30 transition-all p-2">
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-100 mb-4">
                  <img src={resource.image} alt={resource.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-brand-blue/5 pointer-events-none mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="flex flex-col flex-1 px-3 pb-3">
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <span className="text-[10px] font-bold tracking-wider uppercase text-brand-blue bg-brand-blue/10 px-2 py-1 rounded-md">
                      {resource.category}
                    </span>
                    <span className="text-[10px] font-bold tracking-wider uppercase text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-1 rounded-md">
                      Free Download
                    </span>
                  </div>
                  <h3 className="text-lg font-display font-bold text-slate-900 mb-2 group-hover:text-brand-blue transition-colors leading-snug">{resource.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">{resource.desc}</p>
                  
                  <button className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-slate-900 hover:bg-brand-blue text-white text-sm font-bold transition-colors mt-auto shadow-sm">
                    <Download className="w-4 h-4" /> Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD CAPTURE / CTA SECTION */}
      <section className="py-24 bg-brand-blue text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] opacity-10 object-cover mix-blend-overlay"></div>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Access Our Resources</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Download our eGuides and whitepapers to explore how AI and automation can transform your business operations.
          </p>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl max-w-md mx-auto">
            <h3 className="text-xl font-bold mb-4">Join our Mailing List</h3>
            <p className="text-sm text-white/80 mb-6">Get notified when we publish new strategic insights and technical guides.</p>
            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Enter your work email" 
                className="px-5 py-3.5 rounded-xl text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-brand-cyan w-full text-sm font-medium"
              />
              <button className="w-full flex items-center justify-center px-8 py-3.5 rounded-xl bg-brand-cyan hover:bg-white hover:text-brand-cyan text-white font-bold transition-colors shadow-lg">
                Subscribe for Updates
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
