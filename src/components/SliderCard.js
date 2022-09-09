function SliderCard({ image, title, date, author }) {
  return (
    <div className="slider-card">
      <img src={image} alt="slider-image" />
      <h4>{title}</h4>
      <div className="slider-card__footer">
        <small>{date}</small>
        <span />
        <small>by {author}</small>
      </div>
    </div>
  );
}

export default SliderCard;
