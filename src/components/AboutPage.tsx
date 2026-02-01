import {
  ShieldCheck,
  Users,
  Calendar,
  ArrowRight,
  Shield,
  Lock,
  Target,
  Globe,
  Scale,
} from "lucide-react";
import { useBookingModal } from "../context/BookingModalContext";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { NoticeBar } from "./NoticeBar";
import { CTASection } from "./CTASection";
import { Link } from "react-router-dom";

export function AboutPage() {
  const { openBookingModal } = useBookingModal();
  return (
    <div className="flex flex-col w-full bg-(--bg-primary)">
      <NoticeBar />
      <Header />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center gap-8 w-full px-4 sm:px-6 lg:px-20 py-16 sm:py-20 lg:py-[100px] bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0F172A]">
        {/* Glow effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -left-[150px] -top-[150px] w-[500px] h-[500px] rounded-full bg-[#2563EB12]" />
          <div className="absolute right-0 top-[150px] w-[350px] h-[350px] rounded-full bg-[#2563EB15] hidden lg:block" />
          <div className="absolute right-[40px] top-[20px] w-[200px] h-[200px] rounded-full bg-[#2563EB25] hidden lg:block" />
          <div className="absolute right-[100px] top-[80px] w-20 h-20 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] shadow-[0_8px_40px_#2563EB50] hidden lg:flex items-center justify-center">
            <ShieldCheck className="w-10 h-10 text-(--text-white)" strokeWidth={1.5} />
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative flex flex-col items-center gap-8 w-full z-10">
          {/* Badge */}
          <div className="flex items-center gap-2 px-5 py-2.5 bg-[#2563EB20] border border-[#2563EB50] rounded-full">
            <Users className="w-4 h-4 text-[#60A5FA]" strokeWidth={1.5} />
            <span className="text-[13px] font-medium text-[#60A5FA]">About CipherBlade</span>
          </div>

          {/* Title */}
          <div className="flex flex-col items-center gap-5 w-full">
            <h1 className="text-3xl sm:text-4xl lg:text-[56px] font-bold text-(--text-white) leading-[1.1] tracking-[-1.5px] text-center">
              Pioneers in Blockchain{"\n"}Investigation
            </h1>
            <p className="text-base sm:text-lg font-normal text-[#94A3B8] leading-[1.6] text-center max-w-[700px]">
              Established since the early days of cryptocurrency forensics, our globally distributed,
              multilingual team provides round-the-clock support for clients worldwide.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button type="button" onClick={openBookingModal} className="flex items-center gap-2.5 px-8 py-4 bg-(--accent-blue) rounded-[10px] cursor-pointer hover:bg-(--accent-blue-hover) transition-colors">
              <span className="text-base font-semibold text-(--text-white)">Book Consultation</span>
              <Calendar className="w-[18px] h-[18px] text-(--text-white)" strokeWidth={1.5} />
            </button>
            <Link to="/contact" className="flex items-center gap-2.5 px-8 py-4 bg-transparent border-[1.5px] border-[#475569] rounded-[10px] cursor-pointer hover:bg-white/5 transition-colors">
              <span className="text-base font-semibold text-(--text-white)">Contact Us</span>
              <ArrowRight className="w-[18px] h-[18px] text-(--text-white)" strokeWidth={1.5} />
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-16 w-full p-6 sm:p-8 bg-[#0F172A80] border border-[#334155] rounded-2xl mt-4">
            <StatItem value="500+" label="Cases Resolved" />
            <div className="hidden sm:block w-px h-[60px] bg-[#334155]" />
            <StatItem value="$2B+" label="Assets Recovered" highlight />
            <div className="hidden sm:block w-px h-[60px] bg-[#334155]" />
            <StatItem value="24/7" label="Global Support" />
            <div className="hidden sm:block w-px h-[60px] bg-[#334155]" />
            <StatItem value="50+" label="Countries Served" />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="flex flex-col items-center gap-12 sm:gap-16 w-full px-4 sm:px-6 lg:px-20 py-16 sm:py-20 lg:py-[100px] bg-(--bg-primary)">
        <div className="flex flex-col items-center gap-4 w-full">
          <span className="text-xs font-semibold text-(--accent-blue) tracking-[2px]">OUR VALUES</span>
          <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-bold text-(--text-primary) tracking-[-0.5px] text-center">
            What Drives Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <ValueCard
            icon={Shield}
            title="Integrity"
            description="We maintain the highest ethical standards in all our investigations and client relationships."
          />
          <ValueCard
            icon={Lock}
            title="Confidentiality"
            description="Client information is treated with the utmost discretion and protected by strict security protocols."
          />
          <ValueCard
            icon={Target}
            title="Excellence"
            description="We pursue the highest standards of technical excellence and continuous improvement in our methods."
          />
        </div>
      </section>

      {/* Team Section */}
      <section className="flex flex-col items-center gap-12 sm:gap-16 w-full px-4 sm:px-6 lg:px-20 py-16 sm:py-20 lg:py-[100px] bg-(--bg-surface)">
        <div className="flex flex-col items-center gap-4 w-full">
          <span className="text-xs font-semibold text-(--accent-blue) tracking-[2px]">LEADERSHIP & KEY INVESTIGATORS</span>
          <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-bold text-(--text-primary) tracking-[-0.5px] text-center">
            Meet Our Expert Team
          </h2>
          <p className="text-base sm:text-lg font-normal text-(--text-secondary) text-center max-w-[700px]">
            Senior-level professionals with extensive experience in blockchain forensics, financial crime investigation, and digital asset tracing.
          </p>
        </div>

        <div className="flex flex-col gap-6 sm:gap-8 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <TeamCard
              image="/team/ethan.jpeg"
              name="Dr. Ethan Harper"
              role="Founder & Chief Forensic Strategist"
              bio="PhD in Computer Science with focus on cryptography and distributed ledger technologies. 14+ years of experience in blockchain forensics and digital asset tracing. Previously led investigative analytics teams at a top-tier North American cybersecurity firm."
              tags={["Cryptography", "DLT Expert"]}
            />
            <TeamCard
              image="/team/jordan.jpeg"
              name="Jordan Reyes"
              role="Lead Blockchain Investigator"
              bio="11+ years in financial crime investigations, 7 years specializing in cryptocurrency tracing. Certified Cryptocurrency Investigator (CCI) with expertise in multi-chain forensics (BTC, ETH, SOL, XRP, BNB Chain, USDT), address de-anonymization, and provenance mapping."
              tags={["CCI Certified", "Multi-Chain"]}
            />
            <TeamCard
              image="/team/liam.jpeg"
              name="Liam Thompson"
              role="Senior Forensics Analyst & Technical Lead"
              bio="MSc in Cybersecurity with certifications in blockchain forensics including advanced Chainalysis toolsets. Former senior analyst in Australian and European cyber-intelligence units. Specializes in transaction flow reconstruction, UTXO analysis, and smart contract auditing."
              tags={["Smart Contracts", "UTXO Analysis"]}
            />
            <TeamCard
              image="/team/sophia.jpeg"
              name="Sophia Moreau"
              role="Client Relations & Case Coordinator"
              bio="Background in financial compliance and legal support with previous roles in European fintech and North American regulatory consulting. Manages client onboarding, proof verification, secure communications, and case progression with professionalism and empathy."
              tags={["Compliance", "Client Support"]}
            />
          </div>

          {/* Philosophy Section */}
          <div className="flex flex-col items-center gap-6 w-full p-8 sm:p-10 lg:p-12 bg-(--bg-navy) rounded-2xl">
            <h3 className="text-xl sm:text-2xl font-bold text-(--text-white) text-center">Our Approach</h3>
            <p className="text-base font-normal text-white/80 leading-[1.6] text-center max-w-[700px]">
              Our deliberately lean team structure guarantees senior-level involvement in every case from evaluation to delivery.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 w-full">
              <FeatureItem icon={Globe} text="Global Coverage (US, Canada, Australia, Europe)" />
              <FeatureItem icon={Lock} text="Strict Confidentiality & Data Security" />
              <FeatureItem icon={Scale} text="Ethical Investigation Practices" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      <Footer />
    </div>
  );
}

