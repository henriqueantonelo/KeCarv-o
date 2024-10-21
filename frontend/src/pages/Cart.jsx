import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext"; // Importa o contexto do carrinho

const Cart = () => {
  const { purchases, removeFromCart } = useContext(CartContext); // Usa o estado do carrinho e a função de remover
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    neighborhood: "",
    street: "",
    houseNumber: "",
    block: "", // Adiciona o campo Bloco ao estado
  });
  const [isApartment, setIsApartment] = useState(false); // Estado para controlar a checkbox

  const total = purchases.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode implementar a lógica para finalizar o pedido
    console.log("Dados do pedido:", { ...formData, purchases });
    // Limpa os dados do formulário
    setFormData({
      name: "",
      phone: "",
      neighborhood: "",
      street: "",
      houseNumber: "",
      block: "", // Reseta o campo Bloco
    });
    setIsApartment(false); // Reseta o estado da checkbox
  };

  return (
    <div className="py-5 px-12 ">
      <p className="font-bold text-lg">Resumo da compra</p>
      {purchases.map((item, index) => (
        <div key={index} className="flex justify-between items-center">
          <button
            onClick={() => removeFromCart(item.product.id)}
            className="text-red-500 mr-2" // Estilo para o "X"
            style={{ fontSize: "1.2rem", lineHeight: "1" }} // Ajuste de tamanho e alinhamento
          >
            x
          </button>
          <p className="flex-grow">
            {item.product.name} (x{item.quantity})
          </p>
          <p>R${item.product.price * item.quantity}</p>
        </div>
      ))}
      <div className="flex justify-between font-bold">
        <p>Valor total:</p>
        <p>R${total}</p>
      </div>

      <div className="border-t-2 mt-5">
        {/* Formulário de Dados para Entrega */}
        <form onSubmit={handleSubmit} className="mt-8">
          <h2 className="font-bold text-lg">Dados para Entrega</h2>
          <div className="flex flex-col space-y-4 mt-4">
            <input
              type="text"
              name="name"
              placeholder="Nome"
              value={formData.name}
              onChange={handleChange}
              className="bg-gray-200 p-2 rounded-xl"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Nº de Celular"
              value={formData.phone}
              onChange={handleChange}
              className="bg-gray-200 p-2 rounded-xl"
              required
            />
            <input
              type="text"
              name="neighborhood"
              placeholder="Bairro"
              value={formData.neighborhood}
              onChange={handleChange}
              className="bg-gray-200 p-2 rounded-xl"
              required
            />
            <input
              type="text"
              name="street"
              placeholder="Rua"
              value={formData.street}
              onChange={handleChange}
              className="bg-gray-200 p-2 rounded-xl"
              required
            />
            <input
              type="text"
              name="houseNumber"
              placeholder="Nº da Residência"
              value={formData.houseNumber}
              onChange={handleChange}
              className="bg-gray-200 p-2 rounded-xl"
              required
            />

            {/* Checkbox para Apartamento */}
            <label className="flex items-center mb-2">
              <div
                className={`w-6 h-6 border-2 rounded-md flex items-center justify-center mr-2 ${
                  isApartment ? "bg-black border-black" : "border-gray-300"
                }`}
              >
                <input
                  type="checkbox"
                  checked={isApartment}
                  onChange={() => setIsApartment(!isApartment)}
                  className="opacity-0 absolute" // Oculta a checkbox real
                />
                {isApartment && <span className="text-white">✓</span>}{" "}
                {/* Marca se selecionado */}
              </div>
              <span className="text-gray-500" style={{ color: "#A0AEC0" }}>
                Apartamento
              </span>
            </label>

            {/* Campo Bloco e Número */}
            <input
              type="text"
              name="block"
              placeholder="Bloco e Nº"
              value={formData.block}
              onChange={handleChange}
              className="bg-gray-200 p-2 rounded-xl"
              style={{ opacity: isApartment ? 1 : 0.5 }} // Controla a opacidade
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="mt-4 bg-black text-white py-2 px-4 rounded-xl text-center w-[90%]"
            >
              Finalizar Pedido
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Cart;
