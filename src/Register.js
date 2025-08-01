import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (name && password) {
      
      localStorage.setItem("username", name);
      localStorage.setItem("userpassword", password);
      alert("Registration successful! Please log in.");
      navigate("/");
    } else {
      alert("Please fill all fields.");
    }
  };

  return (
    <div className="register-box">
      <h2><center>Register</center></h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Enter Username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="button-container">
          <button type="submit">Register</button>
        </div>
        <p>
          Already have an account? <a href="/">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Register;
