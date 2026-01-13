import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import Customize from "./components/customize/customize";
import Home from "./components/home/home";
import Nav from "./components/Navbar/Navbar";
import AutoGenerate from "./components/AutoGenerate/AutoGenerate";
import About from "./components/About/About"
import Footer from "./components/Footer";
import QRGenerator from "./components/QRgenerator/QRGenerator";
function App() {
  return (
    <>
      <Nav />
      <Routes>
        
        <Route path="/" element={<Customize />} />


        <Route path="/customm" element={<Customize />} />
        <Route path="/home1" element={<Home />} />
        <Route path="/auto" element={<AutoGenerate />} />
        <Route path="/about" element={<About />} />
         <Route path="/qr" element={<QRGenerator />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
