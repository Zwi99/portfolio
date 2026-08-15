import './About.css';
import {
  FaCode,
  FaServer,
  FaCloud
} from 'react-icons/fa';

function About() {
  return (
    <section className="about" id="about">

      <div className="about-header">

        <span className="section-label">
          ABOUT ME
        </span>

        <h2>
          Technology, problem solving
          <span> & continuous growth.</span>
        </h2>

        <p className="about-intro">
          I am an Information Technology professional focused on building
          practical solutions, solving technical problems and continuously
          growing across software, cloud and data technologies.
        </p>

      </div>


      <div className="about-content">

        <div className="about-story">

          <p>
            As a <strong>BSc Information Technology graduate</strong> and
            IT Support Technician, I have developed experience across both
            technical support and software development.
          </p>

          <p>
            My work has given me a practical understanding of technology
            beyond writing code. I troubleshoot problems, support users,
            configure and deploy equipment, and work with systems that need
            to remain reliable in a real-world environment.
          </p>

          <p>
            Outside of my professional role, I continue building projects
            and strengthening my skills in <strong>software development,
            AWS, cloud computing and data engineering</strong>.
          </p>

          <p>
            My goal is to grow into a versatile technology professional who
            can understand a problem, build the solution and keep learning
            as technology evolves.
          </p>

        </div>


        <div className="about-cards">

          <div className="about-card">

            <div className="about-icon">
              <FaCode />
            </div>

            <h3>Build</h3>

            <p>
              Creating practical applications and digital solutions using
              modern development technologies.
            </p>

          </div>


          <div className="about-card">

            <div className="about-icon">
              <FaServer />
            </div>

            <h3>Solve</h3>

            <p>
              Troubleshooting technical problems and turning complex issues
              into practical solutions.
            </p>

          </div>


          <div className="about-card">

            <div className="about-icon">
              <FaCloud />
            </div>

            <h3>Grow</h3>

            <p>
              Continuously developing my knowledge across cloud, data and
              emerging technologies.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;