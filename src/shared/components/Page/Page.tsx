import React, { FunctionComponent } from "react";
import { createStyles, makeStyles } from "@mui/styles";
import {Box, Theme, Typography} from "@mui/material";
import Container from "../Container/Container";

interface PageProps {
  children: JSX.Element | JSX.Element[];
  filterButton?: JSX.Element;
  sideBar?: JSX.Element;
  title: string;
  sideBarButton?:JSX.Element;
}
const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {

        width: "100%",
        display: "flex",
        minHeight: 600,

    },
    mainWrapper : {
        display: "flex",
        flexDirection:"column",
        alignItems: "center"
    },
    heading : {
        width: "100%",
        height: 100,
        padding: theme.spacing(4),
         display: "flex",
         flexDirection: "row",
         justifyContent:"flex-start",
        alignItems:"center"
    },
    titleBlock : {
        width: "100%",
        padding: `${theme.spacing(2)} ${theme.spacing(10)}`,
        background: theme.palette.success.light,
    },
    sideBarButton : {
        position:"absolute",
        top:20,
        left: 200,
    },
    content : {
        width: "100%",
        display: "flex",
        position: "relative",
    }

}));

const Page: FunctionComponent<PageProps> = ({

  children,
  filterButton,
  sideBar,
  title,
    sideBarButton,
}) => {
    const classes = useStyles()
  return (
      <Box className={classes.root} >
          {sideBar}
          <Container  >
              <div className={classes.heading}>
        <Typography variant='h4' className={classes.titleBlock}>
          {title}
        </Typography>
              </div>
        <div className={classes.content}>
            <div className={classes.sideBarButton}>
            {sideBarButton}
            </div>
          {children}
        </div>
          </Container>
  </Box>
  )
};

export default Page;
