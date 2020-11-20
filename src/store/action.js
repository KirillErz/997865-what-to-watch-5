export const ActionType = {
  MOVIE_FILTER: `MOVIE_FILTER`
};

export const ActionCreator = {
  setFilterMovie: (feature) => ({
    type: ActionType.MOVIE_FILTER,
    genre: feature,
  })
}
