import React from "react";
import avartar1 from "../../../assets/image/avatar1.png";
import avartar2 from "../../../assets/image/avatar2.png";
import avartar3 from "../../../assets/image/avatar3.png";

const TechInsight = () => {
  const cards = [
    {
      img: avartar1,
      date: "28/aug/2024",
      title: "How To Develop an App For Apple Vision Pro",
      description:
        "Yellow is a development company that creates its own products. It allows us to gain extensive knowledge about the product life cycle and apply it to your solution.",
      tag: "#softwaredevelopment",
    },
    {
      img: avartar2,
      date: "29/aug/2024",
      title: "AI Technology In Education Industry: Detailed Article",
      description:
        "Yellow is a development company that creates its own products. It allows us to gain extensive knowledge about the product life cycle and apply it to your solution.",
      tag: "#softwaredevelopment",
    },
    {
      img: avartar3,
      date: "30/aug/2024",
      title: "How to Integrate ChatGPT into Your Existing Software",
      description:
        "Yellow is a development company that creates its own products. It allows us to gain extensive knowledge about the product life cycle and apply it to your solution.",
      tag: "#softwaredevelopment",
    },
  ];

  return (
    <div className="techInsightMainContainer">
      <p className="title" >Recent News & Tech Insights</p>
      <div className="cardBox">
        {cards.map((card, index) => (
          <div className="techcard" key={index}>
            <img src={card.img} alt="Logo" width={481} height={331} />
            <p>Date: {card.date}</p>
            <p>{card.title}</p>
            <p>{card.description}</p>
            <div className="button">{card.tag}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechInsight;
