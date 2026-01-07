import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import Customize from "./components/customize/customize";
import Home from "./components/home/home";
import Nav from "./components/Navbar/Navbar";
import AutoGenerate from "./components/AutoGenerate/AutoGenerate";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        
        <Route path="/" element={<Customize />} />


        <Route path="/customm" element={<Customize />} />
        <Route path="/home1" element={<Home />} />
        <Route path="/auto" element={<AutoGenerate />} />
      </Routes>
    </>
  );
}

export default App;
