import "./QuickAccess.css"
export default function QuickAccess() {
  return (
    <section className="section light">
      <div className="container">
        <h2>Quick Access</h2>
        <p className="subtitle">Jump right into your learning journey</p>

        <div className="quick">
          {/* كرت 1 */}
          <div className="quick-card">
            <div className="icon-container">
              <img src="/images/5.png" alt="Courses" className="small-icon" />
            </div>
            <h4>Browse All Courses</h4>
            <p>Explore our complete catalog of training programs</p>
          </div>

          {/* كرت 2 */}
          <div className="quick-card">
            <div className="icon-container dark">
              <img src="/images/6.png" alt="My Path" className="small-icon" />
            </div>
            <h4>My Path</h4>
            <p>Track your progress and continue learning</p>
          </div>

          {/* كرت 3 */}
          <div className="quick-card">
            <div className="icon-container">
              <img src="/images/7.png" alt="Calendar" className="small-icon" />
            </div>
            <h4>Calendar</h4>
            <p>View upcoming sessions and events</p>
          </div>
        </div>
      </div>
    </section>
  );
}