import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Consent() {
  const [phone, setPhone] = useState('')
  const [smsConsent, setSmsConsent] = useState(false)
  const [termsConsent, setTermsConsent] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <main className="page onboarding-page">
        <div className="onboarding-container">
          <div className="success-message">
            <h1>You're All Set!</h1>
            {smsConsent ? (
              <p>
                Thank you for signing up. You will start receiving SMS notifications at {phone} when
                new reviews are posted to your Google Business Profile.
              </p>
            ) : (
              <p>
                Thank you! Your information has been received. You can enable SMS notifications at any time by returning to this page.
              </p>
            )}
            <Link to="/" className="cta-button">Return to Home</Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="page onboarding-page">
      <div className="onboarding-container">
        <h1>SMS Notification Consent</h1>
        <p className="onboarding-subtitle">
          Provide your phone number below to receive SMS notifications about your Google reviews.
        </p>

        <form onSubmit={handleSubmit} className="onboarding-form">
          {/* Phone Number Field */}
          <div className="form-section">
            <h2>Contact Information</h2>

            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
              />
              <span className="form-help">
                This number will receive SMS notifications when new reviews are posted.
              </span>
            </div>
          </div>

          {/* SMS Consent Section */}
          <div className="form-section">
            <h2>SMS Notifications</h2>

            <p className="form-help" style={{ marginBottom: '12px' }}>
              Message frequency varies based on your review volume. Message and data rates may apply.
              Reply <strong>STOP</strong> to unsubscribe at any time. Reply <strong>HELP</strong> for assistance.
            </p>

            <div className="consent-section">
              <label className="consent-checkbox">
                <input
                  type="checkbox"
                  checked={smsConsent}
                  onChange={(e) => setSmsConsent(e.target.checked)}
                />
                <span className="consent-text">
                  I consent to receive text message notifications from Reviewed when new reviews are
                  posted to my Google Business Profile. These messages will include review details
                  and suggested responses for my approval. (Optional)
                </span>
              </label>
            </div>
          </div>

          {/* Terms & Privacy Checkbox */}
          <div className="form-section">
            <div className="consent-section">
              <label className="consent-checkbox">
                <input
                  type="checkbox"
                  required
                  checked={termsConsent}
                  onChange={(e) => setTermsConsent(e.target.checked)}
                />
                <span className="consent-text">
                  I agree to the{' '}
                  <Link to="/terms" target="_blank">Terms of Service</Link> and{' '}
                  <Link to="/privacy" target="_blank">Privacy Policy</Link>. *
                </span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="form-actions">
            <button
              type="submit"
              className="cta-button"
            >
              Sign Up for SMS Notifications
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}
