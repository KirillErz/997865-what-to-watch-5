import React from "react";
import films from "../../mocks/films";

const ListGenres = (props) => {
  const {activeGenre, handlerMoviefilter} = props;

  const copyFilms = Object.assign({}, films);
  let arrGenres = [];
  Object.keys(copyFilms).filter((key) => arrGenres.push(copyFilms[key].genre));
  arrGenres = Array.from(new Set(arrGenres));
  arrGenres.unshift(`All genres`);
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

export default ListGenres;
