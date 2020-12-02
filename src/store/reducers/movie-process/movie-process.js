import {extend, getGenresInMovies} from "../../../utils";
import {ActionType} from "../../action";
import {MAX_SHOW_MOVIES_COUNT} from "../../../const";

const initialState = {
  activeGenre: `All genres`,
  genres: [],
  moviesRendered: MAX_SHOW_MOVIES_COUNT
};

const moviesProcess = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.MOVIE_FILTER:
      return extend(state, {activeGenre: action.genre});
    case ActionType.SHOW_MORE_MOVIES:
      return extend(state, {moviesRendered: state.moviesRendered + action.quantityMovies});
    case ActionType.GENERATE_GENRES:
      return extend(state, {genres: getGenresInMovies(action.payload)});
  }
  return state;
};

export {moviesProcess};
