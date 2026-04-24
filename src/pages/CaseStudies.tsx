import { motion } from "motion/react";
import { ArrowRight, BarChart3, ShieldCheck, BookOpen, Calculator, Activity, Loader2 } from "lucide-react";
import { useData } from "../context/DataContext";

export default function CaseStudies() {
  const { caseStudies, loading } = useData();

  const getIcon = (iconName?: string) => {
    const props = { className: "w-6 h-6 text-brand-cyan" };
    switch (iconName) {
      case 'shield-check': return <ShieldCheck {...props} />;
      case 'book-open': return <BookOpen {...props} />;
      case 'calculator': return <Calculator {...props} />;
      case 'activity': return <Activity {...props} />;
      case 'bar-chart':
      default:
        return <BarChart3 {...props} />;
    }
  };

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
          {caseStudies.length > 0 ? (
            caseStudies.map((study, i) => (
              <motion.div
                key={study.id}
                id={`case-${study.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm overflow-hidden"
              >
                <div className="w-full h-56 md:h-80 mb-10 overflow-hidden rounded-2xl relative group bg-slate-200">
                  {study.image_url && (
                    <img src={study.image_url} alt={study.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  )}
                  <div className="absolute inset-0 bg-brand-blue/5 pointer-events-none mix-blend-multiply"></div>
                </div>
                <div className="flex flex-col md:flex-row gap-12">
                  <div className="md:w-1/3">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-6">
                      {getIcon(study.icon_name)}
                    </div>
                    <div className="text-sm font-bold text-slate-700 mb-2">Case Study {String(i + 1).padStart(2, '0')}</div>
                    <h2 className="text-3xl font-display font-bold text-slate-900 mb-8">{study.title}</h2>
  
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
                      <div>
                        <div className="text-slate-500 mb-1">Region</div>
                        <div className="text-slate-900 font-medium">{study.region}</div>
                      </div>
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
                      <h3 className="text-lg font-display font-bold text-slate-900 mb-3">Situation</h3>
                      <p className="text-slate-600 leading-relaxed whitespace-pre-wrap">{study.situation}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-display font-bold text-slate-900 mb-3">Solution</h3>
                      <p className="text-slate-600 leading-relaxed whitespace-pre-wrap mb-4">{study.solution}</p>
                      
                      {study.deliverables && study.deliverables.length > 0 && (
                        <ul className="list-disc pl-5 space-y-2 text-slate-600">
                          {study.deliverables.map((item, idx) => (
                            <li key={idx} className="leading-relaxed">{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                    
                    {study.impact && study.impact.length > 0 && (
                      <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm mt-8">
                        <h3 className="text-lg font-display font-bold text-slate-900 mb-6">Impact</h3>
                        <ul className="space-y-4 text-slate-600">
                          {study.impact.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <ArrowRight className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="text-center text-slate-500 py-12">
              {loading ? <div className="flex justify-center"><Loader2 className="w-8 h-8 animate-spin text-brand-blue" /></div> : 'No case studies found.'}
            </div>
          )}
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
