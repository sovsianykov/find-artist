import {createTheme} from "@mui/material";
import {grey, orange} from "@mui/material/colors";

declare module '@mui/material/styles' {
    interface Theme {
        status: {
            danger: string;
        };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
        status?: {
            danger?: string;
        };
    }
}


const theme = createTheme({
    status: {
        danger: orange[500],

    },
    palette: {
        primary: {
            main: "#800020",
            light: "#800039",
            dark: "#5a0028",
        },
        secondary: {
            main: "#801a00",
            light: "#5a1200",
            dark: "#280b03",
        },
        success : {
            main: "#c5c5c5",
            light: "#efefef",
            dark: "#000",
        },
        warning : {
            main: "#8c8b8b",
            light: "#d4d4d4",
            dark: "#570202",
        },
    },

});

export default theme
