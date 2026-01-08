import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({ setQuery }) {
  const navigate = useNavigate(); // for programmatic navigation

  const handleSignupClick = () => {
    navigate("/signup"); // navigate to signup page
  };

  const handleLoginClick = () => {
    navigate("/login"); // navigate to login page
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="logo">Streamio</Link>
      </div>

      <div className="nav-center">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Find Movies & TV"
          className="search-input"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="nav-right">
        <Link to="/movies">Free Movies & TV</Link>
        <Link to="/live-tv">Live TV</Link>
        <Link to="/download">Download</Link>

        {/* Sign In button */}
        <button className="signin-btn" onClick={handleLoginClick}>
          Sign In
        </button>

        {/* Sign Up button */}
        <button className="signup-btn" onClick={handleSignupClick}>
          Sign Up Free
        </button>
      </div>
    </nav>
  );
}
