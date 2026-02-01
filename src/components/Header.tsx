import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useBookingModal } from "../context/BookingModalContext";

const navLinks = [
  { href: "/expert-witness", label: "Expert Witness" },
  { href: "/investigations", label: "Investigations" },
  { href: "/business", label: "Business" },
  { href: "/public-sector", label: "Public Sector" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openBookingModal } = useBookingModal();

  return (
    <>
      <header className="flex justify-between items-center w-full h-20 px-4 md:px-20 bg-(--bg-primary)">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-[42px] h-[42px] bg-[url('/cfinder-logo-black.png')] bg-cover bg-center rounded" />
          <span className="text-[22px] font-bold text-(--text-primary)">C-Finder</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.href.startsWith("/") ? (
              <Link key={link.label} to={link.href} className="text-[15px] font-medium text-(--text-secondary)">
                {link.label}
              </Link>
            ) : (
              <a key={link.label} href={link.href} className="text-[15px] font-medium text-(--text-secondary)">
                {link.label}
              </a>
            )
          )}
          <button type="button" onClick={openBookingModal} className="flex items-center gap-2 px-6 py-3 bg-(--accent-blue) rounded-lg cursor-pointer hover:bg-(--accent-blue-hover) transition-colors">
            <span className="text-sm font-semibold text-(--text-white)">Book Consultation</span>
          </button>
        </nav>
        <button
          type="button"
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-(--text-primary) hover:bg-(--bg-surface) transition-colors"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" strokeWidth={1.5} />
        </button>
      </header>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 md:hidden"
          aria-hidden="true"
        >
          <div
            className="absolute inset-0 bg-(--text-primary)/60"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-(--bg-primary) shadow-xl flex flex-col p-6">
            <div className="flex justify-between items-center mb-8">
              <button
                type="button"
                className="flex items-center justify-center w-10 h-10 rounded-lg text-(--text-primary) hover:bg-(--bg-surface) transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-6 h-6" strokeWidth={1.5} />
              </button>
            </div>
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) =>
                link.href.startsWith("/") ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-[15px] font-medium text-(--text-secondary) py-3 px-4 rounded-lg hover:bg-(--bg-surface)"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-[15px] font-medium text-(--text-secondary) py-3 px-4 rounded-lg hover:bg-(--bg-surface)"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                )
              )}
              <button type="button" onClick={() => { setMobileMenuOpen(false); openBookingModal(); }} className="mt-4 flex items-center justify-center gap-2 px-6 py-3 bg-(--accent-blue) rounded-lg cursor-pointer hover:bg-(--accent-blue-hover) transition-colors w-full">
                <span className="text-sm font-semibold text-(--text-white)">Book Consultation</span>
              </button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
