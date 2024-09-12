import React from "react";
import screemImage from "../../../assets/image/screemImage.png";
import mapImage from "../../../assets/image/mapImage.png";
import likeImage from "../../../assets/image/likeImage.png";
import graphImage from "../../../assets/image/graphImage.png";
import frame from "../../../assets/image/frame.png";
const cardData = [
  {
    image: screemImage,
    title: "Product Lab",
    description:
      "Yellow is a development company that creates its own products. It allows us to gain extensive knowledge about the product life cycle and apply it to your solution.",
  },

  {
    image: graphImage,
    title: "Product Lab",
    description:
      "Yellow is a development company that creates its own products. It allows us to gain extensive knowledge about the product life cycle and apply it to your solution.",
  },
  {
    image: mapImage,
    title: "Business Before Technology",
    description:
      "Our software developers do not just code. We put your business needs first to ensure that the future app or website will fit your requirements and bring you profit.",
  },
  {
    image: likeImage,
    title: "Security",
    description:
      "Before the start, we sign a non-disclosure agreement (NDA) with you so there is no reason to worry about your data safety.",
  },
];

const AboutSection = () => (
  <div className="aboutSectionMain">
    <p className="aboutTitle">Why Cynergy Studio</p>
    <div className="aboutCardContainer">
      {cardData.map((card, index) => (
        <div key={index} className="aboutCard">
          <img src={card.image} alt={card.title} width={57} height={57} />
          <p className="aboutCardTitle">{card.title}</p>
          <p className="aboutCardDescription">{card.description}</p>
        </div>
      ))}
    </div>
    <div className="frameBox">
      <img src={frame} alt={frame} width={"100%"} height="auto" />
    </div>
  </div>
);

export default AboutSection;
