import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="header">
      <div className="logo">MJR</div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
      </div>
      <ul className={`mainMenu ${isMenuOpen ? "open" : ""}`}>
        <li>
          <a href="#top" onClick={closeMenu}>
            Top
          </a>
        </li>
        <li>
          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>
        </li>
        <li>
          <a href="#portfolio" onClick={closeMenu}>
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </li>
        <div className="closeMenu" onClick={toggleMenu}>
          <i className="fas fa-times"></i>
        </div>
        <span className="icons">
          <i className="fab fa-twitter"></i>
          <i className="fab fa-github"></i>
          <i className="fab fa-linkedin"></i>
        </span>
      </ul>
    </div>
  );
}

export default Header;
