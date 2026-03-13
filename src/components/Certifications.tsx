import "./styles/Certifications.css";

const certificationsData = [
  {
    title: "Software Engineering",
    issuer: "IIT Kharagpur",
    link: "",
  },
  {
    title: "Organizational Behaviour",
    issuer: "IIT Guwahati",
    link: "",
  },
  {
    title: "Leadership and Team Effectiveness",
    issuer: "IIT Roorkee",
    link: "",
  },
  {
    title: "Project-Based Learning",
    issuer: "GLA University",
    link: "",
  },
  {
    title: "JavaScript",
    issuer: "Infosys Springboard",
    link: "",
  },
  {
    title: "E-Business",
    issuer: "IIT Kharagpur",
    link: "",
  },
  {
    title: "Management Information System",
    issuer: "IIT Kharagpur",
    link: "",
  },
  {
    title: "Generative AI Professional",
    issuer: "Oracle",
    link: "",
  },
  {
    title: "Data Science Professional",
    issuer: "Oracle",
    link: "",
  },
  {
    title: "AI Foundation Associate",
    issuer: "Oracle",
    link: "",
  },
];

const Certifications = () => {
  return (
    <div className="certifications-section section-container" id="certifications">
      <div className="certifications-container">
        <h2>
          My <span>Certifications</span>
        </h2>
        
        <div className="cert-grid">
          {certificationsData.map((cert, index) => (
            <div className="cert-card" key={index}>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              {cert.link && (
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link" data-cursor="disable">
                  View Certificate →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
