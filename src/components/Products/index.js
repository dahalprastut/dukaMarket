import React, { useState } from "react";
import Card from "./Card";
import "./products.css";
import data from "./../../utils/staticData";

export default function Products({
  cartData,
  handleAddToCart,
}) {
  return (
    <div className="products">
      <div className="center">
        <h2>Our Products</h2>
        <div className="products-list">
          {data?.map(el => {
            return (
              <Card
                data={el}
                cartData={cartData}
                handleAddToCart={handleAddToCart}
                key={Math.random()}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
