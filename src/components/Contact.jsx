import './Contact.css';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhoneAlt } from 'react-icons/fa';

function Contact() {
  return (
    <section className="contact" id="contact">

      <h2>Let's Connect</h2>

      <p className="contact-text">
        Whether you're looking for a Software Developer, IT Support Technician,
        or would like to collaborate on a project, I'd love to hear from you.
      </p>

      <div className="contact-grid">

        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h3>Email</h3>
          <a href="mailto:YOUR_EMAIL">
            YOUR_EMAIL
          </a>
        </div>

        <div className="contact-card">
          <FaLinkedin className="contact-icon" />
          <h3>LinkedIn</h3>

          <a
            href="https://www.linkedin.com/in/zwivhuya-mathada-9b23b51b8"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Profile
          </a>

        </div>

        <div className="contact-card">

          <FaGithub className="contact-icon" />

          <h3>GitHub</h3>

          <a
            href="https://github.com/Zwi99"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/Zwi99
          </a>

        </div>

        <div className="contact-card">

          <FaPhoneAlt className="contact-icon" />

          <h3>Location</h3>

          <p>Pretoria, South Africa</p>

        </div>

      </div>

    </section>
  );
}

export default Contact;