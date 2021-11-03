import React, {useEffect, useState} from 'react';
import {User, Users} from "../../models/models";
import {db} from "../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore"
import AddUsersForm from "../../components/AddUsersForm/AddUsersForm";
import AccordionApp from "../../shared/components/Acordion/AcordionApp";
import {useDispatch} from "react-redux";
import {fetchSuccess} from "../../redux/actions";
import {useTypesSelector} from "../../hooks/useTypesSelector";

const MainList = () => {

    // const [users, setUsers] = useState<User[]|any[]>([])
    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(fetchSuccess())
    },[dispatch])
    const { users , loading, error } = useTypesSelector(state => state.apiReducer)
    console.log("state is", users)
     if (loading ) {
         return (
             <h1>Loading ...</h1>
         )
     }
    return (
        <div>
          <AddUsersForm/>
          <AccordionApp users={users}/>
        </div>
    );
};

export default MainList;