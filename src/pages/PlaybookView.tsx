import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Download, BookOpen } from 'lucide-react';
import { useData } from '../context/DataContext';

export default function PlaybookView() {
  const { id } = useParams<{ id: string }>();
  const { playbooks, loading } = useData();
  const [playbook, setPlaybook] = useState<any>(null);

  useEffect(() => {
    if (!loading && playbooks.length > 0) {
      const found = playbooks.find(p => p.id === id);
      setPlaybook(found || null);
    }
  }, [id, playbooks, loading]);

  if (loading) {
    return (
      <div className="min-h-screen pt-36 pb-24 flex justify-center items-center bg-slate-50">
        <p className="text-xl text-slate-500">Loading playbook...</p>
      </div>
    );
  }

  if (!playbook) {
    return (
      <div className="min-h-screen pt-36 pb-24 flex flex-col justify-center items-center bg-slate-50">
        <h1 className="text-3xl font-display font-bold text-slate-900 mb-4">Playbook Not Found</h1>
        <p className="text-slate-600 mb-8">The AI playbook you're looking for doesn't exist or has been removed.</p>
        <Link to="/playbooks" className="px-6 py-3 rounded-full bg-brand-blue text-white font-medium hover:bg-brand-blue-hover transition-colors">
          Back to Playbooks
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link to="/playbooks" className="inline-flex items-center text-brand-blue font-medium hover:text-blue-700 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to all playbooks
          </Link>

          <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm mb-8">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="w-full md:w-1/3 shrink-0">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-inner relative group">
                  {playbook.image_url ? (
                    <img 
                      src={playbook.image_url} 
                      alt={playbook.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400">
                      <BookOpen className="w-16 h-16 opacity-20" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none opacity-60"></div>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg text-brand-blue">
                    <BookOpen className="w-6 h-6" />
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="text-xs font-bold tracking-wider uppercase text-brand-blue bg-brand-blue/10 px-3 py-1.5 rounded-md">
                    AI Playbook
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-display font-bold text-slate-900 leading-tight mb-6">
                  {playbook.title}
                </h1>
                
                <div className="prose prose-lg text-slate-600 mb-8 whitespace-pre-wrap">
                  {playbook.description}
                </div>
                
                {playbook.content && (
                  <div className="prose prose-lg text-slate-700 mb-8 whitespace-pre-wrap">
                    {playbook.content}
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={playbook.download_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-brand-blue text-white font-bold hover:bg-brand-blue-hover transition-colors shadow-sm"
                  >
                    <Download className="w-5 h-5 mr-2" /> Download Playbook
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm h-[800px]">
            <iframe 
              src={playbook.download_url} 
              className="w-full h-full border-0"
              title={playbook.title}
            >
              <p>Your browser does not support iframes. <a href={playbook.download_url}>Download the PDF</a>.</p>
            </iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
