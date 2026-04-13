import { motion } from "motion/react";
import { ArrowRight, CreditCard, Ticket, GraduationCap, Building2 } from "lucide-react";

export default function PaymentHub() {
  return (
    <div className="flex flex-col pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Payment Hub
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Secure, streamlined payment management for Macklemore Solutions subscriptions, service engagements, and training programs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-sm flex flex-col"
          >
            <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-6">
              <CreditCard className="w-6 h-6 text-brand-blue" />
            </div>
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">Service Payments</h2>
            <p className="text-slate-600 mb-8 flex-grow">
              Pay invoices for completed milestones, engagement packages, and one-off consulting services quickly and securely.
            </p>
            <button className="w-full py-3 rounded-lg bg-brand-blue text-white font-medium hover:bg-brand-blue-hover transition-colors shadow-sm">
              Pay Invoice
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-brand-blue border border-brand-blue/20 rounded-2xl p-8 shadow-md flex flex-col text-white"
          >
            <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center mb-6">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-display font-bold mb-4">Subscription Plans</h2>
            <p className="text-white/80 mb-8 flex-grow">
              Manage your ongoing automation infrastructure and managed security subscriptions. Upgrade, downgrade, or review billing history.
            </p>
            <button className="w-full py-3 rounded-lg bg-white text-brand-blue font-medium hover:bg-white/90 transition-colors shadow-sm">
              Manage Subscription
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-sm flex flex-col"
          >
            <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-6">
              <Ticket className="w-6 h-6 text-brand-cyan" />
            </div>
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">Discounts & Offers</h2>
            <p className="text-slate-600 mb-8 flex-grow">
              Claim approved discounts for students, academic institutions, and qualified non-profit organizations on our AI Education programs.
            </p>
            <button className="w-full py-3 rounded-lg bg-white border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-colors shadow-sm">
              Apply Discount Code
            </button>
          </motion.div>
        </div>

        <div className="bg-slate-900 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/20 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-blue/20 blur-[100px] rounded-full pointer-events-none"></div>
          
          <h2 className="text-3xl font-display font-bold mb-4 relative z-10">Academic & Training Discounts</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg relative z-10">
            Are you a student or faculty member accessing our AI Education programs? Speak to our team to ensure your institutional discount is applied before checkout.
          </p>
          <button className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-brand-blue text-white font-medium hover:bg-brand-blue-hover transition-colors shadow-lg shadow-brand-blue/20 relative z-10">
            Verify Academic Status <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
