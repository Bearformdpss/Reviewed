import { Link } from 'react-router-dom'

export default function TermsOfService() {
  return (
    <main className="page legal-page">
      <div className="legal-content">
        <h1>Terms of Service</h1>
        <p className="last-updated">Last Updated: January 20, 2026</p>

        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using Reviewed ("Service"), you agree to be bound by these
            Terms of Service. If you do not agree to these terms, please do not use our Service.
          </p>
        </section>

        <section>
          <h2>2. Description of Service</h2>
          <p>
            Reviewed provides automated Google review monitoring and response management
            services for restaurant owners. Our Service includes:
          </p>
          <ul>
            <li>Monitoring of Google Business Profile reviews</li>
            <li>SMS notifications for new reviews</li>
            <li>AI-generated response suggestions</li>
            <li>Posting approved responses to Google on your behalf</li>
          </ul>
        </section>

        <section>
          <h2>3. User Accounts</h2>
          <p>
            To use our Service, you must create an account and provide accurate information.
            You are responsible for maintaining the confidentiality of your account credentials
            and for all activities under your account.
          </p>
        </section>

        <section>
          <h2>4. SMS Communications</h2>
          <p>
            <strong>Program Name:</strong> Reviewed
          </p>
          <p>
            <strong>Program Description:</strong> By opting in to SMS notifications, you consent to receive text messages from
            Reviewed regarding:
          </p>
          <ul>
            <li>New review notifications</li>
            <li>AI-suggested responses for your approval</li>
            <li>Confirmation of posted responses</li>
            <li>Service updates and alerts</li>
          </ul>
          <p>
            <strong>Opting Out:</strong> You can cancel the SMS service at any time. Just text <strong>"STOP"</strong> to
            any message from us. After you send the SMS message "STOP" to us, we will send you an SMS message to
            confirm that you have been unsubscribed. After this, you will no longer receive SMS messages from us.
            If you want to join again, just sign up as you did the first time and we will start sending SMS messages
            to you again. You may also opt out by updating your preferences in your account dashboard.
          </p>
          <p>
            <strong>Help and Support:</strong> If you are experiencing issues with the messaging program, you can reply
            with the keyword <strong>HELP</strong> for more assistance, or you can get help directly at{' '}
            <a href="mailto:reviewedcs@yahoo.com">reviewedcs@yahoo.com</a>.
          </p>
          <p>
            <strong>Message Frequency and Costs:</strong> Message frequency varies based on your review volume.
            As always, message and data rates may apply for any messages sent to you from us and to us from you.
            If you have any questions about your text plan or data plan, it is best to contact your wireless provider.
          </p>
          <p>
            <strong>Carrier Liability:</strong> Carriers are not liable for delayed or undelivered messages.
            Reviewed is not responsible for any delays, failures in delivery, or any other issues related to the
            transmission or receipt of text messages. Delivery of SMS messages is subject to carrier network
            availability and other factors beyond our control.
          </p>
          <p>
            <strong>Privacy:</strong> If you have any questions regarding privacy, please read our{' '}
            <Link to="/privacy">Privacy Policy</Link>.
          </p>
        </section>

        <section>
          <h2>5. Google Business Profile Authorization</h2>
          <p>
            By connecting your Google Business Profile, you authorize Reviewed to:
          </p>
          <ul>
            <li>Access and read reviews posted to your profile</li>
            <li>Post responses to reviews on your behalf when you approve them</li>
          </ul>
          <p>
            You may revoke this authorization at any time through your Google account settings
            or by contacting us.
          </p>
        </section>

        <section>
          <h2>6. AI-Generated Content</h2>
          <p>
            Our Service uses artificial intelligence to generate response suggestions.
            While we strive to provide professional and appropriate responses:
          </p>
          <ul>
            <li>You are responsible for reviewing and approving all responses before posting</li>
            <li>We do not guarantee the accuracy or appropriateness of AI-generated content</li>
            <li>You should not approve responses without reviewing them</li>
          </ul>
        </section>

        <section>
          <h2>7. Prohibited Uses</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the Service for any unlawful purpose</li>
            <li>Post responses that violate Google's policies</li>
            <li>Attempt to manipulate or abuse the review system</li>
            <li>Share your account credentials with unauthorized parties</li>
          </ul>
        </section>

        <section>
          <h2>8. Payment and Subscriptions</h2>
          <p>
            Subscription fees are billed monthly. You may cancel your subscription at any time.
            Refunds are provided in accordance with our refund policy.
          </p>
        </section>

        <section>
          <h2>9. Limitation of Liability</h2>
          <p>
            Reviewed is provided "as is" without warranties of any kind. We are not
            liable for any damages arising from your use of the Service, including but not
            limited to loss of business or reputation.
          </p>
        </section>

        <section>
          <h2>10. Changes to Terms</h2>
          <p>
            We may update these Terms of Service from time to time. We will notify you of
            significant changes via email or through the Service.
          </p>
        </section>

        <section>
          <h2>11. Contact Us</h2>
          <p>
            If you have questions about these Terms of Service, please contact us at:
          </p>
          <p>
            Email: <a href="mailto:reviewedcs@yahoo.com">reviewedcs@yahoo.com</a><br />
          </p>
        </section>
      </div>
    </main>
  )
}
