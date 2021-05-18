import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import admin from "./admin/reducer";
export default combineReducers({
  appState,
  user,
  admin,
});
