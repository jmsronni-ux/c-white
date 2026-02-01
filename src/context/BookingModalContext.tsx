import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

type BookingModalContextValue = {
  isOpen: boolean;
  openBookingModal: () => void;
  closeBookingModal: () => void;
};

const BookingModalContext = createContext<BookingModalContextValue | null>(null);

export function BookingModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const openBookingModal = useCallback(() => setIsOpen(true), []);
  const closeBookingModal = useCallback(() => setIsOpen(false), []);

  return (
    <BookingModalContext.Provider value={{ isOpen, openBookingModal, closeBookingModal }}>
      {children}
    </BookingModalContext.Provider>
  );
}

export function useBookingModal(): BookingModalContextValue {
  const ctx = useContext(BookingModalContext);
  if (!ctx) {
    throw new Error("useBookingModal must be used within BookingModalProvider");
  }
  return ctx;
}
