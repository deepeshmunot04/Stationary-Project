import './App.css';
import { useState,useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './login';
import Register from './Register';
import ItemList from './ItemList';
import Cart from './Cart';
import Payment from './Payment';
import Receipt from './Receipt';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState([]);

    // Restore login state from localStorage on page reload
  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    if (loggedInStatus === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  // Sync login status to localStorage
  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Navigate to="/items" />
            ) : (
              <Login setIsLoggedIn={setIsLoggedIn} />
            )
          }
        />
        <Route
        path="/register"
        element={<Register/>} />
        <Route
          path="/items"
          element={
            isLoggedIn ? (
              <ItemList cartItems={cartItems} setCartItems={setCartItems} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/cart"
          element={
            isLoggedIn ? (
              <Cart cartItems={cartItems} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/payment"
          element={
            isLoggedIn ? (
              <Payment cartItems={cartItems} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
  path="/receipt"
  element={
    isLoggedIn ? (
      <Receipt
        cartItems={cartItems}
        setIsLoggedIn={setIsLoggedIn}
        setCartItems={setCartItems}
      />
    ) : (
      <Navigate to="/" />
    )
  }
/>

      </Routes>
    </Router>
  );
}

export default App;