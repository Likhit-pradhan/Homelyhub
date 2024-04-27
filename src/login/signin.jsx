import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signin.css";
import signin from "../images/signin.png"
import { Link } from "react-router-dom";
function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSignIn = () => {
    fetch("http://localhost:5000/api/signin", {
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
          throw new Error("Authentication failed");
        }
      })
      .then((data) => {
        //alert("Logged in successfully");
        navigate("/signin/upload");
        setErrorMessage("");
      })
      .catch((error) => {
        console.error("Error signing in:", error);
        setErrorMessage("Incorrect username or password");
      });
  };

  return (
    <div className="grandparent-signin">
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/signin">Sign In</Link>
      </nav>
      <div className="parent-signin">
        <div className="signin-container">
          <div className="signin-content">
            <div className="signin-image">
              <img style={{height : '300px' , width: '350px'}}
                src={signin}
                alt="signin image"
              />
            </div>
            <div className="signin-form">
              <h2>Sign In</h2>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              <input
                className="signin-input"
                type="text"
                placeholder="User Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                className="signin-input"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="signin-button" onClick={handleSignIn}>
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;

