import React, {useEffect, useState} from 'react';
import {User, Users} from "../../models/models";
import {db} from "../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore"
import AddUsersForm from "../../components/AddUsersForm/AddUsersForm";
import AccordionApp from "../../shared/components/Acordion/AcordionApp";

const MainList = () => {

    const [users, setUsers] = useState<User[]|any[]>([])
    const usersCollectionRef = collection(db,"artists")
    useEffect(() =>{
        const getUsers = async () => {
          const data = await getDocs(usersCollectionRef);
          if (data) {
          setUsers(data.docs.map((doc) =>({...doc.data(),id:doc.id})))}
          console.log(data)

        }
        getUsers()
    },[])
    console.log(users)

    return (
        <div>
          <AddUsersForm/>
          <AccordionApp users={users}/>
        </div>
    );
};

export default MainList;