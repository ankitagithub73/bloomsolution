import "./Navbar.css";
import logo from "../assets/logo4.webp";
import { Link } from "react-router-dom";
function Navbar() {
  return (
  <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
  <div className="container">

    {/* Logo */}
    <a className="navbar-brand fw-bold" href="/">
       <img src={logo} alt="Bloom Business Logo" className="logo-img" />
    </a>

    {/* Mobile Toggle */}
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* Menu + Button */}
    <div className="collapse navbar-collapse" id="navbarNav">

      {/* Center Menu */}
      <ul className="navbar-nav mx-auto">

        <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li>

         <li className="nav-item">
          <a className="nav-link" href="/">Legal Process Outsourcing</a>
        </li>

        <li className="nav-item dropdown">
          <a
            className="nav-link "
            href="/"
            id="financeDropdown"
            role="button"
            data-bs-toggle="dropdown"
          >
            Finance & Accounting
          </a>

          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Hire Bookkeeping Expert</a></li>
            <li><a className="dropdown-item" href="/">Hire Payroll expert</a></li>
            <li><a className="dropdown-item" href="/">HIre Tax Services</a></li>
          </ul>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/contact">Contact</a>
        </li>

      </ul>

      {/* Right Button */}
      <button className="btn btn-primary">
        Talk to us
      </button>

    </div>
  </div>
</nav>
  );
}

export default Navbar;
