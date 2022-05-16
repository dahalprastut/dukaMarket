import React, {
  useState,
  useEffect,
} from "react";
import { Link } from "react-router-dom";
import AmountBox from "../components/AmountBox";
import Table from "./../components/Table";

export default function Cart({
  cartData = [],
  setCartData,
  total,
}) {
  const [data, setData] = useState([]);

  const quantityClick = (id, action) => {
    const selectedData = cartData.find(
      el => el.id === id
    );
    if (action === "inc") {
      selectedData.quantity =
        selectedData.quantity + 1;
    } else {
      if (selectedData.quantity === 1) return;
      selectedData.quantity =
        selectedData.quantity - 1;
    }
    setCartData([...cartData]); //When we set new state with setCartData it rerenders this component and it's children component.
  };

  const deleteHandler = id => {
    const selectedData = cartData.find(
      el => el.id === id
    );
    selectedData.quantity = 1;
    const newCartData = cartData.filter(
      el => el.id !== id
    );
    setCartData(newCartData);
  };

  useEffect(() => {
    const elements = [
      {
        header: "Product",
        width: 35,
        content: cartData.map(el => (
          <div
            className="title"
            key={Math.random()}
          >
            <div className="image-wrapper">
              <img src={el.image} alt="" />
            </div>
            <strong>{el.name} </strong>
          </div>
        )),
      },
      {
        header: "Price",
        content: cartData.map(el => (
          <div key={Math.random()}>
            Rs. {el.price}
          </div>
        )),
      },
      {
        header: "Quantity",
        content: cartData.map(el => (
          <div
            className="quantity-wrapper"
            key={Math.random()}
          >
            <button
              className="btn-calc"
              onClick={() =>
                quantityClick(el.id, "dec")
              }
            >
              -
            </button>
            <span className="quant">
              {el.quantity}
            </span>
            <button
              className="btn-calc"
              onClick={() =>
                quantityClick(el.id, "inc")
              }
            >
              +
            </button>
          </div>
        )),
      },
      {
        header: "Subtotal",
        content: cartData.map(el => (
          <span key={Math.random()}>
            Rs. {el.price * el.quantity}
          </span>
        )),
      },
      {
        header: "",
        width: 5,
        content: cartData.map(el => (
          <button
            className="btn-delete"
            onClick={() => deleteHandler(el.id)}
            key={Math.random()}
          >
            X
          </button>
        )),
      },
    ];

    // setTotal(totalVale);

    setData(elements);
  }, [cartData]);

  total = cartData.reduce(
    (prevValue, currentValue) => {
      return (
        prevValue +
        currentValue.price * currentValue.quantity
      );
    },
    0
  );

  return (
    <div className="cart-page">
      <div className="center">
        {data.length > 0 &&
        cartData.length > 0 ? (
          <>
            <section className="left-section">
              <Table data={data} />
            </section>
            <section className="right-section">
              <AmountBox total={total} />
            </section>
          </>
        ) : (
          <h1>
            No Items Added. Please go to the
            <Link to="/"> Home Page</Link> to add
            items
          </h1>
        )}
      </div>
    </div>
  );
}
