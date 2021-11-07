import * as React from "react";
import { FunctionComponent } from "react";
import { User } from "../../../models/models";
import AccordionItem from "./AccordionItem";

interface AccordionAppProps {
  users: User[] | any[];
}

const AccordionApp: FunctionComponent<AccordionAppProps> = ({ users }) => {
  return (
    <>
      {users.map((user) => (
        <AccordionItem user={user} key={user.id} />
      ))}
    </>
  );
};
export default AccordionApp;
