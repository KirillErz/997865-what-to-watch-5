import React from "react";
import PropTypes from "prop-types";
import MovieCard from "../small-movie-card/small-movie-card";

const MovieList = (props) => {
  const {moviesList, showMoviesCount} = props;
  return (
    <div className="catalog__movies-list">
      {moviesList.slice(0, Math.min(moviesList.length, showMoviesCount)).map(film => (
        <MovieCard
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
