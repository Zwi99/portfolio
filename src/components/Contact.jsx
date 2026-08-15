import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaArrowRight
} from 'react-icons/fa';

import './Contact.css';

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setSending(true);
    setStatus('Sending your message...');

    emailjs
      .sendForm(
        'service_oyhruuo',
        'template_yxx6i1v',
        form.current,
        {
          publicKey: 'Tp5zbr2Hv4Q8dks4I',
        }
      )
      .then(() => {
        setStatus('Message sent successfully. Thank you for reaching out!');
        form.current.reset();
        setSending(false);
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setStatus('Something went wrong. Please try again.');
        setSending(false);
      });
  };

  return (
    <section className="contact" id="contact">

      <div className="contact-container">

        {/* HEADER */}

        <div className="contact-header">

          <div className="contact-label">
            <span></span>
            GET IN TOUCH
          </div>

          <h2>
            Let's build something
            <span> meaningful.</span>
          </h2>

          <p>
            Have a project, opportunity or technical idea you'd like to
            discuss? Send me a message and I'll get back to you.
          </p>

        </div>


        {/* CONTENT */}

        <div className="contact-layout">

          {/* FORM */}

          <div className="contact-form-card">

            <div className="form-heading">
              <div>
                
                <h3>Send a message</h3>
              </div>

              <FaPaperPlane />
            </div>

            <p className="form-intro">
              Tell me a little about what you're working on or how I can
              help.
            </p>

            <form ref={form} onSubmit={sendEmail}>

              <div className="form-row">

                <div className="form-group">
                  <label htmlFor="name">
                    Your Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    Email Address
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                  />
                </div>

              </div>


              <div className="form-group">

                <label htmlFor="subject">
                  Subject
                </label>

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="What would you like to discuss?"
                  required
                />

              </div>


              <div className="form-group">

                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Write your message..."
                  required
                ></textarea>

              </div>


              <button
                type="submit"
                className="contact-submit"
                disabled={sending}
              >
                {sending ? 'Sending...' : 'Send Message'}

                <FaArrowRight />
              </button>


              {status && (
                <p className="form-status">
                  {status}
                </p>
              )}

            </form>

          </div>


          {/* CONTACT INFORMATION */}

          <div className="contact-side">

            <div className="contact-side-heading">

          

              <div>
                <h3>Other ways to connect</h3>

                <p>
                  You can also find me through these platforms.
                </p>
              </div>

            </div>


            <div className="contact-info">

              <a
                href="mailto:zwivhuyamathada58@gmail.com"
                className="contact-card"
              >

                <div className="contact-card-icon">
                  <FaEnvelope />
                </div>

                <div>
                  <span>Email</span>
                  <strong>
                    zwivhuyamathada58@gmail.com
                  </strong>
                </div>

              </a>


              <a
                href="https://www.linkedin.com/in/zwivhuya-mathada-9b23b51b8"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
              >

                <div className="contact-card-icon">
                  <FaLinkedin />
                </div>

                <div>
                  <span>LinkedIn</span>
                  <strong>
                    View my profile
                  </strong>
                </div>

              </a>


              <a
                href="https://github.com/Zwi99"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
              >

                <div className="contact-card-icon">
                  <FaGithub />
                </div>

                <div>
                  <span>GitHub</span>
                  <strong>
                    github.com/Zwi99
                  </strong>
                </div>

              </a>


              <div className="contact-card">

                <div className="contact-card-icon">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <span>Location</span>
                  <strong>
                    Pretoria, South Africa
                  </strong>
                </div>

              </div>

            </div>


            <div className="contact-note">

              <div className="availability-dot"></div>

              <div>
                <strong>Open to opportunities</strong>

                <p>
                  Software development, IT support, data and
                  technology projects.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;