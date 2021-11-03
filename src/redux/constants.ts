export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const FETCH_DATA = "FETCH_DATA";

export enum ActionTypes {
  FETCH_START = "FETCH_START",
  FETCH_SUCCESS = "FETCH_SUCCESS",
  FETCH_FAILURE = "FETCH_FAILURE",
  FETCH_DATA = "FETCH_DATA",
}

export const NEW_USER = "NEW_USER";

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
  type: ActionTypes.FETCH_DATA;
  payload: string;
}

export type Action =
  | FetchStartAction
  | FetchSuccessAction
  | FetchFailure
  | NewUser;
