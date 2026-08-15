import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp
} from 'react-icons/fa';

import './Footer.css';

function Footer() {

  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-main">

          {/* BRAND */}

          <a href="#home" className="footer-logo">
            ZM<span>.</span>
          </a>


          {/* COPYRIGHT */}

          <p className="footer-copy">
            © {currentYear} Zwivhuya Mathada
          </p>


          {/* SOCIALS */}

          <div className="footer-social">

            <a
              href="https://github.com/Zwi99"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/zwivhuya-mathada-9b23b51b8"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=zwivhuyamathada58@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>

          </div>


          {/* BACK TO TOP */}

          <button
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <FaArrowUp />
          </button>

        </div>


        <div className="footer-bottom">

          <span>
            Software Developer · IT Support Technician · AWS Certified
          </span>

          <span>
            Built with React
          </span>

        </div>

      </div>

    </footer>
  );
}

export default Footer;