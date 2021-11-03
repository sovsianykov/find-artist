import { ActionTypes } from "./constants";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { User } from "../models/models";

const usersCollectionRef = collection(db, "artists");

interface AllAssets {
  type: ActionTypes.FETCH_SUCCESS;
}
interface AllAssetsDispatch {
  dispatch: (arg: AllAssets) => { id: string }[];
}

export const fetchStart = () => {
  return { type: ActionTypes.FETCH_START };
};
export const fetchSuccess = () => {
  return async (dispatch: any) => {
    try {
      const data = await getDocs(usersCollectionRef);
      let response: { id: string }[] = [];
      if (data) {
        response = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      }
      dispatch({ type: ActionTypes.FETCH_SUCCESS, payload: response });
      console.log(data);
    } catch (e) {
      errorMessage();
    }
  };
};
function errorMessage() {
  return {
    type: ActionTypes.FETCH_FAILURE,
  };
}

export const createUser = (newUser: User) => {
  return async (dispatch: any) => {
    if (newUser.firstName && newUser.lastName) {
      await addDoc(usersCollectionRef, newUser);
      dispatch({ type: ActionTypes.CREATE_USER, payload: newUser });
    }
  };
};
export const deleteUser = (id:string) =>{
  return {
    type: ActionTypes.DELETE_USER,
    payload:id
  }
}