import { CloudSun } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        <CloudSun size={32} />
        <span>Forecast4U</span>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/weather/80202">Demo Forecast</Link>
      </div>
    </nav>
  );
}

export default Navbar;