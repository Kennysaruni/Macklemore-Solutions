import { motion } from "motion/react";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col pt-32 pb-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="text-brand-blue font-medium mb-4 uppercase tracking-wide text-sm">Policies</div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-12">
            Privacy Policy
          </h1>

          <div className="space-y-10 text-lg text-slate-600 leading-relaxed font-sans">
            <section>
              <h2 className="text-2xl font-display font-semibold text-slate-900 mb-4">1. Introduction</h2>
              <p>
                Macklemore Solutions respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or engage with our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-slate-900 mb-4">2. Information We Collect</h2>
              <p className="mb-4">We may collect personal information including but not limited to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company name</li>
                <li>Job title</li>
                <li>Payment and billing information (if applicable)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-slate-900 mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect for the following purposes:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>To provide and manage our services</li>
                <li>To communicate with you regarding updates, offers, and inquiries</li>
                <li>To improve our website and customer experience</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-slate-900 mb-4">4. Data Sharing and Disclosure</h2>
              <p className="mb-4">We do not sell, rent, or share your personal information with third parties, except when:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Required by law or legal processes</li>
                <li>Necessary to protect our rights and operations</li>
                <li>Needed to perform services through trusted partners under confidentiality agreements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-slate-900 mb-4">5. Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your personal information from unauthorized access, use, or disclosure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-slate-900 mb-4">6. Cookies and Tracking Technologies</h2>
              <p>
                Our website may use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and deliver targeted content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-slate-900 mb-4">7. Your Rights and Choices</h2>
              <p>
                You have the right to access, update, or delete your personal data. To exercise these rights, please contact us at:{" "}
                <a href="mailto:privacy@macklemoresolutions.com" className="text-brand-blue hover:underline">
                  privacy@macklemoresolutions.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-slate-900 mb-4">8. Updates to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised effective date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-slate-900 mb-4">9. Contact Us</h2>
              <p className="mb-2">If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
              <ul className="space-y-1">
                <li>
                  <span className="font-semibold text-slate-800">Email:</span>{" "}
                  <a href="mailto:privacy@macklemoresolutions.com" className="text-brand-blue hover:underline">
                    privacy@macklemoresolutions.com
                  </a>
                </li>
                <li>
                  <span className="font-semibold text-slate-800">Website:</span>{" "}
                  <a href="https://www.macklemoresolutions.com" className="text-brand-blue hover:underline" target="_blank" rel="noopener noreferrer">
                    www.macklemoresolutions.com
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
