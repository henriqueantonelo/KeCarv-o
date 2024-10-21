import React, { createContext, useState } from "react";

// Cria o contexto
export const CartContext = createContext();

// Provider para envolver o app e compartilhar o estado do carrinho
export const CartProvider = ({ children }) => {
  const [purchases, setPurchases] = useState([]);

  const addToCart = (product, quantity) => {
    setPurchases((prev) => [...prev, { product, quantity }]);
  };

  // Função para remover um item do carrinho pelo id do produto
  const removeFromCart = (productId) => {
    setPurchases((prev) =>
      prev.filter((item) => item.product.id !== productId)
    );
  };

  return (
    <CartContext.Provider value={{ purchases, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
