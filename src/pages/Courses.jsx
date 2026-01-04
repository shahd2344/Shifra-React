import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import coursesData from "../data/coursesData";
import "./Courses.css"

export default function AllCoursesPage() {
  const [level, setLevel] = useState("");
  const [type, setType] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = coursesData.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesLevel =
      level === "" || course.level.toLowerCase() === level.toLowerCase();
    const matchesType =
      type === "" || course.type.toLowerCase() === type.toLowerCase();
    return matchesSearch && matchesLevel && matchesType;
  });

  return (
    <div className="layout-wrapper" style={{ backgroundColor: "#f8fafc" }}>
      <Navbar />

      <section
        className="courses-page"
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 20px" }}
      >
        {/* العناوين الرئيسية */}
        <div className="header-section" style={{ marginBottom: "40px" }}>
          <h2
            style={{
              fontSize: "32px",
              fontWeight: "700",
              color: "#1e293b",
              marginBottom: "8px",
            }}
          >
            All Courses
          </h2>
          <p style={{ color: "#64748b", fontSize: "16px" }}>
            Discover the perfect course to advance your career
          </p>
        </div>
        <div
          className="filters-container"
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          <div className="filter-group">
            <label
              style={{
                display: "block",
                fontSize: "12px",
                fontWeight: "700",
                color: "#94a3b8",
                marginBottom: "8px",
                textTransform: "uppercase",
              }}
            >
              Search
            </label>
            <input
              type="text"
              placeholder="Search courses..."
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #e2e8f0",
                outline: "none",
                backgroundColor: "#f1f5f9",
              }}
            />
          </div>

          <div className="filter-group">
            <label
              style={{
                display: "block",
                fontSize: "12px",
                fontWeight: "700",
                color: "#94a3b8",
                marginBottom: "8px",
                textTransform: "uppercase",
              }}
            >
              Level
            </label>
            <select
              onChange={(e) => setLevel(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #e2e8f0",
                outline: "none",
                backgroundColor: "#f1f5f9",
              }}
            >
              <option value="">All Levels</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>

          <div className="filter-group">
            <label
              style={{
                display: "block",
                fontSize: "12px",
                fontWeight: "700",
                color: "#94a3b8",
                marginBottom: "8px",
                textTransform: "uppercase",
              }}
            >
              Format
            </label>
            <select
              onChange={(e) => setType(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #e2e8f0",
                outline: "none",
                backgroundColor: "#f1f5f9",
              }}
            >
              <option value="">All Format</option>
              <option value="online">Online</option>
              <option value="in-person">In-person</option>
            </select>
          </div>
        </div>
        {/* //Courses grid */}
        <div
          className="courses-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
            gap: "24px",
          }}
        >
          {filteredCourses.map((course) => (
            <div
              className="course-card"
              key={course.id}
              style={{
                backgroundColor: "#fff",
                borderRadius: "16px",
                border: "1px solid #e2e8f0",
                overflow: "hidden",
              }}
            >
              <div style={{ position: "relative" }}>
                <img
                  src={course.image}
                  alt={course.title}
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <span
                  style={{
                    position: "absolute",
                    top: "12px",
                    right: "12px",
                    backgroundColor: "rgba(255,255,255,0.9)",
                    padding: "4px 8px",
                    borderRadius: "8px",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  ⭐ 4.7
                </span>
              </div>

              <div className="card-content" style={{ padding: "24px" }}>
                <h4
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "#1e293b",
                    marginBottom: "12px",
                  }}
                >
                  {course.title}
                </h4>
                <p
                  style={{
                    color: "#64748b",
                    fontSize: "14px",
                    lineHeight: "1.6",
                    marginBottom: "20px",
                    height: "45px",
                    overflow: "hidden",
                  }}
                >
                  {course.description}
                </p>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "#94a3b8",
                    fontSize: "13px",
                    marginBottom: "20px",
                  }}
                >
                  <span>{course.instructor}</span>
                  <span>{course.duration}</span>
                </div>

                <div
                  style={{ display: "flex", gap: "8px", marginBottom: "24px" }}
                >
                  <span
                    style={{
                      backgroundColor: "#f1f5f9",
                      color: "#64748b",
                      padding: "4px 12px",
                      borderRadius: "20px",
                      fontSize: "12px",
                    }}
                  >
                    {course.level}
                  </span>
                  <span
                    style={{
                      backgroundColor:
                        course.type === "Online" ? "#dcfce7" : "#dbeafe",
                      color: course.type === "Online" ? "#15803d" : "#1e40af",
                      padding: "4px 12px",
                      borderRadius: "20px",
                      fontSize: "12px",
                    }}
                  >
                    {course.type}
                  </span>
                </div>

                <div style={{ display: "flex", gap: "12px" }}>
                  <button
                    style={{
                      flex: 1,
                      padding: "12px",
                      borderRadius: "8px",
                      border: "1px solid #e2e8f0",
                      backgroundColor: "#fff",
                      fontWeight: "600",
                      cursor: "pointer",
                    }}
                  >
                    Details
                  </button>
                  <button
                    style={{
                      flex: 1,
                      padding: "12px",
                      borderRadius: "8px",
                      border: "none",
                      backgroundColor: "hsla(217, 87%, 36%, 1.00)",
                      color: "#fff",
                      fontWeight: "600",
                      cursor: "pointer",
                    }}
                  >
                    Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
