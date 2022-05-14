import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import "./banner.css";

export default function Banner() {
  return (
    <div className="banner">
      <div className="center">
        <div className="heading">
          <h1>Summer Accessories Super Sale</h1>
          <p>
            Great deals on brands like Samsung,
            Apple, Beats and many more
          </p>
          <button>Shop Now</button>
        </div>
        <div className="nav-btns">
          <button>
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button>
            <FontAwesomeIcon
              icon={faAngleRight}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
