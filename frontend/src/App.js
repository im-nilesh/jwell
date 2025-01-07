import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import PostCardSection from "./components/PostCardSection";
import "./App.css";
import GoldSection from "./components/GoldSection";
import Footer from "./components/footer";

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
        <h1 className="section-title">GemAura Gold Collection</h1>
        <GoldSection />
        <div className="section-padding"></div>
      </div>
      
      <div className="section-padding"></div>
      <Footer />
    </div>
  );
}

export default App;
