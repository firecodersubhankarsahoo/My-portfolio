import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>High School & Intermediate</h4>
                <h5>P.R.K.S.S, Purunda, West Bengal</h5>
              </div>
              <h3>2019 - 2021</h3>
            </div>
            <p>
              High School Percentage: 87% (Aug 2019). Intermediate Percentage: 79% (Aug 2021).
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science</h4>
                <h5>GLA University, Mathura, India</h5>
              </div>
              <h3>2022 - 2026</h3>
            </div>
            <p>
              GPA: 8.10/10. President of Drama Club. Project-Based Learning certified.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>W3Grads</h4>
                <h5>Internship/Training</h5>
              </div>
              <h3>June 2024</h3>
            </div>
            <p>
              Completed a rigorous 45-day intensive training program focused on competitive programming and algorithm optimization. Honed problem-solving skills and algorithm design through hands-on coding challenges in dynamic programming, graph theory, and advanced data structures.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Associate Software Engineer</h4>
                <h5>NITS Solution</h5>
              </div>
              <h3>July 2026 - Present</h3>
            </div>
            <p>
              Joined NITS Solution on 6th July 2026. Currently working as an Associate Software Engineer, developing and maintaining web applications and solutions.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;
