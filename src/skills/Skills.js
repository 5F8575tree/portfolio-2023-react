import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Skills() {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  return (
    <div className="skills">
      <div className="skills_title">Skills & Influences</div>
      <div className="skills_box">
        <div className="skills_box_top">
          <img
            src="../../prog-portfolio.png"
            alt="computer programming icon"
            className="skills_icon"
            data-aos="fade-in"
          />
          <h2
            className="skills_box_title"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            Programming
          </h2>
        </div>
        <div className="skills_line"></div>
        <div
          className="skills_box_bottom"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <p>Ruby, Rails, JavaScript, TypeScript, React, HTML/CSS</p>
        </div>
        <div className="skills_line"></div>
        <div className="skills_box_top">
          <img
            src="../../design-icon-portfolio.png"
            alt="design icon"
            className="skills_icon"
            data-aos="fade-in"
          />
          <h2
            className="skills_box_title"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            Design
          </h2>
        </div>
        <div className="skills_line"></div>
        <div
          className="skills_box_bottom"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <p>Figma, Slack, Github, Microsoft Suite, Adobe</p>
        </div>
        <div className="skills_line"></div>
        <div className="skills_box_top">
          <img
            src="../../influences-icon-portfolio.png"
            alt="influences icon"
            className="skills_icon"
            data-aos="fade-in"
          />
          <h2
            className="skills_box_title"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            Influences
          </h2>
        </div>
        <div className="skills_line"></div>
        <div
          className="skills_box_bottom"
          data-aos="fade-up"
          data-aos-delay="600"
          id="portfolio"
        >
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
