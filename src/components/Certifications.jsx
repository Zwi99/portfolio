import './Certifications.css';
import {
  FaAws,
  FaShieldAlt,
  FaCheckCircle,
  FaArrowRight
} from 'react-icons/fa';

function Certifications() {
  const certificates = [
    {
      icon: <FaAws />,
      title: 'AWS Cloud Foundations',
      provider: 'Amazon Web Services',
      category: 'Cloud Computing',
      code: 'AWS • CLOUD'
    },
    {
      icon: <FaAws />,
      title: 'AWS Data Engineering',
      provider: 'Amazon Web Services',
      category: 'Data Engineering',
      code: 'AWS • DATA'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Cyber Threat Management',
      provider: 'Cisco Networking Academy',
      category: 'Cybersecurity',
      code: 'CISCO • SECURITY'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Introduction to Cybersecurity',
      provider: 'Cisco Networking Academy',
      category: 'Cybersecurity',
      code: 'CISCO • SECURITY'
    }
  ];

  return (
    <section className="certifications" id="certifications">

      <div className="cert-container">

        {/* HEADER */}

        <div className="cert-heading">

          <div className="cert-label">
            <span></span>
            PROFESSIONAL DEVELOPMENT
          </div>

          <h2>
            Certifications &
            <span> continuous learning.</span>
          </h2>

          <p>
            Selected certifications supporting my development across
            cloud computing, data engineering and cybersecurity.
          </p>

        </div>


        {/* CERTIFICATIONS */}

        <div className="cert-grid">

          {certificates.map((cert, index) => (

            <article
              className="cert-card"
              key={cert.title}
            >

              <div className="cert-top">

                <div className="cert-icon">
                  {cert.icon}
                </div>

                <span className="cert-number">
                  0{index + 1}
                </span>

              </div>


              <div className="cert-content">

                <span className="cert-code">
                  {cert.code}
                </span>

                <h3>
                  {cert.title}
                </h3>

                <p className="cert-provider">
                  {cert.provider}
                </p>

              </div>


              <div className="cert-bottom">

                <span className="cert-category">
                  {cert.category}
                </span>

                <FaCheckCircle className="cert-check" />

              </div>

            </article>

          ))}

        </div>


        {/* FOOTER */}

        <div className="cert-footer">

          <FaCheckCircle />

          <span>
            Building practical knowledge through continuous learning
          </span>

          <FaArrowRight />

        </div>

      </div>

    </section>
  );
}

export default Certifications;