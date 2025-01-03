// src/components/HeroSection.js
import React from "react";
import "./Hero.css";
import heroImage from "../assets/jewll-image.jpeg"; // Replace with your image path

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>
          Contemporary jewelry, <span>handcrafted</span> with love.
        </h1>
        <p>Timeless pieces made for modern elegance.</p>
        <button>Shop Now</button>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Jewelry Collection" />
      </div>
    </section>
  );
}

export default HeroSection;
