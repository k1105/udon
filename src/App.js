import "./App.css";
import { NavigationLink } from "./components/NavigationLink";
import { Footer } from "./Footer";
import { SketchPage } from "./sketch/SketchPage";
import { Thesis } from "./Thesis";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./About";
import { SketchContent } from "./sketch/SketchContent";

export const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<SketchPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/thesis" element={<Thesis />} />
            <Route path="/13" element={<SketchContent />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};
