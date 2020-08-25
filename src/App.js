import React from "react";
import Header from "./layout/Header/Header";

import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Home from "./layout/Home/Home";
import Footer from "./layout/Footer/Footer";
import Form from "./layout/Form/Form";
import Register from "./layout/Register/Register";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path='/login' component={Form} />
      <Route path='/register' component={Register} />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
