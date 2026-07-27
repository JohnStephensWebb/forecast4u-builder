import { CloudSun } from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <CloudSun size={32} />
        <span>Forecast4U</span>
      </div>

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/weather/80202">Demo</a>
      </div>
    </nav>
  );
}

export default Navbar;