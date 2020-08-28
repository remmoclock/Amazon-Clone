import React, { useState, useEffect } from "react";
import Header from "./layout/Header/Header";

import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Home from "./layout/Home/Home";
import Footer from "./layout/Footer/Footer";
import Form from "./layout/Form/Form";
import Register from "./layout/Register/Register";
import { auth } from "./firebase/firebase";
import Checkout from "./layout/Checkout/Chekout";
import { useStorageState } from "react-storage-hooks";

const App = () => {
  // HOOKS
  const [utilisateurs, setUtilisateurs] = useState();
  const [basket, setBasket] = useStorageState(localStorage, "basket", []);

  // FUNCTIONS
  const addItem = (itemToAdd) => {
    const existing = basket.find((item) => item.id === itemToAdd.id);
    if (existing) {
      return basket.map((item) =>
        item.id === itemToAdd.id ? { ...item, quantity: item.quantity++ } : item
      );
    }
    setBasket([...basket, { ...itemToAdd, quantity: 1 }]);
  };

  const removeItem = (itemToRemove) => {
    setBasket(basket.filter((item) => item.id !== itemToRemove.id));
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const newUser = {
          email: user.email,
          id: user.uid,
        };
        setUtilisateurs(newUser);
      } else {
        setUtilisateurs(null);
      }
    });
    localStorage.getItem("basket");
  }, []);

  return (
    <BrowserRouter>
      <Header basket={basket} user={utilisateurs} />
      <Route exact path="/">
        <Home removeItem={removeItem} addItem={addItem} basket={basket} />
      </Route>
      <Route path="/login" component={Form} />
      <Route path="/register" component={Register} />
      <Route
        path="/checkout"
        render={() => <Checkout removeItem={removeItem} basket={basket} />}
      />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
