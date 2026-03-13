import "./styles/Certifications.css";

const certificationsData = [
  {
    title: "Software Engineering",
    issuer: "IIT Kharagpur",
    link: "https://drive.google.com/file/d/1C5qROWuGg04e0tiz6XxE7uhZ1pIoxz90/view?usp=sharing",
  },
  {
    title: "Organizational Behaviour",
    issuer: "IIT Guwahati",
    link: "https://drive.google.com/file/d/1sk214Q1ErhxWopk0SwuahFNrgb-uxOFk/view",
  },
  {
    title: "Leadership and Team Effectiveness",
    issuer: "IIT Roorkee",
    link: "https://drive.google.com/file/d/1OAL_uzz0q97MdDxcbsq7gTH-DLnpkPtj/view?usp=sharing",
  },
  {
    title: "Project-Based Learning",
    issuer: "GLA University",
    link: "https://drive.google.com/file/d/1NVRpE3888Co0zmXy9S4nWF52zhLkFDe5/view",
  },
  {
    title: "JavaScript",
    issuer: "Infosys Springboard",
    link: "https://drive.google.com/file/d/1XODfA7PpvjLYC4qKGLwiAL4l3shLbKfJ/view",
  },
  {
    title: "E-Business",
    issuer: "IIT Kharagpur",
    link: "https://drive.google.com/file/d/1EHcM3HZKLd8YE-VuSmTW7SGYYhJkheq-/view",
  },
  {
    title: "Management Information System",
    issuer: "IIT Kharagpur",
    link: "https://drive.google.com/file/d/1K6aFgHk8HdsYVHf8r_gOk5r_SD-5j3N9/view",
  },
  {
    title: "Generative AI Professional",
    issuer: "Oracle",
    link: "https://drive.google.com/file/d/1H4uj_x9OmxhAcGeATZAc0RAOR-qpfwTQ/view",
  },
  {
    title: "Data Science Professional",
    issuer: "Oracle",
    link: "https://drive.google.com/file/d/1HewmCnQQNVCZiFQcxgo8DyhR5Q9Yhp99/view",
  },
  {
    title: "AI Foundation Associate",
    issuer: "Oracle",
    link: "https://drive.google.com/file/d/1QF2Sdqcef6Xo2TnpHUbxh6zf3m55bY81/view",
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
