import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Contact.css"
export default function Contact() {
  return (
    <>
      <Navbar />

      <section className="contact-page">
        <h2 className="contact-title">Contact Form</h2>

        {/* Contact Form */}
        <form className="contact-form">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="How can we help you?" />
          </div>

          <button className="btn-primary-dark">Send Message</button>
        </form>

        {/* Location */}
        <h3 className="section-title">Location</h3>

        <div className="map-container">
          <img src="/images/location.png "></img>
        </div>

        <div className="address-box">
          <h4>Visit Our Campus</h4>
          <p>Palstine , Gaza City</p>
        </div>

        {/* Social Links */}
        <h3 className="section-title">Social Links</h3>

        <div className="social-links">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
        </div>
      </section>

      <Footer />
    </>
  );
}
