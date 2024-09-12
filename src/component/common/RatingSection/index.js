import React, { useRef } from "react";
import CountUp from "react-countup";

const RatingSection = () => {
  const sliderData = [
    { number: 20000, title: "Million users of app we made" }, // Using numeric values
    { number: 1250, title: "Raised by our startup clients (in millions)" },
    { number: 3050, title: "Finished Projects" },
    { number: 9540, title: "Of Clients Approval Initial Design" },
    { number: 9440, title: "Initial design" },
    { number: 20000, title: "Million users of app we made" },
  ];

  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -200, 
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  };

  return (
    <div className="ratingMainContainer">
      <div className="textContainer">
        <p>Bespoke Software For Your Growth</p>
      </div>

      <div className="sliderWrapper">
        <button className="scrollButton left" onClick={scrollLeft}>
          {"<"}
        </button>
        <div className="sliderContainer" ref={sliderRef}>
          {sliderData.map((data, index) => (
            <div key={index} className="sliderItem">
              <h2>
                <CountUp
                  start={0}
                  end={data.number}
                  duration={2} // Duration of the animation in seconds
                  separator=","
                />
              </h2>
              <p>{data.title}</p>
            </div>
          ))}
        </div>
        <button className="scrollButton right" onClick={scrollRight}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default RatingSection;
