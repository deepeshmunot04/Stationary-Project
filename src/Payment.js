import React from "react";
import { useNavigate } from "react-router-dom";

const Payment = ({ cartItems }) => {
  const navigate = useNavigate();
  const handlePayment = () => {
    alert("Payment Successful");
    navigate("/receipt");
  };

  return (
    <div className="payment-container">
      <h2>Payment</h2>
      <p>Total Amount:  ₹{cartItems.reduce((sum, item) => sum + item.price, 0)}/-</p>
      <button className="pay-button" onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default Payment;