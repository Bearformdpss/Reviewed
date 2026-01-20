import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would submit to your backend
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <main className="page contact-page">
        <div className="contact-container">
          <div className="success-message">
            <h1>Message Sent!</h1>
            <p>Thank you for reaching out. We'll get back to you within 24-48 hours.</p>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="page contact-page">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p className="contact-subtitle">
          Have questions about Reviewed? We're here to help.
        </p>

        <div className="contact-content">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name *</label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <select
                id="subject"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              >
                <option value="">Select a topic</option>
                <option value="general">General Inquiry</option>
                <option value="support">Technical Support</option>
                <option value="billing">Billing Question</option>
                <option value="partnership">Partnership Opportunity</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="How can we help you?"
              />
            </div>

            <button type="submit" className="cta-button">Send Message</button>
          </form>

          <div className="contact-info">
            <h3>Other Ways to Reach Us</h3>

            <div className="contact-method">
              <h4>Email</h4>
              <p>support@reviewed.com</p>
            </div>

            <div className="contact-method">
              <h4>Response Time</h4>
              <p>We typically respond within 24-48 hours during business days.</p>
            </div>

            <div className="contact-method">
              <h4>SMS Support</h4>
              <p>
                Current customers can reply <strong>HELP</strong> to any Reviewed
                message to get assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
