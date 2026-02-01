import {
  ShieldCheck, ArrowRight, Search, Coins, Scale, AlertTriangle, Image, Moon, Rocket, Pickaxe,
  Lock, Gavel, ArrowLeftRight, Ban, HandCoins, Pill, AlertOctagon, RefreshCw, Users, Store,
  Server, Layers, UserX, Briefcase, Building2, Shield,
  type LucideIcon,
} from "lucide-react";
import { motion } from "motion/react";
import { ApproachSection } from "./ApproachSection";
import { CTASection } from "./CTASection";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { NoticeBar } from "./NoticeBar";
import { Link } from "react-router-dom"

export function HomePage() {
  return (
    <div className="flex flex-col w-full bg-(--bg-primary)">
      <NoticeBar />
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-fit bg-gradient-to-b from-white via-[#EFF6FF] to-[#DBEAFE]">
        {/* Left Decorations */}
        <div className="hidden lg:block absolute left-0 top-[100px] w-[300px] h-[400px]">
          <motion.div
            className="absolute -left-[100px] top-[50px] w-[250px] h-[250px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.15)_0%,rgba(37,99,235,0.15)_50%,rgba(29,78,216,0.15)_100%)]"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute left-[50px] top-[150px] w-[120px] h-[120px] border-[1.5px] border-[#3B82F6] rounded-xl rotate-[15deg] opacity-30"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          />
          <motion.div
            className="absolute left-[70px] top-[30px] w-20 h-20 border-[1.5px] border-[#60A5FA] rounded-lg -rotate-[20deg] opacity-40"
            animate={{ y: [0, 25, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          />
        </div>

        {/* Right Decorations */}
        <div className="hidden lg:block absolute right-0 top-[150px] w-[300px] h-[400px]">
          <motion.div
            className="absolute right-[30px] top-20 w-[220px] h-[220px] rounded-full bg-[radial-gradient(circle,rgba(96,165,250,0.12)_0%,rgba(59,130,246,0.12)_60%,rgba(37,99,235,0.12)_100%)]"
            animate={{ y: [0, -25, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.svg
            className="absolute right-[150px] top-[200px] w-[100px] h-[100px] opacity-25"
            viewBox="0 0 100 100"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          >
            <polygon
              points="50,0 93.3,25 93.3,75 50,100 6.7,75 6.7,25"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="2"
              transform="rotate(30, 50, 50)"
            />
          </motion.svg>
          <motion.div
            className="absolute right-[70px] top-[30px] flex flex-col gap-2"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          >
            {[0.5, 0.5, 0.5].map((_, row) => (
              <div key={row} className="flex gap-2">
                {[0.5, 0.5, 0.5].map((__, col) => (
                  <div key={col} className="w-2 h-2 rounded-full bg-[#3B82F6] opacity-50" />
                ))}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Hero Content */}
        <div className="flex flex-col items-center gap-6 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-20 pt-16 lg:pt-[87px]">
          <div className="flex items-center gap-2 px-4 py-2 bg-(--accent-blue-tint) border border-(--accent-blue) rounded-full">
            <ShieldCheck className="w-4 h-4 text-(--accent-blue) shrink-0" strokeWidth={1.5} />
            <span className="text-xs sm:text-[13px] font-medium text-(--accent-blue)">Industry-Leading Blockchain Forensics Since 2018</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-(--text-primary) text-center leading-tight tracking-[-1px] max-w-[967px]">
            We specialize in tracing digital assets across major networks
          </h1>
          <p className="text-base sm:text-lg lg:text-xl font-normal text-(--text-secondary) text-center leading-[1.5] max-w-[972px]">
            Our proprietary multi-chain search system analyzes on-chain data to match verified purchase proofs with current asset locations — providing forensic reports that empower clients to pursue legitimate recovery avenues through KYC-compliant exchanges, issuers, and law enforcement
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <Link to="/contact" className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-(--accent-blue) rounded-lg cursor-pointer hover:bg-(--accent-blue-hover) transition-colors">
              <span className="text-base font-semibold text-(--text-white)">Open a case</span>
              <ArrowRight className="w-[18px] h-[18px] text-(--text-white)" strokeWidth={1.5} />
            </Link>
            <Link to="/about" className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-transparent border-[1.5px] border-(--border-default) rounded-lg cursor-pointer hover:bg-(--bg-surface) transition-colors">
              <span className="text-base font-semibold text-(--text-primary)">About Us</span>
            </Link>
          </div>
        </div>

        {/* Trust Bar */}
        <div className="flex flex-col items-center gap-6 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-20 pt-10 pb-12">
          <span className="text-xs font-semibold text-(--text-tertiary) tracking-[2px]">TRUSTED BY LEADING ORGANIZATIONS</span>
          <div className="flex items-center gap-6 md:gap-[42px] overflow-x-auto w-full justify-start md:justify-center pb-2 flex-nowrap scrollbar-hide [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <div className="w-[74px] h-[26px] shrink-0 bg-[url('/BIG.webp')] bg-cover bg-center" />
            <div className="w-[113px] h-[26px] shrink-0 bg-[url('/crypto-lock.webp')] bg-contain bg-center bg-no-repeat" />
            <div className="w-[119px] h-[25px] shrink-0 bg-[url('/Elliptic.webp')] bg-contain bg-center bg-no-repeat" />
            <div className="w-[156px] h-[25px] shrink-0 bg-[url('/Partner-Merkle-Science.webp')] bg-contain bg-center bg-no-repeat" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-2 lg:flex lg:justify-around w-full gap-6 p-6 lg:p-20 bg-(--bg-navy) overflow-hidden">
        <motion.div
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-3xl lg:text-5xl font-bold text-(--text-white)">500+</span>
          <span className="text-sm lg:text-base font-normal text-(--text-tertiary) text-center">Cases Investigated</span>
        </motion.div>
        <motion.div
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        >
          <span className="text-3xl lg:text-5xl font-bold text-(--text-white)">$100M+</span>
          <span className="text-sm lg:text-base font-normal text-(--text-tertiary) text-center">Assets Traced</span>
        </motion.div>
        <motion.div
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          <span className="text-3xl lg:text-5xl font-bold text-(--text-white)">50+</span>
          <span className="text-sm lg:text-base font-normal text-(--text-tertiary) text-center">Expert Testimonies</span>
        </motion.div>
        <motion.div
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.45 }}
        >
          <span className="text-3xl lg:text-5xl font-bold text-(--accent-blue-light)">24/7</span>
          <span className="text-sm lg:text-base font-normal text-(--text-tertiary) text-center">Global Support</span>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="flex flex-col items-center gap-12 lg:gap-16 w-full px-4 sm:px-6 lg:px-20 py-12 lg:py-[100px] bg-gradient-to-b from-[#EFF6FF] via-white to-[#F8FAFC]">
        <div className="flex flex-col items-center gap-5 w-full">
          <h2 className="text-2xl sm:text-3xl lg:text-[44px] font-bold text-(--text-primary) text-center leading-[1.15] tracking-[-1px] max-w-[686px]">
            Comprehensive Blockchain{"\n"}Investigation Services
          </h2>
          <p className="text-base sm:text-lg lg:text-xl font-normal text-(--text-secondary) text-center max-w-[700px]">
            Leveraging multiple forensic tool suites to analyze blockchain transactions across Bitcoin, Ethereum, and other networks.
          </p>
        </div>

        {/* Services Grid */}
        <div className="flex flex-col lg:flex-row gap-6 w-full">
          <div className="flex flex-col gap-5 flex-1 p-6 lg:p-10 bg-(--bg-primary) border border-(--border-light) rounded-[20px]">
            <div className="relative w-full h-20 rounded-2xl bg-cover bg-center opacity-50" style={{ backgroundImage: "url('/images/generated-1769789734878.png')" }}>
              <Search className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 text-(--accent-blue)" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-(--text-primary)">Blockchain Forensics</h3>
            <p className="text-base font-normal text-(--text-secondary) leading-[1.7]">
              We illuminate transactions across multiple chains. Our proprietary tools analyze and visualize fund flows to verify historical ownership and identify potential current locations—extracting actionable intelligence for further recovery efforts or litigation.
            </p>
          </div>

          <div className="flex flex-col gap-5 flex-1 p-6 lg:p-10 bg-(--bg-primary) border border-(--border-light) rounded-[20px]">
            <div className="relative w-full h-20 rounded-2xl bg-cover bg-center opacity-35" style={{ backgroundImage: "url('/images/generated-1769789735060.png')" }}>
              <Coins className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 text-(--accent-blue)" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-(--text-primary)">Cryptocurrency Recovery</h3>
            <p className="text-base font-normal text-(--text-secondary) leading-[1.7]">
              We trace and monitor assets based on verified provenance. Leveraging on-chain analysis and industry connections, we help flag addresses and support interception or freezing where possible—liaising between clients, digital asset services, and law enforcement internationally.
            </p>
          </div>

          <div className="flex flex-col gap-5 flex-1 p-6 lg:p-10 bg-(--bg-primary) border border-(--border-light) rounded-[20px]">
            <div className="relative w-full h-20 rounded-2xl bg-cover bg-center opacity-50" style={{ backgroundImage: "url('/images/generated-1769789735307.png')" }}>
              <Scale className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 text-(--accent-blue)" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-(--text-primary)">Expert Testimony</h3>
            <p className="text-base font-normal text-(--text-secondary) leading-[1.7]">
              We produce detailed, court-admissible reports tailored to your case. These include timelines, evidence packs, and strategies to assist in exchange claims, issuer interventions (e.g., stablecoins), civil proceedings, or criminal investigations.
            </p>
          </div>
        </div>

        {/* Tags Container */}
        <div className="flex flex-col items-center gap-2 sm:gap-3 w-full overflow-hidden px-0">
          {/* Row 1 - Moving Right (4x duplicated for full coverage) */}
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex gap-2 sm:gap-4 w-max animate-marquee-right">
              <Tag icon={AlertTriangle} iconColor="#EF4444" text="Stolen Funds" />
              <Tag icon={Image} iconColor="#8B5CF6" text="NFT Platform" />
              <Tag icon={Moon} iconColor="#EC4899" text="Darknet Market" />
              <Tag icon={Rocket} iconColor="#6366F1" text="ICO" />
              <Tag icon={Pickaxe} iconColor="#F59E0B" text="Mining" />
              <Tag icon={Lock} iconColor="#3B82F6" text="Privacy Protocol" />
              <Tag icon={AlertTriangle} iconColor="#EF4444" text="Stolen Funds" />
              <Tag icon={Image} iconColor="#8B5CF6" text="NFT Platform" />
              <Tag icon={Moon} iconColor="#EC4899" text="Darknet Market" />
              <Tag icon={Rocket} iconColor="#6366F1" text="ICO" />
              <Tag icon={Pickaxe} iconColor="#F59E0B" text="Mining" />
              <Tag icon={Lock} iconColor="#3B82F6" text="Privacy Protocol" />
              <Tag icon={AlertTriangle} iconColor="#EF4444" text="Stolen Funds" />
              <Tag icon={Image} iconColor="#8B5CF6" text="NFT Platform" />
              <Tag icon={Moon} iconColor="#EC4899" text="Darknet Market" />
              <Tag icon={Rocket} iconColor="#6366F1" text="ICO" />
              <Tag icon={Pickaxe} iconColor="#F59E0B" text="Mining" />
              <Tag icon={Lock} iconColor="#3B82F6" text="Privacy Protocol" />
              <Tag icon={AlertTriangle} iconColor="#EF4444" text="Stolen Funds" />
              <Tag icon={Image} iconColor="#8B5CF6" text="NFT Platform" />
              <Tag icon={Moon} iconColor="#EC4899" text="Darknet Market" />
              <Tag icon={Rocket} iconColor="#6366F1" text="ICO" />
              <Tag icon={Pickaxe} iconColor="#F59E0B" text="Mining" />
              <Tag icon={Lock} iconColor="#3B82F6" text="Privacy Protocol" />
            </div>
          </div>
          {/* Row 2 - Moving Left (4x duplicated for full coverage) */}
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex gap-2 sm:gap-4 w-max animate-marquee-left">
              <Tag icon={Gavel} iconColor="#10B981" text="Seized Funds" />
              <Tag icon={ArrowLeftRight} iconColor="#F97316" text="Exchange" />
              <Tag icon={Ban} iconColor="#EF4444" text="Sanctions" />
              <Tag icon={HandCoins} iconColor="#0EA5E9" text="Lending" />
              <Tag icon={Pill} iconColor="#14B8A6" text="Online Pharmacy" />
              <Tag icon={AlertOctagon} iconColor="#DC2626" text="Fraud" />
              <Tag icon={Gavel} iconColor="#10B981" text="Seized Funds" />
              <Tag icon={ArrowLeftRight} iconColor="#F97316" text="Exchange" />
              <Tag icon={Ban} iconColor="#EF4444" text="Sanctions" />
              <Tag icon={HandCoins} iconColor="#0EA5E9" text="Lending" />
              <Tag icon={Pill} iconColor="#14B8A6" text="Online Pharmacy" />
              <Tag icon={AlertOctagon} iconColor="#DC2626" text="Fraud" />
              <Tag icon={Gavel} iconColor="#10B981" text="Seized Funds" />
              <Tag icon={ArrowLeftRight} iconColor="#F97316" text="Exchange" />
              <Tag icon={Ban} iconColor="#EF4444" text="Sanctions" />
              <Tag icon={HandCoins} iconColor="#0EA5E9" text="Lending" />
              <Tag icon={Pill} iconColor="#14B8A6" text="Online Pharmacy" />
              <Tag icon={AlertOctagon} iconColor="#DC2626" text="Fraud" />
              <Tag icon={Gavel} iconColor="#10B981" text="Seized Funds" />
              <Tag icon={ArrowLeftRight} iconColor="#F97316" text="Exchange" />
              <Tag icon={Ban} iconColor="#EF4444" text="Sanctions" />
              <Tag icon={HandCoins} iconColor="#0EA5E9" text="Lending" />
              <Tag icon={Pill} iconColor="#14B8A6" text="Online Pharmacy" />
              <Tag icon={AlertOctagon} iconColor="#DC2626" text="Fraud" />
            </div>
          </div>
          {/* Row 3 - Moving Right (4x duplicated for full coverage) */}
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex gap-2 sm:gap-4 w-max animate-marquee-right-slow">
              <Tag icon={RefreshCw} iconColor="#8B5CF6" text="DEX" />
              <Tag icon={Users} iconColor="#F97316" text="P2P Exchange" />
              <Tag icon={Store} iconColor="#3B82F6" text="Merchant Services" />
              <Tag icon={Server} iconColor="#0EA5E9" text="Infrastructure" />
              <Tag icon={Layers} iconColor="#10B981" text="Mining Pool" />
              <Tag icon={RefreshCw} iconColor="#8B5CF6" text="DEX" />
              <Tag icon={Users} iconColor="#F97316" text="P2P Exchange" />
              <Tag icon={Store} iconColor="#3B82F6" text="Merchant Services" />
              <Tag icon={Server} iconColor="#0EA5E9" text="Infrastructure" />
              <Tag icon={Layers} iconColor="#10B981" text="Mining Pool" />
              <Tag icon={RefreshCw} iconColor="#8B5CF6" text="DEX" />
              <Tag icon={Users} iconColor="#F97316" text="P2P Exchange" />
              <Tag icon={Store} iconColor="#3B82F6" text="Merchant Services" />
              <Tag icon={Server} iconColor="#0EA5E9" text="Infrastructure" />
              <Tag icon={Layers} iconColor="#10B981" text="Mining Pool" />
              <Tag icon={RefreshCw} iconColor="#8B5CF6" text="DEX" />
              <Tag icon={Users} iconColor="#F97316" text="P2P Exchange" />
              <Tag icon={Store} iconColor="#3B82F6" text="Merchant Services" />
              <Tag icon={Server} iconColor="#0EA5E9" text="Infrastructure" />
              <Tag icon={Layers} iconColor="#10B981" text="Mining Pool" />
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <ApproachSection />

      {/* Clients Section */}
      <section className="flex flex-col items-center gap-12 lg:gap-16 w-full px-4 sm:px-6 lg:px-20 py-12 lg:py-[100px] bg-(--bg-primary)">
        <div className="flex flex-col items-center gap-4 w-full">
          <span className="text-xs font-semibold text-(--accent-blue) tracking-[2px]">WHO WE SERVE</span>
          <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-bold text-(--text-primary) tracking-[-0.5px] text-center">
            Trusted by Leading Organizations Worldwide
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 w-full min-h-0">
          <ClientCard icon={UserX} title="Cybercrime Victims" desc="Helping individuals and organizations recover stolen cryptocurrency and build cases for law enforcement and legal action." filled />
          <ClientCard icon={Briefcase} title="Law Firms & Litigants" desc="Supporting legal teams with blockchain evidence, asset discovery, and expert testimony for civil and criminal matters." />
          <ClientCard icon={Building2} title="Crypto Businesses" desc="Comprehensive security services, due diligence, and compliance consulting for exchanges, funds, and blockchain companies." filled />
          <ClientCard icon={Shield} title="Law Enforcement" desc="Supporting federal, state, and international agencies with technical expertise and court-ready blockchain analysis." filled />
        </div>
      </section>

      <CTASection />

      <Footer />
    </div>
  );
}

// Helper Components
function Tag({ icon: Icon, iconColor, text }: { icon: LucideIcon; iconColor: string; text: string }) {
  return (
    <div className="flex items-center gap-2.5 px-5 py-3 bg-(--bg-primary) border border-(--border-light) rounded-xl">
      <Icon className="w-5 h-5" style={{ color: iconColor }} strokeWidth={1.5} />
      <span className="text-[15px] font-medium text-(--text-secondary)">{text}</span>
    </div>
  );
}

function ClientCard({ icon: Icon, title, desc, filled }: { icon: LucideIcon; title: string; desc: string; filled?: boolean }) {
  return (
    <div className={`flex flex-col items-center gap-5 flex-1 p-6 lg:p-10 rounded-2xl border-2 border-(--accent-blue) min-h-0 ${filled ? "bg-(--bg-surface)" : "bg-transparent"}`}>
      <div className="flex items-center justify-center w-[72px] h-[72px] rounded-2xl bg-gradient-to-br from-[#3B82F6] to-[#2563EB]">
        <Icon className="w-9 h-9 text-(--text-white)" strokeWidth={1.5} />
      </div>
      <span className="text-xl font-semibold text-(--text-primary) text-center">{title}</span>
      <p className="text-[15px] font-normal text-(--text-secondary) leading-[1.6] text-center">{desc}</p>
    </div>
  );
}
