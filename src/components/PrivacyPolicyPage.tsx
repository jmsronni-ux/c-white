import { Shield } from "lucide-react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { NoticeBar } from "./NoticeBar";

export function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col w-full bg-(--bg-primary)">
      <NoticeBar />
      <Header />

      <section className="relative flex flex-col items-center gap-6 w-full px-4 sm:px-6 lg:px-20 py-14 sm:py-16 bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0F172A]">
        <div className="flex items-center gap-2 px-5 py-2.5 bg-[#2563EB20] border border-[#2563EB50] rounded-full">
          <Shield className="w-4 h-4 text-[#60A5FA]" strokeWidth={1.5} />
          <span className="text-[13px] font-medium text-[#60A5FA]">Legal</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-(--text-white) text-center">
          Privacy Policy
        </h1>
        <p className="text-[#94A3B8] text-center max-w-[600px]">
          Last updated: February 2025
        </p>
      </section>

      <main className="w-full px-4 sm:px-6 lg:px-20 py-12 lg:py-16 max-w-[800px] mx-auto">
        <div className="flex flex-col gap-8 text-(--text-secondary) leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-(--text-primary) mb-3">1. Information We Collect</h2>
            <p>
              We may collect information you provide directly, such as name, email address, phone number,
              and other contact or case-related details when you use our contact forms, book consultations,
              or request our services. We may also collect usage data and cookies when you visit our website.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-(--text-primary) mb-3">2. How We Use Your Information</h2>
            <p>
              We use the information we collect to respond to your inquiries, provide blockchain investigation
              and related services, send relevant updates, improve our website and services, and comply with
              legal obligations. We do not sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-(--text-primary) mb-3">3. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data
              against unauthorized access, alteration, disclosure, or destruction. Given the sensitive nature
              of our work, we treat client data with the highest level of confidentiality.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-(--text-primary) mb-3">4. Third Parties</h2>
            <p>
              We may share information with trusted service providers who assist us in operating our website
              or conducting our business, subject to confidentiality agreements. We may also disclose information
              when required by law or to protect our rights and safety.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-(--text-primary) mb-3">5. Your Rights</h2>
            <p>
              Depending on your location, you may have rights to access, correct, or delete your personal data,
              or to object to or restrict certain processing. To exercise these rights or ask questions about
              this policy, please contact us at support@crypto-finders.com.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-(--text-primary) mb-3">6. Changes</h2>
            <p>
              We may update this Privacy Policy from time to time. We will post the updated policy on this page
              and update the "Last updated" date. We encourage you to review this policy periodically.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
