import { ReactP5Wrapper } from "react-p5-wrapper";

const Canvas = () => {
  return <ReactP5Wrapper sketch={sketch} />;
};
export default Canvas;

export const sketch = (p) => {
  class Anchor {
    constructor(position, length, angle) {
      this.initPosition = position;
      this.initAngle = angle;
      this.angle = angle;
      this.initLength = length;
      this.length = length;
      this.position = position;
      this.handle = [
        length * p.cos(angle) + this.position[0],
        length * p.sin(angle) + this.position[1],
      ];
      this.oppositeHandle = [
        length * p.cos(angle + pi) + this.position[0],
        length * p.sin(angle + pi) + this.position[1],
      ];
    }

    updateAngle(angle) {
      // console.log(angle);
      this.angle = angle;
      this.updateHadle();
    }

    updateLength(length) {
      this.length = length;
      this.updateHadle();
    }

    updateHadle() {
      //private
      this.handle = [
        this.length * p.cos(this.angle) + this.position[0],
        this.length * p.sin(this.angle) + this.position[1],
      ];
      this.oppositeHandle = [
        this.length * p.cos(this.angle + pi) + this.position[0],
        this.length * p.sin(this.angle + pi) + this.position[1],
      ];
    }
  }

  const w = p.windowWidth;
  const h = p.windowHeight;
  const pi = Math.PI;
  let num = 1;
  const anchor = [];
  let angle = 0;
  let delta = 0;
  let offset = 0;

  p.setup = () => {
    p.createCanvas(w, h);
    p.stroke(234, 223, 208);
    p.strokeWeight(20);

    resetPosition();
    angle = pi / 4;
    delta = 0;
    offset = 30;
  };

  p.draw = () => {
    p.background(2, 63, 51);
    p.noFill();

    delta += 0.01;
    angle += (pi / 100) * p.noise(delta);

    for (let i = 0; i < num; i++) {
      anchor[i].updateAngle(anchor[i].angle + (pi / 100) * p.noise(delta));
    }

    // draw Udon
    for (let i = 0; i < num - 1; i++) {
      let next = (i + 1) % num;

      p.bezier(
        anchor[i].position[0],
        anchor[i].position[1],
        anchor[i].oppositeHandle[0],
        anchor[i].oppositeHandle[1],
        anchor[next].handle[0],
        anchor[next].handle[1],
        anchor[next].position[0],
        anchor[next].position[1]
      );
    }
  };

  p.mouseClicked = () => {
    num++;
    const anc = new Anchor([p.mouseX, p.mouseY], 300, pi * 2 * p.random());
    anchor.push(anc);
  };

  const resetPosition = () => {
    for (let i = 0; i < num; i++) {
      const position = [
        w * (p.random() - 0.5) + w / 2,
        h * (p.random() - 0.5) + h / 2,
      ];
      anchor[i] = new Anchor(position, 300, pi * 2 * p.random());
    }
  };
};
