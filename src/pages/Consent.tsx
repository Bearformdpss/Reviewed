import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Consent() {
  const [phone, setPhone] = useState('')
  const [smsConsent, setSmsConsent] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (smsConsent) {
      // Navigate to onboarding page after consent is given
      // Pass phone number if provided
      navigate('/onboarding', { state: { phone } })
    }
  }

  return (
    <main className="page onboarding-page">
      <div className="onboarding-container">
        <h1>SMS Notification Consent</h1>
        <p className="onboarding-subtitle">
          Before we continue, we need your consent to send you SMS notifications about your Google reviews.
        </p>

        <form onSubmit={handleSubmit} className="onboarding-form">
          {/* Phone Number Field - OPTIONAL FOR A2P 10DLC COMPLIANCE */}
          <div className="form-section">
            <h2>Contact Information (Optional)</h2>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number (optional)"
              />
              <span className="form-help">
                Optional: Provide your phone number to receive SMS notifications.
                You can also provide this information in the next step.
              </span>
            </div>
          </div>

          {/* SMS Consent Section - DEDICATED PAGE FOR A2P 10DLC COMPLIANCE */}
          <div className="form-section">
            <h2>SMS Consent</h2>
            <div className="consent-section">
              <label className="consent-checkbox">
                <input
                  type="checkbox"
                  checked={smsConsent}
                  onChange={(e) => setSmsConsent(e.target.checked)}
                  required
                />
                <span className="consent-text">
                  I consent to receive text message notifications from Reviewed when new
                  reviews are posted to my Google Business Profile. These messages will include
                  review details and suggested responses for my approval.
                  <br /><br />
                  <strong>Message frequency varies</strong> based on your review volume.
                  <strong> Message and data rates may apply.</strong>
                  <br /><br />
                  Reply <strong>STOP</strong> to unsubscribe at any time. Reply <strong>HELP</strong> for assistance.
                  <br /><br />
                  By checking this box, I agree to the{' '}
                  <Link to="/terms" target="_blank">Terms of Service</Link> and{' '}
                  <Link to="/privacy" target="_blank">Privacy Policy</Link>.
                </span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="form-actions">
            <button
              type="submit"
              className="cta-button"
              disabled={!smsConsent}
            >
              I Consent - Continue to Registration
            </button>
            <p className="form-note">
              {!smsConsent && (
                <span className="consent-required">* Please check the consent checkbox to continue</span>
              )}
            </p>
          </div>
        </form>

        {/* Additional Information */}
        <div className="onboarding-info">
          <h3>What happens after I consent?</h3>
          <ol>
            <li>You'll provide your restaurant information</li>
            <li>Connect your Google Business Profile</li>
            <li>Start receiving SMS notifications when new reviews are posted</li>
            <li>Reply to approve suggested responses with a simple text</li>
          </ol>
        </div>
      </div>
    </main>
  )
}
