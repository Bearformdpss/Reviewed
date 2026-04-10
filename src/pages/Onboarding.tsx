import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Onboarding() {
  const [formData, setFormData] = useState({
    restaurantName: '',
    address: '',
    ownerName: '',
    email: '',
    phone: '',
    deliveryMethod: '',
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
              <label htmlFor="phone">Phone Number (Optional)</label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="Enter your phone number (optional)"
              />
              <span className="form-help">Optional: Provide your phone number if you'd like to receive SMS notifications about your reviews.</span>
            </div>
          </div>

          {/* Notification Preferences */}
          <div className="form-section">
            <h2>Notification Preferences</h2>

            <div className="form-group">
              <label htmlFor="deliveryMethod">Preferred Notification Method *</label>
              <select
                id="deliveryMethod"
                required
                value={formData.deliveryMethod}
                onChange={(e) => setFormData({ ...formData, deliveryMethod: e.target.value })}
              >
                <option value="" disabled>Select notification method...</option>
                <option value="email">Email Only</option>
                <option value="sms">SMS Text Messages</option>
                <option value="both">Both SMS and Email</option>
              </select>
            </div>

          </div>

          {/* Submit Button */}
          <div className="form-actions">
            <button
              type="submit"
              className="cta-button"
            >
              Continue to Connect Google Business Profile
            </button>
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
