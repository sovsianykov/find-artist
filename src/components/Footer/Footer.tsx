import React, { FunctionComponent } from "react";
import { createStyles, makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      height: 100,
      position: "fixed",
      bottom: 0,
      background: theme.palette.primary.light,
    },
  })
);

const Footer: FunctionComponent = () => {
  const classes = useStyles();

  return <footer className={classes.root}></footer>;
};

export default Footer;
