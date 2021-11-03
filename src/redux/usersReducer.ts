import {InitialState, initialUser, User} from "../models/models";
import {
  FETCH_FAILURE,
  FETCH_START,
  FETCH_SUCCESS,
  CREATE_USER, Action, DELETE_USER,
} from "./constants";

const initialState: InitialState = {
  users: [],
  loading: false,
  error: null,
  newUser: initialUser,
};

const userReducer = (state: InitialState = initialState, action: Action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: "something go wrong !",
      };
    case CREATE_USER:
      return {
        ...state,
        newUser: action.payload,
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user:User) =>  user.id !== action.payload)
      };
    default:
      return state;
  }
};
export default userReducer;
