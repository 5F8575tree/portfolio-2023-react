import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header">
      <div className="logo">MJR</div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
      </div>
      <ul className={`mainMenu ${isMenuOpen ? "open" : ""}`}>
        <li>
          <a href="#">Top</a>
        </li>
        <li>
          <a href="#">Skills</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Contact</a>
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
