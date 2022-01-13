import { NavigationLink } from "./components/NavigationLink";

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

export const Footer = () => {
  return (
    <div>
      <footer>
        <img src={`${process.env.PUBLIC_URL}/udon_like_algo.svg`} />
        <NavigationLink />
        <h3 style={styles.title}>Connect</h3>
        <a
          style={styles.link}
          href="https://twitter.com/ymgsknt"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter: @ymgsknt
        </a>
        <div>
          <a
            style={styles.link}
            href="https://github.com/k1105/udonic_algorithm/"
            target="_blank"
            rel="noopener noreferrer"
          >
            github: @k1105
          </a>
        </div>
        <p style={styles.credit}>©︎ Kanata Yamagishi</p>
      </footer>
    </div>
  );
};
