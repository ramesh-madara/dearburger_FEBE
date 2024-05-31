import React from "react";
import "./hero-section-style.css";

const HeroSection = () => {
  return (
    <div id="hero-outer">
      <img className="coverimg" src="https://i.imgur.com/iyqiLJi.png" alt="" />
      <span className="text-white font-sansita text-bold">Dear Burger</span>
      <span className="text-white font-sansita subtext">
        Every Bite is Dear to Us!
      </span>
    </div>
  );
};
export default HeroSection;
