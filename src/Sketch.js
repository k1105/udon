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
            <SketchContent title="MultipleUdon" number="02" date="2022.01.23" />
          </div>
        </li>
        <li>
          <div>
            <SketchContent title="SpriteUdon" number="25" date="2022.01.23" />
          </div>
        </li>
      </ul>
      <Pagination />
    </div>
  );
};
