import React, { useEffect, useRef } from "react";

function Skills() {
  const iconsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    iconsRef.current.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="skills">
      <div className="skills_title">Skills & Influences</div>
      <div className="skills_box">
        <div
          className="skills_box_prog--top hidden"
          ref={(el) => (iconsRef.current[0] = el)}
        >
          <img
            src="../../prog-portfolio.png"
            alt="computer programming icon"
            className="skills_icon"
          />
          <h2 className="skills_box_title">Programming</h2>
        </div>
        <div className="skills_line"></div>
        <div className="skills_box_prog--bottom">
          <p>Ruby, Rails, JavaScript, TypeScript, React, HTML/CSS</p>
        </div>
        <div className="skills_line"></div>
        <div
          className="skills_box_design--top hidden"
          ref={(el) => (iconsRef.current[1] = el)}
        >
          <img
            src="../../design-icon-portfolio.png"
            alt="design icon"
            className="skills_icon"
          />
          <h2 className="skills_box_title">Design</h2>
        </div>
        <div className="skills_line"></div>
        <div className="skills_box_design--bottom">
          <p>Figma, Slack, Github, Microsoft Suite, Adobe</p>
        </div>
        <div className="skills_line"></div>
        <div
          className="skills_box_influences--top hidden"
          ref={(el) => (iconsRef.current[2] = el)}
        >
          <img
            src="../../influences-icon-portfolio.png"
            alt="influences icon"
            className="skills_icon"
          />
          <h2 className="skills_box_title">Influences</h2>
        </div>
        <div className="skills_line"></div>
        <div className="skills_box_influences--bottom" id="portfolio">
          <p>
            Superflat art, Gustav Klimt, Van Gogh, Tolstoy, Dickens, trees,
            rain, Apple, Barbour, Chopin, Satie, vegetables
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
