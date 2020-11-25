import React from "react";
import PropTypes from "prop-types";
import MovieCard from "../small-movie-card/small-movie-card";
import withActivMovieCard from "../../hocs/with-active-movie-card/with-active-movie-card/with-active-movie-card";
import {MAX_SHOW_MOVIES_COUNT} from "../../const";
const MovieCardWrapped = withActivMovieCard(MovieCard);

const MovieListLikeThis = (props) => {
  const {moviesList, genre} = props;
  return (
    <div className="catalog__movies-list">
      {moviesList.filter((movie) => movie.genre === genre).slice(0, MAX_SHOW_MOVIES_COUNT).map(film => (
        <MovieCardWrapped
          key={film.id}
          film={film}
        />
      ))}
    </div>
  );
};

MovieListLikeThis.propTypes = {
  moviesList: PropTypes.array.isRequired,
  showMoviesCount: PropTypes.number.isRequired
};

export default MovieListLikeThis;
