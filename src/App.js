import React from 'react'
import Header from './layout/Header/Header'

import { BrowserRouter } from 'react-router-dom';
import "./App.css";

const App = () => {
  return (
   <BrowserRouter>
    <Header />
   </BrowserRouter>
  )
}

export default App
