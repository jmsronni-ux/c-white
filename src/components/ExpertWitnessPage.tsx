import {
  Scale,
  ArrowRight,
  FileText,
  HeartCrack,
  Handshake,
  Gavel,
  FileSearch,
  Presentation,
  Mic,
  Check,
} from "lucide-react";
import { useBookingModal } from "../context/BookingModalContext";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { NoticeBar } from "./NoticeBar";
import { CTASection } from "./CTASection";

export function ExpertWitnessPage() {
  const { openBookingModal } = useBookingModal();
  return (
    <div className="flex flex-col w-full bg-(--bg-primary)">
      <NoticeBar />
      <Header />

      {/* Hero Section */}
      <section className="flex flex-col gap-6 sm:gap-8 w-full px-4 sm:px-6 lg:px-20 py-8 sm:py-12 lg:py-20 bg-gradient-to-b from-white to-[#EFF6FF]">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-16 w-full">
          {/* Left Content - order 2 on mobile so visual appears first, 1 on lg */}
          <div className="flex flex-col gap-4 sm:gap-6 flex-1 order-2 lg:order-1">
            <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 w-fit bg-(--accent-blue-tint) border border-(--accent-blue) rounded-full">
              <Scale className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-(--accent-blue)" strokeWidth={1.5} />
              <span className="text-xs sm:text-[13px] font-medium text-(--accent-blue)">Expert Witness Services</span>
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-[48px] font-bold text-(--text-primary) leading-[1.15] tracking-[-1px]">
              Court-Ready Blockchain{"\n"}Expert Testimony
            </h1>
            <p className="text-sm sm:text-base lg:text-lg font-normal text-(--text-secondary) leading-[1.6]">
              Our experts provide authoritative testimony in divorce proceedings, business disputes, and criminal cases requiring specialized blockchain and cryptocurrency knowledge.
            </p>
            <button type="button" onClick={openBookingModal} className="flex items-center justify-center sm:justify-start gap-2 w-full sm:w-fit px-6 sm:px-8 py-3.5 sm:py-4 bg-(--accent-blue) rounded-lg cursor-pointer hover:bg-(--accent-blue-hover) transition-colors touch-manipulation">
              <span className="text-sm sm:text-base font-semibold text-(--text-white)">Request Expert Consultation</span>
              <ArrowRight className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-(--text-white)" strokeWidth={1.5} />
            </button>
          </div>

          {/* Right Visual - compact on mobile, full on lg */}
          <div className="flex-shrink-0 w-full lg:w-[480px] h-[220px] sm:h-[280px] lg:h-[360px] rounded-xl sm:rounded-2xl bg-(--bg-surface) border border-(--border-light) p-0 overflow-hidden order-1 lg:order-2">
            <div className="relative w-full h-full">
              <div className="absolute left-3 top-3 sm:left-6 sm:top-6 lg:left-10 lg:top-10 flex flex-col gap-2 sm:gap-4 w-[calc(100%-1.5rem)] sm:w-[320px] lg:w-[400px] max-w-[400px] p-3 sm:p-5 lg:p-6 bg-(--bg-primary) border border-(--border-light) rounded-lg sm:rounded-xl">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-(--accent-blue-tint) shrink-0">
                    <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-(--accent-blue)" strokeWidth={1.5} />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-(--text-primary) truncate">Expert Report</span>
                </div>
                <div className="flex flex-col gap-1.5 sm:gap-2">
                  <div className="w-full h-1.5 sm:h-2 rounded bg-(--bg-muted)" />
                  <div className="w-3/4 sm:w-[280px] h-1.5 sm:h-2 rounded bg-(--bg-muted)" />
                  <div className="w-[85%] sm:w-[320px] h-1.5 sm:h-2 rounded bg-(--bg-muted)" />
                  <div className="w-1/2 sm:w-[200px] h-1.5 sm:h-2 rounded bg-(--accent-blue-tint)" />
                </div>
                <div className="flex items-center gap-1.5 w-fit px-2.5 sm:px-3 py-1 sm:py-1.5 bg-(--success) rounded-full">
                  <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-(--text-white)" strokeWidth={2} />
                  <span className="text-[10px] sm:text-xs font-medium text-(--text-white)">Court Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section className="flex flex-col items-center gap-8 sm:gap-12 lg:gap-16 w-full px-4 sm:px-6 lg:px-20 py-8 sm:py-12 lg:py-[100px] bg-(--bg-primary)">
        <div className="flex flex-col items-center gap-3 sm:gap-4 w-full">
          <span className="text-[10px] sm:text-xs font-semibold text-(--accent-blue) tracking-[2px]">PRACTICE AREAS</span>
          <h2 className="text-xl sm:text-3xl lg:text-[42px] font-bold text-(--text-primary) tracking-[-0.5px] text-center px-1">
            Expert Testimony Across Legal Domains
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 w-full">
          <PracticeCard
            icon={HeartCrack}
            title="Divorce Proceedings"
            description="Asset discovery and valuation of cryptocurrency holdings in marital dissolution cases. We identify hidden wallets and trace transaction histories."
          />
          <PracticeCard
            icon={Handshake}
            title="Business Disputes"
            description="Contract disputes, partnership disagreements, and commercial litigation involving digital assets and blockchain transactions."
          />
          <PracticeCard
            icon={Gavel}
            title="Criminal Cases"
            description="Supporting prosecution and defense with technical blockchain analysis, evidence preparation, and courtroom testimony."
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="flex flex-col items-center gap-8 sm:gap-12 lg:gap-16 w-full px-4 sm:px-6 lg:px-20 py-8 sm:py-12 lg:py-[100px] bg-(--bg-surface)">
        <div className="flex flex-col items-center gap-3 sm:gap-4 w-full">
          <span className="text-[10px] sm:text-xs font-semibold text-(--accent-blue) tracking-[2px]">OUR SERVICES</span>
          <h2 className="text-xl sm:text-3xl lg:text-[42px] font-bold text-(--text-primary) tracking-[-0.5px] text-center px-1">
            What We Deliver
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
          <ServiceCard
            icon={FileSearch}
            title="Case Analysis"
            description="Comprehensive review and analysis of blockchain evidence"
          />
          <ServiceCard
            icon={FileText}
            title="Report Preparation"
            description="Detailed expert reports suitable for court submission"
          />
          <ServiceCard
            icon={Presentation}
            title="Deposition Support"
            description="Pre-trial depositions and witness preparation"
          />
          <ServiceCard
            icon={Mic}
            title="Court Testimony"
            description="Live expert testimony in court proceedings"
          />
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      <Footer />
    </div>
  );
}

function PracticeCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-3 sm:gap-5 p-4 sm:p-6 lg:p-8 bg-(--bg-surface) border border-(--border-light) rounded-xl sm:rounded-2xl">
      <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-(--accent-blue-tint)">
        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-(--accent-blue)" strokeWidth={1.5} />
      </div>
      <h3 className="text-lg sm:text-xl lg:text-[22px] font-semibold text-(--text-primary)">{title}</h3>
      <p className="text-sm sm:text-[15px] font-normal text-(--text-secondary) leading-[1.6]">{description}</p>
    </div>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-3 sm:gap-4 p-4 sm:p-6 lg:p-8 bg-(--bg-primary) border border-(--border-light) rounded-xl sm:rounded-2xl">
      <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-(--accent-blue)" strokeWidth={1.5} />
      <h3 className="text-base sm:text-lg font-semibold text-(--text-primary)">{title}</h3>
      <p className="text-xs sm:text-sm font-normal text-(--text-secondary) leading-[1.5]">{description}</p>
    </div>
  );
}
