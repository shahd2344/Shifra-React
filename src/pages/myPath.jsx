import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./myPath.css"

/* AI Suggestion Component */
const AISuggestion = () => {
  return (
    <div className="ai-suggestion-container">
      <div className="ai-suggestion-content">
        <div className="ai-header">
          <div className="ai-icon-wrapper">
            <img
              src="/images/ai.png"
              alt="AI Assistant"
              className="ai-icon-img"
            />
          </div>
          <h4>AI Suggestion</h4>
        </div>

        <p className="ai-description">
          Based on your progress in React development, consider taking a UI/UX
          Design course next to complement your technical skills. This will help
          you create more user-friendly and visually appealing applications.
        </p>

        <button className="btn btn-primary-dark">
          View Recommended Course
        </button>
      </div>
    </div>
  );
};


export default function MyPath() {
  const learningSteps = [
    {
      id: 1,
      title: "React Fundamentals",
      duration: "2 weeks",
      status: "Completed",
    },
    {
      id: 2,
      title: "Advanced React Development",
      duration: "8 weeks",
      status: "In Progress",
    },
    {
      id: 3,
      title: "Portfolio Project",
      duration: "3 weeks",
      status: "Locked",
    },
    {
      id: 4,
      title: "UI/UX Design Principles",
      duration: "6 weeks",
      status: "Locked",
    },
  ];

  return (
    <>
      <Navbar />

      <section className="mypath-page">
        <h2 className="page-title">My Learning Path</h2>
        <p className="page-subtitle">
          Personalized roadmap designed by AI to achieve your goals
        </p>

        {/* AI Banner */}
        <div className="ai-banner">
          <div className="ai-icon-wrapper">
            <img
              src="/images/ai.png"
              alt="AI Assistant"
              className="ai-icon-img"
            />
          </div>

          <div className="ai-banner-text">
            <h4>Your AI Learning Assistant</h4>
            <p>
              Personalized path based on your goals and learning preferences.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="stats-grid">
          <div className="stat-card">
            <span className="stat-value">4</span>
            <span className="stat-label">Courses</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">12</span>
            <span className="stat-label">Weeks</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">35%</span>
            <span className="stat-label">Progress</span>
          </div>
        </div>

        {/* Progress */}
        <div className="progress-box">
          <div className="progress-header">
            <span>Overall Progress</span>
            <span className="progress-percent">35%</span>
          </div>

          <div className="progress-bar">
            <div className="progress-fill" style={{ width: "35%" }}></div>
          </div>

          <p className="next-step">
            <strong>Next milestone:</strong> Complete React hooks section
          </p>
        </div>

        {/* Timeline */}
        <div className="timeline-list">
          {learningSteps.map((step) => (
            <div className="timeline-item" key={step.id}>
              <div className="timeline-left">
                <span
                  className={`timeline-icon ${
                    step.status === "Completed" ? "done" : ""
                  }`}
                >
                  {step.status === "Completed" ? "✓" : "•"}
                </span>

                <div>
                  <h5>{step.title}</h5>
                  <span>{step.duration} • Course</span>
                </div>
              </div>

              <button
                className={step.status === "Completed" ? "btn-outline" : "btn"}
              >
                {step.status === "Completed" ? "Review" : "Continue"}
              </button>
            </div>
          ))}
        </div>
      </section>

      <AISuggestion />

      <Footer />
    </>
  );
}
