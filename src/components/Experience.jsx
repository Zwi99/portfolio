import './Experience.css';
import { FaBriefcase, FaLaptop, FaTools, FaTicketAlt } from 'react-icons/fa';

function Experience() {
  return (
    <section className="experience" id="experience">

      <div className="experience-container">

        <div className="experience-heading">

          <div className="experience-label">
            <span></span>
            PROFESSIONAL EXPERIENCE
          </div>

          <h2>
            Experience that
            <span> solves problems.</span>
          </h2>

          <p>
            Practical experience supporting users, maintaining IT systems,
            deploying technology and resolving technical issues in a
            professional environment.
          </p>

        </div>


        <div className="experience-card">

          <div className="experience-line"></div>

          <div className="experience-dot">
            <FaBriefcase />
          </div>


          <div className="experience-top">

            <div>
              <span className="experience-period">
                2026 — Present
              </span>

              <h3>IT Support Technician</h3>

              <h4>
                Private Security Industry Regulatory Authority (PSIRA)
              </h4>
            </div>

            <div className="current-badge">
              CURRENT ROLE
            </div>

          </div>


          <p className="experience-description">
            Providing first-line and second-line IT support to users while
            assisting with the deployment, configuration, maintenance and
            troubleshooting of workplace technology. My role combines
            technical problem solving with user-focused support to help
            maintain reliable day-to-day IT operations.
          </p>


          <div className="experience-skills">

            <div className="experience-skill">
              <FaLaptop />
              <div>
                <strong>End-User Support</strong>
                <span>
                  Desktop and laptop troubleshooting, Windows installation,
                  software configuration and user assistance.
                </span>
              </div>
            </div>


            <div className="experience-skill">
              <FaTools />
              <div>
                <strong>IT Operations</strong>
                <span>
                  Equipment deployment, hardware diagnostics, printer
                  installation and technical maintenance.
                </span>
              </div>
            </div>


            <div className="experience-skill">
              <FaTicketAlt />
              <div>
                <strong>Incident Management</strong>
                <span>
                  Logging, monitoring and resolving incidents through
                  ServiceDesk Plus while following support processes.
                </span>
              </div>
            </div>

          </div>


          <div className="experience-tags">

            <span>Windows</span>
            <span>Microsoft 365</span>
            <span>Hardware Support</span>
            <span>Printers</span>
            <span>ServiceDesk Plus</span>
            <span>Remote Support</span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Experience;