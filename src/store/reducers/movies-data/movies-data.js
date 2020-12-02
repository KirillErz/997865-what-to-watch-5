import {extend} from "../../../utils";
import {ActionType} from "../../action";

const initialState = {
  promoMovie: {},
  movie: null,
  moviesList: [],
  reviews: []

};

const moviesData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_MOVIES:
      return extend(state, {moviesList: action.payload});
    case ActionType.LOAD_MOVIES_PROMO:
      return extend(state, {promoMovie: action.payload});
    case ActionType.LOAD_MOVIE:
      return extend(state, {movie: action.payload});
  }
  return state;
};


export {moviesData};
