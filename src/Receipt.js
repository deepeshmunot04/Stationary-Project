import React from "react";
import { useNavigate } from "react-router-dom";

const Receipt = ({ cartItems, setIsLoggedIn }) => {
  const navigate = useNavigate();
  const orderId = Date.now();

  // Combine items by name with qty and total
  const combinedItems = [];
  cartItems.forEach(item => {
    const existingItem = combinedItems.find(i => i.name === item.name);
    if (existingItem) {
      existingItem.qty += 1;
    } else {
      combinedItems.push({ ...item, qty: 1 });
    }
  });

  const totalAmount = combinedItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <div className="receipt-container">
      <h2>Receipt</h2>
      <p>Order ID: {orderId}</p>

      <table className="receipt-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Qty</th>
            <th>Price (₹)</th>
            <th>Total (₹)</th>
          </tr>
        </thead>
        <tbody>
          {combinedItems.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.qty}</td>
              <td>{item.price}</td>
              <td>{item.qty * item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="receipt-total">Total: ₹{totalAmount}/-</div>
      <div className="receipt-buttons">
        <button onClick={() => window.print()}>Print Receipt</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Receipt;
