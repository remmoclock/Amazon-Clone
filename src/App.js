import React from 'react'
import Header from './layout/Header/Header'

import { BrowserRouter } from 'react-router-dom';
import "./App.css";
import Home from './layout/Home/Home';

const App = () => {
  return (
   <BrowserRouter>
    <Header />
    <Home />
   </BrowserRouter>
  )
}

export default App
