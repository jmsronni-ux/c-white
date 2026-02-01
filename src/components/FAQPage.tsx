import {
  HelpCircle,
  ArrowRight,
  MessageCircleQuestion,
  Check,
} from "lucide-react";
import { FAQSection } from "./FAQSection";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { NoticeBar } from "./NoticeBar";
import { CTASection } from "./CTASection";

export function FAQPage() {
  return (
    <div className="flex flex-col w-full bg-(--bg-primary)">
      <NoticeBar />
      <Header />

      {/* Hero Section */}
      <section className="flex flex-col gap-6 sm:gap-8 w-full px-4 sm:px-6 lg:px-20 py-8 sm:py-12 lg:py-20 bg-linear-to-b from-white to-[#EFF6FF]">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-16 w-full items-start lg:items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-4 sm:gap-6 flex-1 order-2 lg:order-1 w-full">
            <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 w-fit bg-(--accent-blue-tint) border border-(--accent-blue) rounded-full">
              <HelpCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-(--accent-blue)" strokeWidth={1.5} />
              <span className="text-xs sm:text-[13px] font-medium text-(--accent-blue)">FAQ</span>
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-[48px] font-bold text-(--text-primary) leading-[1.15] tracking-[-1px]">
              Frequently Asked{"\n"}Questions
            </h1>
            <p className="text-sm sm:text-base lg:text-lg font-normal text-(--text-secondary) leading-[1.6]">
              Answers to the most common questions about our blockchain forensics and asset investigation services. Can&apos;t find what you need? Contact us directly.
            </p>
            <button className="flex items-center justify-center sm:justify-start gap-2 w-full sm:w-fit px-6 sm:px-8 py-3.5 sm:py-4 bg-(--accent-blue) rounded-lg cursor-pointer hover:bg-(--accent-blue-hover) transition-colors touch-manipulation">
              <span className="text-sm sm:text-base font-semibold text-(--text-white)">Start Free Initial Scan</span>
              <ArrowRight className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-(--text-white)" strokeWidth={1.5} />
            </button>
          </div>

          {/* Right Visual - FAQ card mockup */}
          <div className="shrink-0 w-full lg:w-[480px] p-3 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-(--bg-surface) border border-(--border-light) order-1 lg:order-2">
            <div className="flex flex-col gap-3 sm:gap-6">
              <div className="flex items-center justify-between w-full gap-2">
                <span className="text-xs sm:text-base font-semibold text-(--text-primary) truncate">Common Questions</span>
                <div className="flex items-center gap-1 px-2 sm:px-2.5 py-0.5 sm:py-1 bg-(--success) rounded-full shrink-0">
                  <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-(--text-white)" strokeWidth={2} />
                  <span className="text-[10px] sm:text-[11px] font-medium text-(--text-white)">Answered</span>
                </div>
              </div>
              <div className="flex flex-col gap-2 sm:gap-3">
                <div className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 bg-(--bg-primary) border border-(--border-light) rounded-lg">
                  <MessageCircleQuestion className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-(--accent-blue) shrink-0" strokeWidth={1.5} />
                  <span className="text-[11px] sm:text-[13px] font-medium text-(--text-secondary)">What does C Finder do?</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 bg-(--bg-primary) border border-(--border-light) rounded-lg">
                  <MessageCircleQuestion className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-(--accent-blue) shrink-0" strokeWidth={1.5} />
                  <span className="text-[11px] sm:text-[13px] font-medium text-(--text-secondary)">Do you guarantee recovery?</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 bg-(--accent-blue-tint) border border-(--accent-blue) rounded-lg">
                  <MessageCircleQuestion className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-(--accent-blue) shrink-0" strokeWidth={1.5} />
                  <span className="text-[11px] sm:text-[13px] font-medium text-(--text-primary)">Why is the initial scan free?</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="flex flex-col items-center gap-8 sm:gap-12 lg:gap-16 w-full px-4 sm:px-6 lg:px-20 py-8 sm:py-12 lg:py-[100px] bg-(--bg-primary)">
        <div className="flex flex-col items-center gap-3 sm:gap-4 w-full">
          <span className="text-[10px] sm:text-xs font-semibold text-(--accent-blue) tracking-[2px]">COMMON QUESTIONS</span>
          <h2 className="text-xl sm:text-3xl lg:text-[42px] font-bold text-(--text-primary) tracking-[-0.5px] text-center px-1">
            Answers to Your Questions
          </h2>
        </div>

        <FAQSection hideHeader />
      </section>

      {/* CTA Section */}
      <CTASection />

      <Footer />
    </div>
  );
}
