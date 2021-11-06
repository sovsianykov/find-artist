import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { makeStyles } from "@mui/styles";
import {Collapse, duration, Theme} from "@mui/material";
import { TransitionGroup } from "react-transition-group";
export interface Props {
  active: boolean;
}
const useStyles = makeStyles<Theme, Pick<Props, "active">>({
  root: {

  },
  drawer: {
    position:"relative",
    zIndex: 4,
    width: ({ active }) => (active ? 200 : 100),
    right: ({ active }) => (active ? 0 : 300),

    // height: ({ active }) => (active ? 200 : 0),
    // opacity: ({ active }) => (active ? 1 : 0),
    background: "#fff",
    transition: "1s ease-in-out"

  },
});
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
        <Button onClick={toggleDrawer}>{"left"}</Button>
          <div  onClick={toggleDrawer}>

            {list()}
          </div>
        {/*</Collapse>*/}

    </div>
  );
};
export default SideBar;
