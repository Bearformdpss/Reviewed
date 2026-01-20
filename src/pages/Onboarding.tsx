import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Onboarding() {
  const [formData, setFormData] = useState({
    restaurantName: '',
    address: '',
    ownerName: '',
    email: '',
    phone: '',
    deliveryMethod: 'sms',
    smsConsent: false,
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would submit to your backend
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <main className="page onboarding-page">
        <div className="onboarding-container">
          <div className="success-message">
            <h1>Thank You!</h1>
            <p>Your registration has been received. We'll be in touch shortly to complete your setup.</p>
            <Link to="/" className="cta-button">Return to Home</Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="page onboarding-page">
      <div className="onboarding-container">
        <h1>Get Started with Reviewed</h1>
        <p className="onboarding-subtitle">
          Complete the form below to set up your restaurant's review management.
        </p>

        <form onSubmit={handleSubmit} className="onboarding-form">
          {/* Restaurant Information */}
          <div className="form-section">
            <h2>Restaurant Information</h2>

            <div className="form-group">
              <label htmlFor="restaurantName">Restaurant Name *</label>
              <input
                type="text"
                id="restaurantName"
                required
                value={formData.restaurantName}
                onChange={(e) => setFormData({ ...formData, restaurantName: e.target.value })}
                placeholder="Enter your restaurant name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Address *</label>
              <input
                type="text"
                id="address"
                required
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                placeholder="Enter your restaurant address"
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="form-section">
            <h2>Contact Information</h2>

            <div className="form-group">
              <label htmlFor="ownerName">Owner/Manager Name *</label>
              <input
                type="text"
                id="ownerName"
                required
                value={formData.ownerName}
                onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Enter your email address"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="Enter your phone number"
              />
              <span className="form-help">This number will receive SMS notifications about your reviews.</span>
            </div>
          </div>

          {/* Notification Preferences */}
          <div className="form-section">
            <h2>Notification Preferences</h2>

            <div className="form-group">
              <label htmlFor="deliveryMethod">Preferred Notification Method *</label>
              <select
                id="deliveryMethod"
                value={formData.deliveryMethod}
                onChange={(e) => setFormData({ ...formData, deliveryMethod: e.target.value })}
              >
                <option value="sms">SMS Text Messages</option>
                <option value="email">Email Only</option>
                <option value="both">Both SMS and Email</option>
              </select>
            </div>

            {/* SMS Consent Checkbox - THE KEY ELEMENT FOR A2P 10DLC */}
            {(formData.deliveryMethod === 'sms' || formData.deliveryMethod === 'both') && (
              <div className="consent-section">
                <label className="consent-checkbox">
                  <input
                    type="checkbox"
                    checked={formData.smsConsent}
                    onChange={(e) => setFormData({ ...formData, smsConsent: e.target.checked })}
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
            )}
          </div>

          {/* Submit Button */}
          <div className="form-actions">
            <button
              type="submit"
              className="cta-button"
              disabled={(formData.deliveryMethod === 'sms' || formData.deliveryMethod === 'both') && !formData.smsConsent}
            >
              Continue to Connect Google Business Profile
            </button>
            <p className="form-note">
              {(formData.deliveryMethod === 'sms' || formData.deliveryMethod === 'both') && !formData.smsConsent && (
                <span className="consent-required">* Please check the SMS consent checkbox to continue</span>
              )}
            </p>
          </div>
        </form>

        {/* Additional Information */}
        <div className="onboarding-info">
          <h3>What happens next?</h3>
          <ol>
            <li>After submitting this form, you'll connect your Google Business Profile</li>
            <li>We'll start monitoring your reviews immediately</li>
            <li>You'll receive SMS notifications with suggested responses</li>
            <li>Simply reply to approve, and we'll post the response for you</li>
          </ol>
        </div>
      </div>
    </main>
  )
}
