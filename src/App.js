import "./App.css";
import { NavigationLink } from "./components/NavigationLink";
import { SketchContent } from "./components/SketchContent";

export const App = () => {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div>
        <NavigationLink />
        <ul>
          <li>
            <div>
              <SketchContent title="Extention" number="13" date="2022.01.23" />
            </div>
          </li>
          <li>
            <div>
              <SketchContent
                title="ClickToExtend"
                number="25"
                date="2022.01.23"
              />
            </div>
          </li>
          <li>
            <div>
              <SketchContent title="SingleUdon" number="01" date="2022.01.23" />
            </div>
          </li>
          <li>
            <div>
              <SketchContent
                title="MultipleUdon"
                number="02"
                date="2022.01.23"
              />
            </div>
          </li>
          <li>
            <div>
              <SketchContent title="SpriteUdon" number="25" date="2022.01.23" />
            </div>
          </li>
        </ul>
        <div>
          <a href="#" target="_blank" rel="noopener noreferrer">
            &lt; Prev
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Next &gt;
          </a>
        </div>
      </div>
      <footer>
        <img src={`${process.env.PUBLIC_URL}/udon_like_algo.svg`} />
        <NavigationLink />
        <h3>Connect</h3>
        <a
          href="https://twitter.com/ymgsknt"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
        </a>
        <a
          href="https://github.com/k1105/udonic_algorithm/"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>
        <p>©︎ Kanata Yamagishi</p>
      </footer>
    </div>
  );
};
