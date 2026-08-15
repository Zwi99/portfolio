import './Skills.css';

function Skills() {
  const skillCategories = [
    {
      icon: '💻',
      title: 'Frontend',
      description: 'Building responsive and user-focused web interfaces.',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React'],
    },
    {
      icon: '⚙️',
      title: 'Backend',
      description: 'Developing application logic and practical software solutions.',
      skills: ['Java', 'C#', 'Python', 'PHP', '.NET'],
    },
    {
      icon: '🗄️',
      title: 'Database & Cloud',
      description: 'Working with data storage and cloud technologies.',
      skills: ['MySQL', 'AWS'],
    },
    {
      icon: '🛠️',
      title: 'Tools',
      description: 'Development and collaboration tools used in my workflow.',
      skills: ['Git', 'GitHub', 'VS Code', 'Visual Studio', 'Postman'],
    },
  ];

  return (
    <section className="skills" id="skills">

      <div className="section-heading">
        <span className="section-label">MY TOOLKIT</span>

        <h2>Technical Skills</h2>

        <p className="skills-text">
          A practical collection of technologies and tools I use to build,
          troubleshoot and develop reliable technology solutions.
        </p>
      </div>

      <div className="skills-grid">

        {skillCategories.map((category, index) => (
          <div
            className="skill-category"
            key={category.title}
            style={{ '--delay': `${index * 0.1}s` }}
          >

            <div className="skill-top">

              <div className="skill-icon">
                {category.icon}
              </div>

              <div>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </div>

            </div>

            <div className="tech-list">

              {category.skills.map((skill) => (
                <span key={skill}>
                  {skill}
                </span>
              ))}

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;