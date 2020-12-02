export const ActionType = {
  MOVIE_FILTER: `MOVIE_FILTER`,
  SHOW_MORE_MOVIES: `SHOW_MORE_MOVIES`,
  LOAD_MOVIES: `LOAD_MOVIES`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  LOAD_MOVIES_PROMO: `LOAD_MOVIES_PROMO`,
  GENERATE_GENRES: `GENERATE_GENRES`,
  LOAD_MOVIE: `LOAD_MOVIE`,
};


export const generateGenresBar = (movies) => ({
  type: ActionType.GENERATE_GENRES,
  payload: movies,
});

export const setFilterMovie = (feature) => ({
  type: ActionType.MOVIE_FILTER,
  genre: feature,
});

export const addMoreMovies = (quantity) => ({
  type: ActionType.SHOW_MORE_MOVIES,
  quantityMovies: quantity
});

export const loadMovies = (movies) => ({
  type: ActionType.LOAD_MOVIES,
  payload: movies
});

export const loadMovie = (movie) => ({
  type: ActionType.LOAD_MOVIE,
  payload: movie
});

export const loadPromoMovie = (promoMovie) => ({
  type: ActionType.LOAD_MOVIES_PROMO,
  payload: promoMovie
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});
