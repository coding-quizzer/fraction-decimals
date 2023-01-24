import { useState } from "react";

type CarouselProps = {
  children: React.ReactNode[];
  show?: number;
};
const Carousel = (props: CarouselProps) => {
  const { children, show } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);
  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };
  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div className="carousel-content-wrapper">
          <div className="carousel-content-show">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
