import { ChevronDown } from "lucide-react";
import { useState } from "react";
import type { ReactNode } from "react";

const faqItems: { question: string; answer: ReactNode }[] = [
  {
    question: "1. What exactly does C Finder do?",
    answer:
      "We specialize in blockchain forensics, ownership verification, and asset tracing across major networks (Bitcoin, Ethereum, Solana, XRP, BNB Chain, USDT). Using our proprietary multi-chain search system, we match historical ownership proofs to current on-chain data and provide detailed forensic reports to support potential recovery efforts through KYC-compliant exchanges, stablecoin issuers, or law enforcement.",
  },
  {
    question: "2. Do you guarantee recovery of lost or stolen crypto?",
    answer:
      "No. We do not guarantee recovery. Blockchain transactions are irreversible by design, and success depends on many external factors, including third-party cooperation (exchanges, issuers, authorities), the quality and timeliness of evidence, and case-specific circumstances. We provide investigative intelligence and actionable reports only—outcomes are never certain.",
  },
  {
    question: "3. Why is the initial scan free?",
    answer:
      "The free initial scan allows us to quickly evaluate whether our proprietary system identifies potential matches based on your ownership proofs. We only charge for detailed forensic reports and support if viable intelligence emerges. This aligns our incentives with yours and removes upfront financial risk for clients.",
  },
  {
    question: "4. What kinds of ownership proofs do I need to submit?",
    answer: (
      <>
        Strong proofs improve the accuracy and usefulness of our analysis. Common examples include:
        <ul className="mt-2 list-disc pl-6 space-y-1 text-(--text-secondary)">
          <li>Exchange purchase/sale statements or transaction confirmations</li>
          <li>Bank wire receipts or payment records</li>
          <li>Transaction IDs/hashes from wallets or platforms</li>
          <li>Dated screenshots or legacy account records</li>
          <li>Any documentation establishing provenance and timeline</li>
        </ul>
        <span className="text-(--text-secondary)">
          The more verifiable and detailed the proofs, the better our matching results.
        </span>
      </>
    ),
  },
  {
    question: "5. Do you ever ask for private keys, seed phrases, or wallet access?",
    answer:
      "Never. We do not request, accept, or require private keys, seed phrases, wallet access, or any sensitive cryptographic material. All our work is based on public blockchain data and the ownership proofs you provide voluntarily.",
  },
  {
    question: "6. How long does the free initial scan take?",
    answer:
      "Most scans are completed within 24–48 hours, often faster for straightforward cases. Complex submissions with extensive proofs may take slightly longer. You will receive a clear summary via secure email.",
  },
  {
    question: "7. What happens if no matches are found in the initial scan?",
    answer:
      "If no potential matches are identified, the process ends there with no charge. We may provide brief feedback on why (e.g., insufficient proofs, assets likely moved/mixed) and suggestions for gathering additional evidence if you wish to try again later.",
  },
  {
    question: "8. How much does a detailed forensic report cost?",
    answer:
      "Pricing is case-specific and transparent. If the initial scan reveals potential value, we provide a clear quote before proceeding—typically a flat fee for the report (ranging from several hundred to a few thousand USD depending on complexity) or contingency-based options for full coordination support (percentage of recovered value, only if successful). No hidden fees.",
  },
  {
    question: "9. Can you help with legal proceedings or law enforcement?",
    answer:
      "Yes. Our forensic reports are designed to be detailed, auditable, and court-admissible where applicable. We provide guidance on submitting evidence to exchanges, issuers, or authorities, and we can collaborate with licensed attorneys or law enforcement contacts when appropriate. However, we are not a law firm and do not provide legal advice.",
  },
  {
    question: "10. How do you ensure confidentiality and data security?",
    answer:
      "All client data and proofs are handled with industry-standard encryption, secure upload portals, and strict non-disclosure protocols. We operate under rigorous confidentiality agreements, delete sensitive materials after case closure (unless retention is legally required), and never share information without explicit consent or legal obligation.",
  },
  {
    question: "11. What chains do you support?",
    answer:
      "Our proprietary system currently scans Bitcoin (BTC), Ethereum (ETH), Solana (SOL), XRP, BNB Chain (BNB), and USDT (across supported networks). We continue to expand coverage based on client needs and blockchain developments.",
  },
  {
    question: "12. How can I tell if a crypto recovery service is legitimate?",
    answer:
      "Red flags include: demands for upfront fees before any work, promises of guaranteed or 100% recovery, requests for private keys/seeds, communication only via Telegram/unofficial channels, or misspelled domains. Legitimate firms like C Finder offer free initial assessments, never ask for keys, emphasize realism, and communicate from verified official channels.",
  },
  {
    question: "13. Where is C Finder based, and who is on your team?",
    answer: (
      <>
        We are a globally distributed team of blockchain forensics experts based in the United States, Canada, Australia, and Europe. Our investigators bring backgrounds in cybersecurity, financial crime tracing, compliance, and digital asset analysis. See our{" "}
        <a href="/experts" className="text-(--accent-blue) hover:underline">
          Our Experts
        </a>{" "}
        page for more details.
      </>
    ),
  },
  {
    question: "14. What if my case involves a very old transaction or complex chain-hopping?",
    answer:
      "We handle legacy and multi-hop cases routinely. While older or obfuscated transactions can be more challenging, strong ownership proofs and our advanced tracing tools often still yield valuable intelligence. Start with the free scan to assess viability.",
  },
];

