import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faCartPlus,
} from "@fortawesome/free-solid-svg-icons";
import "./nav.css";

export default function Nav({ total }) {
  return (
    <nav>
      <div className="center">
        <Link to="/" className="logo">
          <img src="images/logo.png" alt="logo" />
        </Link>
        <Link to="/cart" className="cart-logo">
          <div className="icon">
            <FontAwesomeIcon icon={faCartPlus} />
          </div>
          <div className="cart-info">
            <span>Shopping Cart</span>
            <strong>${total}</strong>
          </div>
        </Link>
      </div>
    </nav>
  );
}
