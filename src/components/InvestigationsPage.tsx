import {
  Search,
  ArrowRight,
  Wallet,
  Shuffle,
  Building2,
  TriangleAlert,
  Skull,
  Fish,
  KeyRound,
} from "lucide-react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { NoticeBar } from "./NoticeBar";
import { CTASection } from "./CTASection";
import { Link } from "react-router-dom";

export function InvestigationsPage() {
  return (
    <div className="flex flex-col w-full bg-(--bg-primary)">
      <NoticeBar />
      <Header />

      {/* Hero Section */}
      <section className="flex flex-col gap-6 sm:gap-8 w-full px-4 sm:px-6 lg:px-20 py-8 sm:py-12 lg:py-20 bg-gradient-to-b from-white to-[#EFF6FF]">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-16 w-full">
          {/* Left Content - order 2 on mobile */}
          <div className="flex flex-col gap-4 sm:gap-6 flex-1 order-2 lg:order-1">
            <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 w-fit bg-(--accent-blue-tint) border border-(--accent-blue) rounded-full">
              <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-(--accent-blue)" strokeWidth={1.5} />
              <span className="text-xs sm:text-[13px] font-medium text-(--accent-blue)">Crime Investigations</span>
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-[48px] font-bold text-(--text-primary) leading-[1.15] tracking-[-1px]">
              Cryptocurrency Crime{"\n"}Investigation Services
            </h1>
            <p className="text-sm sm:text-base lg:text-lg font-normal text-(--text-secondary) leading-[1.6]">
              We trace stolen digital assets and coordinate with exchanges and law enforcement agencies worldwide to intercept and recover funds.
            </p>
            <Link to="/contact" className="flex items-center justify-center sm:justify-start gap-2 w-full sm:w-fit px-6 sm:px-8 py-3.5 sm:py-4 bg-(--accent-blue) rounded-lg cursor-pointer hover:bg-(--accent-blue-hover) transition-colors touch-manipulation">
              <span className="text-sm sm:text-base font-semibold text-(--text-white)">Report a Crime</span>
              <ArrowRight className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-(--text-white)" strokeWidth={1.5} />
            </Link>
          </div>

          {/* Right Visual - Transaction Trace Card - compact on mobile */}
          <div className="shrink-0 w-full lg:w-[480px] h-[220px] sm:h-[280px] lg:h-[360px] rounded-xl sm:rounded-2xl bg-(--bg-surface) border border-(--border-light) overflow-hidden order-1 lg:order-2">
            <div className="relative w-full h-full">
              <div className="absolute left-3 top-3 sm:left-6 sm:top-6 lg:left-10 lg:top-10 flex flex-col gap-2 sm:gap-5 w-[calc(100%-1.5rem)] sm:w-[320px] lg:w-[400px] max-w-[400px] min-h-[180px] sm:min-h-[240px] lg:min-h-[280px] p-3 sm:p-5 lg:p-6 bg-(--bg-primary) border border-(--border-light) rounded-lg sm:rounded-xl">
                {/* Header */}
                <div className="flex items-center justify-between w-full gap-2">
                  <span className="text-xs sm:text-sm font-semibold text-(--text-primary) truncate">Transaction Trace</span>
                  <div className="flex items-center gap-1 px-2 sm:px-2.5 py-0.5 sm:py-1 bg-(--warning) rounded-full shrink-0">
                    <TriangleAlert className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-(--text-white)" strokeWidth={2} />
                    <span className="text-[10px] sm:text-[11px] font-medium text-(--text-white)">Suspicious</span>
                  </div>
                </div>

                {/* Node Flow */}
                <div className="flex items-center justify-center gap-1.5 sm:gap-3 lg:gap-4 w-full flex-1 min-h-0">
                  <div className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full bg-(--accent-blue-tint) border-2 border-(--accent-blue) shrink-0">
                    <Wallet className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-(--accent-blue)" strokeWidth={1.5} />
                  </div>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-(--text-tertiary) shrink-0" strokeWidth={1.5} />
                  <div className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full bg-[#FEF3C7] border-2 border-(--warning) shrink-0">
                    <Shuffle className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-(--warning)" strokeWidth={1.5} />
                  </div>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-(--text-tertiary) shrink-0" strokeWidth={1.5} />
                  <div className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full bg-[#D1FAE5] border-2 border-(--success) shrink-0">
                    <Building2 className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-(--success)" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between w-full">
                  <span className="text-[10px] sm:text-xs font-medium text-(--text-tertiary)">3 hops traced</span>
                  <span className="text-[10px] sm:text-xs font-semibold text-(--accent-blue)">$47,500 tracked</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crime Types Section */}
      <section className="flex flex-col items-center gap-8 sm:gap-12 lg:gap-16 w-full px-4 sm:px-6 lg:px-20 py-8 sm:py-12 lg:py-[100px] bg-(--bg-primary)">
        <div className="flex flex-col items-center gap-3 sm:gap-4 w-full">
          <span className="text-[10px] sm:text-xs font-semibold text-(--accent-blue) tracking-[2px]">CASE TYPES</span>
          <h2 className="text-xl sm:text-3xl lg:text-[42px] font-bold text-(--text-primary) tracking-[-0.5px] text-center px-1">
            Cryptocurrency Crimes We Investigate
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 w-full">
          <CrimeTypeCard
            icon={Skull}
            title="Ransomware Attacks"
            description="Tracing ransom payments and identifying threat actors through blockchain analysis."
          />
          <CrimeTypeCard
            icon={Fish}
            title="Phishing & Scams"
            description="Investigating social engineering attacks and recovering funds from fraudulent schemes."
          />
          <CrimeTypeCard
            icon={KeyRound}
            title="Exchange Hacks"
            description="Following stolen funds from compromised exchanges and DeFi protocols."
          />
        </div>
      </section>

      {/* Investigation Process Section */}
      <section className="flex flex-col items-center gap-8 sm:gap-12 lg:gap-16 w-full px-4 sm:px-6 lg:px-20 py-8 sm:py-12 lg:py-[100px] bg-(--bg-surface)">
        <div className="flex flex-col items-center gap-3 sm:gap-4 w-full">
          <span className="text-[10px] sm:text-xs font-semibold text-(--accent-blue) tracking-[2px]">OUR PROCESS</span>
          <h2 className="text-xl sm:text-3xl lg:text-[42px] font-bold text-(--text-primary) tracking-[-0.5px] text-center px-1">
            How We Investigate
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
          <ProcessStep
            number={1}
            title="Initial Assessment"
            description="Review case details, gather transaction data, and identify initial leads."
          />
          <ProcessStep
            number={2}
            title="Blockchain Analysis"
            description="Deep forensic analysis using industry-leading tools to trace fund flows."
          />
          <ProcessStep
            number={3}
            title="Exchange Coordination"
            description="Work with exchanges to freeze assets and coordinate fund recovery efforts."
          />
          <ProcessStep
            number={4}
            title="Report & Recovery"
            description="Provide court-ready reports and support legal proceedings for recovery."
          />
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      <Footer />
    </div>
  );
}

function CrimeTypeCard({
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

function ProcessStep({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-3 sm:gap-4 p-4 sm:p-6 lg:p-8 bg-(--bg-primary) border border-(--border-light) rounded-xl sm:rounded-2xl">
      <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-(--accent-blue)">
        <span className="text-base sm:text-lg font-bold text-(--text-white)">{number}</span>
      </div>
      <h3 className="text-base sm:text-lg font-semibold text-(--text-primary)">{title}</h3>
      <p className="text-xs sm:text-sm font-normal text-(--text-secondary) leading-normal">{description}</p>
    </div>
  );
}
