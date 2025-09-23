// contact/contact-form.js
// Renders and handles the Contact Form section

export function renderContactFormSection(container) {
  container.innerHTML = `
    <style>
      .contact-form-section {
        background: #fff;
        border: 2px solid #d9d9d9;
        border-radius: 18px;
        box-shadow: 0 2px 12px rgba(0,0,0,0.04);
        padding: 2.5rem 2.5rem 2rem 2.5rem;
        max-width: 520px;
        margin: 2rem auto;
        font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
      }
      .contact-form {
        display: flex;
        flex-direction: column;
        gap: 1.1rem;
      }
      .contact-form .form-row {
        display: flex;
        gap: 1.2rem;
      }
      .contact-form .form-group {
        display: flex;
        flex-direction: column;
        flex: 1;
        font-size: 1.04rem;
      }
      .contact-form label {
        font-weight: 500;
        font-size: 1.01rem;
        margin-bottom: 0.35em;
        color: #222;
      }
      .contact-form input[type="text"],
      .contact-form input[type="email"],
      .contact-form select,
      .contact-form textarea {
        font-family: inherit;
        font-size: 1.04rem;
        border: 1.5px solid #d9d9d9;
        border-radius: 6px;
        padding: 0.7em 0.9em;
        outline: none;
        background: #fff;
        transition: border 0.2s;
      }
      .contact-form input[type="text"]:focus,
      .contact-form input[type="email"]:focus,
      .contact-form select:focus,
      .contact-form textarea:focus {
        border-color: #e53935;
      }
      .contact-form textarea {
        min-height: 90px;
        resize: vertical;
      }
      .contact-form .checkbox {
        display: flex;
        align-items: flex-start;
        gap: 0.5em;
        font-size: 0.98em;
        margin-top: 0.2em;
      }
      .contact-form input[type="checkbox"] {
        accent-color: #e53935;
        width: 1.1em;
        height: 1.1em;
        margin-top: 0.2em;
      }
      .contact-form .btn-primary {
        background: #e53935;
        color: #fff;
        border: none;
        border-radius: 6px;
        font-size: 1.08rem;
        font-weight: 500;
        padding: 0.7em 2.2em;
        margin-top: 0.5em;
        cursor: pointer;
        transition: background 0.18s;
        box-shadow: 0 2px 8px rgba(233,78,119,0.08);
      }
      .contact-form .btn-primary:hover {
        background: #c62828;
      }
    </style>
    <div class="contact-form-section">
      <h2 style="display:none;">Schedule a Consultation</h2>
      <form class="contact-form" id="contactForm">
        <div class="form-group">
            <label for="firstName">First Name *</label>
            <input type="text" id="firstName" name="firstName" required>
        </div>
        <div class="form-group">
            <label for="lastName">Last Name *</label>
            <input type="text" id="lastName" name="lastName" required>
        </div>
        <div class="form-group">
          <label for="email">Email Address *</label>
          <input type="email" id="email" name="email" placeholder="your.email@company.com" required>
        </div>
        <div class="form-group">
          <label for="company">Company *</label>
          <input type="text" id="company" name="company" placeholder="Your Company Name" required>
        </div>
        <div class="form-group">
          <label>Services Interested In *</label>
          <div class="checkbox-group">
            <label class="checkbox">
              <input type="checkbox" name="services" value="marketing-analytics">
              <span>Marketing Analytics</span>
            </label>
            <label class="checkbox">
              <input type="checkbox" name="services" value="media-optimization">
              <span>Media Optimization</span>
            </label>
            <label class="checkbox">
              <input type="checkbox" name="services" value="causal-inference">
              <span>Causal Inference Modeling</span>
            </label>
          </div>
        </div>
        <div class="form-group">
          <label for="budget">Monthly Marketing Budget *</label>
          <select id="budget" name="budget" required>
            <option value="">Select budget range</option>
            <option value="under-100k">Under $100K</option>
            <option value="100k-500k">$100K - $500K</option>
            <option value="500k-1m">$500K - $1M</option>
            <option value="1m-5m">$1M - $5M</option>
            <option value="over-5m">Over $5M</option>
          </select>
        </div>
        <div class="form-group">
          <label for="details">Project Details *</label>
          <textarea id="details" name="details" rows="5" placeholder="Tell us about your current challenges, goals, and what you're hoping to achieve with advanced marketing analytics..." required></textarea>
        </div>
        <button type="submit" class="btn btn-primary btn-full">Schedule Consultation</button>
      </form>
      <div id="thankYouMessage" style="display:none;">
        <h3>Thank you for your inquiry!</h3>
        <p>We'll get back to you within 2 business hours with next steps and a proposed meeting time.</p>
      </div>
    </div>
  `;
}

// Usage example (in contact.js):
// import { renderContactFormSection } from './contact-form.js';
// renderContactFormSection(document.querySelector('.contact-form-section'));
