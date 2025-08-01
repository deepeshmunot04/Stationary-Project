import React from "react";
import { useNavigate } from "react-router-dom";

const Cart = ({ cartItems }) => {
  const navigate = useNavigate();

  // Combine items with quantity and total price per item
  const combinedItems = [];
  cartItems.forEach(item => {
    const existingItem = combinedItems.find(i => i.name === item.name);
    if (existingItem) {
      existingItem.qty += 1;
      existingItem.totalPrice += item.price;
    } else {
      combinedItems.push({ ...item, qty: 1, totalPrice: item.price });
    }
  });

  const total = combinedItems.reduce((sum, item) => sum + item.totalPrice, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Qty</th>
            <th>Price (₹)</th>
            <th>Total Price (₹)</th>
          </tr>
        </thead>
        <tbody>
          {combinedItems.map((item, index) => (
            <tr key={index}>
              <td><i className="bi bi-box"></i> {item.name}</td>
              <td>{item.qty}</td>
              <td>{item.price}</td>
              <td>{item.totalPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="cart-total">Total: ₹{total}/-</div>
      <button className="proceed-button" onClick={() => navigate("/payment")}>
        Proceed to Payment
      </button>
    </div>
  );
};

export default Cart;
