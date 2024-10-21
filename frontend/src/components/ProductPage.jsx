import React, { useState } from "react";
import Card from "./Card";
import ProductItem from "./ProductItem";
import { products } from "../assets/assets"; // Supondo que você tenha essa lista

const ProductPage = () => {
  const [visible, setVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setVisible(true);
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            onClick={() => handleProductClick(product)} // Passa a função para o ProductItem
          />
        ))}
      </div>
      <Card
        selectedProduct={selectedProduct}
        visible={visible}
        setVisible={setVisible}
      />
    </div>
  );
};

export default ProductPage;
