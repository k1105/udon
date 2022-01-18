import { NavigationLink } from "./components/NavigationLink";
import { Footer } from "./Footer";
const styles = {
  title: {
    color: "#EBDFD0",
    marginTop: "30px",
    marginBottom: "10px",
  },
  credit: {
    color: "#EBDFD0",
    fontSize: "0.5rem",
    textAlign: "center",
    margin: "10px 0",
  },
  link: {
    display: "inline-block",
    marginBottom: "5px",
    fontSize: "0.9rem",
  },
};

export const Thesis = () => {
  return (
    <div>
      <NavigationLink />
      <div>
        <p>hogehoge</p>
      </div>
      <Footer />
    </div>
  );
};
