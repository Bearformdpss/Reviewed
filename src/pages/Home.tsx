import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main className="page home-page">
      {/* Hero Section */}
      <section className="hero">
        <h1>Respond to Google Reviews in Minutes, Not Days</h1>
        <p className="hero-subtitle">
          Reviewed helps restaurant owners manage their online reputation with
          AI-powered response suggestions delivered via SMS. Never miss a review again.
        </p>
        <Link to="/onboarding" className="cta-button">Get Started Today</Link>
      </section>

      {/* How It Works */}
      <section className="section">
        <h2>How It Works</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">1</div>
            <h3>Connect Your Google Business Profile</h3>
            <p>Link your restaurant's Google Business Profile to start monitoring reviews automatically.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">2</div>
            <h3>Receive SMS Notifications</h3>
            <p>Get instant text alerts when new reviews are posted, along with AI-suggested responses.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">3</div>
            <h3>Approve & Post</h3>
            <p>Review the suggestion, approve it with a simple reply, and we'll post it to Google for you.</p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section section-alt">
        <h2>Why Restaurant Owners Choose Reviewed</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <h3>Never Miss a Negative Review</h3>
            <p>Instant alerts for 1-2 star reviews ensure you can respond quickly to protect your reputation.</p>
          </div>
          <div className="benefit-item">
            <h3>Professional Responses Every Time</h3>
            <p>AI-crafted responses that are warm, professional, and never admit fault or liability.</p>
          </div>
          <div className="benefit-item">
            <h3>Save Hours Every Week</h3>
            <p>Stop spending time crafting responses. Approve with one text and get back to running your business.</p>
          </div>
          <div className="benefit-item">
            <h3>100% Response Rate</h3>
            <p>Respond to every review, building trust with potential customers who read your replies.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <h2>Ready to Transform Your Review Management?</h2>
        <p>Join restaurant owners who respond to reviews in minutes, not days.</p>
        <Link to="/onboarding" className="cta-button">Start Your Free Trial</Link>
      </section>
    </main>
  )
}
