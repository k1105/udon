import { SketchLink } from "./SketchLink";
import { NavigationLink } from "../components/NavigationLink";
import { Footer } from "../Footer";

export const SketchContent = () => {
  return (
    <div>
      <div className="hide-on-mobile">
        <NavigationLink />
        <SketchLink />
        <Footer />
      </div>
      <p>HogeHoge~</p>
    </div>
  );
};
