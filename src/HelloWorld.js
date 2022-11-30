import React from "react";

function HelloWorld() {
  const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);
  return <h1>Hello Wold! {getRandom(-5, 5)}</h1>;
}
export default HelloWorld;
