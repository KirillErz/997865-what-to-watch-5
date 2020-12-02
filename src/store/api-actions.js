import {loadMovies, loadPromoMovie, generateGenresBar, loadMovie} from "./action";

export const fetchMoviesList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => {
      dispatch(loadMovies(data));
      dispatch(generateGenresBar(data));
    })
);

export const fetchPromoMovie = () => (dispatch, _getState, api) => (
  api.get(`/films/promo`)
    .then(({data}) => dispatch(loadPromoMovie(data)))
);

export const fetchFilm = (id) => (dispatch, _getState, api) => (
  api.get(`/films/${id}`)
    .then(({data}) => {
      dispatch(loadMovie(data));
    })
    .catch(() => {
      throw Error(`Ошибка загруки фильма`);
    })
);
