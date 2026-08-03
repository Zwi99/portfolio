import './About.css';
import { FaUserGraduate, FaLaptopCode, FaCloud, FaTools } from 'react-icons/fa';

function About() {
  return (
    <section className="about" id="about">

      <h2>About Me</h2>

      <p className="about-intro">
        I'm a passionate technology professional with a strong foundation in
        Software Development and hands-on experience in IT Support. I enjoy
        building software, solving technical problems, and continuously
        learning modern technologies that create real business value.
      </p>

      <div className="about-grid">

        <div className="about-card">
          <FaUserGraduate className="about-icon" />
          <h3>Education</h3>
          <p>
            BSc Information Technology Graduate with a Higher Certificate in
            Systems Engineering.
          </p>
        </div>

        <div className="about-card">
          <FaLaptopCode className="about-icon" />
          <h3>Software Development</h3>
          <p>
            Experienced in building web applications using React, JavaScript,
            PHP, Java, C#, Python and MySQL.
          </p>
        </div>

        <div className="about-card">
          <FaCloud className="about-icon" />
          <h3>Cloud & Data</h3>
          <p>
            AWS certified with an interest in Cloud Computing and Data
            Engineering.
          </p>
        </div>

        <div className="about-card">
          <FaTools className="about-icon" />
          <h3>IT Support</h3>
          <p>
            Currently working as an IT Support Technician, supporting users,
            hardware, software and Microsoft 365 environments.
          </p>
        </div>

      </div>

    </section>
  );
}

export default About;