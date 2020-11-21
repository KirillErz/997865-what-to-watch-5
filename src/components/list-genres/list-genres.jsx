import React from "react";
import PropTypes from "prop-types";
import films from "../../mocks/films";

const ListGenres = (props) => {
  const {activeGenre, handlerMoviefilter} = props;


  const arrGenres = [`All genres`, ...new Set(films.map((movie) => movie.genre))];
  return (
    <ul className="catalog__genres-list">
      {arrGenres.map((genre, i) => (
        <li key={`${genre}-${i}`} className={`catalog__genres-item ${activeGenre === genre ? `catalog__genres-item--active` : ``} `}>
          <a onClick={() => handlerMoviefilter(genre)} href="#" className="catalog__genres-link">{genre}</a>
        </li>
      ))}
    </ul>
  );
};

ListGenres.prototype = {
  activeGenre: PropTypes.string.isRequired,
  handlerMoviefilter: PropTypes.func.isRequired
};

export default ListGenres;


