import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import {createStyles, makeStyles} from "@mui/styles";
import {Collapse, Theme} from "@mui/material";
import {ArrowLeftRounded, ArrowRightRounded} from "@mui/icons-material";
import theme from "../../constants/theme";
export interface Props {
  active: boolean;
}
const useStyles = makeStyles<Theme, Pick<Props, "active">>((theme) => createStyles({
  root: {

  },
  drawer: {
    position:"relative",
    zIndex: -1,
    width: ({ active }) => (active ? 200 : 200),
    right: ({ active }) => (active ? 0 : 300),
    background: "#fff",
    transition: "1s ease-in-out"
  },
  openTab : {
    display:"flex",
    alignItems:"center",
    justifyContent:"space-around",
    width: 40,
    height: 20,
    cursor: "pointer",
    color: theme.palette.primary.light,
    transition: "0.15s ease-in-out",
    "&:hover" : {
      color: theme.palette.primary.main,
    }
  }
}));
const SideBar = () => {
  const [state, setState] = useState(false);
  const props = {
    active: state,
  };

  const classes = useStyles(props);
  console.log(state);
  const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    setState(!state);
  };

  const list = () => (
    <Box role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer} >
      <Collapse in={state} orientation='horizontal'>
      <List className={classes.drawer}  >
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text} >
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      </Collapse>
    </Box>
  );

  return (
    <div className={classes.root}>
        <div onClick={toggleDrawer} className={classes.openTab} >
          { state ? "hide": "open" }
          { state ? (<ArrowLeftRounded/>): (<ArrowRightRounded/>) }
        </div>
          <div  onClick={toggleDrawer}>
            {list()}
          </div>
    </div>
  );
};
export default SideBar;
