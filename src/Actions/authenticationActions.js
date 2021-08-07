import btoa from "btoa";
import axios from "axios";
import jwt_decode from "jwt-decode";
import * as types from ".././types";

export const registerUserAction = (user) => {
  return {
    type: types.REGISTER_USER,
    user,
  };
};

export const loginUserAction = (user) => {
  console.log("Logging in login Action");
  console.log(user);

  return {
    type: types.LOGIN_USER,
    user,
  };

  // axios
  // .post('http://localhost:8085/api/v1/auth/login', user)
  // .then(res => {
  //   // Save to localStorage
  //   const { token } = res.data;
  //   // Set token to ls
  //   localStorage.setItem('jwtToken', token);
  //   // Set token to Auth header
  //   setAuthToken(token);
  //   // Decode token to get user data
  //   const decoded = jwt_decode(token);
  //   // Set current user
  //   dispatch(setCurrentUser(decoded));
  // })
  // .catch(err =>
  //   dispatch({
  //     type: GET_ERRORS,
  //     payload: err.response.data
  //   })
  // );
};

// {
//   "Accept": "application/json;charset=UTF-8",
//   "authorization": "Basic ZGpkYXlyZWFtZXIuc2luZ2g0QGdtYWlsLmNvbToxMjM="
// }

// return {
//   type: types.LOGIN_USER,
//   user,
// };
