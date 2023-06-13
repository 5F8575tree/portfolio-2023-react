import React, { useEffect, useRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sprite from "../sprite.svg";

const CardSlide = ({ title, image }) => {
  return (
    <div className="card_slide">
      <div className="card_intro">
        <img className="card_image" src={image} alt="website screenshot" />
        <div className="card_title">
          {title}
          <i class="fa-solid fa-up-right-from-square"></i>
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, image }) => {
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
        <CardSlide title={title} image={image} />
        <div className="carousel_card" style={{ backgroundColor: "blue" }}>
          Blue Card
        </div>
        <div className="carousel_card" style={{ backgroundColor: "red" }}>
          Red Card
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
