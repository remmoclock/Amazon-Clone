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
  const addItem = (item) => {
    setBasket([...basket, item]);
    console.log(basket);
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
        <Home addItem={addItem} />
      </Route>
      <Route path="/login" component={Form} />
      <Route path="/register" component={Register} />
      <Route path="/checkout" render={() => <Checkout basket={basket} />} />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
