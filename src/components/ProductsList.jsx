import { useState } from "react";

export default function ProductsList() {
  const [addedProducts, setAddedProducts] = useState([]);

  function addToCart(product) {
    setAddedProducts((prevProducts) => {
      const existingProducts = prevProducts.find(item => item.name === product.name);
      if (existingProducts) {
        return prevProducts.map(item =>
            item.name === product.name
              ? { ...item, quantity: item.quantity + 1 } 
              : item
          );
      }
      return [...prevProducts,{...product, quantity:1}]; 
    });
  }

  const products = [
    { name: 'Mela', price: 0.5 },
    { name: 'Pane', price: 1.2 },
    { name: 'Latte', price: 1.0 },
    { name: 'Pasta', price: 0.7 },
  ];

  return (
    <>
      <h1>LISTA DELLA SPESA:</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <p>Nome: {product.name}</p>
            <p>Prezzo: {product.price}</p>
            <button onClick={() => addToCart(product)}>Aggiungi al carrello</button>
          </li>
        ))}
      </ul>

      {addedProducts.length > 0 && (
        <>
          <h2>Carrello:</h2>
          <ul>
            {addedProducts.map((product, index) => (
              <li key={index}>
                <p>Nome: {product.name}</p>
                <p>Prezzo: {product.price}</p>
                <p>Quantità: {product.quantity}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

