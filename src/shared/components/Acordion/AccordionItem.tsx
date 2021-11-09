import React, { FunctionComponent, useMemo } from "react";
import { User } from "../../../models/models";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Avatar, Button } from "@mui/material";
import { Delete, Edit, PhoneInTalkTwoTone } from "@mui/icons-material";
import emptyAvatar from "../../../assets/avatars/emptyAvatar.png";
import { updateDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import { useDispatch } from "react-redux";
import { fetchSuccess, fetchStart } from "../../../redux/actions";
import { makeStyles } from "@mui/styles";

interface AccordionItemProps {
  user: User;
}
const useStyles = makeStyles({
      rootWrapper: {
        width: "55vw"
      },
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: 450,
    height: "100%",
  },
  avatar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100px",
    height: "100%",
  },
  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
  },
  iconsWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    width: 100,
    height: "100%",
  },
  phone: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: 150,
    height: "100%",
  },
});

const AccordionItem: FunctionComponent<AccordionItemProps> = ({ user }) => {
  const classes = useStyles();
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
    <Accordion draggable className={classes.rootWrapper}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <section className={classes.root}>
          <div className={classes.avatar}>
            <Avatar src={avatar} alt={user.lastName} />
          </div>
          <Typography variant="subtitle1" color="success">
            {user.firstName} {user.lastName}{" "}
          </Typography>
          <Typography variant="subtitle1" color="primary">
            {user.instrument}
          </Typography>
          <Typography color="success">city : {user.city}</Typography>
        </section>
      </AccordionSummary>
      <AccordionDetails>
        <section className={classes.content}>
          <div className={classes.root}>
            <Typography variant="body1">{user.description}</Typography>
            <div className={classes.phone}>
              <PhoneInTalkTwoTone />
              {user.phone}
            </div>
          </div>
          <div className={classes.iconsWrapper}>
            <Button variant="text" color="secondary" onClick={updateUser}>
              <Edit />
            </Button>
            <Button variant="text" color="secondary" onClick={deleteUser}>
              <Delete />
            </Button>
          </div>
        </section>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionItem;
