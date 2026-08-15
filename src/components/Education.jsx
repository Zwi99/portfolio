import './Education.css';
import { FaGraduationCap, FaBookOpen, FaCheckCircle } from 'react-icons/fa';

function Education() {
  return (
    <section className="education" id="education">

      <div className="education-container">

        {/* HEADER */}

        <div className="education-heading">

          <div className="education-label">
            <span></span>
            EDUCATION
          </div>

          <h2>
            Building the
            <span> foundation.</span>
          </h2>

          <p>
            Academic experience that built my foundation in information
            technology, software development and computer systems.
          </p>

        </div>


        {/* EDUCATION CARDS */}

        <div className="education-grid">


          {/* DEGREE */}

          <article className="education-card featured">

            <div className="education-card-top">

              <div className="education-icon">
                <FaGraduationCap />
              </div>

              <span className="education-status">
                COMPLETED
              </span>

            </div>


            <span className="education-period">
              2023 — 2025
            </span>

            <h3>
              Bachelor of Science in
              <br />
              Information Technology
            </h3>

            <h4>
              Richfield Graduate Institute of Technology
            </h4>


            <p>
              Completed a Bachelor of Science in Information Technology,
              developing knowledge across software development, databases,
              web technologies and software engineering.
            </p>


            <div className="education-highlights">

              <span>
                <FaCheckCircle />
                Software Development
              </span>

              <span>
                <FaCheckCircle />
                Database Systems
              </span>

              <span>
                <FaCheckCircle />
                Web Technologies
              </span>

            </div>

          </article>


          {/* HIGHER CERTIFICATE */}

          <article className="education-card">

            <div className="education-card-top">

              <div className="education-icon">
                <FaBookOpen />
              </div>

              <span className="education-status">
                COMPLETED
              </span>

            </div>


            <span className="education-period">
              2019
            </span>

            <h3>
              Higher Certificate in
              <br />
              Systems Engineering
            </h3>

            <h4>
              Richfield Graduate Institute of Technology
            </h4>


            <p>
              Developed a strong technical foundation in computer systems,
              networking, operating systems and the fundamentals required
              for a career in information technology.
            </p>


            <div className="education-highlights">

              <span>
                <FaCheckCircle />
                Computer Systems
              </span>

              <span>
                <FaCheckCircle />
                Networking
              </span>

              <span>
                <FaCheckCircle />
                Operating Systems
              </span>

            </div>

          </article>

        </div>


        {/* FOOTER */}

        <div className="education-footer">

          <div className="education-footer-line"></div>

          <span>
            Academic foundation → Professional growth
          </span>

          <div className="education-footer-line"></div>

        </div>

      </div>

    </section>
  );
}

export default Education;