export const ActionType = {
  MOVIE_FILTER: `MOVIE_FILTER`,
  SHOW_MORE_MOVIES: `SHOW_MORE_MOVIES`
};

export const ActionCreator = {
  setFilterMovie: (feature) => ({
    type: ActionType.MOVIE_FILTER,
    genre: feature,
  }),

  addMoreMovies: (quantity) => ({
    type: ActionType.SHOW_MORE_MOVIES,
    quantityMovies: quantity
  })
};
