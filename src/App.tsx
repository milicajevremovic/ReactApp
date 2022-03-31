import React from "react";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import ProductsPage from "./components/ProductsPage";
import { ProductDetails } from "./components/ProductDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { CheckOut } from "./components/CheckOut";
import { PageNotFound } from "./components/PageNotFound";
import SearchBar from "./components/SearchBar";
function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/item' element={<ProductDetails />} />
        <Route path='/checkout' element={<CheckOut />} />
        <Route element={<PageNotFound />} />
      </Routes>
      <SearchBar />
      <Navigation />
    </div>
  );
}

export default App;
