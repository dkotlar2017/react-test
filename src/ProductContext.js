import React, { useState, createContext } from 'react';

export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const [products, setProducts] = useState([
    {
      "id": 1,
      "name": "Red Scooter",
      "price": 2000,
      "image": "/assets/product1.png"
    },
    {
      "id": 2,
      "name": "Seat Scooter",
      "price": 2300,
      "image": "/assets/product2.png"
    },
    {
      "id": 3,
      "name": "Purple Scooter",
      "price": 2500,
      "image": "/assets/product3.png"
    },
    {
      "id": 4,
      "name": "Turbo Scooter",
      "price": 3000,
      "image": "/assets/product4.png"
    }
  ]);

  return (
    <ProductContext.Provider value={[products, setProducts]}>{props.children}</ProductContext.Provider>
  );
};
