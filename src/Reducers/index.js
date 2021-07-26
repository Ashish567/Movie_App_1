import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer";
import register from "./registerReducer";
import login from "./loginReducer";
import selectedMovie from "./selectedMovie";

export default combineReducers({
  movies: moviesReducer,
  register,
  login,
  movie: selectedMovie,
});
