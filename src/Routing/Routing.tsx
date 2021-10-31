import React, { FunctionComponent } from "react";
import {
  Route,
  Link,
  RouteComponentProps,
  Switch,
  SwitchProps,
  useLocation,
} from "react-router-dom";
import { routerLinks } from "../constants/RouterLinks";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import MainList from "../pages/MainList/MainList";



const Routing: FunctionComponent = ({

}) => {

  return (
    <div>
      <Switch>
        <Route path={routerLinks.home} component={Home} />
        <Route path={routerLinks.about} component={About} />
        <Route path={routerLinks.main_list} component={MainList} />
      </Switch>
    </div>
  );
};

export default Routing;
