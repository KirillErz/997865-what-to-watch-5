import React from "react";
import PropTypes from "prop-types";
import MovieCard from "../small-movie-card/small-movie-card";
import withActivMovieCard from "../../hocs/with-active-movie-card/with-active-movie-card/with-active-movie-card";

const MovieCardWrapped = withActivMovieCard(MovieCard);

const MovieList = (props) => {
  const {moviesList, showMoviesCount} = props;
  return (
    <div className="catalog__movies-list">
      {moviesList.slice(0, Math.min(moviesList.length, showMoviesCount)).map(film => (
        <MovieCardWrapped
          key={film.id}
          film={film}
        />
      ))}
    </div>
  );
};

MovieList.propTypes = {
  moviesList: PropTypes.array.isRequired,
  showMoviesCount: PropTypes.number.isRequired
};

export default MovieList;
