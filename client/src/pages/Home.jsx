// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import bgImage from '../assets/bg_img.png';

const Home = () => {
  return (
    <div
    className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center relative"
    style={{ backgroundImage: `url(${bgImage})` }}
  >
    {/* Semi-transparent overlay */}
    <div className="absolute inset-0 bg-white bg-opacity-70"></div>
  
    {/* Sticky Navbar */}
    <div className="fixed top-0 left-0 w-full z-20">
      <Navbar />
    </div>
  
    {/* Header */}
    <div className="relative z-10 w-full">
      <Header />
    </div>
  </div>
  );
};

export default Home;