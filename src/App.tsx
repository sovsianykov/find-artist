import React from "react";
import { createBrowserHistory } from "history";
import {
  BrowserRouter as Router,
 
} from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import Layout from "./components/Layout/Layout";
import theme from "./constants/theme";
import Routing from "./Routing/Routing";
import HeaderApp from "./components/Header/HeaderApp";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <HeaderApp />
        <Layout>
          <Routing />
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
