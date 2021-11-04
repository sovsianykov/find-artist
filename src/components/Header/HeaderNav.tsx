import React, { FunctionComponent } from 'react';
import { makeStyles, createStyles } from "@mui/styles";
import {Box, Container, Theme} from "@mui/material";
import {routerLinks} from "../../constants/RouterLinks";
import {Link} from "react-router-dom"
import Dropdown from "../Dropdown/Droopdown";




const useStyles = makeStyles((theme:Theme) =>
createStyles({
    root : {
        maxWidth: 1400,
        minHeight: 30,
        display: "flex",
        alignItems:"center",
        position: "absolute",
        bottom: 0,
        right: 100
    },
    box :{
       width: "60%",
       height: 50,
        display: "flex",
        alignItems: "center",
        justifyContent:"space-between",
        padding: theme.spacing(1),
        marginLeft: "auto",
       } ,
    link : {
        height: 40,
        display: "flex",
        alignItems: "center",
        justifyContent:"center",
        textDecoration: "none",
        color: theme.palette.success.main,
        fontWeight: 600,
        letterSpacing: 1.9,
        fontSize: '20px',
        transition: "0.15s ease-in-out",
        "&:hover" : {
            color: theme.palette.success.light,
        }
    }

}))


const HeaderNav:FunctionComponent = () => {
    const classes = useStyles()
    return (
        <Container className={classes.root} >
            <Box className={classes.box} >
                <Link to={routerLinks.home} className={classes.link} >Home</Link>
                <Link to={routerLinks.main_list} className={classes.link} >Base</Link>
                <Dropdown   />
                <Link to={routerLinks.about} className={classes.link} >About</Link>
                <Link to={routerLinks.projects} className={classes.link} >Projects</Link>
                <Link to={routerLinks.contactUs} className={classes.link} >Contact Us</Link>
            </Box>
        </Container>
    );
};

export default HeaderNav;