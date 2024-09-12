import React, { useEffect, useState } from "react";
import { getAllProduct } from "../../../api";
import { DetailComponent } from "../../common";
import cardimage1 from "../../../assets/image/card1.png";
import cardimage2 from "../../../assets/image/card2.png";
import cardimage3 from "../../../assets/image/card3.png";

const staticCardData = [
  {
    image: cardimage3,
    title: "Mobile App Development",
    description:
      "After digesting your idea/project, our professional mobile app designers will build out a beautiful Wireframe & Clickable Prototype to bring your project to life with color and brand.",
    time: "2 weeks",
    cost: "$5,000",
  },
  {
    image: cardimage1,
    title: "Artificial Intelligence",
    description:
      "Our team will build out a beautiful Wireframe & Clickable Prototype to bring your project to life with color and brand.",
    time: "2 weeks",
    cost: "$5,000",
  },
  {
    image: cardimage2,
    title: "Android Development",
    description:
      "After digesting your idea/project, our professional mobile app designers will build out a beautiful Wireframe & Clickable Prototype to bring your project to life with color and brand.",
    time: "2 weeks",
    cost: "$5,000",
  },
];

const Card = ({ image, title, description, time, cost }) => (
  <div className="cardMainContainer">
    <img className="cardImage" src={image} alt={title} />
    <p>{title}</p>
    <p>{description}</p>
    <p>Average Time: {time}</p>
    <p>Average Cost: {cost}</p>
  </div>
);

const CardSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAllProduct();
        setProducts(response.slice(0, 3));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="cardSectionMain">
      <DetailComponent />
      <div className="mainBox">
        {staticCardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>

      <div className="mainBox">
        {products.map((product) => (
          <Card
            key={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            time={`${Math.round(product.rating.rate)} days`}
            cost={`$${product.price.toFixed(2)}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CardSection;
