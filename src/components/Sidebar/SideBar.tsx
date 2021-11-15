import React, { FunctionComponent, useState } from "react";
import Box from "@mui/material/Box";
import { createStyles, makeStyles } from "@mui/styles";
import { Collapse, duration, Theme } from "@mui/material";
import { ArrowLeftRounded, ArrowRightRounded } from "@mui/icons-material";

export interface Props {
  active?: boolean;
  children: JSX.Element | JSX.Element[];
}
const useStyles = makeStyles<Theme, Pick<Props, "active">>((theme) =>
  createStyles({
    root: {
      minWidth: 60,
    },
    drawer: {
      position: "relative",
      zIndex: 0,
      width: ({ active }) => (active ? 300 : 0),
      right: ({ active }) => (active ? 0 : 300),
      background: "#fff",
      transition: "1s ease-in-out",
    },
    openTab: {
      display: "flex",
      justifyContent: "space-around",
      width: 60,
      height: 20,
      cursor: "pointer",
      // color: theme.palette.primary.light,
      transition: "0.15s ease-in-out",
      "&:hover": {
        color: theme.palette.primary.main,
      },
    },
  })
);
const SideBar: FunctionComponent<Props> = ({ children, active }) => {
  const [open, setOpen] = useState(false);
  const props = {
    active: open,
  };

  const classes = useStyles(props);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <div className={classes.root}>
      <div onClick={toggleDrawer} className={classes.openTab}>
        {open ? "hide" : "open"}
        {open ? <ArrowLeftRounded /> : <ArrowRightRounded />}
      </div>
      <Box role="presentation">
        <Collapse
          in={open}
          component="div"
          orientation="horizontal"
          timeout={duration.complex}
        >
          <div className={classes.drawer}>{children}</div>
        </Collapse>
      </Box>
    </div>
  );
};
export default SideBar;