function StatItem({ value, label, highlight = false }: { value: string; label: string; highlight?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <span className={`text-3xl sm:text-[42px] font-bold tracking-[-1px] ${highlight ? "text-(--accent-blue-light)" : "text-(--text-white)"}`}>
        {value}
      </span>
      <span className="text-sm font-medium text-[#64748B]">{label}</span>
    </div>
  );
}

function ValueCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-5 p-6 sm:p-8 h-full bg-(--bg-surface) border border-(--border-light) rounded-2xl">
      <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-(--accent-blue-tint)">
        <Icon className="w-7 h-7 text-(--accent-blue)" strokeWidth={1.5} />
      </div>
      <h3 className="text-xl sm:text-[22px] font-semibold text-(--text-primary)">{title}</h3>
      <p className="text-[15px] font-normal text-(--text-secondary) leading-[1.6]">{description}</p>
    </div>
  );
}

function TeamCard({
  image,
  name,
  role,
  bio,
  tags,
}: {
  image: string;
  name: string;
  role: string;
  bio: string;
  tags: string[];
}) {
  return (
    <div className="flex flex-col overflow-hidden bg-(--bg-primary) border border-(--border-light) rounded-2xl">
      <div className="relative w-full aspect-[4/3] min-h-[280px] bg-(--bg-muted) overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover object-top" />
      </div>
      {/* Content */}
      <div className="flex flex-col gap-3 p-6">
        <div className="flex flex-col gap-1">
          <h4 className="text-xl font-bold text-(--text-primary)">{name}</h4>
          <span className="text-sm font-semibold text-(--accent-blue)">{role}</span>
        </div>
        <p className="text-sm font-normal text-(--text-secondary) leading-[1.6]">{bio}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="px-3 py-1.5 text-xs font-medium text-(--accent-blue) bg-(--accent-blue-tint) rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function FeatureItem({
  icon: Icon,
  text,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <Icon className="w-6 h-6 text-(--accent-blue-light)" strokeWidth={1.5} />
      <span className="text-sm font-medium text-(--text-white)">{text}</span>
    </div>
  );
}
