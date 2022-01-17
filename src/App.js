import "./App.css";
import { NavigationLink } from "./components/NavigationLink";
import { Footer } from "./Footer";
import { Sketch } from "./Sketch";
import { Thesis } from "./Thesis";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./About";

export const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header"></header>
        <div>
          <NavigationLink />
          <Routes>
            <Route path="/" element={<Sketch />} />
            <Route path="/about" element={<About />} />
            <Route path="/thesis" element={<Thesis />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
