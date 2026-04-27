import { motion } from "motion/react";
import { ArrowRight, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { supabase } from "../lib/supabase";
import emailjs from '@emailjs/browser';

export default function Contact() {
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

      // 2. Send via EmailJS
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
    <div className="flex flex-col pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-16 text-center mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Ready to optimize your operations? Contact us today to discuss how Macklemore Solutions can help drive growth and efficiency for your business.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1 space-y-8"
          >
            <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm h-full transition-shadow hover:shadow-md">
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 mb-1">Email Us</p>
                    <a href="mailto:info@macklemoresolutions.com" className="text-slate-600 hover:text-brand-blue transition-colors">
                      info@macklemoresolutions.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-brand-cyan" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 mb-1">Call Us</p>
                    <p className="text-slate-600">
                      Available Mon-Fri, 9am-6pm EST
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 mb-1">Office</p>
                    <p className="text-slate-600 leading-relaxed">
                      Global Operations Center
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">Send us a Message</h2>
              
              {status === 'success' && (
                <div className="mb-8 p-4 bg-green-50 text-green-800 rounded-xl border border-green-200 flex items-center justify-center">
                  Thank you! Your message has been sent successfully. We will be in touch soon.
                </div>
              )}
              
              {status === 'error' && (
                <div className="mb-8 p-4 bg-red-50 text-red-800 rounded-xl border border-red-200 flex items-center justify-center">
                  There was an error sending your message. Please try again later.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-4 border border-slate-300 rounded-xl focus:ring-brand-blue focus:border-brand-blue bg-slate-50 focus:bg-white transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-4 border border-slate-300 rounded-xl focus:ring-brand-blue focus:border-brand-blue bg-slate-50 focus:bg-white transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Company / Organization</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-5 py-4 border border-slate-300 rounded-xl focus:ring-brand-blue focus:border-brand-blue bg-slate-50 focus:bg-white transition-colors"
                    placeholder="Acme Corp"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-4 border border-slate-300 rounded-xl focus:ring-brand-blue focus:border-brand-blue bg-slate-50 focus:bg-white transition-colors"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-brand-blue text-white font-medium hover:bg-brand-blue-hover shadow-md shadow-brand-blue/20 transition-all text-lg disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                  >
                    {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <>Send Message <ArrowRight className="w-5 h-5" /></>}
                  </button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
