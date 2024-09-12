import React, { useRef } from "react";

const RatingSection = () => {
  const sliderData = [
    { number: "20+", title: "Million users of app we made" },
    { number: "$1.20", title: "Raised by our startup clients" },
    { number: "300", title: "Finished Projects" },
    { number: "90%", title: "Of Clients Approval Initial Design" },
    { number: "90%", title: "Initial design" },
    { number: "20+", title: "Million users of app we made" },
  ];

  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -200, // Adjust the value to control how much you want to scroll
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
              <h2>{data.number}</h2>
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
