import { useState, useEffect } from "react";

function Hero() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [shouldFadeIcons, setShouldFadeIcons] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 998);
    };

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShouldFadeIcons(true);
      } else {
        setShouldFadeIcons(false);
      }
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
    <div className="hero">
      <div className="hero_top">
        <div className="tag">
          <div className="hero_line"></div>
          <div className="hero_hello">Hello</div>
        </div>
        <div className="hero_title">
          I'm <span className="underline">Mark Rawlins</span>
        </div>
        <div className="hero_intro">
          A freelance frontend engineer and UX / UI designer. My favourite tools
          are <span className="underline--small">Figma,</span> Ruby on{" "}
          <span className="underline--small">Rails,</span> and{" "}
          <span className="underline--small">React</span>
        </div>
        <a
          href="mailto:mark.jeffrey.rawlins@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="hero_btn"
        >
          <p>Contact Me</p>
        </a>
        {isLargeScreen && (
          <div className={`hero_icons ${shouldFadeIcons ? "fade-out" : ""}`}>
            <i className="fa-brands fa-react"></i>
            <i className="fa-brands fa-square-js"></i>
            <i className="fa-brands fa-css3-alt"></i>
          </div>
        )}
      </div>
      {isLargeScreen ? (
        <div className="hero_image_container">
          <img
            className="hero_image"
            src="../../seriousFace.jpeg"
            alt="Mark Rawlins' head in greyscale"
            id="skills"
          />
        </div>
      ) : (
        <img
          className="hero_image"
          src="../../portfolio-photo.jpg"
          alt="Mark Rawlins' head with plain background in greyscale"
          id="skills"
        />
      )}
    </div>
  );
}

export default Hero;
