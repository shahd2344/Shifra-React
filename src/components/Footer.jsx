import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css"
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo + description */}
        <div className="footer-brand">
          <h3 className="logo">shifra</h3>
          <p>
            Empowering your learning journey with AI-driven course
            recommendations and personalized training paths.
          </p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="/">Home</a>
          <a href="/Courses">Courses</a>
          <a href="/mypath">My Path</a>
          <a href="/Contact">Contact</a>
        </div>
        <div className="footer-col social">
          <div className="footer-links">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">© 2025 Shifra. All rights reserved.</div>
    </footer>
  );
}
