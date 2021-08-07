import axios from "axios";
import jwt_decode from "jwt-decode";

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

export const loginUserService = async (request) => {
  const LOGIN_API_ENDPOINT = "http://localhost:8085/api/v1/auth/login";
  console.log("Login user fetch");
  let encodedData =
    "Basic " + window.btoa(request.user.username + ":" + request.user.password);

  console.log(encodedData);
  const parameters = {
    method: "POST",
    mode: "cors",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST",
    headers: {
      Authorization: encodedData,
    },
  };

  return await fetch(LOGIN_API_ENDPOINT, parameters)
    .then((response) => {
      response.headers.forEach(function(val, key) {
        console.log(key + " -> " + val);
        if (key === "access-token") {
          localStorage.setItem("jwtToken", val);
        }
      });
      return response;
    })
    .then((response) => response.json())
    .then((json) => {
      console.log("api hit");
      console.log(json);
      return json;
    })
    .catch((err) => console.error("Caught error: ", err));
};
