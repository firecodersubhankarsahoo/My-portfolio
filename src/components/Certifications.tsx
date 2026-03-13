import "./styles/Certifications.css";

const certificationsData = [
  {
    title: "Software Engineering",
    issuer: "IIT Kharagpur",
  },
  {
    title: "Organizational Behaviour",
    issuer: "IIT Guwahati",
  },
  {
    title: "Leadership and Team Effectiveness",
    issuer: "IIT Roorkee",
  },
  {
    title: "Project-Based Learning",
    issuer: "GLA University",
  },
  {
    title: "JavaScript",
    issuer: "Infosys Springboard",
  },
  {
    title: "E-Business",
    issuer: "IIT Kharagpur",
  },
  {
    title: "Management Information System",
    issuer: "IIT Kharagpur",
  },
  {
    title: "Generative AI Professional",
    issuer: "Oracle",
  },
  {
    title: "Data Science Professional",
    issuer: "Oracle",
  },
  {
    title: "AI Foundation Associate",
    issuer: "Oracle",
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
