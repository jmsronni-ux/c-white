import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { useBookingModal } from "../context/BookingModalContext";

export function Footer() {
  const { openBookingModal } = useBookingModal();
  return (
    <footer className="flex flex-col gap-12 w-full px-4 sm:px-6 lg:px-20 py-12 lg:py-16 bg-(--bg-navy)">
      <div className="flex flex-col lg:flex-row lg:justify-between w-full gap-8 lg:gap-4">
        <div className="flex flex-col gap-4 w-full lg:w-80">
          <Link to="/" className="flex items-center gap-3 w-fit">
            <div className="w-9 h-9 bg-[url('/cfinder-logo-white.png')] bg-cover bg-center" />
            <span className="text-xl font-bold text-(--text-white)">C-Finder</span>
          </Link>
          <p className="text-sm font-normal text-(--text-tertiary) leading-[1.6]">
            Blockchain Investigation Agency{"\n"}Globally distributed, multilingual team providing round-the-clock support.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
          <div className="flex flex-col gap-4">
            <span className="text-sm font-semibold text-(--text-white)">Services</span>
            <Link to="/investigations" className="text-sm font-normal text-(--text-tertiary) hover:text-(--text-secondary) transition-colors">Investigations</Link>
            <Link to="/expert-witness" className="text-sm font-normal text-(--text-tertiary) hover:text-(--text-secondary) transition-colors">Expert Witness</Link>
            <Link to="/business" className="text-sm font-normal text-(--text-tertiary) hover:text-(--text-secondary) transition-colors">Business Services</Link>
            <Link to="/public-sector" className="text-sm font-normal text-(--text-tertiary) hover:text-(--text-secondary) transition-colors">Public Sector</Link>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-sm font-semibold text-(--text-white)">Company</span>
            <Link to="/about" className="text-sm font-normal text-(--text-tertiary) hover:text-(--text-secondary) transition-colors">About Us</Link>
            <Link to="/faq" className="text-sm font-normal text-(--text-tertiary) hover:text-(--text-secondary) transition-colors">FAQ</Link>
            <Link to="/contact" className="text-sm font-normal text-(--text-tertiary) hover:text-(--text-secondary) transition-colors">Contact</Link>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-sm font-semibold text-(--text-white)">Contact</span>
            <a href="mailto:support@crypto-finders.com" className="text-sm font-normal text-(--text-tertiary) hover:text-(--text-secondary) transition-colors">support@crypto-finders.com</a>
            <button
              type="button"
              onClick={openBookingModal}
              className="inline-flex items-center justify-center gap-2 w-fit mt-1 px-5 py-2.5 bg-(--accent-blue) rounded-lg text-sm font-semibold text-(--text-white) cursor-pointer hover:bg-(--accent-blue-hover) active:scale-[0.98] transition-[color,transform]"
            >
              <Calendar className="w-4 h-4 shrink-0" strokeWidth={1.5} />
              Book Consultation
            </button>
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-white/8" />

      <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-4">
        <span className="text-[13px] font-normal text-(--text-tertiary) text-center sm:text-left">&copy; 2025 C-Finder. All rights reserved.</span>
        <div className="flex flex-wrap justify-center sm:justify-end gap-6">
          <Link to="/scam-warnings" className="text-[13px] font-normal text-(--text-tertiary) hover:text-(--text-secondary) transition-colors">Scam Warnings</Link>
          <Link to="/privacy" className="text-[13px] font-normal text-(--text-tertiary) hover:text-(--text-secondary) transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="text-[13px] font-normal text-(--text-tertiary) hover:text-(--text-secondary) transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
