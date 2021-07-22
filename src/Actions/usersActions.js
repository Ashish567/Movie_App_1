import { GET_MOVIES, MOVIES_ERROR, FILTER_MOVIES } from "../types";
import axios from "axios";
// page=1&limit=20
export const getMovies = (options) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:8085/api/v1/movies?`, {
      params: {
        ...options,
      },
    });
    dispatch({
      type: GET_MOVIES,
      payload: res.data.movies,
    });
  } catch (e) {
    dispatch({
      type: MOVIES_ERROR,
      payload: console.log(e),
    });
  }
};

export const filterMovies = (options) => async (dispatch) => {
  console.log(options);
  try {
    const res = await axios.get(
      `http://localhost:8085/api/v1/movies?page=1&limit=20`,
      {
        params: {
          ...options,
        },
      }
    );
    // console.log
    console.log(res);
    dispatch({
      type: FILTER_MOVIES,
      payload: res.data.movies,
    });
  } catch (e) {
    dispatch({
      type: MOVIES_ERROR,
      payload: console.log(e),
    });
  }
};
