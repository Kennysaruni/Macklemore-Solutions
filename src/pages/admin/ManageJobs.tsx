import React, { useState } from 'react';
import { useJobs, JobOpening } from '../../context/DataContext';
import {
  Briefcase,
  Plus,
  Trash2,
  Eye,
  CheckCircle2,
  XCircle,
  AlertCircle,
  ExternalLink,
  Loader2,
  Layers,
  MapPin,
  Clock,
  DollarSign,
  GraduationCap,
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
  X
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ManageJobs() {
  const { jobs, loading: jobsLoading, addJob, updateJob, deleteJob } = useJobs();

  // Form states
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Form fields
  const [title, setTitle] = useState('');
  const [department, setDepartment] = useState('AI & Automation');
  const [customDepartment, setCustomDepartment] = useState('');
  const [location, setLocation] = useState('Remote');
  const [customLocation, setCustomLocation] = useState('');
  const [type, setType] = useState('Full-time');
  const [experienceLevel, setExperienceLevel] = useState('Mid-level');
  const [salaryRange, setSalaryRange] = useState('');
  const [description, setDescription] = useState('');
  const [requirementsText, setRequirementsText] = useState('');
  const [responsibilitiesText, setResponsibilitiesText] = useState('');
  const [benefitsText, setBenefitsText] = useState(
    'Flexible remote & hybrid working options\nCompetitive compensation & performance bonuses\nProfessional development budget & AI certifications\nAccess to modern enterprise AI infrastructure & tooling'
  );
  const [isActive, setIsActive] = useState(true);

  // SQL guide drawer state
  const [showSqlGuide, setShowSqlGuide] = useState(false);
  const [copiedSql, setCopiedSql] = useState(false);

  // Preview modal
  const [previewJob, setPreviewJob] = useState<JobOpening | null>(null);

  // Filter state
  const [filterStatus, setFilterStatus] = useState<'all' | 'active' | 'inactive'>('all');
  const [searchFilter, setSearchFilter] = useState('');

  const sqlSchema = `-- Supabase Table Schema for Macklemore Jobs
create table if not exists public.jobs (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  department text not null,
  location text not null,
  type text not null default 'Full-time',
  experience_level text default 'Mid-level',
  salary_range text,
  description text not null,
  responsibilities jsonb default '[]'::jsonb,
  requirements jsonb default '[]'::jsonb,
  benefits jsonb default '[]'::jsonb,
  is_active boolean default true,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS)
alter table public.jobs enable row level security;

-- Allow public read access to active jobs
create policy "Allow public to view jobs" on public.jobs
  for select using (true);

-- Allow authenticated users full control
create policy "Allow authenticated admin full access" on public.jobs
  for all using (auth.role() = 'authenticated');`;

  const handleCopySql = () => {
    navigator.clipboard.writeText(sqlSchema);
    setCopiedSql(true);
    setTimeout(() => setCopiedSql(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      alert('Please fill in the Job Title and Description.');
      return;
    }

    setSubmitting(true);
    try {
      const finalDepartment = department === 'Other' ? customDepartment.trim() || 'General' : department;
      const finalLocation = location === 'Other' ? customLocation.trim() || 'Remote' : location;

      const reqArray = requirementsText
        .split('\n')
        .map(r => r.trim())
        .filter(r => r.length > 0);

      const respArray = responsibilitiesText
        .split('\n')
        .map(r => r.trim())
        .filter(r => r.length > 0);

      const benArray = benefitsText
        .split('\n')
        .map(b => b.trim())
        .filter(b => b.length > 0);

      const result = await addJob({
        title: title.trim(),
        department: finalDepartment,
        location: finalLocation,
        type,
        experience_level: experienceLevel,
        salary_range: salaryRange.trim() || undefined,
        description: description.trim(),
        requirements: reqArray,
        responsibilities: respArray,
        benefits: benArray,
        is_active: isActive
      });

      setSuccessMessage(
        result.usedStorage === 'supabase'
          ? 'Job opening successfully published to Supabase database!'
          : 'Job opening saved locally and ready for display!'
      );
      setTimeout(() => setSuccessMessage(null), 4000);

      // Reset form
      setTitle('');
      setDescription('');
      setRequirementsText('');
      setResponsibilitiesText('');
      setSalaryRange('');
      setIsActive(true);
      setIsFormOpen(false);
    } catch (err) {
      console.error('Error adding job opening:', err);
      alert('Failed to add job opening. Please check the console.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleToggleStatus = async (job: JobOpening) => {
    const updatedStatus = !job.is_active;
    await updateJob(job.id, { is_active: updatedStatus });
  };

  const handleDelete = async (id: string, jobTitle: string) => {
    if (window.confirm(`Are you sure you want to permanently delete the position "${jobTitle}"?`)) {
      await deleteJob(id);
    }
  };

  // Filter jobs
  const filteredJobs = jobs.filter((job) => {
    if (filterStatus === 'active' && !job.is_active) return false;
    if (filterStatus === 'inactive' && job.is_active) return false;
    if (searchFilter.trim()) {
      const q = searchFilter.toLowerCase();
      return (
        job.title.toLowerCase().includes(q) ||
        job.department.toLowerCase().includes(q) ||
        job.location.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const activeCount = jobs.filter(j => j.is_active).length;
  const draftCount = jobs.filter(j => !j.is_active).length;

  return (
    <div className="space-y-8 pb-12">
      {/* Top Banner & Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-display font-bold text-slate-900 mb-1">
            Job Openings Management
          </h2>
          <p className="text-sm text-slate-600">
            Create, publish, and manage career positions displayed on the public careers portal.
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
          <button
            onClick={() => setIsFormOpen(!isFormOpen)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-blue text-white hover:bg-brand-blue-hover transition-colors text-sm font-medium shadow-xs shadow-brand-blue/20"
          >
            <Plus className="w-4 h-4" />
            {isFormOpen ? 'Close Form' : 'Add New Position'}
          </button>
        </div>
      </div>

      {/* Success Banner */}
      {successMessage && (
        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>{successMessage}</span>
          </div>
          <button onClick={() => setSuccessMessage(null)} className="text-emerald-700 hover:text-emerald-900">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
            Total Positions
          </span>
          <div className="text-3xl font-display font-bold text-slate-900">{jobs.length}</div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
          <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider block mb-1">
            Active / Published
          </span>
          <div className="text-3xl font-display font-bold text-emerald-700">{activeCount}</div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
            Drafts / Closed
          </span>
          <div className="text-3xl font-display font-bold text-slate-600">{draftCount}</div>
        </div>
      </div>

      {/* Add New Position Collapsible Form */}
      {isFormOpen && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8 space-y-6">
          <div className="border-b border-slate-100 pb-4 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-display font-bold text-slate-900">
                Create a New Job Opening
              </h3>
              <p className="text-xs text-slate-500">
                Specify the role details, key responsibilities, requirements, and publishing status.
              </p>
            </div>
            <button
              onClick={() => setIsFormOpen(false)}
              className="text-slate-400 hover:text-slate-600 p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title & Department */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Job Title *
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Senior AI Systems Engineer"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Department *
                </label>
                <select
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                >
                  <option value="AI & Automation">AI & Automation</option>
                  <option value="Cybersecurity">Cybersecurity</option>
                  <option value="Software Engineering">Software Engineering</option>
                  <option value="Operations & Delivery">Operations & Delivery</option>
                  <option value="Student & Internships">Student & Internships</option>
                  <option value="Solutions Architecture">Solutions Architecture</option>
                  <option value="Product & Design">Product & Design</option>
                  <option value="Other">Other (Custom)</option>
                </select>
                {department === 'Other' && (
                  <input
                    type="text"
                    required
                    value={customDepartment}
                    onChange={(e) => setCustomDepartment(e.target.value)}
                    placeholder="Enter custom department name..."
                    className="mt-2 w-full px-4 py-2 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                  />
                )}
              </div>
            </div>

            {/* Location & Employment Type & Experience */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Location *
                </label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                >
                  <option value="Remote">Remote</option>
                  <option value="Wesley Chapel, FL">Wesley Chapel, FL (Hybrid)</option>
                  <option value="Toronto, ON">Toronto, ON (Hybrid)</option>
                  <option value="Lagos, Nigeria">Lagos, Nigeria (Hybrid)</option>
                  <option value="Other">Other (Custom)</option>
                </select>
                {location === 'Other' && (
                  <input
                    type="text"
                    required
                    value={customLocation}
                    onChange={(e) => setCustomLocation(e.target.value)}
                    placeholder="Enter custom location..."
                    className="mt-2 w-full px-4 py-2 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                  />
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Employment Type
                </label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                >
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Experience Level
                </label>
                <select
                  value={experienceLevel}
                  onChange={(e) => setExperienceLevel(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                >
                  <option value="Student / Intern">Student / Intern</option>
                  <option value="Entry-level">Entry-level (0-2 yrs)</option>
                  <option value="Mid-level">Mid-level (3-5 yrs)</option>
                  <option value="Senior">Senior (6+ yrs)</option>
                  <option value="Lead / Principal">Lead / Principal</option>
                </select>
              </div>
            </div>

            {/* Compensation / Salary Range */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                Salary / Compensation (Optional)
              </label>
              <input
                type="text"
                value={salaryRange}
                onChange={(e) => setSalaryRange(e.target.value)}
                placeholder="e.g. $90,000 - $125,000 USD / yr or Competitive"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                Role Overview & Context *
              </label>
              <textarea
                rows={4}
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe the mission of this role, the core focus areas, and what success looks like in this position..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
              />
            </div>

            {/* Responsibilities */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Key Responsibilities (One per line)
              </label>
              <span className="text-xs text-slate-400 block mb-2">
                Each new line will be rendered as a bullet point on the public listing.
              </span>
              <textarea
                rows={4}
                value={responsibilitiesText}
                onChange={(e) => setResponsibilitiesText(e.target.value)}
                placeholder="Design and orchestrate multi-agent workflow systems&#10;Deploy resilient LLM-powered backend microservices&#10;Collaborate with enterprise stakeholders to map business processes"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-mono text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
              />
            </div>

            {/* Requirements */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Requirements & Qualifications (One per line) *
              </label>
              <span className="text-xs text-slate-400 block mb-2">
                Specify degrees, skills, technologies, or years of domain experience.
              </span>
              <textarea
                rows={4}
                value={requirementsText}
                onChange={(e) => setRequirementsText(e.target.value)}
                placeholder="3+ years of experience with Python, TypeScript, or modern backend frameworks&#10;Strong understanding of REST APIs, vector databases, or AI orchestration&#10;Demonstrated track record of delivering reliable production software&#10;Excellent communication and documentation skills"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-mono text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
              />
            </div>

            {/* Benefits & Perks */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Benefits & Offerings (One per line)
              </label>
              <textarea
                rows={3}
                value={benefitsText}
                onChange={(e) => setBenefitsText(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-mono text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
              />
            </div>

            {/* Active Status Checkbox */}
            <div className="flex items-center gap-3 pt-2">
              <input
                type="checkbox"
                id="isActiveCheckbox"
                checked={isActive}
                onChange={(e) => setIsActive(e.target.checked)}
                className="w-4 h-4 rounded text-brand-blue border-slate-300 focus:ring-brand-blue"
              />
              <label htmlFor="isActiveCheckbox" className="text-sm font-medium text-slate-800 cursor-pointer">
                Publish immediately (make visible on the Careers portal)
              </label>
            </div>

            {/* Form Actions */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setIsFormOpen(false)}
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
                    <Loader2 className="w-4 h-4 animate-spin" /> Saving Position...
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4" /> Save & Publish Position
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button
            onClick={() => setFilterStatus('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              filterStatus === 'all'
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All ({jobs.length})
          </button>
          <button
            onClick={() => setFilterStatus('active')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              filterStatus === 'active'
                ? 'bg-emerald-600 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Active ({activeCount})
          </button>
          <button
            onClick={() => setFilterStatus('inactive')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              filterStatus === 'inactive'
                ? 'bg-slate-700 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Drafts ({draftCount})
          </button>
        </div>

        <div className="w-full sm:w-72">
          <input
            type="text"
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            placeholder="Filter by title, dept, or location..."
            className="w-full px-3.5 py-1.5 rounded-lg border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-brand-blue"
          />
        </div>
      </div>

      {/* Jobs Table / Listing */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between">
          <h3 className="font-display font-semibold text-slate-900">
            Current Position Listings ({filteredJobs.length})
          </h3>
          <span className="text-xs text-slate-400">
            Click status pill to toggle Active/Draft
          </span>
        </div>

        {jobsLoading ? (
          <div className="p-12 text-center">
            <Loader2 className="w-8 h-8 animate-spin text-brand-blue mx-auto mb-2" />
            <p className="text-xs text-slate-500">Loading positions...</p>
          </div>
        ) : filteredJobs.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-50 text-xs font-semibold text-slate-500 uppercase tracking-wider border-b border-slate-200">
                <tr>
                  <th className="px-6 py-3">Role Title</th>
                  <th className="px-6 py-3">Department</th>
                  <th className="px-6 py-3">Location & Type</th>
                  <th className="px-6 py-3">Requirements</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {filteredJobs.map((job) => (
                  <tr key={job.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-medium text-slate-900">{job.title}</div>
                      <div className="text-xs text-slate-400 mt-0.5">
                        Added: {new Date(job.created_at).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800">
                        {job.department}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-xs text-slate-700 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        {job.location}
                      </div>
                      <div className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                        <Clock className="w-3 h-3 text-slate-400" />
                        {job.type} • {job.experience_level}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs text-slate-600">
                        {job.requirements ? `${job.requirements.length} listed` : 'None'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleToggleStatus(job)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium cursor-pointer transition-colors ${
                          job.is_active
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100'
                            : 'bg-slate-100 text-slate-600 border border-slate-200 hover:bg-slate-200'
                        }`}
                        title="Click to toggle status"
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${job.is_active ? 'bg-emerald-500' : 'bg-slate-400'}`} />
                        {job.is_active ? 'Active' : 'Draft / Closed'}
                      </button>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => setPreviewJob(job)}
                          className="p-1.5 text-slate-400 hover:text-brand-blue hover:bg-slate-100 rounded-lg transition-colors"
                          title="Preview details"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(job.id, job.title)}
                          className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete position"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-12 text-center">
            <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-3">
              <Briefcase className="w-6 h-6" />
            </div>
            <h4 className="text-base font-semibold text-slate-900 mb-1">
              No Job Openings Yet
            </h4>
            <p className="text-xs text-slate-500 max-w-sm mx-auto mb-4">
              Get started by creating your first job opening using the "Add New Position" button above.
            </p>
            <button
              onClick={() => setIsFormOpen(true)}
              className="px-4 py-2 rounded-lg bg-brand-blue text-white text-xs font-medium hover:bg-brand-blue-hover transition-colors inline-flex items-center gap-1.5"
            >
              <Plus className="w-3.5 h-3.5" /> Create Opening
            </button>
          </div>
        )}
      </div>

      {/* Supabase Database Setup Helper (Accordion) */}
      <div className="bg-slate-100/70 border border-slate-200 rounded-2xl p-5">
        <button
          onClick={() => setShowSqlGuide(!showSqlGuide)}
          className="w-full flex items-center justify-between text-left"
        >
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-brand-blue/10 text-brand-blue">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900">
                Supabase Database Setup & Schema
              </h4>
              <p className="text-xs text-slate-500">
                Information on how job data connects to your Supabase project.
              </p>
            </div>
          </div>
          {showSqlGuide ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
        </button>

        {showSqlGuide && (
          <div className="mt-4 pt-4 border-t border-slate-200 space-y-3 text-xs text-slate-600">
            <p>
              The system automatically synchronizes jobs with the Supabase <code className="bg-slate-200 px-1 py-0.5 rounded text-slate-800 font-mono">jobs</code> table when created. If the table does not exist yet in your Supabase database, run this SQL query in your Supabase SQL Editor:
            </p>
            <div className="relative">
              <pre className="p-4 bg-slate-900 text-slate-200 rounded-xl overflow-x-auto text-[11px] font-mono leading-relaxed">
                {sqlSchema}
              </pre>
              <button
                onClick={handleCopySql}
                className="absolute top-3 right-3 px-2.5 py-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs flex items-center gap-1 transition-colors border border-slate-700"
              >
                {copiedSql ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" /> Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" /> Copy SQL
                  </>
                )}
              </button>
            </div>
            <p className="text-slate-500 italic">
              Note: If Supabase is unavailable, changes will persist in the administrator browser storage seamlessly.
            </p>
          </div>
        )}
      </div>

      {/* Preview Modal */}
      {previewJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-slate-100 p-6 md:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-semibold text-brand-blue uppercase tracking-wider">
                  {previewJob.department}
                </span>
                <h3 className="text-xl font-display font-bold text-slate-900">
                  {previewJob.title}
                </h3>
              </div>
              <button
                onClick={() => setPreviewJob(null)}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium">
                {previewJob.location}
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium">
                {previewJob.type}
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium">
                {previewJob.experience_level}
              </span>
              {previewJob.salary_range && (
                <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 font-medium">
                  {previewJob.salary_range}
                </span>
              )}
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                Overview
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                {previewJob.description}
              </p>
            </div>

            {previewJob.responsibilities && previewJob.responsibilities.length > 0 && (
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                  Key Responsibilities ({previewJob.responsibilities.length})
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {previewJob.responsibilities.map((r, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-brand-blue font-bold">•</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {previewJob.requirements && previewJob.requirements.length > 0 && (
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                  Qualifications & Requirements ({previewJob.requirements.length})
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {previewJob.requirements.map((r, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-brand-blue font-bold">•</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setPreviewJob(null)}
                className="px-5 py-2 rounded-xl bg-slate-900 text-white text-xs font-medium hover:bg-slate-800"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

