import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { fetchStart, fetchSuccess } from "../redux/actions";
import { useDispatch } from "react-redux";

export  const useDelete = async (id: string) => {
  const dispatch = useDispatch();

    const userDoc = doc(db, "artists", id);
    await deleteDoc(userDoc);
    dispatch(fetchStart());
    dispatch(fetchSuccess());


};


