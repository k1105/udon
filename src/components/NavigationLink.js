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
            <a
              style={styles.link}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              SKETCH
            </a>
          </li>
          <li style={styles.listCenter}>
            <a
              style={styles.link}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              THESIS
            </a>
          </li>
          <li style={styles.listRight}>
            <a
              style={styles.link}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              ABOUT
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
