import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  Shield,
  Lock,
  FileText,
  Building,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  AlertCircle,
  ExternalLink,
  CheckCircle2,
  ChevronRight,
  Server,
  Cpu
} from "lucide-react";

export default function PrivacyPolicy() {
  const tableOfContents = [
    { id: "scope", title: "1. Scope & Covered Activities" },
    { id: "information-collected", title: "2. Information We Collect" },
    { id: "how-we-use", title: "3. How We Use Personal Information" },
    { id: "project-data", title: "4. Client Project Data vs. Website Data" },
    { id: "providers", title: "5. Third-Party Service Providers & Subprocessors" },
    { id: "cookies", title: "6. Cookies, Analytics & Tracking Choices" },
    { id: "ai-governance", title: "7. Artificial Intelligence (AI) Governance" },
    { id: "retention", title: "8. Data Retention Periods" },
    { id: "security", title: "9. Security Safeguards & Verification" },
    { id: "transfers", title: "10. International Data Transfers" },
    { id: "rights", title: "11. Your Privacy Rights (NDPA, PIPEDA & US Laws)" },
    { id: "requests", title: "12. How to Submit Privacy Requests & Complaints" },
    { id: "contacts", title: "13. Corporate Contacts & Supervisory Authorities" },
  ];

  return (
    <div className="flex flex-col pt-24 md:pt-28 pb-16 bg-white min-h-screen text-slate-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full overflow-hidden">
        {/* Breadcrumb */}
        <div className="mb-4">
          <Link
            to="/"
            className="text-xs sm:text-sm font-medium text-slate-500 hover:text-brand-blue transition-colors"
          >
            ← Back to Home
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Header & Meta */}
          <div className="border-b border-slate-100 pb-6 mb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-semibold uppercase tracking-wider mb-3">
              <Shield className="w-3.5 h-3.5" />
              Legal & Privacy Governance
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 mb-3 tracking-tight">
              Privacy Policy
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500">
              <span><strong>Effective Date:</strong> November 11, 2026</span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span><strong>Last Updated:</strong> November 11, 2026</span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span className="text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/50">
                Staging Draft for Review
              </span>
            </div>
          </div>

          {/* Staging Review Banner */}
          <div className="mb-8 p-4 rounded-xl bg-amber-50/80 border border-amber-200/80 text-amber-900 text-xs sm:text-sm flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-1 leading-relaxed">
              <span className="font-semibold block text-amber-950">
                Staging Policy Review Notice
              </span>
              <p>
                This document is staged for executive and legal review prior to final publishing. Operational details awaiting final client confirmation are marked with <code className="bg-amber-100 px-1 py-0.5 rounded text-amber-950 font-mono text-[11px]">[Awaiting Confirmation]</code> tags.
              </p>
            </div>
          </div>

          {/* "On this page" Table of Contents */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 mb-10 shadow-xs">
            <div className="flex items-center gap-2 mb-3">
              <FileText className="w-4 h-4 text-brand-blue" />
              <h2 className="text-sm font-display font-semibold text-slate-900 uppercase tracking-wider">
                On this page
              </h2>
            </div>
            <nav aria-label="Table of contents">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs">
                {tableOfContents.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-slate-600 hover:text-brand-blue hover:underline py-0.5 flex items-center gap-1.5 transition-colors group"
                    >
                      <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-brand-blue group-hover:translate-x-0.5 transition-all shrink-0" />
                      <span className="truncate">{item.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Policy Content Sections */}
          <div className="space-y-8 text-sm sm:text-base leading-relaxed">
            {/* 1. Scope & Covered Activities */}
            <section id="scope" className="scroll-mt-28 md:scroll-mt-32">
              <h2 className="text-xl sm:text-2xl font-display font-semibold text-slate-900 mb-3">
                1. Scope & Covered Activities
              </h2>
              <p className="mb-3">
                Macklemore Solutions ("Macklemore", "we", "us", or "our") is an enterprise technology provider operating across North America and West Africa, with corporate presence in the United States, Canada, and Nigeria.
              </p>
              <div className="p-3.5 bg-slate-50 border border-slate-200/60 rounded-xl mb-3 text-xs sm:text-sm">
                <span className="font-semibold text-slate-800 block mb-1">Corporate Entities Covered:</span>
                <p className="text-slate-600">
                  This policy applies to Macklemore Solutions and its affiliated operating entities <span className="text-amber-800 bg-amber-100/60 px-1 py-0.5 rounded font-mono text-[11px]">[Awaiting Confirmation: Exact registered corporate names as incorporated in Delaware/Florida, Ontario, and CAC Nigeria]</span>.
                </p>
              </div>
              <p className="mb-3">
                This Privacy Policy describes how we collect, process, retain, and safeguard personal information collected through:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-600 mb-3 text-xs sm:text-sm">
                <li>Our public website at <a href="https://www.macklemoresolutions.com" className="text-brand-blue hover:underline">macklemoresolutions.com</a></li>
                <li>Digital lead capture, consultation bookings, and Deal Room request forms</li>
                <li>Job applicant and candidate submissions via our Careers portal</li>
                <li>Downloadable resources including whitepapers, playbooks, and eGuides</li>
                <li>Customer billing, invoicing, and contract management portals</li>
                <li>Direct telephone, video, and email communications with our sales, technical, and advisory teams</li>
              </ul>
            </section>

            {/* 2. Information We Collect */}
            <section id="information-collected" className="scroll-mt-28 md:scroll-mt-32">
              <h2 className="text-xl sm:text-2xl font-display font-semibold text-slate-900 mb-3">
                2. Information We Collect
              </h2>
              <p className="mb-3">
                We collect personal information directly from you when you submit forms, register for events, apply for employment, or communicate with our representatives. We limit collection to what is strictly necessary to fulfill the requested business purpose:
              </p>
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl border border-slate-200 bg-white">
                  <h3 className="font-semibold text-slate-900 mb-1">A. Inquiries, Demos & Consultation Requests</h3>
                  <p className="text-slate-600">
                    Full name, business email address, phone number, organization/company name, job title, country/jurisdiction, and project objectives or operational challenges provided in inquiry text.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl border border-slate-200 bg-white">
                  <h3 className="font-semibold text-slate-900 mb-1">B. Careers & Job Applications</h3>
                  <p className="text-slate-600">
                    Full name, personal email, phone number, employment history, educational credentials, resume/CV documents or cloud links (Google Drive, Dropbox, LinkedIn profile), portfolio links, and cover notes.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl border border-slate-200 bg-white">
                  <h3 className="font-semibold text-slate-900 mb-1">C. Invoicing & Billing Data</h3>
                  <p className="text-slate-600">
                    Corporate billing contact, billing address, tax identification numbers, corporate bank reference details, and payment confirmations. <em>Note: Payment card numbers are processed directly by our PCI-compliant payment gateway partners and are never stored or processed directly on Macklemore servers.</em>
                  </p>
                </div>
                <div className="p-3.5 rounded-xl border border-slate-200 bg-white">
                  <h3 className="font-semibold text-slate-900 mb-1">D. Automated Website Telemetry</h3>
                  <p className="text-slate-600">
                    Standard HTTP access logs, anonymized IP addresses, browser user agent strings, device characteristics, operating systems, and page navigation metrics collected to secure our infrastructure against malicious traffic and bot attacks.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. How We Use Personal Information */}
            <section id="how-we-use" className="scroll-mt-28 md:scroll-mt-32">
              <h2 className="text-xl sm:text-2xl font-display font-semibold text-slate-900 mb-3">
                3. How We Use Personal Information
              </h2>
              <p className="mb-3">
                In compliance with the <strong>Nigeria Data Protection Act 2023 (Section 27)</strong>, the <strong>Personal Information Protection and Electronic Documents Act (PIPEDA)</strong> of Canada, and applicable international privacy frameworks, we only process personal information for lawful and legitimate purposes:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-600 text-xs sm:text-sm">
                <li><strong>Service Delivery & Consultations:</strong> To schedule demonstrations, assess automation readiness, and deliver agreed technical services.</li>
                <li><strong>Communication & Support:</strong> To respond to inquiries, provide operational updates, and send requested whitepapers or playbooks.</li>
                <li><strong>Talent Recruitment:</strong> To evaluate candidate qualifications, schedule technical interviews, and make hiring decisions.</li>
                <li><strong>Financial Processing:</strong> To generate client statements, process professional service fees, and satisfy statutory tax reporting obligations.</li>
                <li><strong>Cybersecurity & Infrastructure Resilience:</strong> To detect, investigate, and prevent fraudulent activity, DDoS attempts, and unauthorized system access.</li>
                <li><strong>Statutory Compliance:</strong> To comply with legal proceedings, court orders, or requests by authorized governmental bodies.</li>
              </ul>
            </section>

            {/* 4. Client Project Data vs. Website Data */}
            <section id="project-data" className="scroll-mt-28 md:scroll-mt-32">
              <h2 className="text-xl sm:text-2xl font-display font-semibold text-slate-900 mb-3">
                4. Client Project Data vs. Website Data
              </h2>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm space-y-2">
                <p className="font-medium text-slate-800">
                  Important Distinction for Enterprise Clients:
                </p>
                <p className="text-slate-600 leading-relaxed">
                  This Privacy Policy applies solely to personal data collected through our public website, marketing channels, and prospective client inquiries.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Enterprise datasets, production database credentials, proprietary client workflows, and personal data processed on behalf of clients during contracted consulting or AI implementation engagements are classified as <strong>"Client Project Data"</strong>. Client Project Data is governed exclusively by signed <strong>Master Services Agreements (MSAs)</strong>, <strong>Data Processing Agreements (DPAs)</strong>, and <strong>Non-Disclosure Agreements (NDAs)</strong>, which take legal precedence over this website policy.
                </p>
              </div>
            </section>

            {/* 5. Third-Party Service Providers & Subprocessors */}
            <section id="providers" className="scroll-mt-28 md:scroll-mt-32">
              <h2 className="text-xl sm:text-2xl font-display font-semibold text-slate-900 mb-3">
                5. Third-Party Service Providers & Subprocessors
              </h2>
              <p className="mb-3">
                We do not sell, rent, or trade your personal information. We disclose personal data only to vetted service providers who process data strictly under confidentiality obligations:
              </p>
              <div className="border border-slate-200 rounded-xl overflow-hidden text-xs sm:text-sm">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 border-b border-slate-200 font-semibold text-slate-700">
                    <tr>
                      <th className="p-3">Category</th>
                      <th className="p-3">Provider</th>
                      <th className="p-3">Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr>
                      <td className="p-3 font-medium text-slate-800">Hosting & Edge</td>
                      <td className="p-3">Vercel Inc. & Cloudflare</td>
                      <td className="p-3">Global content distribution, HTTPS termination, and DDoS protection</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-800">Application Database</td>
                      <td className="p-3">Supabase Inc. (AWS/GCP infrastructure)</td>
                      <td className="p-3">Secure encrypted storage for form submissions, articles, and portal content</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-800">Form Transmission</td>
                      <td className="p-3">EmailJS / Corporate Mail Server</td>
                      <td className="p-3">Encrypted relay of contact and demo inquiry emails</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-800">Billing & Payments</td>
                      <td className="p-3">Stripe Inc. & Commercial Banking Rails</td>
                      <td className="p-3">Direct PCI-DSS compliant credit card and wire transfer processing</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-400 mt-2 italic">
                [Awaiting Confirmation: Additional auxiliary SaaS tools currently evaluated or deployed by the Macklemore team.]
              </p>
            </section>

            {/* 6. Cookies, Analytics & Tracking Choices */}
            <section id="cookies" className="scroll-mt-28 md:scroll-mt-32">
              <h2 className="text-xl sm:text-2xl font-display font-semibold text-slate-900 mb-3">
                6. Cookies, Analytics & Tracking Choices
              </h2>
              <p className="mb-3">
                We use cookies and local storage tokens strictly to ensure the site operates properly and securely:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-600 mb-3 text-xs sm:text-sm">
                <li><strong>Strictly Necessary Cookies:</strong> Essential for user session maintenance, administrative authentication, security tokens, and responsive UI layout states.</li>
                <li><strong>Preference Cookies:</strong> Remember navigation states and dismiss banner preferences.</li>
                <li><strong>Analytics (Privacy-Friendly):</strong> Aggregated measurements of page views to improve navigation. We do not use third-party behavioral retargeting or cross-site tracking cookies.</li>
              </ul>
              <div className="p-3.5 bg-slate-50 border border-slate-200/60 rounded-xl text-xs sm:text-sm">
                <span className="font-semibold text-slate-800 block mb-1">Managing Your Cookie Preferences:</span>
                <p className="text-slate-600">
                  You can control or disable cookies at any time through your browser settings (Chrome, Safari, Firefox, Edge). Note that disabling essential cookies may impact specific portal functionalities such as administrative logins or form validations.
                </p>
              </div>
            </section>

            {/* 7. Artificial Intelligence (AI) Governance */}
            <section id="ai-governance" className="scroll-mt-28 md:scroll-mt-32">
              <h2 className="text-xl sm:text-2xl font-display font-semibold text-slate-900 mb-3">
                7. Artificial Intelligence (AI) Governance
              </h2>
              <p className="mb-3">
                As an enterprise AI and automation consultancy, Macklemore maintains strict boundaries regarding AI data governance:
              </p>
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <p><strong>Zero Public Model Training:</strong> Personal data submitted through our website, forms, or client inquiries is <em>never</em> used to train public or consumer foundation models.</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <p><strong>Private Enterprise Tenants:</strong> Where AI models are utilized to process internal workflows, they are hosted within private, enterprise-governed cloud tenants with contractual zero-data-retention and non-training guarantees.</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <p><strong>Human-in-the-Loop:</strong> All recruitment assessments, employment selections, and client advisory evaluations are conducted by human professionals; no automated profiling produces binding legal consequences for users without human review.</p>
                </div>
              </div>
            </section>

            {/* 8. Data Retention Periods */}
            <section id="retention" className="scroll-mt-28 md:scroll-mt-32">
              <h2 className="text-xl sm:text-2xl font-display font-semibold text-slate-900 mb-3">
                8. Data Retention Periods
              </h2>
              <p className="mb-3">
                We store personal information only for as long as necessary to fulfill the purposes for which it was collected or to comply with statutory legal requirements:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600 text-xs sm:text-sm">
                <li><strong>General Inquiries & Consultation Requests:</strong> Retained for <strong>twenty-four (24) months</strong> following the date of last active correspondence, after which records are archived or securely deleted.</li>
                <li><strong>Job Applications & Resumes:</strong> Retained for <strong>twelve (12) months</strong> from the date of submission. Candidates may request earlier deletion or consent to retain their details in our proactive talent pool for future vacancies.</li>
                <li><strong>Billing & Contractual Records:</strong> Retained for <strong>seven (7) years</strong> following the financial year of transaction, in compliance with statutory corporate tax, auditing, and corporate governance laws in the US, Canada, and Nigeria.</li>
                <li><strong>System Security Logs:</strong> Retained for <strong>ninety (90) days</strong> for diagnostic, auditing, and cyber threat detection purposes, after which they are routinely overwritten.</li>
              </ul>
            </section>

            {/* 9. Security Safeguards & Verification */}
            <section id="security" className="scroll-mt-28 md:scroll-mt-32">
              <h2 className="text-xl sm:text-2xl font-display font-semibold text-slate-900 mb-3">
                9. Security Safeguards & Verification
              </h2>
              <p className="mb-3">
                We implement verifiable organizational, administrative, and technical safeguards engineered to prevent unauthorized access, accidental loss, alteration, or disclosure:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl border border-slate-200 bg-white">
                  <h4 className="font-semibold text-slate-900 mb-1">Encryption Standards</h4>
                  <p className="text-slate-600">All data in transit is encrypted via TLS 1.3. Stored database records and backups utilize AES-256 bit encryption at rest.</p>
                </div>
                <div className="p-3.5 rounded-xl border border-slate-200 bg-white">
                  <h4 className="font-semibold text-slate-900 mb-1">Access Governance</h4>
                  <p className="text-slate-600">Access to administrative systems is restricted via Role-Based Access Control (RBAC), least privilege principles, and mandatory Multi-Factor Authentication (MFA).</p>
                </div>
                <div className="p-3.5 rounded-xl border border-slate-200 bg-white">
                  <h4 className="font-semibold text-slate-900 mb-1">Vulnerability Management</h4>
                  <p className="text-slate-600">Automated dependency audits, regular static code analysis, and perimeter security testing to preempt software vulnerabilities.</p>
                </div>
                <div className="p-3.5 rounded-xl border border-slate-200 bg-white">
                  <h4 className="font-semibold text-slate-900 mb-1">Breach Notification</h4>
                  <p className="text-slate-600">Documented security response protocol adhering to NDPA Section 40 and Canadian breach reporting requirements, notifying authorities and affected individuals within 72 hours where required by law.</p>
                </div>
              </div>
            </section>

            {/* 10. International Data Transfers */}
            <section id="transfers" className="scroll-mt-28 md:scroll-mt-32">
              <h2 className="text-xl sm:text-2xl font-display font-semibold text-slate-900 mb-3">
                10. International Data Transfers
              </h2>
              <p className="mb-3 text-xs sm:text-sm">
                Because Macklemore Solutions operates across the United States, Canada, and Nigeria, your information may be processed or stored in jurisdictions outside of your home country.
              </p>
              <p className="text-xs sm:text-sm">
                When personal data is transferred across borders, we ensure adequate protections are in place in accordance with Section 41-43 of the <strong>Nigeria Data Protection Act 2023</strong> and the <strong>Personal Information Protection and Electronic Documents Act (PIPEDA)</strong> of Canada. This includes standard contractual clauses, secure encrypted transmission, and confidentiality guarantees with all international operating subsidiaries and cloud hosting providers.
              </p>
            </section>

            {/* 11. Your Privacy Rights */}
            <section id="rights" className="scroll-mt-28 md:scroll-mt-32">
              <h2 className="text-xl sm:text-2xl font-display font-semibold text-slate-900 mb-3">
                11. Your Privacy Rights
              </h2>
              <p className="mb-3">
                Depending on your location and applicable data protection legislation (including NDPA 2023 Section 27, Canadian PIPEDA, and applicable US state privacy laws), you hold the following rights:
              </p>
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/60">
                  <span className="font-semibold text-slate-800">Right to Access:</span> You may request confirmation of whether we hold personal information about you and receive a copy of that data.
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/60">
                  <span className="font-semibold text-slate-800">Right to Rectification:</span> You have the right to request correction of inaccurate, outdated, or incomplete personal data.
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/60">
                  <span className="font-semibold text-slate-800">Right to Erasure ("Right to be Forgotten"):</span> You may request the deletion of your personal data where it is no longer needed for the purposes for which it was collected, subject to legal and statutory retention limits.
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/60">
                  <span className="font-semibold text-slate-800">Right to Restrict or Object to Processing:</span> You may object to the processing of your personal information or request that we temporarily restrict its handling.
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/60">
                  <span className="font-semibold text-slate-800">Right to Data Portability:</span> You may request your personal data in a structured, commonly used, and machine-readable format.
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/60">
                  <span className="font-semibold text-slate-800">Right to Withdraw Consent:</span> Where processing is based on consent, you may withdraw your consent at any time without affecting the lawfulness of processing prior to withdrawal.
                </div>
              </div>
            </section>

            {/* 12. How to Submit Privacy Requests & Complaints */}
            <section id="requests" className="scroll-mt-28 md:scroll-mt-32">
              <h2 className="text-xl sm:text-2xl font-display font-semibold text-slate-900 mb-3">
                12. How to Submit Privacy Requests & Complaints
              </h2>
              <p className="mb-3">
                We have designated an actively monitored privacy communications channel to handle all data protection inquiries, access requests, and formal complaints:
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm space-y-2">
                <div>
                  <span className="font-semibold text-slate-900 block mb-1">Direct Privacy Officer Contact:</span>
                  <a
                    href="mailto:privacy@macklemoresolutions.com"
                    className="text-brand-blue font-medium hover:underline break-all sm:break-normal text-sm sm:text-base inline-flex items-center gap-1.5"
                  >
                    <Mail className="w-4 h-4 shrink-0" />
                    privacy@macklemoresolutions.com
                  </a>
                </div>
                <p className="text-slate-600 pt-1">
                  <strong>Verification & Response Timelines:</strong> To protect your privacy and security, we may verify your identity before responding to requests. We confirm receipt of requests within <strong>five (5) business days</strong> and provide a substantive resolution within <strong>thirty (30) calendar days</strong>, free of charge.
                </p>
              </div>
            </section>

            {/* 13. Corporate Contacts & Supervisory Authorities */}
            <section id="contacts" className="scroll-mt-28 md:scroll-mt-32">
              <h2 className="text-xl sm:text-2xl font-display font-semibold text-slate-900 mb-3">
                13. Corporate Contacts & Supervisory Authorities
              </h2>
              <div className="space-y-4 text-xs sm:text-sm">
                <div>
                  <p className="mb-2 font-medium text-slate-900">Registered Office Locations:</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="p-3 rounded-xl border border-slate-200 bg-white">
                      <div className="flex items-center gap-1.5 font-semibold text-slate-900 mb-1">
                        <MapPin className="w-3.5 h-3.5 text-brand-blue" />
                        United States
                      </div>
                      <p className="text-slate-600 leading-snug">
                        3912 Claybrook Dr<br />
                        Wesley Chapel, FL 33544<br />
                        United States
                      </p>
                      <a href="tel:+19016082508" className="text-brand-blue hover:underline mt-2 inline-block font-medium">
                        +1 (901) 608-2508
                      </a>
                    </div>

                    <div className="p-3 rounded-xl border border-slate-200 bg-white">
                      <div className="flex items-center gap-1.5 font-semibold text-slate-900 mb-1">
                        <MapPin className="w-3.5 h-3.5 text-brand-blue" />
                        Canada
                      </div>
                      <p className="text-slate-600 leading-snug">
                        102 Bradstone Square<br />
                        Scarborough, ON<br />
                        Canada
                      </p>
                      <a href="tel:+14374316340" className="text-brand-blue hover:underline mt-2 inline-block font-medium">
                        +1 (437) 431-6340
                      </a>
                    </div>

                    <div className="p-3 rounded-xl border border-slate-200 bg-white">
                      <div className="flex items-center gap-1.5 font-semibold text-slate-900 mb-1">
                        <MapPin className="w-3.5 h-3.5 text-brand-blue" />
                        Nigeria
                      </div>
                      <p className="text-slate-600 leading-snug">
                        Horizon II Estate, Meadow Hallway<br />
                        Ikate, Lagos<br />
                        Nigeria (By appt. only)
                      </p>
                      <a href="tel:+2348162698778" className="text-brand-blue hover:underline mt-2 inline-block font-medium">
                        +234 816 269 8778
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 bg-slate-50 border border-slate-200/60 rounded-xl">
                  <span className="font-semibold text-slate-800 block mb-1">Supervisory Authorities:</span>
                  <p className="text-slate-600 mb-2">
                    If you believe your privacy rights have been violated and we have not resolved your concern satisfactorily, you have the right to lodge a formal complaint with the relevant data protection authority:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-slate-600">
                    <li>
                      <strong>Nigeria:</strong> Nigeria Data Protection Commission (NDPC) — Website: <a href="https://ndpc.gov.ng" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">ndpc.gov.ng</a> | Email: <a href="mailto:info@ndpc.gov.ng" className="text-brand-blue hover:underline">info@ndpc.gov.ng</a>
                    </li>
                    <li>
                      <strong>Canada:</strong> Office of the Privacy Commissioner of Canada (OPC) — Website: <a href="https://www.priv.gc.ca" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">priv.gc.ca</a>
                    </li>
                    <li>
                      <strong>United States:</strong> Federal Trade Commission (FTC) or relevant state Attorney General (Florida Office of the Attorney General).
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* End-of-Policy Footer & Text Back-to-Top Link */}
          <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-500">
            <div>
              © {new Date().getFullYear()} Macklemore Solutions. All rights reserved.
            </div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center gap-1.5 text-brand-blue font-medium hover:underline cursor-pointer py-1.5"
            >
              <ArrowUp className="w-4 h-4" /> Back to top of policy
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
