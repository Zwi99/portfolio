import './Skills.css';

function Skills() {
  return (
    <section className="skills" id="skills">

      <h2>Technical Skills</h2>

      <p className="skills-text">
        These are the technologies and tools I use to develop applications,
        solve technical problems, and continuously improve my skills.
      </p>

      <div className="skills-grid">

        <div className="skill-category">
          <h3>💻 Frontend</h3>

          <div className="tech-list">
            <span>HTML5</span>
            <span>CSS3</span>
            <span>JavaScript</span>
            <span>React</span>
          </div>
        </div>

        <div className="skill-category">
          <h3>⚙️ Backend</h3>

          <div className="tech-list">
            <span>Java</span>
            <span>C#</span>
            <span>Python</span>
            <span>PHP</span>
            <span>.NET</span>
          </div>
        </div>

        <div className="skill-category">
          <h3>🗄 Database & Cloud</h3>

          <div className="tech-list">
            <span>MySQL</span>
            <span>AWS</span>
          </div>
        </div>

        <div className="skill-category">
          <h3>🛠 Tools</h3>

          <div className="tech-list">
            <span>Git</span>
            <span>GitHub</span>
            <span>VS Code</span>
            <span>Visual Studio</span>
            <span>Postman</span>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Skills;