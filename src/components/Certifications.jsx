import './Certifications.css';

function Certifications() {

  const certificates = [

    {
      icon: "☁️",
      title: "AWS Cloud Foundations",
      provider: "Amazon Web Services",
      category: "Cloud Computing"
    },

    {
      icon: "📊",
      title: "AWS Data Engineering",
      provider: "Amazon Web Services",
      category: "Data Engineering"
    },

    {
      icon: "🛡️",
      title: "Cisco Cyber Threat Management",
      provider: "Cisco Networking Academy",
      category: "Cybersecurity"
    },

    {
      icon: "🔐",
      title: "Cisco Introduction to Cybersecurity",
      provider: "Cisco Networking Academy",
      category: "Cybersecurity"
    }

  ];

  return (

    <section className="certifications" id="certifications">

      <h2>Certifications</h2>

      <p className="cert-text">
        Professional certifications that strengthen my knowledge in cloud computing,
        cybersecurity, networking and data technologies.
      </p>

      <div className="cert-grid">

        {certificates.map((cert) => (

          <div className="cert-card" key={cert.title}>

            <div className="cert-icon">
              {cert.icon}
            </div>

            <h3>{cert.title}</h3>

            <h4>{cert.provider}</h4>

            <span>{cert.category}</span>

          </div>

        ))}

      </div>

    </section>

  );

}

export default Certifications;