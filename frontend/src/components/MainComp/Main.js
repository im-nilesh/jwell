import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import HeroSection from "../HeroSection/HeroSection";
import PostCardSection from "../postcard/PostCardSection";
import GoldSection from "../Gold/GoldSection";
import Footer from "../footer/footer";
import SignInPage from "../SignIn/signIn";
import "../../App.css";

const Main = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <div className="section-padding">
                <h1 className="section-title">New Arrivals</h1>
              </div>
              <PostCardSection />
              <div className="section-padding">
                <h1 className="section-title">GemAura Gold Collection</h1>
                <GoldSection />
              </div>
              <div className="section-padding">
                <Footer />
              </div>
            </>
          }
        />
        <Route path="/home" element={<Main />} />
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
    </Router>
  );
};

export default Main;
