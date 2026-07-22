import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Briefcase, Users, Star } from "lucide-react";

export default function Careers() {
  return (
    <div className="flex flex-col pt-32 pb-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex-1"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
              Careers
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">


Build your future with real projects, real mentorship, and real impact.


At Macklemore Solutions, we create opportunities for students, interns, and professionals to grow through hands on experience in AI, automation, cybersecurity, software, and digital operations.


Our career programs are designed to help emerging talent build practical skills, work on real business challenges, and develop the confidence needed to contribute in modern technology environments.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex-1 w-full relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=75" alt="Team collaborating in a modern office" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-brand-cyan/10 mix-blend-multiply pointer-events-none"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-blue/20 rounded-full blur-2xl pointer-events-none"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-cyan/20 rounded-full blur-2xl pointer-events-none"></div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0, transition: { staggerChildren: 0.1 } }
            }}
          >
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-8">Career Pathways at Macklemore Solutions</h2>
            <div className="space-y-8">
              {[
                {
                  icon: <GraduationCap className="w-5 h-5 text-brand-cyan" />,
                  title: "Student Programs",
                  desc: "High school, college, or university students – Foundational training, mentorship, and AI skill-building"
                },
                {
                  icon: <Briefcase className="w-5 h-5 text-brand-blue" />,
                  title: "Internships",
                  desc: "Graduates and newcomers to tech – Project experience, coaching, and exposure to enterprise systems"
                },
                {
                  icon: <Users className="w-5 h-5 text-indigo-500" />,
                  title: "Entry-Level Roles",
                  desc: "Early-career professionals – Real work on AI and automation projects, peer mentoring, job readiness"
                },
                {
                  icon: <Star className="w-5 h-5 text-purple-500" />,
                  title: "Experienced Talent",
                  desc: "Tech professionals – Lead projects, drive AI and automation innovation, and mentor others"
                }
              ].map((path, i) => (
                <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} key={i} className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                  <div className="w-12 h-12 rounded-lg bg-white border border-slate-200 shadow-sm flex items-center justify-center shrink-0">
                    {path.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-semibold text-slate-900 mb-1">{path.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{path.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow h-fit"
          >
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">Why Join Macklemore Solutions?</h2>

            <ul className="space-y-6">
              {[
                "Work on meaningful, global AI and automation projects",
                "Hybrid & remote work flexibility",
                "Access to structured training and AI certifications",
                "Diverse, inclusive, and collaborative team environment",
                "Opportunities for measurable professional growth"
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-brand-cyan/20 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-brand-cyan rounded-full" />
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="text-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-brand-blue text-white font-medium hover:bg-brand-blue-hover shadow-md shadow-brand-blue/20 transition-all text-lg">
              View Open Positions <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
