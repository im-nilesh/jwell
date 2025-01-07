import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import "./Header.css"; // Include your styles for the header

const Header = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <header className="header">
      <div className="logo">GemAura</div>
      <nav className="nav">
        <button className="nav-button" onClick={() => navigate("/")}>
          Home
        </button>
        <button
          className="nav-button"
          onClick={() => (window.location.href = "#collections")}
        >
          Collections
        </button>
        <button
          className="nav-button"
          onClick={() => (window.location.href = "#about")}
        >
          About Us
        </button>
        <button
          className="nav-button"
          onClick={() => (window.location.href = "#contact")}
        >
          Contact
        </button>
        <button
          className="nav-button"
          onClick={() => (window.location.href = "#shop")}
        >
          Shop
        </button>
        <button className="nav-button" onClick={() => navigate("/signin")}>
          Sign In
        </button>
      </nav>
    </header>
  );
};

export default Header;
