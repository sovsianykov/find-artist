import React, { FunctionComponent } from "react";
import { createStyles, makeStyles } from "@mui/styles";
import { Container, Theme } from "@mui/material";
import HeaderNav from "./HeaderNav";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      height: 200,
      position: "relative",
      margin: "0 auto",
      background: theme.palette.primary.light,
    },
  })
);

const HeaderApp: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <HeaderNav />
    </Container>
  );
};

export default HeaderApp;
