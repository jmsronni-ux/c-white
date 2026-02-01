import { Calendar, Mail } from "lucide-react";
import { motion } from "motion/react";
import { useBookingModal } from "../context/BookingModalContext";
import { Link } from "react-router-dom";

export function CTASection() {
  const { openBookingModal } = useBookingModal();
  return (
    <section className="relative w-full h-fit bg-(--accent-blue)">
      {/* Background Decorations */}
      <div className="hidden md:block absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute left-[563px] top-[30px] w-[328px] h-[328px] rounded-full bg-[#d9d9d90d]"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-[583.5px] top-[50.5px] w-[287px] h-[287px] rounded-full bg-[#d9d9d90d]"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        />
        <motion.div
          className="absolute left-[100px] top-[180px] w-20 h-20 border-[1.5px] border-white rounded-2xl rotate-[15deg] opacity-15"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        />
        <motion.div
          className="absolute right-[40px] top-[50px] w-[100px] h-[100px] border-[1.5px] border-white rounded-[20px] -rotate-[20deg] opacity-[0.12]"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        />
        <motion.svg
          className="absolute left-[50px] top-[20px] opacity-10"
          width="60"
          height="60"
          viewBox="0 0 60 60"
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <polygon points="30,0 56,15 56,45 30,60 4,45 4,15" fill="none" stroke="white" strokeWidth="1.5" transform="rotate(30, 30, 30)" />
        </motion.svg>
        <motion.svg
          className="absolute right-[90px] top-[200px] opacity-15"
          width="50"
          height="50"
          viewBox="0 0 50 50"
          animate={{ y: [0, 22, 0] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        >
          <polygon points="25,0 46.6,12.5 46.6,37.5 25,50 3.4,37.5 3.4,12.5" fill="none" stroke="white" strokeWidth="1.5" transform="rotate(15, 25, 25)" />
        </motion.svg>
        <motion.div
          className="absolute right-[190px] top-[30px] flex flex-col gap-2"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
        >
          {[0.2, 0.15, 0.1].map((opacity, row) => (
            <div key={row} className="flex gap-2">
              {[opacity, row === 1 ? 0.2 : 0.15, row === 2 ? 0.2 : 0.15].map((op, col) => (
                <div key={col} className="w-2 h-2 rounded-full bg-white" style={{ opacity: op }} />
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* CTA Content */}
      <div className="relative flex flex-col items-center justify-center gap-6 max-w-[838px] mx-auto px-4 lg:px-6 py-12 lg:py-[108px]">
        <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-bold text-(--text-white) tracking-[-0.5px] text-center">Ready to Investigate?</h2>
        <p className="text-base lg:text-lg font-normal text-white/80 text-center w-full">
          Contact our team for a confidential consultation. We typically respond within 24 hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <button type="button" onClick={openBookingModal} className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-(--bg-primary) rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
            <span className="text-base font-semibold text-(--accent-blue) hover:text-(--accent-blue-hover)">Book Consultation</span>
            <Calendar className="w-[18px] h-[18px] text-(--accent-blue)" strokeWidth={1.5} />
          </button>
          <Link to="/contact" className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-transparent border-[1.5px] border-white/40 rounded-lg cursor-pointer hover:bg-white/10 hover:border-white/60 transition-colors">
            <span className="text-base font-semibold text-(--text-white)">Contact Us</span>
            <Mail className="w-[18px] h-[18px] text-(--text-white)" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
