import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import About from "./About.js";
import Menu from "./Menu.js";
import Process from "./Process.js";
import Smoothies from "./Smoothies.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/process" element={<Process />} />
          <Route path="/smoothies" element={<Smoothies />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
