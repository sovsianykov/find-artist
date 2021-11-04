import React from 'react';
import AddUsersForm from "../../components/AddUsersForm/AddUsersForm";
import AccordionApp from "../../shared/components/Acordion/AcordionApp";
import {useFetch} from "../../hooks/useFetch";

const MainList = () => {

    const {users, loading,error} = useFetch()

    console.log("state is", users)
     if (loading ) {
         return (
             <h1>Loading ...</h1>
         )
     }
    if (error ) {
        return (
            <h1>Something vent wrong ...</h1>
        )
    }
    return (
        <div>
          <AddUsersForm title={"Create a new User"}/>
          <AccordionApp users={users}/>
        </div>
    );
};

export default MainList;