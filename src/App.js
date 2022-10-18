import React from "react";
import About from "./About.js";
import Home from "./Home.js";
import Fruits from "./Fruits.js";
import Recipes from "./Recipes.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/fruits" element={<Fruits />} />
          <Route path="/recipes" element={<Recipes />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
