import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";
import signup from "../images/signup.png"
import SignIn from "./signin";
import { Link } from "react-router-dom";
function SignUp() {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");const navigate = useNavigate();

  const handleSignUp = () => {
    fetch("http://localhost:5000/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("User registration failed");
        }
      })
      .then((data) => {
        alert("User account created successfully");
        navigate("./signin");
      })
      .catch((error) => {
        console.error("Error signing up:", error);
        setErrorMessage("Registration failed. Please try again.");
      });
  };

  return (
    <div className="grandparent-signup">
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/signin">Sign In</Link>
      </nav>

      <div className="parent-signup">
        <div className="signup-container">
          <div className="signup-content">
            <div className="signup-image">
              <img style={{height : '300px' , width: '350px'}}
                src={signup}
                alt="sign-up"
              />
            </div>
            <div className="signup-form">
              <h2>Sign Up</h2>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              <input
                className="signup-input"
                type="text"
                placeholder="Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                className="signup-input"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="signup-input"
                type="text"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <input
                className="signup-input"
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              
              <input
                className="signup-input"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                className="signup-input"
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button className="signup-button" onClick={handleSignUp}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

