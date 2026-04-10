import { Link } from 'react-router-dom'

export default function Consent() {
  return (
    <main className="page onboarding-page">
      <div className="onboarding-container">
        <h1>SMS Notification Consent</h1>
        <p className="onboarding-subtitle">
          When you sign up for SMS notifications, you are consenting to receive text messages from Reviewed about your Google Business Profile reviews.
        </p>

        <div className="form-section">
          <h2>What You're Consenting To</h2>
          <p>
            By opting in to SMS notifications during registration, you agree to receive text message
            notifications from Reviewed when new reviews are posted to your Google Business Profile.
            These messages will include review details and suggested responses for your approval.
          </p>
          <br />
          <p><strong>Message frequency varies</strong> based on your review volume.</p>
          <p><strong>Message and data rates may apply.</strong></p>
          <br />
          <p>Reply <strong>STOP</strong> to unsubscribe at any time. Reply <strong>HELP</strong> for assistance.</p>
        </div>

        <div className="form-section">
          <h2>Your Privacy</h2>
          <p>
            Your phone number will never be shared with third parties for marketing purposes.
            It is used solely to send you review notifications for your business.
            See our <Link to="/privacy">Privacy Policy</Link> for full details.
          </p>
        </div>

        <div className="form-actions">
          <Link to="/onboarding" className="cta-button">
            Get Started
          </Link>
        </div>
      </div>
    </main>
  )
}
