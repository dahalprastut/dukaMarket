import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faCartPlus,
} from "@fortawesome/free-solid-svg-icons";
export default function Card({
  data,
  cartData,
  handleAddToCart,
}) {
  return (
    <div className="card">
      <div className="upper-image">
        <img
          src={`${data.image}`}
          alt="essentials"
        />
        {!cartData.some(
          //check array.some in Google for the workings of some
          el => el.id === data.id
        ) && (
          <div className="add-to-cart">
            <button
              onClick={() =>
                handleAddToCart(data.id)
              }
            >
              <FontAwesomeIcon
                icon={faCartPlus}
              />
              <span>Add To Cart</span>
            </button>
          </div>
        )}
      </div>

      <div className="description">
        <small>{data.category}</small>
        <p>{data.name}</p>
        <strong>{`Rs. ${data.price}`}</strong>
        <div className="rating">
          <div className="stars">
            {[...Array(data.ratings)].map(el => {
              return (
                <FontAwesomeIcon
                  key={Math.random()}
                  icon={faStar}
                />
              );
            })}
          </div>
          <small>| View All 24 reviews |</small>
        </div>
      </div>
    </div>
  );
}
