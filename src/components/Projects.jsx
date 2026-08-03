import './Projects.css';

function Projects() {

  const projects = [

    {
      icon: "💻",
      title: "Developer Portfolio",

      description:
        "Modern React portfolio showcasing my technical skills, certifications, projects and professional experience.",

      tech: [
        "React",
        "CSS",
        "JavaScript"
      ],

      github:
        "https://github.com/Zwi99/portfolio-website",

      demo:"#"
    },

    {
      icon:"⛏️",

      title:"Aano Mining Website",

      description:
        "Business website developed using HTML, CSS, JavaScript and PHP for a mining company.",

      tech:[
        "HTML",
        "CSS",
        "JavaScript",
        "PHP"
      ],

      github:
        "https://github.com/Zwi99/AanoMiningWebsite",

      demo:"#"

    },

    {
      icon:"🎓",

      title:"Exam Auto Marking System",

      description:
        "University group project developed to automate examination marking and improve efficiency.",

      tech:[
        "Java",
        "MySQL"
      ],

      github:"#",

      demo:"#"

    }

  ];

  return(

<section className="projects" id="projects">

<h2>Featured Projects</h2>

<p className="projects-text">

Some of the projects I have built while developing my software engineering skills.

</p>

<div className="projects-grid">

{projects.map((project)=>(

<div className="project-card" key={project.title}>

<div className="project-icon">

{project.icon}

</div>

<h3>

{project.title}

</h3>

<p>

{project.description}

</p>

<div className="project-tech">

{project.tech.map((item)=>(

<span key={item}>

{item}

</span>

))}

</div>

<div className="project-buttons">

<a href={project.github} target="_blank">

GitHub

</a>

<a href={project.demo}>

Live Demo

</a>

</div>

</div>

))}

</div>

</section>

  );

}

export default Projects;