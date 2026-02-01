import {
  Building2,
  ArrowRight,
  ShieldCheck,
  Check,
  Siren,
  ShieldAlert,
  FileSearch,
  ClipboardCheck,
  GraduationCap,
  Eye,
} from "lucide-react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { NoticeBar } from "./NoticeBar";
import { CTASection } from "./CTASection";
import { useBookingModal } from "../context/BookingModalContext";

export function BusinessServicesPage() {
  const { openBookingModal } = useBookingModal();
  return (
    <div className="flex flex-col w-full bg-(--bg-primary)">
      <NoticeBar />
      <Header />

      {/* Hero Section */}
      <section className="flex flex-col gap-6 sm:gap-8 w-full px-4 sm:px-6 lg:px-20 py-8 sm:py-12 lg:py-20 bg-gradient-to-b from-white to-[#EFF6FF]">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-16 w-full items-start lg:items-center">
          {/* Left Content - order 2 on mobile so visual appears first */}
          <div className="flex flex-col gap-4 sm:gap-6 flex-1 order-2 lg:order-1 w-full">
            <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 w-fit bg-(--accent-blue-tint) border border-(--accent-blue) rounded-full">
              <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-(--accent-blue)" strokeWidth={1.5} />
              <span className="text-xs sm:text-[13px] font-medium text-(--accent-blue)">Business Services</span>
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-[48px] font-bold text-(--text-primary) leading-[1.15] tracking-[-1px]">
              Cryptocurrency Security{"\n"}for Enterprises
            </h1>
            <p className="text-sm sm:text-base lg:text-lg font-normal text-(--text-secondary) leading-[1.6]">
              Comprehensive security services, incident response, compliance consulting, and due diligence for cryptocurrency businesses and traditional enterprises entering the digital asset space.
            </p>
            <button type="button" onClick={openBookingModal} className="flex items-center justify-center sm:justify-start gap-2 w-full sm:w-fit px-6 sm:px-8 py-3.5 sm:py-4 bg-(--accent-blue) rounded-lg cursor-pointer hover:bg-(--accent-blue-hover) transition-colors touch-manipulation">
              <span className="text-sm sm:text-base font-semibold text-(--text-white)">Schedule Security Assessment</span>
              <ArrowRight className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-(--text-white)" strokeWidth={1.5} />
            </button>
          </div>

          {/* Right Visual - Security Dashboard - compact on mobile */}
          <div className="shrink-0 w-full lg:w-[480px] p-3 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-(--bg-surface) border border-(--border-light) order-1 lg:order-2">
            <div className="flex flex-col gap-3 sm:gap-6">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between w-full gap-2">
                <span className="text-xs sm:text-base font-semibold text-(--text-primary) truncate">Security Dashboard</span>
                <div className="flex items-center gap-1 px-2 sm:px-2.5 py-0.5 sm:py-1 bg-(--success) rounded-full shrink-0">
                  <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-(--text-white)" strokeWidth={2} />
                  <span className="text-[10px] sm:text-[11px] font-medium text-(--text-white)">Protected</span>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-1.5 sm:gap-4">
                <div className="flex flex-col gap-0.5 sm:gap-2 p-2 sm:p-4 bg-(--bg-primary) border border-(--border-light) rounded-lg sm:rounded-xl min-w-0">
                  <span className="text-base sm:text-2xl font-bold text-(--success) truncate">99.9%</span>
                  <span className="text-[9px] sm:text-xs font-medium text-(--text-tertiary)">Uptime</span>
                </div>
                <div className="flex flex-col gap-0.5 sm:gap-2 p-2 sm:p-4 bg-(--bg-primary) border border-(--border-light) rounded-lg sm:rounded-xl min-w-0">
                  <span className="text-base sm:text-2xl font-bold text-(--accent-blue)">0</span>
                  <span className="text-[9px] sm:text-xs font-medium text-(--text-tertiary)">Breaches</span>
                </div>
                <div className="flex flex-col gap-0.5 sm:gap-2 p-2 sm:p-4 bg-(--bg-primary) border border-(--border-light) rounded-lg sm:rounded-xl min-w-0">
                  <span className="text-base sm:text-2xl font-bold text-(--text-primary) truncate">24/7</span>
                  <span className="text-[9px] sm:text-xs font-medium text-(--text-tertiary)">Monitoring</span>
                </div>
              </div>

              {/* Alert Status */}
              <div className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 bg-(--bg-primary) border border-(--border-light) rounded-lg">
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-(--success) shrink-0" strokeWidth={1.5} />
                <span className="text-[11px] sm:text-[13px] font-medium text-(--text-secondary)">All systems secure</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="flex flex-col items-center gap-8 sm:gap-12 lg:gap-16 w-full px-4 sm:px-6 lg:px-20 py-8 sm:py-12 lg:py-[100px] bg-(--bg-primary)">
        <div className="flex flex-col items-center gap-3 sm:gap-4 w-full">
          <span className="text-[10px] sm:text-xs font-semibold text-(--accent-blue) tracking-[2px]">OUR SERVICES</span>
          <h2 className="text-xl sm:text-3xl lg:text-[42px] font-bold text-(--text-primary) tracking-[-0.5px] text-center px-1">
            Enterprise Security Solutions
          </h2>
        </div>

        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 w-full">
          <ServiceCard
            icon={Siren}
            title="Incident Response"
            description="Emergency response teams for security breaches and fraudulent activity. Round-the-clock monitoring and real-time fund tracking."
          />
          <ServiceCard
            icon={ShieldAlert}
            title="Security Advisory"
            description="Comprehensive security assessments, risk audits, and best practices guidance. Staff training on current threat landscapes."
          />
          <ServiceCard
            icon={FileSearch}
            title="Due Diligence"
            description="Transaction verification and asset origin analysis. Meticulously analyzing transaction histories to ensure regulatory compliance."
          />
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 w-full -mt-2 sm:-mt-6 lg:-mt-8">
          <ServiceCard
            icon={ClipboardCheck}
            title="Compliance & AML"
            description="Establish anti-money laundering programs aligned with industry standards. SAR assistance and ongoing investigative support."
          />
          <ServiceCard
            icon={GraduationCap}
            title="Staff Training"
            description="Educate your team on cryptocurrency security best practices, credential management, and threat detection."
          />
          <ServiceCard
            icon={Eye}
            title="Ongoing Monitoring"
            description="Continuous surveillance of wallet addresses and transaction patterns to identify suspicious activity in real-time."
          />
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      <Footer />
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
    <div className="flex flex-col gap-3 sm:gap-5 p-4 sm:p-6 lg:p-8 bg-(--bg-surface) border border-(--border-light) rounded-xl sm:rounded-2xl">
      <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-(--accent-blue-tint)">
        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-(--accent-blue)" strokeWidth={1.5} />
      </div>
      <h3 className="text-lg sm:text-xl lg:text-[22px] font-semibold text-(--text-primary)">{title}</h3>
      <p className="text-sm sm:text-[15px] font-normal text-(--text-secondary) leading-[1.6]">{description}</p>
    </div>
  );
}
