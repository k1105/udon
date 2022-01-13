const styles = {
  title: {
    fontFamily: "eurostile-extended, sans-serif",
    fontWeight: 900,
    fontStyle: "normal",
    color: "#EBDFD0",
    marginBottom: "0px",
    marginTop: "0px",
  },

  number: {
    fontFamily: "eurostile-extended, sans-serif",
    fontWeight: 900,
    fontStyle: "normal",
    color: "#EBDFD0",
    marginBottom: "0px",
    marginTop: "0px",
  },

  date: {
    color: "#EBDFD0",
    fontFamily: "eurostile, sans-serif",
    fontWeight: 400,
    fontStyle: "normal",
    marginBottom: "-5px",
    marginTop: "0px",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
  },
  right: {
    textAlign: "right",
  },
};

export const SketchContent = ({ date, title, number }) => {
  return (
    <div>
      <div style={styles.container}>
        <div>
          <p style={styles.date}>{date}</p>
          <h2 style={styles.title}>{title}</h2>
        </div>
        <div style={styles.right}>
          <h1 style={styles.number}>{number}</h1>
        </div>
      </div>
    </div>
  );
};
