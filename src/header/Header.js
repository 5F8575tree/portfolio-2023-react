import { useState, useEffect } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 998);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    handleResize(); // Initial check

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`header ${isLargeScreen && "large-screen"} ${
        isScrolled && "scrolled"
      }`}
    >
      <div className="logo">MJR</div>
      {!isLargeScreen && (
        <div className="menu-toggle" onClick={toggleMenu}>
          <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
        </div>
      )}
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
        {!isLargeScreen && (
          <div className="closeMenu" onClick={toggleMenu}>
            <i className="fas fa-times"></i>
          </div>
        )}
        {isLargeScreen && (
          <span className="icons">
            <a
              href="https://www.linkedin.com/in/markjrawlins/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/5F8575tree"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://twitter.com/5F8575tree"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </span>
        )}
      </ul>
    </div>
  );
}

export default Header;
