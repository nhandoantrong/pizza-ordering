import React from 'react';
import {BrowserRouter as Router, Route,Switch} from "react-router-dom"
import HomePage from '../containers/HomePage/HomePage';
import Header from '../components/Header/Header';
const CustomerTemplate = () => {
    return (
        <Router >
            <Header />
            <Switch >
                <Route path="/" component={HomePage} />
            </Switch>
        </Router>
    );
};

export default CustomerTemplate;