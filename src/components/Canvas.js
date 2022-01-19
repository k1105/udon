import React, { useEffect } from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import { circle } from "../sketch/circle";

export const Canvas = () => {
  return <ReactP5Wrapper sketch={circle} />;
};
