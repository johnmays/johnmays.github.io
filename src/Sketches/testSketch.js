import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";

function sketch(p5) {
  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL);
  };

  p5.draw = () => {
    p5.background(5,5,5);
    p5.normalMaterial();
    p5.push();
    p5.rotateZ(p5.frameCount * 0.01);
    p5.rotateX(p5.frameCount * 0.01);
    p5.rotateY(p5.frameCount * 0.01);
    p5.plane(100);
    p5.pop();
  };
}

export default function testSketch() {
  return <ReactP5Wrapper sketch={sketch} />;
}