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

const App = () => {
  // HOOKS
  const [utilisateurs, setUtilisateurs] = useState();

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
  }, []);

  return (
    <BrowserRouter>
      <Header user={utilisateurs} />
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Form} />
      <Route path="/register" component={Register} />
      <Route path="/checkout" component={Checkout} />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
