import axios1 from "axios";
import axios from "../config/Api";
import { SEND_EMAIL, ADD_USER, ADD_ADMIN } from "../types";
import { setAuthTokenHeader } from "../utils/authTokenHeader";

export default function sendEmail(recipientMail) {
  return async function(dispatch) {
    return await axios.post("/signin", {
      recipientMail
    });
  };
}

export function getUsers() {
  return async function(dispatch) {
    const res = await axios.get("/users");
    dispatch({ type: ADD_USER, payload: res.data.users });
  };
}

export function register(user) {
  return async function(dispatch) {
    const res = await axios.post("/register", user);
    return Promise.resolve();
  };
}

export function getUsersByFilter(filters) {
  return async function(dispatch) {
    const res = await axios.get("/users");
    const user = res.data.users;
    const updateUser =
      user &&
      user
        .filter(pageData => pageData["name"].includes(filters.name))
        .filter(pageData =>
          filters.location !== ""
            ? pageData["location"] === filters.location
            : pageData
        )
        .filter(pageData =>
          filters.experience !== ""
            ? pageData["experience"] === filters.experience
            : pageData
        )
        .filter(pageData =>
          filters.department !== ""
            ? pageData["department"] === filters.department
            : pageData
        );
    console.log("API value", filters);
    dispatch({ type: ADD_USER, payload: updateUser });
    return Promise.resolve();
  };
}

export function update(id, user) {
  return async function(dispatch) {
    const res = await axios.patch(`/register/${id}`, user);
    return Promise.resolve();
  };
}

export function getUser(id) {
  return async function(dispatch) {
    const res = await axios.get(`/users/${id}`);
    return Promise.resolve(res.data);
  };
}

export function delUser(id) {
  return async function(dispatch) {
    const res = await axios.delete(`/register/${id}`);
    return getUsers;
  };
}

export function addadmin(admin) {
  return async function(dispatch) {
    const res = await axios.post("/addadmin", admin);
    return Promise.resolve();
  };
}

export function logInUser(userData) {
  return async function(dispatch) {
    // const res = await axios.post("/addadmin", admin);
    const response = await axios.post("/subadminLogin", userData);
    const { token } = response.data;
    localStorage.setItem("jwtToken", token);
    setAuthTokenHeader(token);
    const decoded = jwt_decode(token);
    dispatchEvent(setCurrentUser(decoded));
    return Promise.resolve();
  };
}

export function logInAdmin(userData) {
  return async function(dispatch) {
    // const res = await axios.post("/addadmin", admin);
    const response = await axios.post("/logIn", userData);
    const { token } = response.data;
    localStorage.setItem("jwtToken", token);
    setAuthTokenHeader(token);
    const decoded = jwt_decode(token);
    dispatchEvent(setCurrentUser(decoded));
    return Promise.resolve();
  };
}

export const setCurrentUser = decoded => {
  return {
    type: "SET_CURRENT_USER",
    payload: decoded
  };
};

export const logOutUser = dispatchEvent => {
  localStorage.removeItem("jwtToken");
  setAuthTokenHeader(false);
  dispatchEvent(setCurrentUser({}));
};
