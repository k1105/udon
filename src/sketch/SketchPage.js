import { SketchLink } from "./SketchLink";
import { NavigationLink } from "../components/NavigationLink";
import { Footer } from "../Footer";

export const SketchPage = () => {
  return (
    <div>
      <NavigationLink />
      <SketchLink />
      <Footer />
    </div>
  );
};
