export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const CREATE_USER = "CREATE_USER";
export const DELETE_USER = "DELETE_USER";


export enum ActionTypes {
  FETCH_START = "FETCH_START",
  FETCH_SUCCESS = "FETCH_SUCCESS",
  FETCH_FAILURE = "FETCH_FAILURE",
  CREATE_USER = "CREATE_USER",
  DELETE_USER = "DELETE_USER",
}



interface FetchStartAction {
  type: ActionTypes.FETCH_START;
}

interface FetchSuccessAction {
  type: ActionTypes.FETCH_SUCCESS;
  payload: any;
}
interface FetchFailure {
  type: ActionTypes.FETCH_FAILURE;
  payload: string;
}
interface NewUser {
  type: ActionTypes.CREATE_USER;
  payload: string;
}
interface DeleteUser {
  type: ActionTypes.DELETE_USER;
  payload: string;
}

export type Action =
  | FetchStartAction
  | FetchSuccessAction
  | FetchFailure
  | NewUser
  | DeleteUser;
