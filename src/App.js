import React from "react";
import "./App.css";
import "./components/product.css";
import Services from "./components/services";
import Header from "./components/header";
import Carousel from "./components/carousel";
import Product from "./components/products";
import About from "./components/about";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <Services />
      <About />
      <Product />
      <Footer />
    </div>
  );
}

export default App;
