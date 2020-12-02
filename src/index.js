
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {requireAuthorization} from "./store/action";
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import rootReducer from "./store/reducers/root-reducer";
import {AuthorizationStatus} from "./const";
import {fetchMoviesList, fetchPromoMovie} from "./store/api-actions";

const api = createAPI(() => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)));

const store = createStore(rootReducer, applyMiddleware(thunk.withExtraArgument(api)));


Promise.all([
  store.dispatch(fetchMoviesList()),
  store.dispatch(fetchPromoMovie())
]).then(() => {
  ReactDOM.render(
      <Provider store={store}>
        <App
        />,
      </Provider>,
      document.querySelector(`#root`)
  );
});


