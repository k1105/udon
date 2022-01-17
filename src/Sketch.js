import { Link } from "react-router-dom";
import { SketchContent } from "./components/SketchContent";
import { Pagination } from "./lib/Pagination";

const styles = {
  container: {
    marginTop: "50px",
  },
};

export const Sketch = () => {
  return (
    <div style={styles.container}>
      <ul>
        <li>
          <div>
            <Link to="/13">
              <SketchContent title="Extention" number="13" date="2022.01.23" />
            </Link>
          </div>
        </li>
        <li>
          <div>
            <Link to="/25">
              <SketchContent
                title="ClickToExtend"
                number="25"
                date="2022.01.23"
              />
            </Link>
          </div>
        </li>
        <li>
          <div>
            <Link to="/01">
              <SketchContent title="SingleUdon" number="01" date="2022.01.23" />
            </Link>
          </div>
        </li>
        <li>
          <div>
            <Link to="/02">
              <SketchContent
                title="MultipleUdon"
                number="02"
                date="2022.01.23"
              />
            </Link>
          </div>
        </li>
        <li>
          <div>
            <Link to="/25">
              <SketchContent title="SpriteUdon" number="25" date="2022.01.23" />
            </Link>
          </div>
        </li>
      </ul>
      <Pagination />
    </div>
  );
};
