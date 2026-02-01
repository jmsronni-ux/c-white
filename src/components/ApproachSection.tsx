import { useRef } from "react";
import {
  FileCheck, ScanSearch, ChartBar, FileText, Handshake,
  type LucideIcon,
} from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";

const approachSteps: { num: string; title: string; desc: string; icon: LucideIcon }[] = [
  {
    num: "01",
    title: "Submit Proofs",
    desc: "Securely upload verifiable details of your original acquisition (e.g., transaction IDs, receipts, exchange statements, bank wires).",
    icon: FileCheck,
  },
  {
    num: "02",
    title: "Free Initial Scan",
    desc: "Our proprietary system scans Bitcoin, Ethereum, Solana, XRP, BNB Chain, and USDT for matching patterns or dormant/current assets.",
    icon: ScanSearch,
  },
  {
    num: "03",
    title: "Results Evaluation",
    desc: "If potential matches are identified, we notify you with a basic summary. No charge for the scan itself.",
    icon: ChartBar,
  },
  {
    num: "04",
    title: "Actionable Intelligence",
    desc: "Pay only for a detailed forensic report if viable matches emerge—complete with transaction flows, provenance evidence, address clustering, and recommended next steps (e.g., exchange submission, LE reporting).",
    icon: FileText,
  },
  {
    num: "05",
    title: "Support & Coordination",
    desc: "Guidance on engaging platforms, authorities, or legal counsel to seek freezes, seizures, or re-allocations where feasible.",
    icon: Handshake,
  },
];

export function ApproachSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const activeIndex = useTransform(scrollYProgress, [0, 1], [0, approachSteps.length - 1]);

  return (
    <section className="relative bg-(--bg-navy)">
      {/* Mobile: vertical stack of steps */}
      <div className="md:hidden flex flex-col px-4 sm:px-6 lg:px-20 py-8 lg:py-16 gap-8">
        <div className="flex flex-col items-center gap-4 w-full mb-4">
          <span className="text-xs font-semibold text-[#60A5FA] tracking-[2px]">HOW WE OPERATE</span>
          <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-bold text-(--text-white) tracking-[-0.5px] text-center">Bespoke Service Delivery</h2>
          <p className="text-base lg:text-lg font-normal text-[#94A3B8] text-center">
            We treat all information as strictly confidential and never request private keys, seeds, or wallet access
          </p>
        </div>
        <div className="flex flex-col gap-6">
          {approachSteps.map((step) => (
            <MobileStepCard key={step.num} step={step} />
          ))}
        </div>
      </div>

      {/* Desktop: sticky scroll-driven layout */}
      <div
        ref={containerRef}
        className="hidden md:block"
        style={{ height: `${approachSteps.length * 100}vh` }}
      >
        <div className="sticky top-0 h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-20 py-8 lg:py-[100px]">
          <div className="flex flex-col items-center gap-4 w-full mb-16">
            <span className="text-xs font-semibold text-[#60A5FA] tracking-[2px]">HOW WE OPERATE</span>
            <h2 className="text-[42px] font-bold text-(--text-white) tracking-[-0.5px] text-center">Bespoke Service Delivery</h2>
            <p className="text-lg font-normal text-[#94A3B8] text-center">
              We treat all information as strictly confidential and never request private keys, seeds, or wallet access
            </p>
          </div>

          <div className="flex gap-8 w-full items-center">
            {/* Vertical Pagination */}
            <div className="flex flex-col gap-[28px] h-[160px] justify-center">
              {approachSteps.map((step, index) => (
                <VerticalPaginationDot key={step.num} index={index} activeIndex={activeIndex} />
              ))}
            </div>

            {/* Left Column - Number + Title */}
            <div className="flex flex-col gap-2 w-[380px] relative h-[160px] justify-center shrink-0">
              {approachSteps.map((step, index) => (
                <StepLeft key={step.num} step={step} index={index} activeIndex={activeIndex} />
              ))}
            </div>

            {/* Divider */}
            <div className="w-px h-[120px] bg-[#334155] shrink-0" />

            {/* Right Column - Description */}
            <div className="flex-1 relative h-[160px] flex items-center min-w-0">
              {approachSteps.map((step, index) => (
                <StepRight key={step.num} step={step} index={index} activeIndex={activeIndex} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MobileStepCard({ step }: { step: (typeof approachSteps)[0] }) {
  const Icon = step.icon;
  return (
    <div className="flex flex-col gap-4 p-5 rounded-2xl bg-(--bg-navy-light)/50 border border-[#334155]">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#3B82F6] to-[#1E40AF] shadow-lg shadow-blue-500/20 shrink-0">
          <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" strokeWidth={1.5} />
        </div>
        <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#60A5FA]">{step.num}</span>
      </div>
      <span className="text-lg sm:text-xl lg:text-[26px] font-semibold text-(--text-white)">{step.title}</span>
      <p className="text-sm sm:text-base lg:text-lg font-normal text-[#94A3B8] leading-[1.8]">{step.desc}</p>
    </div>
  );
}

function StepLeft({ step, index, activeIndex }: { step: (typeof approachSteps)[0]; index: number; activeIndex: ReturnType<typeof useTransform<number, number>> }) {
  const opacity = useTransform(activeIndex, (latest) => {
    const distance = Math.abs(latest - index);
    return Math.max(0, 1 - distance * 1.5);
  });

  const y = useTransform(activeIndex, (latest) => {
    const distance = latest - index;
    return distance * -40;
  });

  const scale = useTransform(activeIndex, (latest) => {
    const distance = Math.abs(latest - index);
    return Math.max(0.8, 1 - distance * 0.2);
  });

  const Icon = step.icon;

  return (
    <motion.div
      className="absolute inset-0 flex flex-col gap-4"
      style={{ opacity, y, scale }}
    >
      <div className="flex items-center gap-5">
        <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3B82F6] to-[#1E40AF] shadow-lg shadow-blue-500/20">
          <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
        </div>
        <span className="text-6xl font-bold text-[#60A5FA]">{step.num}</span>
      </div>
      <span className="text-[26px] font-semibold text-(--text-white)">{step.title}</span>
    </motion.div>
  );
}

function StepRight({ step, index, activeIndex }: { step: (typeof approachSteps)[0]; index: number; activeIndex: ReturnType<typeof useTransform<number, number>> }) {
  const opacity = useTransform(activeIndex, (latest) => {
    const distance = Math.abs(latest - index);
    return Math.max(0, 1 - distance * 1.5);
  });

  const y = useTransform(activeIndex, (latest) => {
    const distance = latest - index;
    return distance * -40;
  });

  return (
    <motion.div
      className="absolute inset-0 flex items-center"
      style={{ opacity, y }}
    >
      <p className="text-lg font-normal text-[#94A3B8] leading-[1.8]">{step.desc}</p>
    </motion.div>
  );
}

function VerticalPaginationDot({ index, activeIndex }: { index: number; activeIndex: ReturnType<typeof useTransform<number, number>> }) {
  const height = useTransform(activeIndex, (latest) => {
    const distance = Math.abs(latest - index);
    return distance < 0.5 ? 32 : 8;
  });

  const backgroundColor = useTransform(activeIndex, (latest) => {
    const distance = Math.abs(latest - index);
    return distance < 0.5 ? "#60A5FA" : "#334155";
  });

  return (
    <motion.div
      className="w-2 rounded-full shrink-0"
      style={{ height, backgroundColor }}
    />
  );
}
