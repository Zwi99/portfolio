import './Projects.css';
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaArrowRight
} from 'react-icons/fa';

function Projects() {
  const projects = [
    {
      icon: '💻',
      title: 'Developer Portfolio',
      category: 'Web Development',
      description:
        'A responsive personal portfolio built to present my software development journey, technical skills, projects, certifications, education and professional experience in one professional platform.',
      tech: ['React', 'JavaScript', 'CSS3', 'Vite'],
      github: 'https://github.com/Zwi99/portfolio-website',
      demo: null,
      status: 'In Progress'
    },

    {
      icon: '⛏️',
      title: 'Aano Mining Website',
      category: 'Business Website',
      description:
        'A professional business website developed for a mining company to establish a stronger online presence and present company information and services through a responsive web experience.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'PHP'],
      github: 'https://github.com/Zwi99/AanoMiningWebsite',
      demo: null,
      status: 'Completed'
    },

    {
      icon: '🎓',
      title: 'Exam Auto Marking System',
      category: 'Academic Project',
      description:
        'A university group project focused on improving the examination process by automating marking activities and reducing repetitive manual processing through a structured software solution.',
      tech: ['Java', 'MySQL'],
      github: null,
      demo: null,
      status: 'Academic'
    }
  ];

  return (
    <section className="projects" id="projects">

      <div className="projects-container">

        {/* SECTION HEADER */}

        <div className="projects-heading">

          <div className="projects-label">
            <span></span>
            SELECTED WORK
          </div>

          <h2>
            Projects built with{' '}
            <span>purpose.</span>
          </h2>

          <p>
            A selection of projects that represent my practical experience,
            technical development and continued growth across software,
            web development and IT.
          </p>

        </div>


        {/* PROJECTS */}

        <div className="projects-grid">

          {projects.map((project, index) => (

            <article
              className="project-card"
              key={project.title}
              style={{ '--delay': `${index * 0.12}s` }}
            >

              {/* CARD TOP */}

              <div className="project-top">

                <div className="project-icon">
                  {project.icon}
                </div>

                <span className="project-status">
                  {project.status}
                </span>

              </div>


              {/* CATEGORY */}

              <span className="project-category">
                {project.category}
              </span>


              {/* TITLE */}

              <h3>
                {project.title}
              </h3>


              {/* DESCRIPTION */}

              <p className="project-description">
                {project.description}
              </p>


              {/* TECHNOLOGIES */}

              <div className="project-tech">

                {project.tech.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}

              </div>


              {/* ACTIONS */}

              <div className="project-buttons">

                {project.github ? (

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-github"
                  >
                    <FaGithub />
                    <span>View Code</span>
                  </a>

                ) : (

                  <span className="project-disabled">
                    <FaGithub />
                    <span>Code Unavailable</span>
                  </span>

                )}


                {project.demo ? (

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-demo"
                  >
                    <span>Live Demo</span>
                    <FaExternalLinkAlt />
                  </a>

                ) : (

                  <span className="project-disabled">
                    <span>Demo Coming Soon</span>
                    <FaCode />
                  </span>

                )}

              </div>

            </article>

          ))}

        </div>


        {/* FOOTER */}

        <div className="projects-footer">

          <span></span>

          <p>
            More projects will be added as I continue building and learning.
          </p>

          <span></span>

        </div>

      </div>

    </section>
  );
}

export default Projects;