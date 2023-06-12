function Hero() {
  return (
    <div className="hero">
      <div className="hero_top">
        <div className="tag">
          <div className="hero_line"></div>
          <div className="hero_hello">Hello</div>
        </div>
        <div className="hero_title">
          I'm <span>Mark Rawlins</span>
        </div>
        <div className="hero_intro">
          A freelance frontend engineer and UX / UI designer. My favourite tools
          are <span>Figma</span>, Ruby on <span>Rails</span>, and{" "}
          <span>React</span>.
        </div>
        <a
          href="mailto:mark.jeffrey.rawlins@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="hero_btn"
        >
          <p>Contact Me</p>
        </a>
      </div>
      <img
        className="hero_image"
        src="../../portfolio-photo.jpg"
        alt="Mark Rawlins' head with plain background in grey scale"
        id="skills"
      />
    </div>
  );
}

export default Hero;
