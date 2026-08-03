import './Hero.css';
import profile from '../assets/profile.jpg';
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-left">

        <p className="greeting">👋 Hello, I'm</p>

        <h1>Zwivhuya Mathada</h1>

        <TypeAnimation
          sequence={[
            "BSc Information Technology Graduate",
            2000,
            "IT Support Technician",
            2000,
            "Software Developer",
            2000,
            "AWS Certified",
            2000,
            "Data Engineering Enthusiast",
            2000,
          ]}
          wrapper="h2"
          speed={50}
          repeat={Infinity}
        />

        <p className="description">
          Passionate IT Support Technician with a strong Software Development
          background. I build modern web applications, solve technical
          problems, and continuously improve my skills in Cloud Computing,
          Data Engineering and Software Development.
        </p>

        <div className="buttons">

          <a href="#projects" className="btn-primary">
            View Projects
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

      </div>

      <div className="hero-right">

        <img
          src={profile}
          alt="Zwivhuya Mathada"
          className="profile-image"
        />

      </div>

    </section>
  );
}

export default Hero;