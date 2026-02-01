import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { X, Loader2, CheckCircle2, XCircle } from "lucide-react";
import { useBookingModal } from "../context/BookingModalContext";

// EmailJS Configuration
const EMAILJS_SERVICE_ID = "service_yg93rgn";
const EMAILJS_TEMPLATE_ID = "template_wji6lc4"; // Replace with your consultation template ID
const EMAILJS_PUBLIC_KEY = "1ltINi5LkCVN_ef4e";

function getTodayISO() {
  const d = new Date();
  return d.toISOString().slice(0, 10);
}

export function ConsultationBookingPopup() {
  const { isOpen, closeBookingModal } = useBookingModal();
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const panelRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeBookingModal();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, closeBookingModal]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) closeBookingModal();
  };

  const resetForm = () => {
    setFullName("");
    setPhone("");
    setDate("");
    setTime("");
    setSubmitStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName.trim() || !phone.trim() || !date || !time) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

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
      // Auto-close after success
      setTimeout(() => {
        closeBookingModal();
        resetForm();
      }, 2000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    closeBookingModal();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      aria-hidden={!isOpen}
    >
      <div
        className="absolute inset-0 bg-(--text-primary)/60"
        onClick={handleBackdropClick}
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
        className="relative w-full max-w-md bg-(--bg-primary) border border-(--border-light) rounded-2xl shadow-xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 id="booking-modal-title" className="text-xl font-semibold text-(--text-primary)">
            Book a consultation
          </h2>
          <button
            type="button"
            className="flex items-center justify-center w-10 h-10 rounded-lg text-(--text-primary) hover:bg-(--bg-surface) transition-colors"
            onClick={handleClose}
            aria-label="Close"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>

        {/* Success Message */}
        {submitStatus === "success" && (
          <div className="flex items-center gap-3 p-4 bg-[#DCFCE7] border border-[#22C55E] rounded-xl mb-2">
            <CheckCircle2 className="w-5 h-5 text-[#22C55E] shrink-0" strokeWidth={2} />
            <span className="text-sm font-medium text-[#166534]">
              Consultation request sent! We'll contact you soon.
            </span>
          </div>
        )}

        {/* Error Message */}
        {submitStatus === "error" && (
          <div className="flex items-center gap-3 p-4 bg-[#FEE2E2] border border-[#EF4444] rounded-xl mb-2">
            <XCircle className="w-5 h-5 text-[#EF4444] shrink-0" strokeWidth={2} />
            <span className="text-sm font-medium text-[#991B1B]">
              Failed to send request. Please try again.
            </span>
          </div>
        )}

        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Hidden fields for EmailJS template */}
          <input type="hidden" name="from_name" value={fullName} />
          <input type="hidden" name="phone" value={phone} />
          <input type="hidden" name="date" value={date} />
          <input type="hidden" name="time" value={time} />
          <div className="flex flex-col gap-2">
            <label htmlFor="booking-full-name" className="text-sm font-medium text-(--text-primary)">
              Full name
            </label>
            <input
              id="booking-full-name"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Your full name"
              className="w-full px-4 py-3 bg-(--bg-primary) border border-(--border-default) rounded-lg text-(--text-primary) placeholder:text-(--text-tertiary) focus:outline-none focus:ring-2 focus:ring-(--accent-blue) focus:border-transparent"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="booking-phone" className="text-sm font-medium text-(--text-primary)">
              Phone number
            </label>
            <input
              id="booking-phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+1 (555) 000-0000"
              className="w-full px-4 py-3 bg-(--bg-primary) border border-(--border-default) rounded-lg text-(--text-primary) placeholder:text-(--text-tertiary) focus:outline-none focus:ring-2 focus:ring-(--accent-blue) focus:border-transparent"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="booking-date" className="text-sm font-medium text-(--text-primary)">
              Date
            </label>
            <input
              id="booking-date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              min={getTodayISO()}
              className="w-full px-4 py-3 bg-(--bg-primary) border border-(--border-default) rounded-lg text-(--text-primary) focus:outline-none focus:ring-2 focus:ring-(--accent-blue) focus:border-transparent"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="booking-time" className="text-sm font-medium text-(--text-primary)">
              Time
            </label>
            <input
              id="booking-time"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full px-4 py-3 bg-(--bg-primary) border border-(--border-default) rounded-lg text-(--text-primary) focus:outline-none focus:ring-2 focus:ring-(--accent-blue) focus:border-transparent"
            />
          </div>

          <div className="flex gap-3 mt-4">
            <button
              type="button"
              onClick={handleClose}
              className="flex-1 px-4 py-3 border border-(--border-default) rounded-lg text-(--text-primary) font-medium hover:bg-(--bg-surface) transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-4 py-3 bg-(--accent-blue) rounded-lg text-(--text-white) font-semibold hover:bg-(--accent-blue-hover) transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" strokeWidth={2} />
                  Sending...
                </>
              ) : (
                "Request consultation"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
