import {extend} from "../utils";
import {ActionType} from "./action";
import films from "../mocks/films";

const initialState = {
  moviesList: films,
  activeGenre:`All genres`
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.MOVIE_FILTER:
      const filteredMovies = action.genre === initialState.activeGenre ? films : films.filter((film) => {return String(film[`genre`]).toLowerCase().indexOf(action.genre.toLowerCase()) > -1})

      return extend(state, { moviesList: filteredMovies, activeGenre: action.genre})
  }

  return state;
};


export {reducer};
