import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Customize from "./components/customize/customize";
import Home from "./components/home/home";
import Nav from "./components/Navbar/Navbar"

function App() {
  return (
    <>
      <Nav />
      <Routes>
  <Route path="/customm" element={<Customize />} />
</Routes>
<Routes>
  <Route path="/home1" element={<Home />} />
</Routes>
  </>
    
  );
}

export default App;
