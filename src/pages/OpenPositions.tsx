import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  MapPin,
  Clock,
  GraduationCap,
  Sparkles,
  Search,
  Filter,
  CheckCircle2,
  X,
  Send,
  Building,
  DollarSign,
  ChevronRight,
  Mail,
  Loader2,
  Globe,
  Share2
} from "lucide-react";
import { useJobs, JobOpening } from "../context/DataContext";
import { supabase } from "../lib/supabase";

export default function OpenPositions() {
  const { jobs, loading } = useJobs();

  // Search & Filter state
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  // Modal states
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [applyingJobTitle, setApplyingJobTitle] = useState<string>("General Application");

  // Application form state
  const [applicantName, setApplicantName] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");
  const [applicantPhone, setApplicantPhone] = useState("");
  const [applicantPortfolio, setApplicantPortfolio] = useState("");
  const [applicantResumeUrl, setApplicantResumeUrl] = useState("");
  const [applicantNote, setApplicantNote] = useState("");
  const [applicantExperience, setApplicantExperience] = useState("Mid-level");
  const [submitting, setSubmitting] = useState(false);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);

  // Extract unique departments & locations from active jobs
  const departments = useMemo(() => {
    const list = jobs.filter(j => j.is_active).map(j => j.department);
    return Array.from(new Set(list));
  }, [jobs]);

  const locations = useMemo(() => {
    const list = jobs.filter(j => j.is_active).map(j => j.location);
    return Array.from(new Set(list));
  }, [jobs]);

  // Filtered active jobs
  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      if (!job.is_active) return false;

      const matchesSearch =
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (job.requirements && job.requirements.some(r => r.toLowerCase().includes(searchTerm.toLowerCase())));

      const matchesDepartment =
        selectedDepartment === "all" || job.department.toLowerCase() === selectedDepartment.toLowerCase();

      const matchesLocation =
        selectedLocation === "all" || job.location.toLowerCase() === selectedLocation.toLowerCase();

      const matchesType =
        selectedType === "all" || job.type.toLowerCase() === selectedType.toLowerCase();

      return matchesSearch && matchesDepartment && matchesLocation && matchesType;
    });
  }, [jobs, searchTerm, selectedDepartment, selectedLocation, selectedType]);

  const activeJobCount = useMemo(() => jobs.filter(j => j.is_active).length, [jobs]);

  const openApplyModal = (jobTitle?: string) => {
    setApplyingJobTitle(jobTitle || "General Application");
    setApplicationSubmitted(false);
    setIsApplyModalOpen(true);
  };

  const handleApplicationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName || !applicantEmail) return;

    setSubmitting(true);
    try {
      const applicationPayload = {
        name: applicantName,
        email: applicantEmail,
        company: `Job Application: ${applyingJobTitle}`,
        message: `Phone: ${applicantPhone || 'N/A'}\nExperience: ${applicantExperience}\nPortfolio / LinkedIn: ${applicantPortfolio || 'N/A'}\nResume/Link: ${applicantResumeUrl || 'N/A'}\n\nCover Note:\n${applicantNote || 'None provided'}`
      };

      // 1. Attempt to insert into Supabase messages table
      try {
        await supabase.from('messages').insert([applicationPayload]);
      } catch (err) {
        console.warn("Could not save to Supabase messages:", err);
      }

      // 2. Also save to local storage for offline records
      try {
        const saved = JSON.parse(localStorage.getItem('macklemore_applications') || '[]');
        saved.push({
          ...applicationPayload,
          id: `app-${Date.now()}`,
          created_at: new Date().toISOString()
        });
        localStorage.setItem('macklemore_applications', JSON.stringify(saved));
      } catch { }

      setApplicationSubmitted(true);
      // Reset form fields
      setApplicantName("");
      setApplicantEmail("");
      setApplicantPhone("");
      setApplicantPortfolio("");
      setApplicantResumeUrl("");
      setApplicantNote("");
    } catch (err) {
      console.error("Error submitting application:", err);
      alert("There was an issue submitting your application. Please email careers@macklemoresolutions.com directly.");
    } finally {
      setSubmitting(false);
    }
  };

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedDepartment("all");
    setSelectedLocation("all");
    setSelectedType("all");
  };

  return (
    <div className="flex flex-col pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 w-full">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            to="/careers"
            className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-brand-blue transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Careers Overview
          </Link>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-12 border-b border-slate-100">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 mb-6 leading-tight">
              Open Positions
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Explore opportunities to build autonomous systems, enterprise automation, and secure AI infrastructure with our multidisciplinary teams across North America and West Africa.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0"
          >
            <button
              onClick={() => openApplyModal("General Application")}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors shadow-sm text-sm"
            >
              Submit Open Application <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>

        {/* Culture & Value Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {[
            { icon: <Globe className="w-5 h-5 text-brand-blue" />, title: "Remote & Hybrid", desc: "Collaborate globally with flexibility" },
            { icon: <Briefcase className="w-5 h-5 text-indigo-500" />, title: "Enterprise Impact", desc: "Build systems that run real institutions" },
            { icon: <GraduationCap className="w-5 h-5 text-emerald-500" />, title: "Continuous Growth", desc: "Mentorship, certs, and skill advancement" },
            { icon: <Sparkles className="w-5 h-5 text-amber-500" />, title: "Cutting-Edge AI", desc: "Hands-on with modern LLMs and agent frameworks" },
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/60 shadow-xs flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-900 leading-snug">{item.title}</h4>
                <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 mb-12 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Search Input */}
            <div className="md:col-span-4 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by title, skill, or keyword..."
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Department Filter */}
            <div className="md:col-span-3">
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
              >
                <option value="all">All Departments</option>
                <option value="AI & Automation">AI & Automation</option>
                <option value="Cybersecurity">Cybersecurity</option>
                <option value="Software Engineering">Software Engineering</option>
                <option value="Operations & Delivery">Operations & Delivery</option>
                <option value="Student & Internships">Student & Internships</option>
                {departments.map((dept) => (
                  !["ai & automation", "cybersecurity", "software engineering", "operations & delivery", "student & internships"].includes(dept.toLowerCase()) && (
                    <option key={dept} value={dept}>{dept}</option>
                  )
                ))}
              </select>
            </div>

            {/* Location Filter */}
            <div className="md:col-span-3">
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
              >
                <option value="all">All Locations</option>
                <option value="Remote">Remote</option>
                <option value="Wesley Chapel, FL">Wesley Chapel, FL (Hybrid)</option>
                <option value="Toronto, ON">Toronto, ON (Hybrid)</option>
                <option value="Lagos, Nigeria">Lagos, Nigeria (Hybrid)</option>
                {locations.map((loc) => (
                  !["remote", "wesley chapel, fl", "toronto, on", "lagos, nigeria"].includes(loc.toLowerCase()) && (
                    <option key={loc} value={loc}>{loc}</option>
                  )
                ))}
              </select>
            </div>

            {/* Type Filter */}
            <div className="md:col-span-2">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
              >
                <option value="all">All Types</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </select>
            </div>
          </div>

          {/* Active filters notice / clear button */}
          {(searchTerm || selectedDepartment !== "all" || selectedLocation !== "all" || selectedType !== "all") && (
            <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
              <span>
                Filtering results — showing {filteredJobs.length} of {activeJobCount} active roles
              </span>
              <button
                onClick={resetFilters}
                className="text-brand-blue hover:underline font-medium inline-flex items-center gap-1"
              >
                Clear all filters <X className="w-3 h-3" />
              </button>
            </div>
          )}
        </div>

        {/* Loading Spinner */}
        {loading && (
          <div className="py-24 text-center">
            <Loader2 className="w-8 h-8 animate-spin text-brand-blue mx-auto mb-4" />
            <p className="text-slate-500 text-sm">Loading available opportunities...</p>
          </div>
        )}

        {/* Results Section */}
        {!loading && (
          <>
            {filteredJobs.length > 0 ? (
              <div className="space-y-6 mb-20">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-display font-semibold text-slate-900">
                    Open Roles ({filteredJobs.length})
                  </h2>
                  <span className="text-xs text-slate-500">
                    Updated regularly by the Macklemore team
                  </span>
                </div>

                <div className="grid gap-6">
                  {filteredJobs.map((job) => (
                    <motion.div
                      key={job.id}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -2 }}
                      className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200/90 hover:border-brand-blue/40 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                    >
                      <div>
                        {/* Tags / Badges */}
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-blue/10 text-brand-blue">
                            {job.department}
                          </span>
                          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700">
                            <MapPin className="w-3 h-3 text-slate-400" />
                            {job.location}
                          </span>
                          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700">
                            <Clock className="w-3 h-3 text-slate-400" />
                            {job.type}
                          </span>
                          {job.experience_level && (
                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700">
                              <GraduationCap className="w-3 h-3 text-slate-400" />
                              {job.experience_level}
                            </span>
                          )}
                          {job.salary_range && (
                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/50">
                              <DollarSign className="w-3 h-3" />
                              {job.salary_range}
                            </span>
                          )}
                        </div>

                        {/* Title & Description */}
                        <h3 className="text-2xl font-display font-bold text-slate-900 mb-3 hover:text-brand-blue transition-colors">
                          {job.title}
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                          {job.description}
                        </p>

                        {/* Key Requirements preview */}
                        {job.requirements && job.requirements.length > 0 && (
                          <div className="mb-6">
                            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">
                              Key Requirements:
                            </span>
                            <div className="flex flex-wrap gap-2">
                              {job.requirements.slice(0, 4).map((req, idx) => (
                                <span
                                  key={idx}
                                  className="inline-flex items-center text-xs px-2.5 py-1 rounded-md bg-slate-50 text-slate-600 border border-slate-200/60"
                                >
                                  {req}
                                </span>
                              ))}
                              {job.requirements.length > 4 && (
                                <span className="inline-flex items-center text-xs px-2 py-1 text-slate-400">
                                  +{job.requirements.length - 4} more
                                </span>
                              )}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Footer Actions */}
                      <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                        <span className="text-xs text-slate-400">
                          Posted: {new Date(job.created_at).toLocaleDateString()}
                        </span>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => setSelectedJob(job)}
                            className="px-4 py-2 rounded-xl text-sm font-medium text-slate-700 hover:text-brand-blue hover:bg-slate-50 border border-slate-200 transition-colors"
                          >
                            View Role Details
                          </button>
                          <button
                            onClick={() => openApplyModal(job.title)}
                            className="px-5 py-2 rounded-xl text-sm font-medium bg-brand-blue hover:bg-brand-blue-hover text-white shadow-xs shadow-brand-blue/20 transition-all flex items-center gap-1.5"
                          >
                            Apply Now <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ) : (
              /* EMPTY STATE: follows site aesthetic */
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gradient-to-b from-slate-50 to-white border border-slate-200 rounded-3xl p-10 md:p-16 text-center max-w-3xl mx-auto shadow-xs mb-20 relative overflow-hidden"
              >
                {/* Decorative background glows */}
                <div className="absolute top-0 right-1/4 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center mx-auto mb-6 text-brand-blue shadow-inner">
                    <Briefcase className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900 mb-3">
                    {activeJobCount === 0 ? "No Open Positions at the Moment" : "No Positions Match Your Filters"}
                  </h3>

                  <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-8">
                    {activeJobCount === 0
                      ? "We do not have any published vacancies right now, but our teams are continually growing. We actively review prospective talent across AI engineering, systems automation, cybersecurity, and operations."
                      : "We couldn't find any listings matching your selected search criteria. Try modifying your filters or clear them to view all opportunities."}
                  </p>

                  <div className="flex flex-wrap justify-center items-center gap-4">
                    {activeJobCount > 0 && (searchTerm || selectedDepartment !== "all" || selectedLocation !== "all" || selectedType !== "all") ? (
                      <button
                        onClick={resetFilters}
                        className="px-6 py-3 rounded-full bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors text-sm"
                      >
                        Reset All Filters
                      </button>
                    ) : (
                      <button
                        onClick={() => openApplyModal("General Application")}
                        className="px-7 py-3.5 rounded-full bg-brand-blue text-white font-medium hover:bg-brand-blue-hover shadow-md shadow-brand-blue/20 transition-all text-sm inline-flex items-center gap-2"
                      >
                        Submit an Open Application <ArrowRight className="w-4 h-4" />
                      </button>
                    )}

                    <a
                      href="mailto:careers@macklemoresolutions.com"
                      className="px-6 py-3.5 rounded-full bg-white text-slate-700 font-medium hover:bg-slate-50 border border-slate-200 transition-colors text-sm inline-flex items-center gap-2"
                    >
                      <Mail className="w-4 h-4 text-slate-400" />
                      Email Recruitment Team
                    </a>
                  </div>
                </div>
              </motion.div>
            )}

            {/* General Talent Pool Banner (Always visible) */}
            <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 mb-20 relative overflow-hidden">
              <div className="relative z-10 max-w-3xl">
                <span className="text-brand-blue text-xs font-semibold uppercase tracking-wider block mb-2">
                  General Talent Pool
                </span>
                <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
                  Don’t see the exact role you're looking for?
                </h3>
                <p className="text-slate-300 text-base leading-relaxed mb-6">
                  We are always on the lookout for motivated engineers, problem-solvers, students, and consultants. Submit your CV and tell us where your passion lies—we review unsolicited applications for upcoming projects.
                </p>
                <button
                  onClick={() => openApplyModal("General Application")}
                  className="px-7 py-3 rounded-full bg-white text-slate-900 font-medium hover:bg-slate-100 transition-colors text-sm inline-flex items-center gap-2"
                >
                  Send Us Your CV <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 opacity-10 pointer-events-none">
                <Sparkles className="w-96 h-96" />
              </div>
            </div>

            {/* Career Pathways Recap */}
            <div className="border-t border-slate-100 pt-16">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-brand-blue text-xs font-semibold uppercase tracking-wider block mb-2">
                  Paths for Every Level
                </span>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900 mb-3">
                  Our Career Pathways
                </h3>
                <p className="text-slate-600 text-sm">
                  Whether you are just beginning or already an established leader, Macklemore Solutions offers structured progression.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: <GraduationCap className="w-5 h-5 text-brand-cyan" />,
                    title: "Student Programs",
                    desc: "High school & university students gaining practical AI experience, foundational mentorship, and certified workshops."
                  },
                  {
                    icon: <Briefcase className="w-5 h-5 text-brand-blue" />,
                    title: "Internships",
                    desc: "Recent graduates immersing in live client automation, enterprise system architecture, and hands-on coaching."
                  },
                  {
                    icon: <Building className="w-5 h-5 text-indigo-500" />,
                    title: "Entry-Level Roles",
                    desc: "Early-career professionals shipping production code, optimizing workflows, and preparing for senior leadership."
                  },
                  {
                    icon: <Sparkles className="w-5 h-5 text-purple-500" />,
                    title: "Experienced Talent",
                    desc: "Principal architects, security specialists, and leads designing high-scale transformations for institutions."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/70">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-4 shadow-xs">
                      {item.icon}
                    </div>
                    <h4 className="text-base font-display font-bold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Role Details Modal */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 relative"
            >
              <div className="sticky top-0 bg-white/95 backdrop-blur-xs px-6 md:px-8 py-5 border-b border-slate-100 flex items-center justify-between z-10">
                <div>
                  <span className="text-xs font-semibold text-brand-blue uppercase tracking-wider">
                    {selectedJob.department}
                  </span>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-slate-900">
                    {selectedJob.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 md:p-8 space-y-8">
                {/* Meta details */}
                <div className="flex flex-wrap gap-3 pb-6 border-b border-slate-100">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200/80 text-xs text-slate-700">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {selectedJob.location}
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200/80 text-xs text-slate-700">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {selectedJob.type}
                  </div>
                  {selectedJob.experience_level && (
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200/80 text-xs text-slate-700">
                      <GraduationCap className="w-3.5 h-3.5 text-slate-400" />
                      {selectedJob.experience_level}
                    </div>
                  )}
                  {selectedJob.salary_range && (
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 font-medium">
                      <DollarSign className="w-3.5 h-3.5" />
                      {selectedJob.salary_range}
                    </div>
                  )}
                </div>

                {/* Description */}
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">
                    About The Role
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">
                    {selectedJob.description}
                  </p>
                </div>

                {/* Responsibilities */}
                {selectedJob.responsibilities && selectedJob.responsibilities.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-2.5">
                      {selectedJob.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Requirements */}
                {selectedJob.requirements && selectedJob.requirements.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">
                      Qualifications & Requirements
                    </h4>
                    <ul className="space-y-2.5">
                      {selectedJob.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Benefits */}
                {selectedJob.benefits && selectedJob.benefits.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">
                      What We Offer
                    </h4>
                    <ul className="space-y-2.5">
                      {selectedJob.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Modal footer */}
              <div className="sticky bottom-0 bg-slate-50 px-6 md:px-8 py-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-slate-500">
                  Questions? Contact <a href="mailto:careers@macklemoresolutions.com" className="text-brand-blue hover:underline">careers@macklemoresolutions.com</a>
                </span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setSelectedJob(null)}
                    className="px-5 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-200/60 transition-colors"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      const title = selectedJob.title;
                      setSelectedJob(null);
                      openApplyModal(title);
                    }}
                    className="px-6 py-2.5 rounded-xl text-sm font-medium bg-brand-blue hover:bg-brand-blue-hover text-white shadow-sm shadow-brand-blue/20 transition-all flex items-center gap-2"
                  >
                    Apply for this Role <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Application Form Modal */}
      <AnimatePresence>
        {isApplyModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 relative"
            >
              <div className="sticky top-0 bg-white px-6 py-5 border-b border-slate-100 flex items-center justify-between z-10">
                <div>
                  <span className="text-xs font-semibold text-brand-blue uppercase tracking-wider">
                    Application Form
                  </span>
                  <h3 className="text-xl font-display font-bold text-slate-900">
                    Applying for: {applyingJobTitle}
                  </h3>
                </div>
                <button
                  onClick={() => setIsApplyModalOpen(false)}
                  className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {applicationSubmitted ? (
                <div className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-display font-bold text-slate-900">
                    Application Received!
                  </h4>
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you for applying to Macklemore Solutions. Our recruitment and technical leads review applications thoroughly. If your profile aligns with our needs, we will reach out via email.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setIsApplyModalOpen(false)}
                      className="px-6 py-2.5 rounded-full bg-brand-blue text-white font-medium hover:bg-brand-blue-hover transition-colors text-sm"
                    >
                      Done
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleApplicationSubmit} className="p-6 md:p-8 space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={applicantEmail}
                        onChange={(e) => setApplicantEmail(e.target.value)}
                        placeholder="alex@example.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={applicantPhone}
                        onChange={(e) => setApplicantPhone(e.target.value)}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Experience Level
                      </label>
                      <select
                        value={applicantExperience}
                        onChange={(e) => setApplicantExperience(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                      >
                        <option value="Student / Intern">Student / Intern</option>
                        <option value="Entry-level">Entry-level (0-2 years)</option>
                        <option value="Mid-level">Mid-level (3-5 years)</option>
                        <option value="Senior">Senior (6+ years)</option>
                        <option value="Lead / Executive">Lead / Executive</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Portfolio / LinkedIn URL
                      </label>
                      <input
                        type="url"
                        value={applicantPortfolio}
                        onChange={(e) => setApplicantPortfolio(e.target.value)}
                        placeholder="https://linkedin.com/in/..."
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Resume / CV Link (Google Drive, Dropbox, GitHub)
                    </label>
                    <input
                      type="url"
                      value={applicantResumeUrl}
                      onChange={(e) => setApplicantResumeUrl(e.target.value)}
                      placeholder="https://drive.google.com/file/..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                    />
                    <p className="text-[11px] text-slate-400 mt-1">
                      Ensure your link is viewable by anyone with the link.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Brief Note / Why Macklemore?
                    </label>
                    <textarea
                      rows={3}
                      value={applicantNote}
                      onChange={(e) => setApplicantNote(e.target.value)}
                      placeholder="Tell us about yourself, your background, or what interests you in this role..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue resize-none"
                    />
                  </div>

                  <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => setIsApplyModalOpen(false)}
                      className="px-5 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-100 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="px-6 py-2.5 rounded-xl text-sm font-medium bg-brand-blue hover:bg-brand-blue-hover text-white shadow-sm shadow-brand-blue/20 transition-all flex items-center gap-2 disabled:opacity-50"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" /> Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" /> Submit Application
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

