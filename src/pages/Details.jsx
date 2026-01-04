import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Details.css";
export default function Details() {
  const { state: course } = useLocation();
  const navigate = useNavigate();

  
  const suggestedCourses = [
    {
      title: "Advanced React Development",
      desc: "Master modern React patterns, hooks, and state management with hands-on projects.",
      image: "2.png",
      price: 299,
    },
    {
      title: "Data Science Fundamentals",
      desc: "Learn Python, statistics, and machine learning for data-driven decision making.",
      image: "3.png",
      price: 349,
    },
    {
      title: "UX/UI Design Masterclass",
      desc: "Create intuitive user experiences with design thinking and prototyping tools.",
      image: "4.png",
      price: 249,
    },
  ];

  return (
    <>
      <Navbar />

      <section className="details-container">
        {/* ===== TOP SECTION ===== */}
        <div className="details-grid">
          {/* LEFT */}
          <div className="details-main">
            <h2>Course Details</h2>

            <img
              src={`/images/${course?.image}`}
              alt={course?.title}
              className="details-image"
            />

            <h3>{course?.title}</h3>

            <p className="course-meta">
              Sarah Johnson • ⭐ 4.9 • 8 weeks
            </p>

            <h4 className="price">${course?.price || 299}</h4>

            <h4>Course Description</h4>
            <p className="details-desc">
              {course?.desc}
            </p>
          </div>

          {/* RIGHT */}
          <div className="details-sidebar">
            <div className="schedule-card">
              <h4>Schedule</h4>
              <p className="small">Next Session</p>
              <p className="bold">
                Monday, Jan 15 • 2:00 PM - 4:00 PM
              </p>

              <button className="btn-outline full">
                Add to Calendar
              </button>

              <p className="hint">
                ⏰ Reminder will be sent 24h before course
              </p>
            </div>

            <div className="register-card">
              <h4>Registration</h4>
              <h3>${course?.price || 299}</h3>

              <button
                className="btn full"
                onClick={() => navigate("/book", { state: course })}
              >
                Register Now
              </button>
            </div>
          </div>
        </div>

        {/* ===== SUGGESTED COURSES ===== */}
        <section className="suggested-section">
          <h3>Suggested Courses</h3>

          <div className="suggested-grid">
            {suggestedCourses.map((c, i) => (
              <div className="suggested-card" key={i}>
                <img
                  src={`/images/${c.image}`}
                  alt={c.title}
                />

                <div className="suggested-info">
                  <h4>{c.title}</h4>
                  <p>{c.desc}</p>

                  <div className="actions">
                    <button
                      className="btn-outline"
                      onClick={() =>
                        navigate("/details", { state: c })
                      }
                    >
                      Details
                    </button>

                    <button
                      className="btn"
                      onClick={() =>
                        navigate("/book", { state: c })
                      }
                    >
                      Book
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>

      <Footer />
    </>
  );
}