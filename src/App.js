import React, { useState, useEffect } from "react";
import "./App.css";
import NavbarHome from "./Components/NavbarHome/NavbarHome.jsx";
import NavbarDetail from "./Components/NavbarDetail/NavbarDetail.jsx";
import NavbarCart from "./Components/NavbarCart/NavbarCart.jsx";
import Categories from "./Components/Categories/Categories.jsx";
import Items from "./Components/Item/Item.jsx";
import Detail from "./Components/Detail/Detail.jsx";
import Cart from "./Components/Cart/Cart.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [categories, setCategories] = useState([]);
  const [itemDetails, setItemDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    showItems();
    showCategories();
  }, []);

  const showItems = () => {
    setLoading(true);
    fetch(`https://app-stg.vouch.sg/json-mock/ticketing/categories/1`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setItemDetails(result);
        setLoading(false);
      })
      .catch(() => {
        alert("Please refresh the page!");
        setLoading(false);
      });
  };

  const showCategories = () => {
    setLoading(true);
    fetch(`https://app-stg.vouch.sg/json-mock/ticketing/categories`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setCategories(result);
        setLoading(false);
      })
      .catch(() => {
        alert("Please refresh the page!");
        setLoading(false);
      });
  };

  return (
    <Router>
      <Switch>
        <Route path="/cart">
          <NavbarCart />
          <Cart />
        </Route>
        <Route path="/detail">
          <NavbarDetail />
          <Detail setLoading={setLoading} loading={loading} />
        </Route>
        <Route path="/">
          <NavbarHome />
          <Categories categories={categories} loading={loading} />
          <Items itemDetails={itemDetails} loading={loading} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
