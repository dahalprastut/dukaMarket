import { useEffect, useState } from "react";
import Nav from "./components/Header/Nav.js";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import data from "./utils/staticData";
import "./App.css";

function App() {
  const [cartData, setCartData] = useState([]);
  const [total, setTotal] = useState(0);
  const handleAddToCart = id => {
    const addedItem = data.find(
      el => el.id === id
    ); // this returns an object : {id:1, name:'', ...} unlike filter which returns an array

    setCartData([...cartData, addedItem]);
  };

  useEffect(() => {
    const totalVale = cartData.reduce(
      (prevValue, currentValue) => {
        return (
          prevValue +
          currentValue.price *
            currentValue.quantity
        );
      },
      0
    );
    setTotal(totalVale);
  }, [cartData]);

  return (
    <div className="App">
      <Nav total={total} />
      <Switch>
        <Route exact path="/">
          <Home
            cartData={cartData}
            handleAddToCart={handleAddToCart}
          />
        </Route>
        <Route path="/cart">
          <Cart
            cartData={cartData}
            setCartData={setCartData}
            total={total}
            setTotal={setTotal}
          />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
