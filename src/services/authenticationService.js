import axios from "axios";

export const registerUserService = (request) => {
  const REGISTER_API_ENDPOINT = "http://localhost:8085/api/v1/signup/";
  console.log("body");
  console.log(JSON.stringify(request.user));
  const parameters = {
    method: "POST",
    "Access-Control-Allow-Origin": "*",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...request.user }),
  };
  console.log("hitting the api...");
  fetch(REGISTER_API_ENDPOINT, parameters)
    .then((response) => {
      console.log("result");
      console.log(response);
      return response.json();
    })
    .then((json) => {
      console.log(json);
      return json;
    })
    .catch((err) => console.error("Caught error: ", err));
};

export const loginUserService = (request) => {
  const LOGIN_API_ENDPOINT = "http://localhost:8085/api/v1/auth/login";
  console.log("Login user fetch");
  console.log(request.user.username);
  console.log(request.user.password);
  console.log();
  let encodedData =
    "Basic " + window.btoa(request.user.username + ":" + request.user.password);

  console.log(encodedData);
  const parameters = {
    method: "POST",
    "Access-Control-Allow-Origin": "*",
    headers: {
      "Content-Type": "application/json",
      authorization: encodedData,
    },
    // body: JSON.stringify(request.user),
  };

  return fetch(LOGIN_API_ENDPOINT, parameters)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log(json);
      return json;
    });
};
