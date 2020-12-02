
export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const filterFilms = (films, activeGenre) => {
  if (activeGenre === `All genres`) {
    return films;
  } else {
    return films.filter((movie) => movie.genre === activeGenre);
  }
};

export const getGenresInMovies = (movie) => {
  return [`All genres`, ...new Set(movie.map((film) => film.genre))];
};
