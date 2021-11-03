import {useDispatch} from "react-redux";
import {useEffect} from "react";
import { fetchStart, fetchSuccess} from "../redux/actions";
import { useTypesSelector } from "./useTypesSelector";


export const useFetch = () =>{
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(fetchStart())
        dispatch(fetchSuccess())
        // dispatch(errorMessage())
    },[dispatch])

    const { users , loading, error } = useTypesSelector(state => state.apiReducer)

    return { users , loading, error }
}