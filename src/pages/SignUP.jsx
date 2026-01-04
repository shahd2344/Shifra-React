import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import"./SignUp.css"
{
  /* Register  */
}

export default function SignUp() {
  return (
    <>
      <Navbar />
      <section className="register-content">
        <h1>Create Account</h1>
        <p className="subtitle">Join Shifra and start your learning journey</p>

        <form className="register-form">
          <div className="name-row">
            <div className="input-group">
              <label>First Name</label>
              <input type="text" placeholder="First Name" />
            </div>
            <div className="input-group">
              <label>Last Name</label>
              <input type="text" placeholder="Last Name" />
            </div>
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm your password" />
          </div>

          <div className="terms-option">
            <label>
              <input type="checkbox" /> I agree to the{" "}
              <a href="#">Terms and Privacy Policy</a>
            </label>
          </div>

          <button type="submit" className="btn-primary-sign">
            Sign In
          </button>

          <div className="divider">
            <span>Or sign up with</span>
          </div>

          <div className="social-login">
            <button type="button" className="btn-social">
              <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                alt="G"
              />{" "}
              Google
            </button>
            <button type="button" className="btn-social">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
                alt="F"
              />{" "}
              Facebook
            </button>
          </div>

          <p className="footer-link">
            Already have an account? <a href="#">Sign in here</a>
          </p>
        </form>
      </section>
      <Footer />
    </>
  );
}
