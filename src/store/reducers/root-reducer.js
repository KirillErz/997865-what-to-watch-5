import {combineReducers} from "redux";
import {moviesData} from "../reducers/movies-data/movies-data";
import {moviesProcess} from "../reducers/movie-process/movie-process";
import {user} from "./user/user";

export const NameSpace = {
  DATA: `DATA`,
  PROCESS: `PROCESS`,
  USER: `USER`
};

export default combineReducers({
  [NameSpace.DATA]: moviesData,
  [NameSpace.PROCESS]: moviesProcess,
  [NameSpace.USER]: user,
});
