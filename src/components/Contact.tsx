import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:subhankarsau51@gmail.com" data-cursor="disable">
                subhankarsau51@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>B.Tech in Computer Science from GLA University, Mathura</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://leetcode.com/u/phoenix_ss/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              LeetCode <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/subhankar-sahoo-31051324a/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://www.codechef.com/users/subhankar_co1"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              CodeChef <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/sahoo_subhankar_.5851127/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Subhankar Sau</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
