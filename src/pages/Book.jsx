import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Book.css"
export default function Book() {
  const { state: course } = useLocation();

  return (
    <>
      <Navbar />

      <section className="registration-container">
        {/* ===== LEFT SIDE ===== */}
        <div className="form-wrapper">
          <h2>Registration</h2>

          {/* Personal Info */}
          <section className="form-section">
            <h3>Personal Info</h3>

            <div className="input-group">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your full name" />
            </div>

            <div className="input-group">
              <label>Email Address</label>
              <input type="email" placeholder="Enter your email" />
            </div>
          </section>

          {/* Payment Method */}
          <section className="form-section">
            <h3>Payment Method</h3>

            <div className="payment-option">
              <label className="payment-label">
                <input type="radio" name="payment" defaultChecked />
                <img
                  src="/images/credit.png"
                  alt="Credit Card"
                  className="payment-icon"
                />
                Credit / Debit Card
              </label>
            </div>

            <div className="payment-option">
              <label className="payment-label">
                <input type="radio" name="payment" />
                <img
                  src="/images/paypal.png"
                  alt="PayPal"
                  className="payment-icon"
                />
                PayPal
              </label>
            </div>
          </section>

          {/* Preferences */}
          <section className="form-section">
            <h3>Preferences</h3>

            <div className="preference-option">
              <div>
                <strong>Add to Calendar</strong>
                <p style={{ fontSize: "0.8rem", color: "#777" }}>
                  Automatically add sessions to your calendar
                </p>
              </div>
              <div className="switch"></div>
            </div>

            <div className="preference-option">
              <div>
                <strong>Smart Reminders</strong>
                <p style={{ fontSize: "0.8rem", color: "#777" }}>
                  Get notifications 24h before sessions
                </p>
              </div>
              <div className="switch"></div>
            </div>
          </section>

          {/* Confirmation */}
          <section className="form-section">
            <h3>Confirmation</h3>
            <button className="confirm-btn">Confirm Registration</button>
          </section>
        </div>

        {/* ===== RIGHT SIDE ===== */}
        <div className="sidebar">
          <div className="course-card">
            <img
              src={`/images/${course?.image}`}
              alt={course?.title}
              className="course-image"
            />

            <div className="course-info">
              <h4>{course?.title}</h4>
              <p>{course?.desc}</p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "15px",
                  fontSize: "0.8rem",
                  color: "#555",
                }}
              >
                <span>Dr. Michael Chen</span>
                <span>8 weeks</span>
              </div>
            </div>
          </div>

          <div className="total-section">
            <span>Total:</span>
            <span>$249</span>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
