import React from "react";

const ConfirmModal = ({
  isOpen,
  onClose,
  purchases,
  total,
  formData,
  onConfirm,
}) => {
  if (!isOpen) return null; // Se não estiver aberta, não renderiza nada

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-5/6 h-auto ">
        <div className="bg-white shadow-lg w-full rounded-lg ">
          <div className="bg-[#f6f4f6] w-full p-1 px-3 pt-4 rounded-t-lg">
            <p className="font-semibold mb-4 px-2 ">Confirmar Pedido?</p>
          </div>

          {/* Resumo da compra */}
          <div className="p-2 border-b-2 px-5">
            <h2 className="mb-2 text-xl font-semibold">Resumo da compra</h2>
            {purchases.map((item, index) => (
              <div key={index} className="flex justify-between">
                <p>
                  {item.product.name}{" "}
                  <span className="text-gray-500">(x{item.quantity})</span>
                </p>
                <p>R${item.product.price * item.quantity}</p>
              </div>
            ))}
            <h3 className="font-semibold mt-2">Valor total: R${total}</h3>
          </div>

          {/* Informações do cliente */}
          <div className="border-b-2 p-2 px-5">
            <h2 className="text-xl font-semibold mb-2">Dados para Entrega</h2>
            <div className="flex justify-between">
              <p>Nome</p>
              <p>{formData.name || "Nome do cliente"}</p>
            </div>
            <div className="flex justify-between">
              <p>Telefone</p>
              <p>{formData.phone || "Telefone do cliente"}</p>
            </div>
            <div className="flex justify-between">
              <p>Bairro</p>
              <p>{formData.neighborhood || "Bairro do cliente"}</p>
            </div>
            <div className="flex justify-between">
              <p>Rua</p>
              <p>{formData.street || "Rua do cliente"}</p>
            </div>
            <div className="flex justify-between">
              <p>Nº da Residência</p>
              <p>{formData.houseNumber || "Número da casa"}</p>
            </div>
            {formData.block && (
              <div className="flex justify-between">
                <p>Bloco e Nº</p>
                <p>{formData.block}</p>
              </div>
            )}
          </div>

          {/* Botões */}
          <div className="p-2 flex justify-end space-x-2">
            <button
              onClick={onClose}
              className="text-black font-semibold border-gray-300 border-solid border-2 px-4 py-1 rounded-lg"
            >
              Cancelar
            </button>
            <button
              onClick={onConfirm} // Chama a função onConfirm
              className="text-white bg-black border-solid border-2 px-8 py-1 rounded-lg"
            >
              Confirmar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
