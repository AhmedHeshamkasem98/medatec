import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        {/* Logo */}
        <Link to="/" className="logo">
          Medatech
        </Link>

        {/* Navigation */}
        <nav className="nav" aria-label="Main navigation">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/courses" className="nav-link">
            Courses
          </Link>
          <Link to="/pricing" className="nav-link">
            Pricing
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

// ...existing code...
