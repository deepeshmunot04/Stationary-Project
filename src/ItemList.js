import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

const items = [
  { id: 1, name: "Pen", price: 10 },
  { id: 2, name: "Notebook", price: 50 },
  { id: 3, name: "Pencil", price: 10},
  { id: 4, name: "Files", price: 100},
  { id: 5, name: "Folder", price: 220},
  { id: 6, name: "Whitener", price: 80},
  { id: 7, name: "Eraser", price: 5},
  { id: 8, name: "Shopner", price: 5},
];

function ItemList({ cartItems, setCartItems }) {
  const [blinkId, setBlinkId] = useState(null);  
  const navigate = useNavigate();

  const handleAddToCart = (item) => {           
    setCartItems([...cartItems, item]);
    setBlinkId(item.id);
    setTimeout(() => setBlinkId(null), 500);
  };

  return (
    <div className="cart-container">
      <h2>
        <i className="bi bi-bag-check cart-icon"></i>
        Select Stationary Items
        <span className="cart-count"> Selected: {cartItems.length}</span>
      </h2>

      {items.map((item) => (
        <div key={item.id} className="item-card">
          <span><i className="bi bi-box"></i> {item.id}. {item.name} = ₹{item.price}/-</span>
          <button
            className={`add-to-cart-button ${blinkId === item.id ? 'blink' : ''}`}
            onClick={() => handleAddToCart(item)}
          >
            Add to Cart
          </button>
        </div>
      ))}
       <div className="button-container" style={{ marginTop: '20px' }}>
        <button className="secondary" onClick={() => navigate('/cart')}>
          <i className="bi bi-cart4"></i> Go to Cart
        </button>
      </div>
    </div>
  );
}

export default ItemList;