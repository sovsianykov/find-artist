import React, { FunctionComponent } from 'react';
import { makeStyles, createStyles } from "@mui/styles";
import {Box, Container, Theme} from "@mui/material";
import {routerLinks} from "../../constants/RouterLinks";
import {Link} from "react-router-dom"




const useStyles = makeStyles((theme:Theme) =>
createStyles({
    root : {
        width: "100%",
        minHeight: 30,
        display: "flex",
        alignItems:"center",
        fixed: true,
    },
    box :{
       width: "60%",
       height: 40,
        display: "flex",
        alignItems: "center",
        justifyContent:"space-between",
        padding: theme.spacing(1),
        marginLeft: "auto",
       } ,
    link : {
        height: 30,
        display: "flex",
        alignItems: "center",
        justifyContent:"center",
        textDecoration: "none",
        color: theme.palette.success.light
    }

}))


const HeaderNav:FunctionComponent = () => {
    const classes = useStyles()
    return (
        <Container className={classes.root} >
            <Box className={classes.box} >
                <Link to={routerLinks.home} className={classes.link} >Home</Link>
                <Link to={routerLinks.main_list} className={classes.link} >Base</Link>
                <Link to={routerLinks.about} className={classes.link} >About</Link>
            </Box>
        </Container>
    );
};

export default HeaderNav;