import { FaLinkedinIn, FaEnvelope, FaPhoneAlt, FaGithub } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 className="footer-logo">Matthias.dev</h3>

        <div className="footer-contact">
          <p>
            <FaEnvelope />{" "}
            <a href="mailto:tuemail@gmail.com">matthiasgascmo@gmail.com</a>
          </p>
          <p>
            <FaPhoneAlt />{" "}
            <a href="tel:+59897319065">+598 97 319 065</a>
          </p>
        </div>

        <div className="footer-socials">
          <a
            href="https://www.linkedin.com/in/matthias-gasco-8070b9361/"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/Speedhyxz123"
            target="_blank"
            rel="noreferrer"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a href="mailto:matthiasgascmo@gmail.com" title="Email">
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Matthias Gasco — Desarrollador Front-End</p>
      </div>
    </footer>
  );
}
