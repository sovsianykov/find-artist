import {ActionTypes} from "./constants";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../firebase/firebase";


const usersCollectionRef = collection(db,"artists")

interface AllAssets {
    type: ActionTypes.FETCH_SUCCESS
}
interface AllAssetsDispatch {
    dispatch: (arg: AllAssets) => ({ id: string; }[])
}

 export const   fetchStart =()  =>{
        return {type: ActionTypes.FETCH_START};
    }
 export const fetchSuccess = () => {
        return async  (dispatch:any) => {
            const data = await getDocs(usersCollectionRef);
            let response: { id: string; }[] = []
            if (data) {
                 response =data.docs.map((doc) =>({...doc.data(),id:doc.id}))

            }
            dispatch({type: ActionTypes.FETCH_SUCCESS, payload: response})
            console.log(data)
        }
    }
     export const   errorMessage =()  =>{
        return {
            type: ActionTypes.FETCH_FAILURE,
            payload: "Something vent wrong!",
        };
    }
