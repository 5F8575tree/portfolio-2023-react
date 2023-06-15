const CardSlide = ({ title, image, link }) => {
  return (
    <div className="card_slide">
      <div className="card_intro">
        <img className="card_image" src={image} alt="website screenshot" />
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="card_title"
          >
            {title}
            <i className="fa-solid fa-up-right-from-square"></i>
          </a>
        ) : (
          <button className="card_title disabled">{title}</button>
        )}
      </div>
    </div>
  );
};

export default CardSlide;
