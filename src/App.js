import "./App.css";
import { NavigationLink } from "./components/NavigationLink";
import { Footer } from "./Footer";
import { Sketch } from "./Sketch";

export const App = () => {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div>
        <NavigationLink />
        <Sketch />
      </div>
      <Footer />
    </div>
  );
};
