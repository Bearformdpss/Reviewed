import { Link } from 'react-router-dom'

export default function Pricing() {
  return (
    <main className="page pricing-page">
      <div className="pricing-container">
        <h1>Choose Your Plan</h1>
        <p className="pricing-subtitle">
          Simple, transparent pricing. No hidden fees.
        </p>

        <div className="pricing-grid">
          {/* Monitoring Plan */}
          <div className="pricing-card">
            <h2>Monitoring</h2>
            <div className="price">
              <span className="dollar">$</span>
              <span className="amount">49</span>
              <span className="period">/ month</span>
            </div>
            <p className="plan-description">
              Stay informed about every review
            </p>
            <div className="features">
              <div className="feature">
                <span className="check">✓</span>
                <span>Timed Review Notifications</span>
              </div>
              <div className="feature">
                <span className="check">✓</span>
                <span>1-2 Star Automatic Notifications</span>
              </div>
              <div className="feature">
                <span className="check">✓</span>
                <span>Holiday Hour Updates</span>
              </div>
              <div className="feature">
                <span className="check">✓</span>
                <span>Email & SMS Delivery Options</span>
              </div>
            </div>
            <Link to="/onboarding" className="btn-get-started">Get Started</Link>
          </div>

          {/* Response Assistant Plan */}
          <div className="pricing-card popular">
            <div className="popular-badge">POPULAR</div>
            <h2>Response Assistant</h2>
            <div className="price">
              <span className="dollar">$</span>
              <span className="amount">57</span>
              <span className="period">/ month</span>
            </div>
            <p className="plan-description">
              Respond professionally in seconds
            </p>
            <div className="features">
              <div className="feature">
                <span className="check">✓</span>
                <span>Timed Review Notifications</span>
              </div>
              <div className="feature">
                <span className="check">✓</span>
                <span>1-2 Star Automatic Notifications</span>
              </div>
              <div className="feature">
                <span className="check">✓</span>
                <span>Holiday Hour Updates</span>
              </div>
              <div className="feature">
                <span className="check">✓</span>
                <span>Email & SMS Delivery Options</span>
              </div>
              <div className="feature highlighted">
                <span className="check">✓</span>
                <span>AI Suggested Responses</span>
              </div>
              <div className="feature highlighted">
                <span className="check">✓</span>
                <span>One-Tap Response Approval</span>
              </div>
            </div>
            <Link to="/onboarding" className="btn-get-started highlighted">Get Started</Link>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="pricing-faq">
          <h2>Frequently Asked Questions</h2>

          <div className="faq-item">
            <h3>Can I switch plans later?</h3>
            <p>Yes, you can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.</p>
          </div>

          <div className="faq-item">
            <h3>Is there a contract?</h3>
            <p>No long-term contracts. All plans are month-to-month and you can cancel anytime.</p>
          </div>

          <div className="faq-item">
            <h3>What payment methods do you accept?</h3>
            <p>We accept all major credit cards including Visa, Mastercard, and American Express.</p>
          </div>

          <div className="faq-item">
            <h3>Do you offer multi-location discounts?</h3>
            <p>Yes! Contact us for custom pricing if you have multiple restaurant locations.</p>
          </div>
        </div>
      </div>
    </main>
  )
}
