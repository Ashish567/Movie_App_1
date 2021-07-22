import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer";
import register from "./registerReducer";
import login from "./loginReducer";

export default combineReducers({
  movies: moviesReducer,
  register,
  login,
});
