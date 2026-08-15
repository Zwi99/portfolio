import './Hero.css';
import profile from '../assets/profile.jpg';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa';

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-left">

        <p className="greeting">
           Hello, I'm
        </p>

        <h1>
          Zwivhuya <span>Mathada</span>
        </h1>

        <div className="hero-role">
          <TypeAnimation
            sequence={[
              'BSc Information Technology Graduate',
              2000,
              'IT Support Technician',
              2000,
              'Software Developer',
              2000,
              'AWS Certified',
              2000,
              'Data Engineering Enthusiast',
              2000,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
          />
        </div>

        <p className="description">
          IT professional with a strong foundation in software development,
          technical support and modern technology. I enjoy solving problems,
          building practical digital solutions and continuously expanding my
          knowledge in cloud computing, data and software engineering.
        </p>

        <div className="buttons">

          <a
            href="#projects"
            className="btn-primary"
          >
            View My Projects
            <span>→</span>
          </a>

          <a
            href="/cv/Zwivhuya_Mathada_CV.pdf"
            download
            className="btn-secondary"
          >
            Download CV
          </a>

        </div>

        <div className="hero-social">

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

        </div>

      </div>

      <div className="hero-right">

        <div className="profile-wrapper">

          <div className="profile-glow"></div>

          <img
            src={profile}
            alt="Professional portrait of Zwivhuya Mathada"
            className="profile-image"
          />

          <div className="profile-badge">
            <span className="status-dot"></span>
            Available for opportunities
          </div>

        </div>

      </div>

      <a
        href="#about"
        className="hero-scroll"
        aria-label="Scroll to About section"
      >
        <span>Explore</span>
        <FaArrowDown />
      </a>

    </section>
  );
}

export default Hero;