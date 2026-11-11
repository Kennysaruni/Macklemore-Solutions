import { Link } from 'react-router-dom';
import { useJobs, useTeam, useBlogs, useCaseStudies } from '../../context/DataContext';
import {
  UserPlus,
  Users,
  FileText,
  Briefcase,
  ArrowRight,
  ExternalLink,
  Plus
} from 'lucide-react';

export default function AdminDashboard() {
  const { jobs } = useJobs();
  const { team } = useTeam();
  const { blogs } = useBlogs();
  const { caseStudies } = useCaseStudies();

  const activeJobs = jobs.filter(j => j.is_active).length;

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-display font-bold text-slate-900 mb-1">
            Welcome to the Admin Portal
          </h2>
          <p className="text-slate-600 text-sm">
            Manage your site content, team, case studies, and career openings.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            to="/careers/positions"
            target="_blank"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-brand-blue hover:bg-slate-50 transition-colors text-sm font-medium shadow-xs"
          >
            <span>Live Careers Page</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
          <Link
            to="/admin/jobs"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-blue text-white hover:bg-brand-blue-hover transition-colors text-sm font-medium shadow-xs shadow-brand-blue/20"
          >
            <Plus className="w-4 h-4" />
            Post a Job
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Job Openings Card */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-4">
              <UserPlus className="w-5 h-5" />
            </div>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
              Careers & Recruiting
            </span>
            <h3 className="font-display font-bold text-2xl text-slate-900 mb-1">
              {jobs.length} Positions
            </h3>
            <p className="text-slate-500 text-xs">
              {activeJobs} currently active on public site
            </p>
          </div>
          <div className="pt-4 mt-4 border-t border-slate-100">
            <Link
              to="/admin/jobs"
              className="text-sm font-medium text-brand-blue hover:underline inline-flex items-center gap-1"
            >
              Manage Openings <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Team Members Card */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
              <Users className="w-5 h-5" />
            </div>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
              Leadership & Team
            </span>
            <h3 className="font-display font-bold text-2xl text-slate-900 mb-1">
              {team.length} Members
            </h3>
            <p className="text-slate-500 text-xs">
              Profiles published on About page
            </p>
          </div>
          <div className="pt-4 mt-4 border-t border-slate-100">
            <Link
              to="/admin/team"
              className="text-sm font-medium text-brand-blue hover:underline inline-flex items-center gap-1"
            >
              Manage Team <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Blog Posts Card */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <FileText className="w-5 h-5" />
            </div>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
              Blog & Articles
            </span>
            <h3 className="font-display font-bold text-2xl text-slate-900 mb-1">
              {blogs.length} Articles
            </h3>
            <p className="text-slate-500 text-xs">
              Insights & thought leadership
            </p>
          </div>
          <div className="pt-4 mt-4 border-t border-slate-100">
            <Link
              to="/admin/blog"
              className="text-sm font-medium text-brand-blue hover:underline inline-flex items-center gap-1"
            >
              Manage Blog <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Case Studies Card */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
              <Briefcase className="w-5 h-5" />
            </div>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
              Client Transformations
            </span>
            <h3 className="font-display font-bold text-2xl text-slate-900 mb-1">
              {caseStudies.length} Case Studies
            </h3>
            <p className="text-slate-500 text-xs">
              Verified client outcomes & metrics
            </p>
          </div>
          <div className="pt-4 mt-4 border-t border-slate-100">
            <Link
              to="/admin/case-studies"
              className="text-sm font-medium text-brand-blue hover:underline inline-flex items-center gap-1"
            >
              Manage Case Studies <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
