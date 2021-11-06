import React, { FunctionComponent } from "react";
import { makeStyles } from "@mui/styles";

export interface ContainerProps {
  children: JSX.Element | JSX.Element[] ;
}
const useStyles = makeStyles({
  root: {
    margin: "0 auto",
    width: "100%",
    // display: "flex",
    // flexDirection: "row",
    // justifyContent:"flex-start",
    // alignItems:"center"
  },
});

const Container: FunctionComponent<ContainerProps> = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};

export default Container;
