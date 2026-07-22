import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useBlogs } from "../context/DataContext";

export default function Blog() {
  const { blogs, loading } = useBlogs();
  const [activeFilter, setActiveFilter] = useState("All Resources");

  const filteredBlogs = activeFilter === "All Resources"
    ? blogs
    : blogs.filter(post => post.category === activeFilter);

  const categories = [
    { name: "AI in Operations", desc: "Insights on how AI improves efficiency across business functions, from logistics to internal workflows." },
    { name: "Automation Strategies", desc: "Frameworks and approaches for implementing automation in real business environments." },
    { name: "Industry Insights", desc: "How different industries are adopting AI and building scalable systems." },
    { name: "Case Study Breakdowns", desc: "Detailed analysis of real-world implementations and outcomes." }
  ];

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
              Practical Insights for Modern Business Systems
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              We share real-world perspectives on AI, automation, and operational efficiency. Our content is designed to help organizations understand how to implement intelligent systems that improve performance, reduce costs, and support scalable growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FILTER BAR (EXPLORE BY CATEGORY) */}
      <section className="bg-white border-b border-slate-200 py-4">
        <div className="max-w-[1440px] mx-auto px-6 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 whitespace-nowrap pb-3">
            <button
              onClick={() => setActiveFilter("All Resources")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === "All Resources"
                ? "bg-brand-blue text-white shadow-sm shadow-brand-blue/20"
                : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                }`}
            >
              All Resources
            </button>
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setActiveFilter(cat.name)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === cat.name
                  ? "bg-brand-blue text-white shadow-sm shadow-brand-blue/20"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                  }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GRID SECTION (FEATURED INSIGHTS) */}
      <section className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-6">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((post) => (
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} key={post.id} whileHover={{ y: -8 }}>
                  <Link to={`/blog/${post.slug}`} className="group flex flex-col h-full overflow-hidden">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-slate-100 mb-5 shadow-sm transition-shadow group-hover:shadow-md">
                    {post.image_url ? (
                      <img src={post.image_url} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    ) : (
                      <div className="w-full h-full bg-slate-200" />
                    )}
                    <div className="absolute inset-0 bg-brand-blue/5 pointer-events-none mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="flex flex-col flex-1 mt-2">
                    {post.category && (
                      <div className="mb-3">
                        <span className="text-[10px] font-bold tracking-wider uppercase text-brand-blue bg-brand-blue/10 px-2 py-1 rounded-md">
                          {post.category}
                        </span>
                      </div>
                    )}
                    <h3 className="text-xl font-display font-bold text-slate-900 mb-3 group-hover:text-brand-blue transition-colors leading-snug">{post.title}</h3>
                    <p className="text-slate-600 text-[15px] leading-relaxed mb-4 flex-1">{post.content.substring(0, 120)}...</p>
                    <div className="flex items-center text-sm font-bold text-slate-900 group-hover:text-brand-blue transition-colors mt-auto">
                      Read more <span className="ml-1 text-lg leading-none">&rsaquo;</span>
                    </div>
                  </div>
                  </Link>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center text-slate-500 py-12">
                {loading ? 'Loading blog posts...' : 'No blog posts found.'}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* BOTTOM SECTIONS */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Our Approach */}
            <div>
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Our Approach to AI and Automation</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                We focus on practical implementation, not theory. Every insight we share is grounded in real operational challenges and designed to help organizations take actionable steps toward improvement.
              </p>
              <ul className="space-y-4">
                {[
                  "Understanding how businesses operate in reality",
                  "Designing systems that integrate into existing workflows",
                  "Delivering measurable outcomes through structured implementation"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 font-medium">
                    <div className="w-6 h-6 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-brand-blue" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Why These Insights Matter */}
            <div>
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Why These Insights Matter</h2>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <p className="text-lg text-slate-600 leading-relaxed mb-4">
                  AI and automation are no longer optional for organizations looking to remain competitive. However, many businesses struggle to move from understanding the concept to executing it effectively.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Our insights are designed to bridge that gap by providing clear, practical guidance that supports decision-making and implementation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-brand-blue text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=75')] opacity-10 object-cover mix-blend-overlay"></div>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">Stay Informed</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Get the latest insights on AI, automation, and business systems delivered directly to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="#" className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-brand-blue font-bold hover:bg-slate-50 shadow-md transition-colors text-lg">
                Subscribe for Updates
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
