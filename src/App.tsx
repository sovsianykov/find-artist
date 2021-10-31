import React from "react";
import { createBrowserHistory } from "history";
import {
  BrowserRouter as Router,
  matchPath,
  useLocation,
} from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "./constants/theme";
import Routing from "./Routing/Routing";
import HeaderApp from "./components/Header/HeaderApp";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
          <HeaderApp/>
        <Routing  />
      </Router>
    </ThemeProvider>
  );
}

export default App;