type FAQSectionProps = {
  /** When true, only the accordion and bottom CTA are rendered (for use inside FAQPage hero layout). */
  hideHeader?: boolean;
};

export function FAQSection({ hideHeader }: FAQSectionProps) {
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set());

  const toggle = (index: number) => {
    setOpenIndices((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <section className={`flex flex-col items-center w-full ${hideHeader ? "gap-8 sm:gap-10" : "gap-12 lg:gap-16 px-4 sm:px-6 lg:px-20 py-12 lg:py-[100px] bg-linear-to-b from-[#F8FAFC] via-white to-[#EFF6FF]"}`}>
      {!hideHeader && (
        <div className="flex flex-col items-center gap-4 w-full">
          <span className="text-xs font-semibold text-(--accent-blue) tracking-[2px]">FAQ</span>
          <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-bold text-(--text-primary) tracking-[-0.5px] text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg font-normal text-(--text-secondary) text-center max-w-[700px]">
            Here are answers to the most common questions we receive about our blockchain forensics and asset investigation services. If your question isn&apos;t covered, feel free to contact us directly.
          </p>
        </div>
      )}

      <div className="flex flex-col gap-3 w-full max-w-[800px]">
        {faqItems.map((item, index) => {
          const isOpen = openIndices.has(index);
          return (
            <div
              key={item.question}
              className="rounded-xl border border-(--border-light) bg-(--bg-primary) overflow-hidden"
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left hover:bg-(--bg-surface) transition-colors"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                <h3 className="text-base lg:text-lg font-semibold text-(--text-primary)">
                  {item.question}
                </h3>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-(--text-secondary) transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  strokeWidth={1.5}
                  aria-hidden
                />
              </button>
              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className="grid transition-[grid-template-rows] duration-200 ease-out"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              >
                <div className="min-h-0 overflow-hidden">
                  <div className="pb-4 pt-0 px-5 text-[15px] font-normal text-(--text-secondary) leading-[1.6]">
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col items-center gap-6 w-full">
        <p className="text-sm font-normal text-(--text-tertiary) text-center max-w-[700px] italic">
          Disclaimer: The information provided here is for general guidance only and does not constitute legal, financial, or professional advice. Consult qualified professionals for your specific circumstances.
        </p>
      </div>
    </section>
  );
}
