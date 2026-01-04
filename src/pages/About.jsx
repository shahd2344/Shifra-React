import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./About.css"

export default function About() {
  return (
    <>
    <Navbar />
    
      <section className="about">
        <h1>About Shifra Training Center</h1>

        <div className="about-text">
          <p>
            Shifra Training Center is a leading educational institution dedicated
            to providing high-quality, accessible learning opportunities for
            professionals and students worldwide.
          </p>

          <p>
            Our mission is to empower learners with cutting-edge skills and
            knowledge through innovative teaching methods, expert instructors,
            and personalized learning paths.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="stats">
          <div className="stat-card">
            <h2>500+</h2>
            <span>COURSES</span>
          </div>

          <div className="stat-card">
            <h2>10K+</h2>
            <span>STUDENTS</span>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}