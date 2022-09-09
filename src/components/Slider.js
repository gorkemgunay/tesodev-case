import SliderCard from "./SliderCard";

const sliderData = [
  {
    image: "./assets/images/slider-image.png",
    title: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",
    date: "1h ago",
    author: "Troy Corlson",
  },
  {
    image: "./assets/images/slider-image.png",
    title: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",
    date: "1h ago",
    author: "Troy Corlson",
  },
  {
    image: "./assets/images/slider-image.png",
    title: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",
    date: "1h ago",
    author: "Troy Corlson",
  },
  // {
  //   image: "./assets/images/slider-image.png",
  //   title: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",
  //   date: "1h ago",
  //   author: "Troy Corlson",
  // },
];

function Slider() {
  return (
    <div className="slider">
      <button className="slider__button">
        <img src="./assets/icons/left-arrow.svg" alt="left-arrow" />
      </button>
      <div className="slider__cards">
        {sliderData.map((slider, index) => (
          <SliderCard
            key={index}
            image={slider.image}
            title={slider.title}
            date={slider.date}
            author={slider.author}
          />
        ))}
      </div>
      <button className="slider__button">
        <img src="./assets/icons/right-arrow.svg" alt="right-arrow" />
      </button>
    </div>
  );
}

export default Slider;
