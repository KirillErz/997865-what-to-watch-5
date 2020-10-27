import React from "react";
import PropTypes from "prop-types";
import StartScreen from "../start-screen/start-screen";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import AuthScreen from "../auth-screen/auth-screen";
import MovieScreenList from "../movies-my-list/movies-my-list";
import MovieScreen from "../movie-screen/movie-screen";
import MovieAddReview from "../movie-add-review/movie-add-review";
import MoviePlayer from "../movie-player/movie-player";


const App = (props) => {
  const {promo, films, filmDetail} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <StartScreen
            films={films}
            promo={promo}
          />
        </Route>
        <Route exact path="/login">
          <AuthScreen />
        </Route>
        <Route exact path="/mylist">
          <MovieScreenList films={films} />
        </Route>
        <Route
          exact
          path="/films/:id"
          render={({match}) => (
            <MovieScreen
              films={films}
              filmId={match.params.id}
              filmDetail={filmDetail}
            />
          )}
        />
        <Route
          exact
          path="/films/:id/review"
          render={({match}) => (
            <MovieAddReview
              filmid={match.params.id}
            />
          )}
        />
        <Route exact path="/player/:id">
          <MoviePlayer />
        </Route>
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
