
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import promo from "./mocks/promo";
import films from "./mocks/films";
import filmDetail from "./mocks/film-detail";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./store/reducer"

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
  <Provider store={store}>
    <App
      promo={promo}
      films={films}
      filmDetail={filmDetail}
    />,
    </Provider>,
    document.querySelector(`#root`)
);
