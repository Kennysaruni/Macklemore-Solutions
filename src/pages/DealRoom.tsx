import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Zap, Settings, BookOpen, Loader2 } from "lucide-react";
import { useState } from "react";
import { supabase } from "../lib/supabase";
import emailjs from '@emailjs/browser';

export default function DealRoom() {
  const packages = [
    {
      id: "01",
      title: "Active Business Opportunities",
      icon: <Zap className="w-6 h-6 text-brand-cyan" />,
      description: "Current high-priority projects and procurement needs seeking immediate vendor or consultant involvement across our automation and security deployments.",
      includes: [
        "View active RFPs and open tenders",
        "Submit vendor pre-qualification frameworks",
        "Direct engagement with project leads",
        "Fast-tracked onboarding for verified specialists",
      ],
      idealFor: "Consultancies, specialized integrators, and software vendors ready to deploy solutions."
    },
    {
      id: "02",
      title: "Strategic Partnerships",
      icon: <Settings className="w-6 h-6 text-brand-blue" />,
      description: "Co-market, co-sell, or co-build with Macklemore Solutions. We are actively expanding our network of trusted integration and channel partners.",
      includes: [
        "Access to joint go-to-market resources",
        "Revenue-share frameworks and licensing deals",
        "Co-branded marketing and event collaboration",
        "Dedicated partner success manager",
      ],
      idealFor: "Managed service providers (MSPs), agencies, and advisory firms seeking to expand their offerings."
    },
    {
      id: "03",
      title: "Investment & Collaboration Deals",
      icon: <BookOpen className="w-6 h-6 text-purple-500" />,
      description: "Explore opportunities for deeper financial and structural alignment, including project-finance, joint ventures, and strategic investments in emerging automation IP.",
      includes: [
        "Review prospective joint ventures",
        "Access investment thesis outlines",
        "Direct access to our executive board",
        "Quarterly private briefings",
      ],
      idealFor: "Institutional investors, venture capital firms, and enterprise organizations seeking M&A or JV pathways."
    }
  ];

  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    try {
      // 1. Insert into Supabase
      const { error: dbError } = await supabase.from('messages').insert([
        formData
      ]);

      if (dbError) throw dbError;

      // 2. Send via EmailJS (using env variables if available, otherwise just mock success if not configured)
      // Note: User needs to configure VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY
      if (import.meta.env.VITE_EMAILJS_SERVICE_ID) {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
          {
            to_email: 'info@macklemoresolutions.com',
            from_name: formData.name,
            from_email: formData.email,
            company: formData.company,
            message: formData.message,
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''
        );
      }

      setStatus('success');
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus('error');
    } finally {
      setLoading(false);
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
            Macklemore Deal Room
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            The exclusive hub for high-impact collaborations. Access active business opportunities, register for strategic partnerships, and explore long-term investment and collaboration deals within the automation and AI sectors.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-50 border border-slate-200 rounded-3xl p-8 flex flex-col h-full shadow-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm">
                  {pkg.icon}
                </div>
                <div>
                  <div className="text-sm font-medium text-brand-cyan mb-1">Engagement Package {pkg.id}</div>
                  <h2 className="text-xl font-display font-bold text-slate-900 leading-tight">{pkg.title}</h2>
                </div>
              </div>
              
              <p className="text-slate-600 mb-8 flex-grow">{pkg.description}</p>
              
              <div className="mb-8">
                <h3 className="text-sm font-display font-semibold text-slate-900 uppercase tracking-wider mb-4">What is included:</h3>
                <ul className="space-y-3">
                  {pkg.includes.map((item, j) => (
                    <li key={j} className="flex gap-3 text-slate-700 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-5 mt-auto shadow-sm">
                <h3 className="text-sm font-display font-semibold text-slate-900 mb-2">Ideal for:</h3>
                <p className="text-slate-600 text-sm">{pkg.idealFor}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto mt-16 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
          <h2 className="text-2xl font-display font-bold text-slate-900 mb-6 text-center">Start the Conversation</h2>
          
          {status === 'success' && (
            <div className="mb-6 p-4 bg-green-50 text-green-800 rounded-lg border border-green-200 text-center">
              Thank you! Your message has been sent successfully. We will be in touch soon.
            </div>
          )}
          
          {status === 'error' && (
            <div className="mb-6 p-4 bg-red-50 text-red-800 rounded-lg border border-red-200 text-center">
              There was an error sending your message. Please try again later.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-brand-blue focus:border-brand-blue"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-brand-blue focus:border-brand-blue"
                  placeholder="john@company.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Company / Organization</label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-brand-blue focus:border-brand-blue"
                placeholder="Acme Corp"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-brand-blue focus:border-brand-blue"
                placeholder="Tell us about your project or partnership goals..."
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-brand-blue text-white font-medium hover:bg-brand-blue-hover shadow-md shadow-brand-blue/20 transition-all text-lg disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <>Submit Request <ArrowRight className="w-5 h-5" /></>}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
