import {
  Landmark,
  ArrowRight,
  FileText,
  MapPin,
  CircleCheck,
  Search,
  GraduationCap,
  Scale,
} from "lucide-react";
import { useBookingModal } from "../context/BookingModalContext";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { NoticeBar } from "./NoticeBar";
import { CTASection } from "./CTASection";

export function PublicSectorPage() {
  const { openBookingModal } = useBookingModal();
  return (
    <div className="flex flex-col w-full bg-(--bg-primary)">
      <NoticeBar />
      <Header />

      {/* Hero Section */}
      <section className="flex flex-col gap-6 sm:gap-8 w-full px-4 sm:px-6 lg:px-20 py-8 sm:py-12 lg:py-20 bg-gradient-to-b from-white to-[#EFF6FF]">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-16 w-full">
          {/* Left Content */}
          <div className="flex flex-col gap-4 sm:gap-6 flex-1 order-2 lg:order-1">
            <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 w-fit bg-(--accent-blue-tint) border border-(--accent-blue) rounded-full">
              <Landmark className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-(--accent-blue)" strokeWidth={1.5} />
              <span className="text-xs sm:text-[13px] font-medium text-(--accent-blue)">Public Sector & Law Enforcement</span>
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-[48px] font-bold text-(--text-primary) leading-[1.1] tracking-[-1px]">
              Supporting Law Enforcement{"\n"}Worldwide
            </h1>
            <p className="text-sm sm:text-base lg:text-lg font-normal text-(--text-secondary) leading-[1.6]">
              We partner with federal, state, and international law enforcement agencies to provide technical expertise, training, and court-ready blockchain analysis for criminal investigations.
            </p>
            <button type="button" onClick={openBookingModal} className="flex items-center justify-center sm:justify-start gap-2 w-full sm:w-fit px-6 sm:px-8 py-3.5 sm:py-4 bg-(--accent-blue) rounded-lg cursor-pointer hover:bg-(--accent-blue-hover) transition-colors touch-manipulation">
              <span className="text-sm sm:text-base font-semibold text-(--text-white)">Request Agency Consultation</span>
              <ArrowRight className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-(--text-white)" strokeWidth={1.5} />
            </button>
          </div>

          {/* Right Visual - Agency Portal Card */}
          <div className="flex-shrink-0 w-full lg:w-[480px] h-[260px] sm:h-[320px] lg:h-[360px] rounded-xl sm:rounded-2xl bg-(--bg-navy) overflow-hidden order-1 lg:order-2">
            <div className="relative w-full h-full">
              <div className="absolute left-3 top-3 sm:left-6 sm:top-6 lg:left-10 lg:top-10 flex flex-col gap-4 sm:gap-5 w-[calc(100%-1.5rem)] sm:w-[320px] lg:w-[400px] max-w-[400px] p-4 sm:p-5 lg:p-6 bg-(--bg-navy-light) rounded-lg sm:rounded-xl">
                <div className="flex items-center justify-between w-full">
                  <span className="text-sm font-semibold text-(--text-white)">Agency Portal</span>
                  <div className="flex items-center gap-1 px-2.5 py-1 bg-(--accent-blue) rounded-full">
                    <span className="text-[11px] font-medium text-(--text-white)">Secure</span>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 w-full p-3 bg-white/[0.06] rounded-lg">
                    <FileText className="w-4 h-4 text-(--accent-blue-light)" strokeWidth={1.5} />
                    <span className="text-[13px] font-medium text-(--text-white)">Case Report #2847</span>
                  </div>
                  <div className="flex items-center gap-3 w-full p-3 bg-white/[0.06] rounded-lg">
                    <MapPin className="w-4 h-4 text-(--accent-blue-light)" strokeWidth={1.5} />
                    <span className="text-[13px] font-medium text-(--text-white)">Asset Location Identified</span>
                  </div>
                  <div className="flex items-center gap-3 w-full p-3 bg-white/[0.06] rounded-lg">
                    <CircleCheck className="w-4 h-4 text-(--success)" strokeWidth={1.5} />
                    <span className="text-[13px] font-medium text-(--text-white)">Exchange Freeze Confirmed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="flex flex-col items-center gap-8 sm:gap-12 lg:gap-16 w-full px-4 sm:px-6 lg:px-20 py-8 sm:py-12 lg:py-[100px] bg-(--bg-primary)">
        <div className="flex flex-col items-center gap-3 sm:gap-4 w-full">
          <span className="text-[10px] sm:text-xs font-semibold text-(--accent-blue) tracking-[2px]">HOW WE HELP</span>
          <h2 className="text-xl sm:text-3xl lg:text-[42px] font-bold text-(--text-primary) tracking-[-0.5px] text-center px-1">
            Services for Government Agencies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 w-full">
          <ServiceCard
            icon={Search}
            title="Investigation Support"
            description="Technical analysis and blockchain forensics to support ongoing criminal investigations involving cryptocurrency."
          />
          <ServiceCard
            icon={GraduationCap}
            title="Training Programs"
            description="Specialized training for law enforcement personnel on cryptocurrency investigations and blockchain analysis."
          />
          <ServiceCard
            icon={Scale}
            title="Expert Testimony"
            description="Court-ready testimony and expert witness services for prosecution teams handling crypto-related cases."
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
