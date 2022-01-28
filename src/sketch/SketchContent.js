import { SketchLink } from "./SketchLink";
import { NavigationLink } from "../components/NavigationLink";
import { Footer } from "../Footer";
import styled from "styled-components";
import { lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import ErrorBoundary from "../components/ErrorBoundary";

export const SketchContent = () => {
  const params = useParams();
  let Hoge = <div></div>;
  try {
    if (params.id[0] == 0) {
      Hoge = lazy(() => import("./udon/Udon" + params.id[1] + ".js"));
    } else {
      Hoge = lazy(() => import("./udon/Udon" + params.id + ".js"));
    }
  } catch (error) {
    console.log(error);
  }
  return (
    <div>
      <div className="hide-on-mobile">
        <NavigationLink />
        <SketchLink />
        <Footer />
      </div>
      <CanvasContainer>
        <Suspense fallback="loading">
          <ErrorBoundary>
            <Hoge />
          </ErrorBoundary>
        </Suspense>
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
