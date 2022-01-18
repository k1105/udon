import { Link } from "react-router-dom";
import { SketchLinkUnit } from "./SketchLinkUnit";
import { Pagination } from "../lib/Pagination";
import Data from "../data.json";
import { useEffect, useState } from "react";

const styles = {
  container: {
    marginTop: "50px",
  },
};

export const SketchLink = () => {
  const numOfContents = 5;
  const [prevDisable, setPrevDisable] = useState(false);
  const [nextDisable, setNextDisable] = useState(false);
  const [contents, setContents] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count >= 0 && count * numOfContents < Data.sketch.length) {
      setContents(
        Data.sketch.slice(count * numOfContents, (count + 1) * numOfContents)
      );
    }

    if (count == 0) {
      setPrevDisable(true);
    } else {
      setPrevDisable(false);
    }
    if ((count + 1) * numOfContents > Data.sketch.length) {
      setNextDisable(true);
    } else {
      setNextDisable(false);
    }
  }, [count]);
  return (
    <div style={styles.container}>
      <ul>
        {contents.map((data) => {
          return (
            <li>
              <div>
                <Link to="/13">
                  <SketchLinkUnit
                    title={data.title}
                    number={data.number}
                    date={data.date}
                  />
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
      <Pagination
        count={count}
        setCount={setCount}
        prevDisable={prevDisable}
        nextDisable={nextDisable}
      />
    </div>
  );
};
