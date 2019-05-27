import { combineReducers } from "redux";
import users from "./users";
import admin from "./admin";
import authReducer from "./authReducer";

export default combineReducers({
  users,
  admin,
  auth: authReducer
});
