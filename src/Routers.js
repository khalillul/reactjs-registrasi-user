import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Register from "./App";
import Login from "./container/FormLogin";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Register} />
                    <Route path="/Login" component={Login} />
                    <Route path="/Register" component={Register} />
                </Switch>
            </Router>
        )
    }
}