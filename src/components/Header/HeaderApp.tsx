import React, { FunctionComponent } from "react";
import { createStyles, makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import HeaderNav from "./HeaderNav";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      height: 150,
      position: "fixed",
      top: 0,
      background: theme.palette.primary.light,
    },
  })
);

const HeaderApp: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <HeaderNav />
    </header>
  );
};

export default HeaderApp;
