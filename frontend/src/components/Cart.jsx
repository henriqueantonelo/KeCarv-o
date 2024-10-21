import React from "react";

const ProductItem = ({ id, image, name, price, onClick }) => {
  return (
    <div
      className="text-gray-700 cursor-pointer shadow-md rounded-lg bg-[#f6f4f6]"
      onClick={onClick}
    >
      <div className="overflow-hidden">
        <img
          className="hover:scale-110 transition ease-in-out rounded-t-lg rounded-b-xl"
          src={image[0]}
          alt={name}
        />
      </div>
      <p className="pl-3 pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium pb-3 pl-3">R${price}</p>
    </div>
  );
};

export default ProductItem;
