import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Briefcase, Users, Star } from "lucide-react";

export default function Careers() {
  return (
    <div className="flex flex-col pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Who We Are
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            Macklemore Solutions is an AI and Automation Infrastructure Company delivering intelligent operational systems and enterprise-grade security frameworks. We cultivate talent through structured programs for students, interns, and professionals, equipping them with skills in AI, automation, and cybersecurity to contribute to real-world institutional impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-display font-bold text-white mb-8">Career Pathways at Macklemore Solutions</h2>
            <div className="space-y-8">
              {[
                {
                  icon: <GraduationCap className="w-5 h-5 text-cyan-400" />,
                  title: "Student Programs",
                  desc: "High school, college, or university students – Foundational training, mentorship, and AI skill-building"
                },
                {
                  icon: <Briefcase className="w-5 h-5 text-blue-400" />,
                  title: "Internships",
                  desc: "Graduates and newcomers to tech – Project experience, coaching, and exposure to enterprise systems"
                },
                {
                  icon: <Users className="w-5 h-5 text-indigo-400" />,
                  title: "Entry-Level Roles",
                  desc: "Early-career professionals – Real work on AI and automation projects, peer mentoring, job readiness"
                },
                {
                  icon: <Star className="w-5 h-5 text-purple-400" />,
                  title: "Experienced Talent",
                  desc: "Tech professionals – Lead projects, drive AI and automation innovation, and mentor others"
                }
              ].map((path, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-navy-800 border border-white/10 flex items-center justify-center shrink-0">
                    {path.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-semibold text-white mb-1">{path.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{path.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-navy-800 border border-white/5 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-display font-bold text-white mb-6">Why Join Macklemore Solutions?</h2>
            <p className="text-slate-300 mb-8">Work on meaningful, global AI and automation projects</p>
            
            <ul className="space-y-6">
              {[
                "Hybrid & remote work flexibility",
                "Access to structured training and AI certifications",
                "Diverse, inclusive, and collaborative team environment",
                "Opportunities for measurable professional growth"
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                  </div>
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="text-center">
          <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-navy-900 font-medium hover:bg-slate-100 transition-colors">
            View Open Positions <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
