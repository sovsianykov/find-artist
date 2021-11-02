import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FunctionComponent } from "react";
import {User} from "../../../models/models";
import AccordionItem from "./AccordionItem";

interface AccordionAppProps {
    users: User[] | any[]
}

 const AccordionApp:FunctionComponent<AccordionAppProps> =({users}) => {


    return (
        <div>
            {users.map((user) =>(<AccordionItem user={user} key={user.id}/>))}
        </div>
    );
}
export default AccordionApp;