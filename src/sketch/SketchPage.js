import { SketchLink } from "./SketchLink";
import { NavigationLink } from "../components/NavigationLink";
import { Footer } from "../Footer";
import styled from "styled-components";

export const SketchPage = () => {
  return (
    <div>
      <FullPage>
        <div className="child">
          <NavigationLink />
          <SketchLink />
        </div>
      </FullPage>
      <Footer />
    </div>
  );
};
const FullPage = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  .child {
    flex-grow: 1;
  }
`;
