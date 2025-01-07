import React from "react";
import "./Header.css"; // Include your styles for the header

const Header = () => {
  return (
    <header className="header">
      <div className="logo">GemAura</div>
      <nav className="nav">
        <button onClick={() => (window.location.href = "#home")}>Home</button>
        <button onClick={() => (window.location.href = "#collections")}>
          Collections
        </button>
        <button onClick={() => (window.location.href = "#about")}>
          About Us
        </button>
        <button onClick={() => (window.location.href = "#contact")}>
          Contact
        </button>
        <button onClick={() => (window.location.href = "#shop")}>Shop</button>
      </nav>
    </header>
  );
};

export default Header;
