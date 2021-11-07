import React, {FunctionComponent} from 'react';
import {createStyles, makeStyles} from "@mui/styles";
import {Theme} from "@mui/material";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: "1100px",
            margin: "200px  auto  0",
        },
    })
);

interface LayoutProps {
    children : JSX.Element | JSX.Element[]
}



const Layout:FunctionComponent<LayoutProps> = ({children}) => {
   const classes = useStyles()
    return (
        <main className={classes.root}>
            {children}
        </main>
    );
};

export default Layout;
