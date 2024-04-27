import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";
import axios from "axios";
import { Link } from "react-router-dom";
function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/donors/login", {
        email,
        password,
      });
      console.log("Logged in successfully:", response.data.message);
      alert("user logged in successfully");
      // You can perform actions after successful login, like redirecting to another page.
    } catch (error) {
      console.error("Error logging in:", error.response.data.error);
      alert("invalid email or password");
    }
  };
  return (
    <div className="signup-background">
      <div className="shape"></div>
      <div className="shape"></div>
      <form className="signup-form" onSubmit={handleSubmit}>
        <h3>SignIn Here</h3>
        <input type="email" placeholder="Enter your email" name="email" onChange={(e) => setEmail(e.target.value)} 
            required />
        <input type="password" placeholder="Enter your password" name="password" onChange={(e) => setPassword(e.target.value)}
            required/>

        <button className="signup-button" type="submit">SignIn</button>

        <div className="social">
          {/*<div className="go"><i className="fab fa-google"></i> Google</div>*/}
          {/*<div className="fb"><i className="fab fa-facebook"></i> Facebook</div>*/}
          <div className="fb" onClick={() => {window.location.href = "/signin";}}><i className="fab fa-facebook"></i> Signin</div>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
