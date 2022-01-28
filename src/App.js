import "./App.css";
import { SketchPage } from "./sketch/SketchPage";
import { Thesis } from "./Thesis";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./About";
import { SketchContent } from "./sketch/SketchContent";
import React from "react";

export const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<SketchPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/thesis" element={<Thesis />} />
            <Route path="/sketch/:id" element={<SketchContent />} />
            <Route path="/404" element={<div>THIS PAGE IS 404</div>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};
