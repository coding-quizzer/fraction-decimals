import { useState, useEffect } from "react";
import "./Carousel.scss";

type CarouselProps = {
  children: React.ReactNode[];
  show?: number;
  width?: string | number;
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

  useEffect(() => setLength(children.length), [children]);

  return (
    <div className="carousel-container" style={{ width: props.width }}>
      <div className="carousel-wrapper">
        {currentIndex > 0 && (
          <button
            className="left-arrow"
            onClick={prev}
            style={{ left: "-17.5px" }}
          >
            &lt;
          </button>
        )}
        <div className="carousel-content-wrapper">
          <div
            className="carousel-content"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              width: props.width,
            }}
          >
            {children}
          </div>
        </div>
        {currentIndex < length - 1 && (
          <button
            className="right-arrow"
            onClick={next}
            style={{ right: "-17.5px" }}
          >
            &gt;
          </button>
        )}
      </div>
    </div>
  );
};

export default Carousel;
