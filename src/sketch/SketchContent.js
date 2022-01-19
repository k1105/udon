import { SketchLink } from "./SketchLink";
import { NavigationLink } from "../components/NavigationLink";
import { Footer } from "../Footer";
import { circle } from "./circle";
import { Canvas } from "../components/Canvas";
import styled from "styled-components";
export const SketchContent = () => {
  return (
    <div>
      <div className="hide-on-mobile">
        <NavigationLink />
        <SketchLink />
        <Footer />
      </div>
      <CanvasContainer>
        <Canvas sketch={circle} />
      </CanvasContainer>
    </div>
  );
};

const CanvasContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;
