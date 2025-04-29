import { NavLink } from "react-router-dom";

import { useSetupContext } from "../../contexts/setupContext";

function Navbar() {
  const { darkMode } = useSetupContext();

  return (
    <header className="navbar">
      <div
        className={`navbar__logo ${
          darkMode ? "lightmode__text lightmode__bg" : ""
        }`}
      >
        N
      </div>
      <nav className="navbar__links">
        <NavLink
          className={`navbar__links__to ${darkMode ? "darkmode__text" : ""}`}
          to="/"
        >
          Work
        </NavLink>
        <NavLink
          className={`navbar__links__to ${darkMode ? "darkmode__text" : ""}`}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={`navbar__links__to ${darkMode ? "darkmode__text" : ""}`}
          to="/contact"
        >
          Contact
        </NavLink>
      </nav>
      <div className="navbar__search">
        <span className="material-symbols-outlined">search</span>
      </div>
    </header>
  );
}

export default Navbar;
