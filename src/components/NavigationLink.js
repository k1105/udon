import { Link } from "react-router-dom";

const styles = {
  container: {
    marginTop: "30px",
  },
  hr: {
    border: "2px solid #EBDFD0",
  },
  link: {
    fontFamily: "eurostile-extended, sans-serif",
    fontWeight: 900,
    fontStyle: "normal",
  },
  listWrapper: {
    display: "flex",
    justifyContent: "space-between",
  },
  listLeft: {
    textAlign: "left",
  },
  listCenter: {
    textAlign: "center",
  },
  listRight: {
    textAlign: "right",
  },
};

export const NavigationLink = () => {
  return (
    <div style={styles.container}>
      <hr style={styles.hr} />
      <nav>
        <ul style={styles.listWrapper}>
          <li style={styles.listLeft}>
            <Link style={styles.link} to="/">
              SKETCH
            </Link>
          </li>
          <li style={styles.listCenter}>
            <Link style={styles.link} to="/thesis">
              THESIS
            </Link>
          </li>
          <li style={styles.listRight}>
            <Link style={styles.link} to="/about">
              ABOUT
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
