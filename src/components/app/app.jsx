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
  const {properties} = props;
  const genre = properties.genre;
  const releaseDate = properties.releaseDate;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <StartScreen
            genre={genre}
            releaseDate={releaseDate}
          />
        </Route>
        <Route exact path="/login">
          <AuthScreen />
        </Route>
        <Route exact path="/mylist">
          <MovieScreenList />
        </Route>
        <Route exact path="/films/:id">
          <MovieScreen />
        </Route>
        <Route exact path="/films/:id/review">
          <MovieAddReview />
        </Route>
        <Route exact path="/player:id">
          <MoviePlayer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
// как сделать так что бы проверить сразу свойства объекта ?
App.propTypes = {
  properties: PropTypes.shape({
    genre: PropTypes.string,
    releaseDate: PropTypes.number
  })
};

export default App;
