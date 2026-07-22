import { motion } from "motion/react";

export default function LoadingSpinner() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[60vh] bg-white">
      <div className="relative flex items-center justify-center">
        {/* Outer Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 rounded-full border-4 border-slate-100 border-t-brand-blue"
        />
        {/* Inner Ring (anti-clockwise and smaller) */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="absolute w-8 h-8 rounded-full border-4 border-slate-100 border-t-red-500"
        />
      </div>
      <p className="mt-6 text-sm font-medium text-slate-500 tracking-wider uppercase animate-pulse">
        Loading...
      </p>
    </div>
  );
}
