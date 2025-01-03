import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import PostCardSection from "./components/PostCardSection";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <div className="section-padding">
        <h1 className="section-title">New Arrivals</h1>
      </div>
      <PostCardSection />
      <div className="section-padding">
        <h1 className="section-title">GemAura Rings Collection</h1>
      </div>
      <PostCardSection />
    </div>
  );
}

export default App;
