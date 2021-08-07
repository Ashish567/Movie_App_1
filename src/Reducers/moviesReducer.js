import { GET_MOVIES, FILTER_MOVIES } from "../types";

const initialState = {
  movies: [],
  loading: true,
};

export default function(state = initialState, action) {
  console.log("another reduces call");
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loading: false,
      };
    case FILTER_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
