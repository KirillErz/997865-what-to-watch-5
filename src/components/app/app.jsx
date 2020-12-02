import React from "react";
import PropTypes from "prop-types";
import StartScreen from "../start-screen/start-screen";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import AuthScreen from "../auth-screen/auth-screen";
import MovieScreenList from "../movies-my-list/movies-my-list";
import MovieScreen from "../movie-screen/movie-screen";
import MovieAddReview from "../movie-add-review/movie-add-review";
import Player from "../player/player";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact path="/"
          render={({history}) => (
            <StartScreen
              history={history}
            />
          )}
        />
        <Route
          exact path="/login"
          render={({history}) => (
            <AuthScreen
              history={history}
            />
          )}
        />
        <Route exact path="/mylist"
          render={({history}) => (
            <MovieScreenList
              history={history}
            />
          )}
        />
        <Route
          exact
          path="/films/:id"
          render={({match, history}) => (
            <MovieScreen
              id={parseInt(match.params.id, 10)}
              history={history}
            />
          )}
        />
        <Route
          exact
          path="/films/:id/review"
          render={({match, history}) => (
            <MovieAddReview
              id={match.params.id}
              history={history}
            />
          )}
        />
        <Route
          exact path="/player/:id"
          render={({match, history}) => (
            <Player
              id={parseInt(match.params.id, 10)}
              history={history}
            />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  promo: PropTypes.shape().isRequired,
  films: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  filmDetail: PropTypes.shape()
};

export default App;

