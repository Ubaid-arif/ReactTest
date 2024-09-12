import React, { useEffect, useState } from "react";
import { getAllProduct } from "../../../api";

const CardSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAllProduct();
        console.log("response-->", response);
        setProducts(response);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      {products.length > 0 ? (
        products?.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid black",
              padding: "10px",
              margin: "10px",
            }}
          >
            <h3>{product.title}</h3>
            <p>
              <strong>Price:</strong> ${product.price}
            </p>
            <p>
              <strong>Category:</strong> {product.category}
            </p>
            <img src={product.image} style={{ width: "150px" }} />
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
