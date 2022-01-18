import { NavigationLink } from "./components/NavigationLink";
import { Footer } from "./Footer";

import styled from "styled-components";
import Color from "./const/Color";

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

export const About = () => {
  return (
    <div css="margin-top:100px">
      <div>
        <NavigationLink />
        <div>
          <ContentText>
            知人の依頼で、遺伝（いでん）的アルゴリズムを用いた形状自動生成のシステムを作っている傍ら息抜きに始めた。
            ベジェ曲線でベジェベジェやってみたかった 目的:
            experimentalな意味合いが強いので、ひとつ一つに明確な意義、目的は設定されていない。今後のためのアセット。
          </ContentText>
        </div>
        <Footer />
      </div>
    </div>
  );
};

const ContentText = styled.p`
  color: ${Color.WHITE};
`;
