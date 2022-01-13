import "./App.css";
import { NavigationLink } from "./components/NavigationLink";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <link rel="stylesheet" href="https://use.typekit.net/gql6nvy.css" />
      </header>
      <div>
        <NavigationLink />
        <ul>
          <li>
            <div>
              <p>2022.01.23</p>
              <h2>Extention</h2>
              <h1>13</h1>
            </div>
          </li>
          <li>
            <div>
              <p>2022.01.23</p>
              <h2>ClickToExtend</h2>
              <h1>25</h1>
            </div>
          </li>
          <li>
            <div>
              <p>2022.01.23</p>
              <h2>SingleUdon</h2>
              <h1>01</h1>
            </div>
          </li>
          <li>
            <div>
              <p>2022.01.23</p>
              <h2>MultipleUdon</h2>
              <h1>02</h1>
            </div>
          </li>
          <li>
            <div>
              <p>2022.01.23</p>
              <h2>SpriteUdon</h2>
              <h1>25</h1>
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
}

export default App;
