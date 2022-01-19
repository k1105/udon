import { Link } from "react-router-dom";
import styled from "styled-components";

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
};

export const NavigationLink = () => {
  return (
    <div style={styles.container}>
      <hr style={styles.hr} />
      <NavigationList>
        <ul>
          <li className="left">
            <Link style={styles.link} to="/">
              SKETCH
            </Link>
          </li>
          <li className="center">
            <Link style={styles.link} to="/thesis">
              THESIS
            </Link>
          </li>
          <li className="right">
            <Link style={styles.link} to="/about">
              ABOUT
            </Link>
          </li>
        </ul>
      </NavigationList>
    </div>
  );
};

const NavigationList = styled.nav`
  li {
    list-style: none;
  }

  ul {
    display: flex;
    justify-content: space-between;
  }

  .left {
    text-align: left;
  }
  .center {
    text-align: center;
  }
  .right {
    text-align: right;
  }
`;
