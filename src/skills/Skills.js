import React, { useEffect, useRef } from "react";

function Skills() {
  const iconObserver = useRef(null);
  const textObserver = useRef(null);

  useEffect(() => {
    iconObserver.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          iconObserver.current.unobserve(entry.target);
        }
      });
    });

    const hiddenIcons = document.querySelectorAll(".hiddenIcon");
    hiddenIcons.forEach((el) => iconObserver.current.observe(el));

    return () => {
      iconObserver.current.disconnect();
    };
  }, []);

  useEffect(() => {
    textObserver.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("showText");
          textObserver.current.unobserve(entry.target);
        }
      });
    });

    const hiddenTexts = document.querySelectorAll(".hiddenText");
    hiddenTexts.forEach((el) => textObserver.current.observe(el));

    return () => {
      textObserver.current.disconnect();
    };
  }, []);

  return (
    <div className="skills">
      <div className="skills_title">Skills & Influences</div>
      <div className="skills_box">
        <div className="skills_box_prog--top">
          <img
            src="../../prog-portfolio.png"
            alt="computer programming icon"
            className="skills_icon hiddenIcon"
          />
          <h2 className="skills_box_title hiddenText">Programming</h2>
        </div>
        <div className="skills_line"></div>
        <div className="skills_box_prog--bottom">
          <p>Ruby, Rails, JavaScript, TypeScript, React, HTML/CSS</p>
        </div>
        <div className="skills_line"></div>
        <div className="skills_box_design--top">
          <img
            src="../../design-icon-portfolio.png"
            alt="design icon"
            className="skills_icon hiddenIcon"
          />
          <h2 className="skills_box_title hiddenText">Design</h2>
        </div>
        <div className="skills_line"></div>
        <div className="skills_box_design--bottom">
          <p>Figma, Slack, Github, Microsoft Suite, Adobe</p>
        </div>
        <div className="skills_line"></div>
        <div className="skills_box_influences--top">
          <img
            src="../../influences-icon-portfolio.png"
            alt="influences icon"
            className="skills_icon hiddenIcon"
          />
          <h2 className="skills_box_title hiddenText">Influences</h2>
        </div>
        <div className="skills_line"></div>
        <div className="skills_box_influences--bottom">
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
