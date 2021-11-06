import React, {FunctionComponent, useCallback} from "react";
import { Paper, Theme, Typography } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { routerLinks } from "../../constants/RouterLinks";
import { Link } from "react-router-dom"

export interface DropdownProps {
  active: boolean;

}

const useStyles = makeStyles<Theme, Pick<DropdownProps, "active">>(
  (theme: Theme) =>
    createStyles({
      root: {
        width: ({ active }) => (active ? 200 : 200),
        height: ({ active }) => (active ? 100 : 0),
        position: "absolute",
        zIndex: 100,
        top: 45,
        left: 0,
        padding: theme.spacing(2),
        opacity: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        transition: ".3s ease-in-out",
      },
      text: {
        color: theme.palette.warning.main,
        transition: "0.115s ease-in-out",

        "&:hover": {
          color: theme.palette.warning.dark,
        },
      },
    })
);

const Dropdown: FunctionComponent<DropdownProps> = ({ active }) => {
  const classes = useStyles({ active });
  console.log(active, 'dropdown');

  return (
    <Paper className={classes.root}>
      <Link to={routerLinks.createUsers}  >
        <Typography variant="subtitle1" className={classes.text}>
          create artist profile
        </Typography>
      </Link>
      <Typography variant="subtitle1" className={classes.text}>
        create a project
      </Typography>
      <Typography variant="subtitle1" className={classes.text}>
        create an announcement
      </Typography>
    </Paper>
  );
};

export default Dropdown;
