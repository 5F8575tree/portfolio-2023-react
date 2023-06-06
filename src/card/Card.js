const Card = ({ title, image }) => {
  return (
    <div className="card">
      <img className="card_image" src={image} alt="website screenshot" />
      <div className="card_title">{title}</div>
    </div>
  );
};

export default Card;
