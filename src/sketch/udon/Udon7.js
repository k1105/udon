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

  let num;
  const pi = Math.PI;
  const w = window.innerWidth;
  const h = window.innerHeight;
  let angle;
  let delta;
  let offset;
  const anchor = [];
  let next;
  let k, r, theta, position;

  p.setup = () => {
    num = 30;
    p.createCanvas(w, h);
    p.stroke(255, 255, 230);
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
      next = (i + 1) % num;
      anchor[i].updateAngle(anchor[i].initAngle + 2 * pi * p.sin(delta));
    }

    // draw Udon
    for (let i = 0; i < num - 1; i++) {
      next = (i + 1) % num;

      p.push();
      if (i == 0 || i == num - 1) {
        p.strokeCap(p.ROUND);
      } else {
        p.strokeCap(p.SQUARE);
      }
      p.strokeWeight(21);
      p.stroke(100, 100, 100);
      bezierFromAnchor(anchor[i], anchor[next]);
      p.pop();

      bezierFromAnchor(anchor[i], anchor[next]);
    }
  };

  const resetPosition = () => {
    for (let i = 0; i < num; i++) {
      k = p.random();
      r = 300 * k;
      theta = pi * 2 * p.random();
      position = [r * p.cos(theta) + w / 2, r * p.sin(theta) + h / 2];
      anchor[i] = new Anchor(
        position,
        100,
        k * (theta + pi / 2) + (1 - k) * (2 * pi * p.random())
      );
    }
  };

  const bezierFromAnchor = (a0, a1) => {
    p.bezier(
      a0.position[0],
      a0.position[1],
      a0.oppositeHandle[0],
      a0.oppositeHandle[1],
      a1.handle[0],
      a1.handle[1],
      a1.position[0],
      a1.position[1]
    );
  };
};
