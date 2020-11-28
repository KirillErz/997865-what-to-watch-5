import React from "react";
import PropTypes from "prop-types";
import StartScreen from "../start-screen/start-screen";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import AuthScreen from "../auth-screen/auth-screen";
import MovieScreenList from "../movies-my-list/movies-my-list";
import MovieScreen from "../movie-screen/movie-screen";
import MovieAddReview from "../movie-add-review/movie-add-review";
import Player from "../player/player"



const App = (props) => {
  const {promo, films, filmDetail} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact path="/"
          render={({history}) => (
            <StartScreen
              films={films}
              promo={promo}
              history={history}
            />
          )}
        />
        <Route
          exact path="/login"
          render={({history})=> (
            <AuthScreen
              history={history}
            />
          )}
        />
        <Route exact path="/mylist"
          render={({history})=> (
            <MovieScreenList
              films={films}
              history={history}
            />
          )}
        />
        <Route
          exact
          path="/films/:id"
          render={({match, history}) => (
            <MovieScreen
              films={films}
              filmId={match.params.id}
              filmDetail={filmDetail}
              history={history}
            />
          )}
        />
        <Route
          exact
          path="/films/:id/review"
          render={({match ,history}) => (
            <MovieAddReview
              filmid={match.params.id}
              history={history}
            />
          )}
        />
        <Route
          exact path="/player/:id"
          render={({match ,history}) => (
            <Player
              id={match.params.id}
              history={history}
              promo={promo}
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
