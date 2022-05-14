import React from "react";
import Banner from "../components/Banner/Banner";
import Products from "../components/Products";

export default function Home({
  cartData,
  handleAddToCart,
}) {
  return (
    <div>
      <Banner />
      <Products
        cartData={cartData}
        handleAddToCart={handleAddToCart}
      />
    </div>
  );
}
