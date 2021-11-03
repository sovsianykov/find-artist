import React, { FunctionComponent, useMemo } from "react";
import { User } from "../../../models/models";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Avatar, Button } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import emptyAvatar from "../../../assets/avatars/emptyAvatar.png";
import { updateDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import { useDispatch } from "react-redux";
import { fetchSuccess, fetchStart } from "../../../redux/actions";

interface AccordionItemProps {
  user: User;
}

const AccordionItem: FunctionComponent<AccordionItemProps> = ({ user }) => {
  const dispatch = useDispatch();
  const avatar = useMemo(() => {
    return user.avatarUrl === "" ? emptyAvatar : user.avatarUrl;
  }, [user.avatarUrl]);

  const updateUser = async (value: any) => {
    const userDoc = doc(db, "artists", user.id);
    await updateDoc(userDoc, { firstName: "Vlad" });
  };
  const deleteUser = async () => {
    const userDoc = doc(db, "artists", user.id);
    await deleteDoc(userDoc);
    dispatch(fetchStart());
    dispatch(fetchSuccess());
  };
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Avatar src={avatar} alt={user.lastName} />
        <Typography>
          {user.firstName} {user.lastName}{" "}
        </Typography>
        <Typography variant="subtitle1" color="primary">
          {user.instrument}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          {user.description}
          {user.phone}
        </Typography>
        <Button variant="text" color="secondary" onClick={updateUser}>
          <Edit />
        </Button>
        <Button variant="text" color="secondary" onClick={deleteUser}>
          <Delete />
        </Button>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionItem;
