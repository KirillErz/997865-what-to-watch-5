import {extend} from "../utils";
import {ActionType} from "./action";
import films from "../mocks/films";
import {MAX_SHOW_MOVIES_COUNT} from "../const";

const initialState = {
  moviesList: films,
  activeGenre: `All genres`,
  showMoviesCount: MAX_SHOW_MOVIES_COUNT
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.MOVIE_FILTER:
      if (action.genre === `All genres`) {
        return extend(state, {moviesList: films, activeGenre: action.genre, showMoviesCount: MAX_SHOW_MOVIES_COUNT});
      } else {
        const filteredMovies = films.filter((movie) => movie.genre === action.genre);
        return extend(state, {moviesList: filteredMovies, activeGenre: action.genre, showMoviesCount: MAX_SHOW_MOVIES_COUNT});
      }
    case ActionType.SHOW_MORE_MOVIES:
      return extend(state, {
        showMoviesCount: state.showMoviesCount + action.quantityMovies,
      });
  }

  return state;
};


export {reducer};
