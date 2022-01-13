const styles = {
  container: {
    marginTop: "30px",
    marginBottom: "50px",
    display: "flex",
    justifyContent: "space-between",
  },
  link: {
    display: "inline-block",
    fontFamily: "eurostile-extended, sans-serif",
    fontWeight: 400,
    fontStyle: "normal",
  },
};

export const Pagination = () => {
  return (
    <div style={styles.container}>
      <a style={styles.link} href="#" target="_blank" rel="noopener noreferrer">
        &lt; Prev
      </a>
      <a style={styles.link} href="#" target="_blank" rel="noopener noreferrer">
        Next &gt;
      </a>
    </div>
  );
};
