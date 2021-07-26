import { GET_MOVIE } from "../types";

const initialState = {
  movie: [],
  loading: true,
};

export default function(state = initialState, action) {
  console.log("action");
  console.log(action);
  switch (action.type) {
    case GET_MOVIE:
      return {
        ...state,
        movie: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
