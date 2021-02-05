import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Login from './pages/Login/Login';

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Login}></Route>
                </Switch>
            </Router>
        )

    }
}

export default Routes;
