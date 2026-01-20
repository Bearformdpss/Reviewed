import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Onboarding from './pages/Onboarding'
import TermsOfService from './pages/TermsOfService'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <Link to="/" className="logo">Reviewed</Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/onboarding">Get Started</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Reviewed</h4>
            <p>Helping restaurants respond to reviews professionally and efficiently.</p>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Reviewed. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
