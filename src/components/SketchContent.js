import styled from "styled-components";
import Color from "../const/Color";

export const SketchContent = ({ date, title, number }) => {
  return (
    <div>
      <SketchLink>
        <a className="container">
          <div>
            <p>{date}</p>
            <h2>{title}</h2>
          </div>
          <div className="right">
            <h1>{number}</h1>
          </div>
        </a>
        <hr />
      </SketchLink>
    </div>
  );
};

const SketchLink = styled.div`
  .container {
    display: flex;
    justify-content: space-between;
  }
  .right {
    text-align: right;
  }
  h2 {
    font-family: eurostile-extended, sans-serif;
    font-weight: 900;
    font-style: normal;
    color: ${Color.WHITE};
    margin-bottom: 0px;
    margin-top: 0px;
  }
  h1 {
    font-family: eurostile-extended, sans-serif;
    font-weight: 900;
    font-style: normal;
    color: ${Color.WHITE};
    margin-bottom: 0px;
    margin-top: 0px;
  }
  hr {
    border: 1px solid #ebdfd0;
    margin-top: 0;
    margin-bottom: 0;
  }
  p {
    color: ${Color.WHITE};
    font-family: eurostile, sans-serif;
    font-weight: 400;
    font-style: normal;
    margin-bottom: -5px;
    margin-top: 0px;
  }
`;
