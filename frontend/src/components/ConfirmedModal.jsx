import React from "react";
import { assets } from "../assets/assets";
import { Link, useLocation } from "react-router-dom";

const ConfirmedModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Se a modal não estiver aberta, não renderiza nada

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-5/6 md:w-1/2 h-auto p-5 rounded-lg shadow-lg flex flex-col items-center">
        {" "}
        {/* Adicionado flex e items-center */}
        <div className="border-b-2 mb-2 text-center">
          {" "}
          ""
          {/* Adicionado text-center para centralizar o conteúdo */}
          <img
            src={assets.checkarrow_icon_svg}
            className="w-16 mx-auto my-5" // Adicionado mx-auto para centralizar a imagem
            alt="Ícone de confirmação"
          />
          <h2 className="text-2xl font-semibold mb-4">Pedido Confirmado!</h2>
          <p className="mb-6">Seu pedido foi realizado com sucesso.</p>
        </div>
        <Link to="/" className="relative">
          <div className="flex justify-center">
            <button
              onClick={onClose}
              className="text-white bg-black px-14 py-1 rounded-lg"
            >
              Ok
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ConfirmedModal;
