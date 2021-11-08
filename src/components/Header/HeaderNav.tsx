import React, { FunctionComponent, useCallback, useState } from "react";
import { makeStyles, createStyles } from "@mui/styles";
import { Box, Collapse, Container, duration, Theme } from "@mui/material";
import { routerLinks } from "../../constants/RouterLinks";
import { Link } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 1400,
      minHeight: 30,
      display: "flex",
      alignItems: "center",
      position: "absolute",
      bottom: 0,
      right: 100,
    },
    box: {
      width: "60%",
      height: 50,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: theme.spacing(1),
      marginLeft: "auto",
    },
    link: {
      height: 40,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textDecoration: "none",
      color: theme.palette.success.main,
      fontFamily: theme.typography.fontFamily,
      fontWeight: 600,
      letterSpacing: 1.9,
      fontSize: "20px",
      transition: "0.15s ease-in-out",
      "&:hover": {
        color: theme.palette.success.light,
      },
    },
    dropDown: {
      position: "relative",
      zIndex: 10,
      height: 40,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textDecoration: "none",
      color: theme.palette.success.main,
      fontWeight: 600,
      letterSpacing: 1.9,
      fontSize: "20px",
      transition: "0.15s ease-in-out",
      cursor: "pointer",
      "&:hover": {
        color: theme.palette.success.light,
      },
    },
  })
);

const HeaderNav: FunctionComponent = () => {
  const [active, setActive] = useState<boolean>(false);
  const classes = useStyles();
  const onMouseEnterHandler: () => void = useCallback(() => {
    setActive(!active);
  }, [active]);

  return (
    <Container className={classes.root}>
      <Box className={classes.box}>
        <Link to={routerLinks.home} className={classes.link}>
          Home
        </Link>
        <Link to={routerLinks.main_list} className={classes.link}>
          Base
        </Link>

        <div className={classes.dropDown} onClick={onMouseEnterHandler}>
          <Collapse in={active} timeout="auto" unmountOnExit>
            <Dropdown active={active} />
          </Collapse>
          Create User
        </div>

        <Link to={routerLinks.about} className={classes.link}>
          About
        </Link>
        <Link to={routerLinks.projects} className={classes.link}>
          Projects
        </Link>
        <Link to={routerLinks.contactUs} className={classes.link}>
          Contact Us
        </Link>
      </Box>
    </Container>
  );
};

export default HeaderNav;
