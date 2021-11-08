import * as React from "react";
import { FunctionComponent } from "react";
import { User } from "../../../models/models";
import AccordionItem from "./AccordionItem";

interface AccordionAppProps {
  users: User[] | any[];
}

const AccordionApp: FunctionComponent<AccordionAppProps> = ({ users }) => {
  return (
    <section>
      {users.map((user) => (
        <AccordionItem user={user} key={user.id} />
      ))}
    </section>
  );
};
export default AccordionApp;
