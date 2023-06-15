import { useEffect, useRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sprite from "../sprite.svg";

import CardSlide from "../cardSlide/CardSlide";

const Card = ({ title, image, link, about, gitLink }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const goToPreviousSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="card" data-aos="fade-in">
      <Slider ref={sliderRef} {...settings} className="custom-carousel">
        <CardSlide title={title} image={image} link={link} />
        <div className="carousel_card">
          <h2>About this project...</h2>
          <p>{about}</p>
          <div className="links">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="links_project"
              >
                View project
                <i className="fa-solid fa-up-right-from-square"></i>
              </a>
            )}
            <a
              href={gitLink}
              target="_blank"
              rel="noreferrer"
              className="links_github"
            >
              View GitHub
              <i className="fa-solid fa-up-right-from-square"></i>
            </a>
          </div>
        </div>
      </Slider>
      <button
        className="custom-arrow custom-arrow-left"
        onClick={goToPreviousSlide}
      >
        <svg>
          <use xlinkHref={sprite + "#left"}></use>
        </svg>
      </button>
      <button
        className="custom-arrow custom-arrow-right"
        onClick={goToNextSlide}
      >
        <svg>
          <use xlinkHref={sprite + "#right"}></use>
        </svg>
      </button>
    </div>
  );
};

export default Card;
