import './Education.css';

function Education() {
  return (

    <section className="education" id="education">

      <h2>Education</h2>

      <div className="education-grid">

        <div className="education-card">

          <div className="education-icon">
            🎓
          </div>

          <h3>Bachelor of Science in Information Technology</h3>

          <h4>Richfield Graduate Institute of Technology</h4>

          <span>2022 – 2026</span>

          <p>
            Graduated with a Bachelor of Science in Information Technology,
            specializing in Software Development, database systems,
            web technologies and software engineering.
          </p>

        </div>

        <div className="education-card">

          <div className="education-icon">
            📘
          </div>

          <h3>Higher Certificate in Systems Engineering</h3>

          <h4>Richfield Graduate Institute of Technology</h4>

          <span>2019</span>

          <p>
            Built a strong foundation in computer systems,
            networking, operating systems and technical support.
          </p>

        </div>

      </div>

    </section>

  );
}

export default Education;