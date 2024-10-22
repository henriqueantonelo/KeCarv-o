import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import ConfirmModal from "../components/ConfirmModal";
import ConfirmedModal from "../components/ConfirmedModal"; // Importa a modal de confirmação

const Cart = () => {
  const { purchases, removeFromCart } = useContext(CartContext);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    neighborhood: "",
    street: "",
    houseNumber: "",
    block: "",
  });
  const [isApartment, setIsApartment] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false); // Estado da modal de confirmação
  const [isConfirmedModalOpen, setIsConfirmedModalOpen] = useState(false); // Estado da segunda modal

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
    // Abre a modal de confirmação quando o formulário é enviado
    setIsConfirmModalOpen(true);
  };

  const handleConfirm = () => {
    // Aqui você pode adicionar a lógica para processar o pedido
    setIsConfirmModalOpen(false); // Fecha a primeira modal
    setIsConfirmedModalOpen(true); // Abre a modal de pedido confirmado
  };

  return (
    <div className="py-5 px-12">
      <p className="font-bold text-lg">Resumo da compra</p>
      {purchases.map((item, index) => (
        <div key={index} className="flex justify-between items-center">
          <button
            onClick={() => removeFromCart(item.product.id)}
            className="text-red-500 mr-2"
            style={{ fontSize: "1.2rem", lineHeight: "1" }}
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
                  className="opacity-0 absolute"
                />
                {isApartment && <span className="text-white">✓</span>}
              </div>
              <span className="text-gray-500">Apartamento</span>
            </label>

            <input
              type="text"
              name="block"
              placeholder="Bloco e Nº"
              value={formData.block}
              onChange={handleChange}
              className="bg-gray-200 p-2 rounded-xl"
              style={{ opacity: isApartment ? 1 : 0.5 }}
              required={isApartment}
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

      {/* Modal de confirmação */}
      <ConfirmModal
        isOpen={isConfirmModalOpen}
        onClose={() => setIsConfirmModalOpen(false)}
        purchases={purchases}
        total={total}
        formData={formData}
        onConfirm={handleConfirm} // Adiciona o callback de confirmação
      />

      {/* Modal de pedido confirmado */}
      <ConfirmedModal
        isOpen={isConfirmedModalOpen}
        onClose={() => setIsConfirmedModalOpen(false)}
      />
    </div>
  );
};

export default Cart;
