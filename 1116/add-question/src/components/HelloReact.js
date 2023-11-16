import React from "react";
import useChangeColor from "../hooks/useChangeColor";

function HelloReact() {
  useChangeColor("title");
  return <h2 id="title">나는 엘리스에서 열공중!</h2>;
}

export default HelloReact;
