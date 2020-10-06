
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const Properties = {
  genre: `comedy`,
  releaseDate: 1922
};

ReactDOM.render(
    <App
      properties={Properties}
    />,
    document.querySelector(`#root`)
);
