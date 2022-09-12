import SliderCard from "./SliderCard";
import Button from "./Button";
import { useRef } from "react";

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
];

function Slider() {
  const sliderRef = useRef();

  const previousSlide = () => {
    if (sliderRef.current.scrollLeft === 0) {
      sliderRef.current.scrollLeft = (sliderData.length - 3) * 351;
    } else {
      sliderRef.current.scrollLeft = sliderRef.current.scrollLeft - 351;
    }
  };

  const nextSlide = () => {
    if (sliderRef.current.scrollLeft === (sliderData.length - 3) * 351) {
      sliderRef.current.scrollLeft = 0;
    } else {
      sliderRef.current.scrollLeft = sliderRef.current.scrollLeft + 351;
    }
  };

  return (
    <div className="slider">
      <Button className="slider__button" onClick={previousSlide}>
        <img src="./assets/icons/left-arrow.svg" alt="left-arrow" />
      </Button>
      <div className="slider__cards" ref={sliderRef}>
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
      <Button className="slider__button" onClick={nextSlide}>
        <img src="./assets/icons/right-arrow.svg" alt="right-arrow" />
      </Button>
    </div>
  );
}

export default Slider;
