import { FileText } from "lucide-react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { NoticeBar } from "./NoticeBar";

export function TermsOfServicePage() {
  return (
    <div className="flex flex-col w-full bg-(--bg-primary)">
      <NoticeBar />
      <Header />

      <section className="relative flex flex-col items-center gap-6 w-full px-4 sm:px-6 lg:px-20 py-14 sm:py-16 bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0F172A]">
        <div className="flex items-center gap-2 px-5 py-2.5 bg-[#2563EB20] border border-[#2563EB50] rounded-full">
          <FileText className="w-4 h-4 text-[#60A5FA]" strokeWidth={1.5} />
          <span className="text-[13px] font-medium text-[#60A5FA]">Legal</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-(--text-white) text-center">
          Terms of Service
        </h1>
        <p className="text-[#94A3B8] text-center max-w-[600px]">
          Last updated: February 2025
        </p>
      </section>

      <main className="w-full px-4 sm:px-6 lg:px-20 py-12 lg:py-16 max-w-[800px] mx-auto">
        <div className="flex flex-col gap-8 text-(--text-secondary) leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-(--text-primary) mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the C-Finder website and services, you agree to be bound by these Terms
              of Service. If you do not agree to these terms, please do not use our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-(--text-primary) mb-3">2. Services</h2>
            <p>
              C-Finder provides blockchain investigation, cryptocurrency forensics, expert witness, and
              related consulting services. The scope, deliverables, and fees for any engagement will be
              set out in a separate agreement or statement of work. Use of this website does not create
              a client relationship until a formal engagement is agreed.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-(--text-primary) mb-3">3. Use of the Website</h2>
            <p>
              You agree to use this website only for lawful purposes and in a way that does not infringe
              the rights of others or restrict their use. You may not attempt to gain unauthorized access
              to our systems, transmit harmful code, or use the site to collect data for unrelated commercial
              purposes without our consent.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-(--text-primary) mb-3">4. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and design, is the property of
              C-Finder or its licensors and is protected by copyright and other intellectual property laws.
              You may not reproduce, distribute, or create derivative works without our prior written permission.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-(--text-primary) mb-3">5. Disclaimer</h2>
            <p>
              Information on this website is provided for general informational purposes only and does not
              constitute legal, financial, or professional advice. Results in past cases do not guarantee
              future outcomes. We recommend consulting with us directly regarding your specific situation.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-(--text-primary) mb-3">6. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, C-Finder shall not be liable for any indirect,
              incidental, special, or consequential damages arising from your use of this website or our
              services. Liability for any claim shall not exceed the amount paid by you for the specific
              services giving rise to the claim.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-(--text-primary) mb-3">7. Contact & Changes</h2>
            <p>
              For questions about these Terms of Service, contact us at support@crypto-finders.com. We may
              update these terms from time to time; the revised version will be posted on this page with an
              updated "Last updated" date. Continued use of the website after changes constitutes acceptance.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
