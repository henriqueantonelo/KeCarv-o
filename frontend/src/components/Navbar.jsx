import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../context/CartContext"; // Importa o contexto do carrinho

const Navbar = () => {
  const { purchases } = useContext(CartContext); // Usa o estado do carrinho
  const [cartVisible, setCartVisible] = useState(true); // Estado para controlar a visibilidade do ícone do carrinho
  const location = useLocation(); // Hook para obter a localização atual

  // Calcula o total de itens no carrinho
  const totalItems = purchases.reduce((acc, item) => acc + item.quantity, 0);

  const handleCartClick = () => {
    setCartVisible(false); // Oculta o ícone do carrinho ao clicar
  };

  // Efeito para restaurar a visibilidade do carrinho ao ir para a Home
  useEffect(() => {
    if (location.pathname === "/") {
      setCartVisible(true); // Restaura a visibilidade quando está na Home
    }
  }, [location.pathname]); // Dependência no pathname da localização

  return (
    <div className="flex items-center justify-between py-5 font-medium border-b-2">
      <Link to="/">
        <img src={assets.logo} className="w-36" alt="" />
      </Link>

      <div className="flex items-center gap-6">
        {cartVisible && ( // Renderiza o ícone do carrinho apenas se cartVisible for true
          <Link to="/cart" className="relative" onClick={handleCartClick}>
            <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
              {totalItems > 0 ? totalItems : 0}{" "}
              {/* Exibe a quantidade de itens ou 0 */}
            </p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
