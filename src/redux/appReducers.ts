import { combineReducers } from "redux";
import apiReducer from "./usersReducer";

export const rootReducer = combineReducers({
  apiReducer: apiReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
