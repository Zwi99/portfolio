import './Footer.css';
import { FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <h3>Zwivhuya Mathada</h3>

        <p>
          Software Developer • IT Support Technician • AWS Certified
        </p>

        <div className="footer-social">

          <a
            href="https://github.com/Zwi99"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/zwivhuya-mathada-9b23b51b8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

        </div>

        <button
          className="back-top"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          <FaArrowUp />
        </button>

        <p className="copyright">
          © {new Date().getFullYear()} Zwivhuya Mathada. Built with React.
        </p>

      </div>

    </footer>
  );
}

export default Footer;