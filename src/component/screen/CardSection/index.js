import React, { useEffect, useState } from "react";
import { getAllProduct } from "../../../api";
import { DetailComponent } from "../../common";
import cardimage1 from "../../../assets/image/card1.png";
import cardimage2 from "../../../assets/image/card2.png";
import cardimage3 from "../../../assets/image/card3.png";

const cardData = [
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
    <img src={image} width="330px" height="92.41px" alt={title} />
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
        console.log(response)
        setProducts(response);
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
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>

      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="productCard">
            <h3>{product.title}</h3>
            <p>
              <strong>Price:</strong> ${product.price}
            </p>
            <p>
              <strong>Category:</strong> {product.category}
            </p>
            <img src={product.image} alt={product.title} width="150px" />
            <p>
              <strong>Rating:</strong> {product.rating.rate} (
              {product.rating.count} reviews)
            </p>
          </div>
        ))
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};

export default CardSection;
