import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext"; // Importa o contexto

const App = () => {
  return (
    <CartProvider>
      {" "}
      {/* Envolve o app com o CartProvider */}
      <div className="px-4 sm:px[5vw] md:px-[7vw] lg:px-[9vw]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;
