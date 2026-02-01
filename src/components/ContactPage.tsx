import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import {
  ShieldCheck,
  FolderOpen,
  ChevronDown,
  CloudUpload,
  Send,
  Lock,
  Mail,
  ShieldAlert,
  Calendar,
  Clock3,
  Loader2,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { useBookingModal } from "../context/BookingModalContext";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { NoticeBar } from "./NoticeBar";

// EmailJS Configuration
const EMAILJS_SERVICE_ID = "service_yg93rgn";
const EMAILJS_TEMPLATE_ID = "template_zxzcca5";
const EMAILJS_PUBLIC_KEY = "1ltINi5LkCVN_ef4e";

// Dropdown options
const ASSET_TYPES = [
  { value: "", label: "Select asset type" },
  { value: "bitcoin", label: "Bitcoin (BTC)" },
  { value: "ethereum", label: "Ethereum (ETH)" },
  { value: "stablecoins", label: "USDT/USDC (Stablecoins)" },
  { value: "other_crypto", label: "Other Cryptocurrency" },
  { value: "nft", label: "NFT" },
  { value: "defi_tokens", label: "DeFi Protocol Tokens" },
  { value: "exchange_funds", label: "Exchange Account Funds" },
  { value: "multiple", label: "Multiple Asset Types" },
];

const COUNTRIES = [
  { value: "", label: "Select country" },
  { value: "US", label: "United States" },
  { value: "GB", label: "United Kingdom" },
  { value: "CA", label: "Canada" },
  { value: "AU", label: "Australia" },
  { value: "DE", label: "Germany" },
  { value: "FR", label: "France" },
  { value: "NL", label: "Netherlands" },
  { value: "CH", label: "Switzerland" },
  { value: "SG", label: "Singapore" },
  { value: "JP", label: "Japan" },
  { value: "KR", label: "South Korea" },
  { value: "AE", label: "United Arab Emirates" },
  { value: "HK", label: "Hong Kong" },
  { value: "ES", label: "Spain" },
  { value: "IT", label: "Italy" },
  { value: "PT", label: "Portugal" },
  { value: "SE", label: "Sweden" },
  { value: "NO", label: "Norway" },
  { value: "DK", label: "Denmark" },
  { value: "FI", label: "Finland" },
  { value: "IE", label: "Ireland" },
  { value: "NZ", label: "New Zealand" },
  { value: "BR", label: "Brazil" },
  { value: "MX", label: "Mexico" },
  { value: "IN", label: "India" },
  { value: "PH", label: "Philippines" },
  { value: "ZA", label: "South Africa" },
  { value: "IL", label: "Israel" },
  { value: "PL", label: "Poland" },
  { value: "CZ", label: "Czech Republic" },
  { value: "AT", label: "Austria" },
  { value: "BE", label: "Belgium" },
  { value: "OTHER", label: "Other" },
];

export function ContactPage() {
  const { openBookingModal } = useBookingModal();
  const formRef = useRef<HTMLFormElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Form state
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [assetType, setAssetType] = useState("");
  const [amount, setAmount] = useState("");
  const [transactionIds, setTransactionIds] = useState("");
  const [caseDescription, setCaseDescription] = useState("");
  const [nationality, setNationality] = useState("");
  const [residence, setResidence] = useState("");
  const [files, setFiles] = useState<File[]>([]);

  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const successMessageRef = useRef<HTMLDivElement>(null);

  // Validation state
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (submitStatus === "success" && successMessageRef.current) {
      successMessageRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [submitStatus]);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!caseDescription.trim()) {
      newErrors.caseDescription = "Case description is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const resetForm = () => {
    setFullName("");
    setEmail("");
    setAssetType("");
    setAmount("");
    setTransactionIds("");
    setCaseDescription("");
    setNationality("");
    setResidence("");
    setFiles([]);
    setErrors({});
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files) {
      const newFiles = Array.from(e.dataTransfer.files);
      setFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      if (formRef.current) {
        await emailjs.sendForm(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          formRef.current,
          EMAILJS_PUBLIC_KEY
        );
      }
      setSubmitStatus("success");
      resetForm();
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus("error");
      setErrorMessage("Failed to submit your case. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-full bg-white">
      <NoticeBar />
      <Header />

      {/* Hero Section */}
      <section className="flex flex-col items-center gap-6 w-full px-4 sm:px-6 lg:px-20 py-16 sm:py-20 bg-gradient-to-b from-white to-[#EFF6FF]">
        {/* Badge */}
        <div className="flex items-center gap-2 px-4 py-2 bg-[#EFF6FF] border border-[#2563EB] rounded-full">
          <FolderOpen className="w-4 h-4 text-[#2563EB]" strokeWidth={2} />
          <span className="text-[13px] font-medium text-[#2563EB]">Open a Case</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#0F172A] leading-[1.1] tracking-[-1px] text-center">
          Open a Case
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg font-normal text-[#475569] leading-[1.6] text-center max-w-[700px]">
          Provide relevant details for evaluation: transaction IDs/addresses, asset type/amount,
          proof documents, nationality/residence, etc. We prioritize detailed submissions
          and respond within 24 hours during business hours (or faster).
        </p>
      </section>

      {/* Main Content */}
      <section className="flex flex-col lg:flex-row gap-8 lg:gap-16 w-full px-4 sm:px-6 lg:px-20 py-12 sm:py-16 lg:py-20 bg-white">
        {/* Form Section */}
        <div className="flex flex-col gap-6 flex-1">
          {/* Form Header */}
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-[#2563EB]" strokeWidth={2} />
            <h2 className="text-xl sm:text-2xl font-semibold text-[#0F172A]">
              Secure Case Submission Form
            </h2>
          </div>

          {/* Success Message */}
          {submitStatus === "success" && (
            <div
              ref={successMessageRef}
              className="flex items-center gap-4 p-6 bg-[#DCFCE7] border-2 border-[#22C55E] rounded-2xl"
            >
              <CheckCircle2 className="w-10 h-10 text-[#22C55E] flex-shrink-0" strokeWidth={2} />
              <div className="flex flex-col gap-2">
                <span className="text-lg font-semibold text-[#166534]">Case Submitted Successfully</span>
                <span className="text-sm text-[#15803D]">
                  We've received your case submission and will respond within 24 hours.
                </span>
              </div>
            </div>
          )}

          {/* Error Message */}
          {submitStatus === "error" && (
            <div className="flex items-center gap-3 p-4 bg-[#FEE2E2] border border-[#EF4444] rounded-xl">
              <XCircle className="w-5 h-5 text-[#EF4444] flex-shrink-0" strokeWidth={2} />
              <div className="flex flex-col gap-1">
                <span className="text-sm font-semibold text-[#991B1B]">Submission Failed</span>
                <span className="text-xs text-[#B91C1C]">{errorMessage}</span>
              </div>
            </div>
          )}

          {/* Form Card */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 p-6 sm:p-8 lg:p-10 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl"
          >
            {/* Hidden fields for EmailJS template */}
            <input type="hidden" name="from_name" value={fullName} />
            <input type="hidden" name="from_email" value={email} />
            <input type="hidden" name="asset_type" value={ASSET_TYPES.find((a) => a.value === assetType)?.label || "Not specified"} />
            <input type="hidden" name="amount" value={amount || "Not specified"} />
            <input type="hidden" name="transaction_ids" value={transactionIds || "Not provided"} />
            <input type="hidden" name="case_description" value={caseDescription} />
            <input type="hidden" name="nationality" value={COUNTRIES.find((c) => c.value === nationality)?.label || "Not specified"} />
            <input type="hidden" name="residence" value={COUNTRIES.find((c) => c.value === residence)?.label || "Not specified"} />
            {/* Row 1: Name & Email */}
            <div className="flex flex-col sm:flex-row gap-4">
              <FormField
                label="Full Name *"
                placeholder="Your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                error={errors.fullName}
              />
              <FormField
                label="Email Address *"
                placeholder="your@email.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={errors.email}
              />
            </div>

            {/* Row 2: Asset Type & Amount */}
            <div className="flex flex-col sm:flex-row gap-4">
              <SelectField
                label="Asset Type"
                options={ASSET_TYPES}
                value={assetType}
                onChange={(e) => setAssetType(e.target.value)}
              />
              <FormField
                label="Estimated Amount (USD)"
                placeholder="$0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            {/* Transaction IDs */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium text-[#0F172A]">
                Transaction IDs / Wallet Addresses
              </label>
              <textarea
                value={transactionIds}
                onChange={(e) => setTransactionIds(e.target.value)}
                placeholder="Enter relevant transaction IDs, wallet addresses, or blockchain hashes..."
                className="flex h-20 px-4 py-3 bg-white border border-[#CBD5E1] rounded-lg text-[15px] font-normal text-[#0F172A] placeholder:text-[#94A3B8] resize-none focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
              />
            </div>

            {/* Case Description */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium text-[#0F172A]">Case Description *</label>
              <textarea
                value={caseDescription}
                onChange={(e) => setCaseDescription(e.target.value)}
                placeholder="Describe your situation in detail: what happened, when it occurred, parties involved, and any other relevant information..."
                className={`flex h-[140px] px-4 py-3 bg-white border rounded-lg text-[15px] font-normal text-[#0F172A] placeholder:text-[#94A3B8] resize-none focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent ${
                  errors.caseDescription ? "border-[#EF4444]" : "border-[#CBD5E1]"
                }`}
              />
              {errors.caseDescription && (
                <span className="text-xs text-[#EF4444]">{errors.caseDescription}</span>
              )}
            </div>

            {/* Upload Section - hidden for now */}
            {false && (
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium text-[#0F172A]">Upload Proof Documents</label>
              <div
                onClick={() => fileInputRef.current?.click()}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                className="flex flex-col items-center justify-center gap-3 h-[120px] bg-white border-2 border-[#2563EB] border-dashed rounded-lg cursor-pointer hover:bg-[#EFF6FF] transition-colors"
              >
                <CloudUpload className="w-8 h-8 text-[#2563EB]" strokeWidth={1.5} />
                <div className="flex flex-col items-center gap-1">
                  <span className="text-sm font-medium text-[#0F172A]">
                    Drag & drop files or click to browse
                  </span>
                  <span className="text-xs font-normal text-[#94A3B8]">
                    Screenshots, transaction receipts, PDFs (Max 500KB total for attachments)
                  </span>
                </div>
              </div>
              <input
                ref={fileInputRef}
                type="file"
                name="attachments"
                multiple
                accept=".pdf,.png,.jpg,.jpeg,.gif,.doc,.docx,.txt"
                onChange={handleFileChange}
                className="hidden"
              />

              {/* File List */}
              {files.length > 0 && (
                <div className="flex flex-col gap-2 mt-2">
                  {files.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between px-3 py-2 bg-white border border-[#E2E8F0] rounded-lg"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="text-sm text-[#0F172A] truncate">{file.name}</span>
                        <span className="text-xs text-[#94A3B8] flex-shrink-0">
                          ({formatFileSize(file.size)})
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="text-[#EF4444] hover:text-[#DC2626] p-1"
                      >
                        <XCircle className="w-4 h-4" strokeWidth={2} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
              <span className="text-xs text-[#94A3B8]">
                Note: EmailJS has a 500KB total attachment limit. For larger files, please email documents to support@crypto-finders.com
              </span>
            </div>
            )}

            {/* Row 3: Nationality & Residence */}
            <div className="flex flex-col sm:flex-row gap-4">
              <SelectField
                label="Nationality"
                options={COUNTRIES}
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
              />
              <SelectField
                label="Country of Residence"
                options={COUNTRIES}
                value={residence}
                onChange={(e) => setResidence(e.target.value)}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-[#2563EB] rounded-lg cursor-pointer hover:bg-[#1D4ED8] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-[18px] h-[18px] text-white animate-spin" strokeWidth={2} />
                  <span className="text-base font-semibold text-white">Submitting...</span>
                </>
              ) : (
                <>
                  <span className="text-base font-semibold text-white">Submit Case for Evaluation</span>
                  <Send className="w-[18px] h-[18px] text-white" strokeWidth={2} />
                </>
              )}
            </button>

            {/* Secure Note */}
            <div className="flex items-center justify-center gap-2">
              <Lock className="w-[14px] h-[14px] text-[#94A3B8]" strokeWidth={2} />
              <span className="text-[13px] font-normal text-[#94A3B8]">
                Your information is encrypted and secure
              </span>
            </div>
          </form>
        </div>

        {/* Sidebar */}
        <div className="flex flex-col gap-6 lg:gap-8 w-full lg:w-[400px]">
          {/* Alternative Contact Methods */}
          <div className="flex flex-col gap-6 p-6 sm:p-8 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl">
            <h3 className="text-lg sm:text-xl font-semibold text-[#0F172A]">
              Alternative Contact Methods
            </h3>

            {/* Email Row */}
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 bg-[#EFF6FF] rounded-xl flex-shrink-0">
                <Mail className="w-6 h-6 text-[#2563EB]" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm font-semibold text-[#0F172A]">Email Directly</span>
                <a href="mailto:support@crypto-finders.com" className="text-sm font-normal text-[#2563EB] hover:underline">
                  support@crypto-finders.com
                </a>
              </div>
            </div>

            {/* Verify Domain Warning */}
            <div className="flex gap-3 p-4 bg-[#FEF3C7] rounded-xl">
              <ShieldAlert className="w-5 h-5 text-[#F59E0B] flex-shrink-0 mt-0.5" strokeWidth={2} />
              <div className="flex flex-col gap-1">
                <span className="text-[13px] font-semibold text-[#78350F]">Verify Our Domain</span>
                <span className="text-xs font-normal text-[#92400E] leading-[1.4]">
                  Always verify you're contacting @crypto-finders.com — beware of impersonation scams.
                </span>
              </div>
            </div>
          </div>

          {/* Complex Case Card */}
          <div className="flex flex-col gap-5 p-6 sm:p-8 bg-[#0F172A] border border-[#1E293B] rounded-2xl">
            <h3 className="text-lg sm:text-xl font-semibold text-white">Complex Case?</h3>
            <p className="text-sm font-normal text-[#94A3B8] leading-[1.5]">
              For intricate investigations or urgent matters, schedule a direct consultation with our specialists.
            </p>
            <button type="button" onClick={openBookingModal} className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white rounded-lg cursor-pointer hover:bg-[#F8FAFC] transition-colors">
              <Calendar className="w-[18px] h-[18px] text-[#0F172A]" strokeWidth={1.5} />
              <span className="text-sm font-semibold text-[#0F172A]">Book a Consultation</span>
            </button>
          </div>

          {/* Response Time Card */}
          <div className="flex flex-col gap-4 p-6 bg-[#EFF6FF] border border-[#2563EB] rounded-xl">
            <div className="flex items-center gap-2.5">
              <Clock3 className="w-5 h-5 text-[#2563EB]" strokeWidth={2} />
              <span className="text-base font-semibold text-[#2563EB]">Response Time</span>
            </div>
            <p className="text-[13px] font-normal text-[#475569] leading-[1.5]">
              We respond within 24 hours during business hours. Detailed submissions with complete documentation are prioritized.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

interface FormFieldProps {
  label: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

function FormField({ label, placeholder, type = "text", value, onChange, error }: FormFieldProps) {
  return (
    <div className="flex flex-col gap-2 flex-1">
      <label className="text-sm font-medium text-[#0F172A]">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`flex items-center h-12 px-4 bg-white border rounded-lg text-[15px] font-normal text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent ${
          error ? "border-[#EF4444]" : "border-[#CBD5E1]"
        }`}
      />
      {error && <span className="text-xs text-[#EF4444]">{error}</span>}
    </div>
  );
}

interface SelectFieldProps {
  label: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

function SelectField({ label, options, value, onChange }: SelectFieldProps) {
  return (
    <div className="flex flex-col gap-2 flex-1">
      <label className="text-sm font-medium text-[#0F172A]">{label}</label>
      <div className="relative">
        <select
          value={value}
          onChange={onChange}
          className="flex items-center h-12 w-full px-4 pr-10 bg-white border border-[#CBD5E1] rounded-lg text-[15px] font-normal text-[#0F172A] appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value} disabled={option.value === ""}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-[#94A3B8] pointer-events-none" strokeWidth={2} />
      </div>
    </div>
  );
}
