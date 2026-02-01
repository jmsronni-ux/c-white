import { ShieldAlert } from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { NoticeBar } from "./NoticeBar";

export function ScamWarningsPage() {
  return (
    <div className="flex flex-col w-full bg-(--bg-primary)">
      <NoticeBar />
      <Header />

      <section className="relative flex flex-col items-center gap-6 w-full px-4 sm:px-6 lg:px-20 py-14 sm:py-16 bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0F172A]">
        <div className="flex items-center gap-2 px-5 py-2.5 bg-[#2563EB20] border border-[#2563EB50] rounded-full">
          <ShieldAlert className="w-4 h-4 text-[#60A5FA]" strokeWidth={1.5} />
          <span className="text-[13px] font-medium text-[#60A5FA]">Stay Safe</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-(--text-white) text-center">
          Scam Warnings
        </h1>
        <p className="text-[#94A3B8] text-center max-w-[600px]">
          How to Stay Safe
        </p>
      </section>

      <main className="w-full px-4 sm:px-6 lg:px-20 py-12 lg:py-16 max-w-[800px] mx-auto">
        <div className="flex flex-col gap-8 text-(--text-secondary) leading-relaxed">
          <section>
            <p>
              The cryptocurrency space is unfortunately rife with fraudsters who exploit victims of lost or stolen funds by posing as "recovery experts." These scams often target desperate individuals, promising impossible results and demanding payments. At <strong className="text-(--text-primary)">C Finder</strong>, we are committed to transparency and want to help you recognize legitimate services from fraudulent ones.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-(--text-primary) mb-4">Common Red Flags of Fake Crypto Recovery Services</h2>
            <p className="mb-4">Watch out for these warning signs—any one of them is reason to walk away immediately:</p>
            <ul className="flex flex-col gap-4 list-none pl-0">
              <li>
                <strong className="text-(--text-primary)">Upfront fees or "taxes/legal costs" before any work</strong>
                <br />
                <span className="text-(--text-secondary)">Legitimate firms like C Finder offer free initial assessments and only charge if viable intelligence is identified (and only after your approval).</span>
              </li>
              <li>
                <strong className="text-(--text-primary)">Guarantees of 100% recovery or "quick returns"</strong>
                <br />
                <span className="text-(--text-secondary)">Blockchain transactions are irreversible. No reputable service can guarantee funds will be recovered—success depends on third-party cooperation (exchanges, issuers, law enforcement).</span>
              </li>
              <li>
                <strong className="text-(--text-primary)">Requests for private keys, seed phrases, or wallet access</strong>
                <br />
                <span className="text-(--text-secondary)">Never share these with anyone. Legitimate investigators work solely with public blockchain data and the ownership proofs you provide voluntarily.</span>
              </li>
              <li>
                <strong className="text-(--text-primary)">Communication only via Telegram, WhatsApp, or unofficial channels</strong>
                <br />
                <span className="text-(--text-secondary)">Scammers avoid traceable email and professional domains. Verify all contact comes from official sources (e.g., @cfinder.com).</span>
              </li>
              <li>
                <strong className="text-(--text-primary)">Misspelled or lookalike domains</strong>
                <br />
                <span className="text-(--text-secondary)">Always check the exact URL. Impersonators use slight variations (e.g., c-finder.com, cf1nder.com) to trick users.</span>
              </li>
              <li>
                <strong className="text-(--text-primary)">Pressure tactics or urgency</strong>
                <br />
                <span className="text-(--text-secondary)">"Act now or lose your chance," "limited spots," or "funds will disappear soon"—these are classic manipulation techniques.</span>
              </li>
              <li>
                <strong className="text-(--text-primary)">Unsolicited contact</strong>
                <br />
                <span className="text-(--text-secondary)">If someone reaches out claiming to have "found your funds" without you initiating contact, it's almost certainly a scam.</span>
              </li>
              <li>
                <strong className="text-(--text-primary)">Payment in cryptocurrency to unknown wallets</strong>
                <br />
                <span className="text-(--text-secondary)">Legitimate firms use standard payment processors (credit card, bank transfer) and never ask for crypto upfront.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-(--text-primary) mb-4">How to Verify a Legitimate Service</h2>
            <ul className="flex flex-col gap-2 list-disc pl-6">
              <li>Look for a professional website with clear contact information, team bios, and detailed processes.</li>
              <li>Check for transparency: free assessments, no key requests, realistic expectations.</li>
              <li>Search for reviews on independent platforms (Trustpilot, Google) and verify they are authentic.</li>
              <li>Ensure the company has a physical presence or verifiable registration (e.g., business records in the US, Canada, Australia, or Europe for us).</li>
              <li>Test responsiveness: Legitimate firms reply promptly and professionally without pressure.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-(--text-primary) mb-4">If You've Been Scammed or Targeted</h2>
            <ul className="flex flex-col gap-3 list-disc pl-6 mb-4">
              <li>Do NOT pay any further fees—scammers often string victims along with escalating demands.</li>
              <li>
                Report to authorities:
                <ul className="list-[circle] pl-6 mt-2 space-y-1">
                  <li>Local police or cybercrime unit</li>
                  <li>Your country's financial regulator (e.g., SEC/CFTC in US, ASIC in Australia, etc.)</li>
                  <li>The platform where the scam occurred (if applicable)</li>
                </ul>
              </li>
              <li>Preserve all communications and transaction records as evidence.</li>
              <li>If you believe you've been contacted by a fake "C Finder" representative, forward details to <a href="mailto:hq@cfinder.com" className="text-(--accent-blue) hover:underline">hq@cfinder.com</a> so we can investigate and warn others.</li>
            </ul>
            <p>
              We take impersonation seriously and actively monitor for fraudulent activity using our name. If you encounter suspicious contact, please report it to us—we appreciate your help in keeping the space safer.
            </p>
          </section>

          <p className="text-sm text-(--text-tertiary) italic border-t border-(--border-light) pt-6">
            Disclaimer: These warnings are for informational purposes only. C Finder is not responsible for actions taken based on this information. Always conduct your own due diligence.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
