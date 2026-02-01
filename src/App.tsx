import './index.css'
import { useEffect } from 'react'
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import { BookingModalProvider } from './context/BookingModalContext'
import { ConsultationBookingPopup } from './components/ConsultationBookingPopup'
import { HomePage } from './components/HomePage'
import { FAQPage } from './components/FAQPage'
import { ExpertWitnessPage } from './components/ExpertWitnessPage'
import { InvestigationsPage } from './components/InvestigationsPage'
import { BusinessServicesPage } from './components/BusinessServicesPage'
import { PublicSectorPage } from './components/PublicSectorPage'
import { AboutPage } from './components/AboutPage'
import { ContactPage } from './components/ContactPage'
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage'
import { TermsOfServicePage } from './components/TermsOfServicePage'
import { ScamWarningsPage } from './components/ScamWarningsPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <BookingModalProvider>
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/expert-witness" element={<ExpertWitnessPage />} />
          <Route path="/investigations" element={<InvestigationsPage />} />
          <Route path="/business" element={<BusinessServicesPage />} />
          <Route path="/public-sector" element={<PublicSectorPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsOfServicePage />} />
          <Route path="/scam-warnings" element={<ScamWarningsPage />} />
        </Routes>
      </HashRouter>
      <ConsultationBookingPopup />
    </BookingModalProvider>
  )
}

export default App
