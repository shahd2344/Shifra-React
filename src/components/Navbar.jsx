import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="navbar">
      <div className="logo">shifra</div>

      <div className="nav-left">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Courses">Courses</Link>
          <Link to="/myPath">My Path</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
        </nav>
      </div>

      <div className="nav-right">
        <button className="btn-outline" onClick={() => navigate("/login")}>
          Login
        </button>
        <button className="btn" onClick={() => navigate("/signup")}>
          Sign Up
        </button>
      </div>
    </header>
  );
}