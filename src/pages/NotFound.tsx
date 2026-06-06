import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Home, ArrowLeft, AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[70vh] px-6 py-12 relative overflow-hidden bg-white">
      {/* Decorative background blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-brand-blue/5 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 left-1/3 w-[200px] h-[200px] bg-red-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-md w-full text-center flex flex-col items-center gap-6 z-10">
        {/* Animated Icon Container */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
          className="w-24 h-24 rounded-3xl bg-slate-50 border border-slate-100 flex items-center justify-center shadow-sm relative"
        >
          <AlertCircle className="w-12 h-12 text-slate-400" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
          </span>
        </motion.div>

        {/* 404 Typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-8xl md:text-9xl font-black tracking-tighter bg-gradient-to-r from-brand-blue via-slate-800 to-red-500 bg-clip-text text-transparent select-none">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 mt-2">
            Page Not Found
          </h2>
        </motion.div>

        {/* Explanation */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base text-slate-600 leading-relaxed"
        >
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let's get you back on track.
        </motion.p>

        {/* Navigation Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full mt-4"
        >
          <Link
            to="/"
            className="w-full sm:flex-1 py-3 px-6 rounded-xl bg-brand-blue hover:bg-brand-blue-hover text-white font-medium text-[15px] flex items-center justify-center gap-2 shadow-sm transition-all active:scale-[0.98] group"
          >
            <Home className="w-4 h-4" />
            <span>Go to Home</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="w-full sm:flex-1 py-3 px-6 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 font-medium text-[15px] flex items-center justify-center gap-2 border border-slate-200/60 transition-all active:scale-[0.98]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go Back</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
}
