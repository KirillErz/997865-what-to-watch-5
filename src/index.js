
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import promo from "./mocks/promo";
import films from "./mocks/films";
import filmDetail from "./mocks/film-detail";


ReactDOM.render(
    <App
      promo={promo}
      films={films}
      filmDetail={filmDetail}
    />,
    document.querySelector(`#root`)
);
