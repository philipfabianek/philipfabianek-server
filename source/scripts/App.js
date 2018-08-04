import React from "react";
import { Route, Switch } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Features from "./components/Features";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

import NotFoundPage from "./components/NotFoundPage";

export const App = () => (
    <Switch>
        <Route path={"/"} exact={true} component={({history}) => ( <LandingPage history={history} />)}/>
        <Route path={"/about"} exact={true} component={About}/>
        <Route path={"/features"} exact={true} component={Features}/>
        <Route path={"/portfolio"} exact={true} component={Portfolio}/>
        <Route path={"/contact"} exact={true} component={Contact}/>
        <Route component={NotFoundPage} />
    </Switch>
);
