import React, { useState, useRef, useEffect, useContext } from "react";
import { products } from "../assets/assets";
import ProductItem from "./ProductItem";
import { CartContext } from "../context/CartContext"; // Importa o contexto do carrinho

const Card = () => {
  const { addToCart } = useContext(CartContext); // Usa o contexto do carrinho
  const [visible, setVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(0); // Estado para a quantidade
  const cardRef = useRef(null); // Ref para o card
  const [startY, setStartY] = useState(0); // Posição inicial do toque
  const [translateY, setTranslateY] = useState(0); // Movimento do card

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setQuantity(0); // Reseta a quantidade quando um novo produto é selecionado
    setVisible(true);
    setTranslateY(0); // Reseta a posição do card ao abrir
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 0 ? prev - 1 : 0)); // Não permite quantidade negativa
  };

  // Calcula o total com base na quantidade e no preço do produto
  const totalPrice = quantity * (selectedProduct ? selectedProduct.price : 0);

  // Função para fechar o card
  const closeCard = () => {
    setVisible(false);
    setSelectedProduct(null);
    setQuantity(0);
    setTranslateY(0); // Reseta a posição do card ao fechar
  };

  // Detecta o arrasto para baixo
  const handleTouchStart = (event) => {
    const touchStartY = event.touches[0].clientY;
    setStartY(touchStartY); // Armazena a posição inicial do toque
  };

  const handleTouchMove = (event) => {
    const touchY = event.touches[0].clientY;
    const moveY = touchY - startY; // Calcula o movimento do toque
    setTranslateY(moveY); // Atualiza a posição do card conforme o toque
  };

  const handleTouchEnd = () => {
    if (translateY > 100) {
      // Se arrastar mais de 100px para baixo, fecha o card
      closeCard();
    } else {
      // Caso contrário, reseta a posição do card
      setTranslateY(0);
    }
  };

  // Detecta cliques fora do card
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        closeCard();
      }
    };

    // Adiciona o event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Remove o event listener ao desmontar o componente
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [cardRef]);

  // Função que será chamada ao clicar no botão "Comprar"
  const handleBuyClick = () => {
    if (selectedProduct && quantity > 0) {
      addToCart(selectedProduct, quantity); // Adiciona o produto ao carrinho
      closeCard(); // Fecha o card após a compra
    }
  };

  return (
    <div>
      <div className="my-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            onClick={() => handleProductClick(product)}
          />
        ))}
      </div>

      {/* Card que mostra os detalhes do produto */}
      <div
        ref={cardRef} // Adiciona a referência aqui
        className={`fixed right-0 bottom-0 w-full rounded-t-3xl overflow-hidden bg-white transition-all duration-300`}
        style={{
          transform: `translateY(${translateY}px)`,
          height: visible ? "35vh" : "0", // Controla a altura do card
        }}
        onTouchStart={handleTouchStart} // Adiciona o evento de toque
        onTouchMove={handleTouchMove} // Adiciona o evento de movimento
        onTouchEnd={handleTouchEnd} // Adiciona o evento de término de toque
      >
        {selectedProduct && (
          <div className="relative flex flex-col text-gray-600">
            <div
              onClick={closeCard}
              className="relative z-10 flex item-center gap-4 p-3 cursor-pointer"
            >
              <div className="w-12 h-1.5 bg-gray-600 rounded-full mx-auto"></div>
            </div>

            <div className="pt-[5%] pl-5">
              <p className="text-3xl">{selectedProduct.name}</p>
              <p className="text-2xl">R${selectedProduct.price} un.</p>
            </div>
          </div>
        )}

        <div className="w-100 mr-5 ml-5 mt-5 space-x-2">
          <div className="border-2 border-gray-600 inline-flex text-2xl rounded-xl p-2 w-24 justify-between">
            <div className="cursor-pointer" onClick={decreaseQuantity}>
              -
            </div>
            <div>{quantity}</div>
            <div className="cursor-pointer" onClick={increaseQuantity}>
              +
            </div>
          </div>
          <div
            className="inline-flex bg-black text-white space-x-10 rounded-xl text-xl w-[270px] pl-5 pr-5 p-3 justify-between"
            onClick={handleBuyClick} // Adiciona ao carrinho quando clicado
          >
            <p className="cursor-pointer">Comprar</p>
            <div className="ml-auto">R${totalPrice}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
