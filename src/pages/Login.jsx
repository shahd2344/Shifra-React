import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Login.css"
export default function Login() {
  return (
    <>
      <Navbar />

      {/* Login Form */}
      <main className="login-content">
        <h1>Welcome Back</h1>
        <p className="subtitle">Sign in to your account to continue learning</p>

        <form className="login-form">
          <div className="input-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>

          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="forgot-password">
              Forgot your password?
            </a>
          </div>

          <button type="submit" className="btn-primary-login">
            Login
          </button>

          <div className="divider">
            <span>Or continue with</span>
          </div>

          <div className="social-login">
            <button type="button" className="btn-social">
              <img
                        src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"

                alt="Google"
                style={{ width: "18px", height: "18px" }}
              />
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
            Don't have an account? <a href="#">Sign up here</a>
          </p>
        </form>
      </main>
      <Footer />
    </>
  );
}
