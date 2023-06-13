import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Card = ({ title, image }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="card" data-aos="fade-in">
      <img className="card_image" src={image} alt="website screenshot" />
      <div className="card_title">{title}</div>
    </div>
  );
};

export default Card;
