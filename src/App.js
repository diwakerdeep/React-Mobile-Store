import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from './components/Default';




function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<ProductList />} />
        <Route exact path="/details" element={<Details />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route path= "*" element={<Default />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
