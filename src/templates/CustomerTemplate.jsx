import React from 'react';
import {BrowserRouter as Router, Route,Switch} from "react-router-dom"
import HomePage from '../containers/HomePage/HomePage';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
const CustomerTemplate = () => {
    return (
        <Router >
            <Header />
            <Switch >
                <Route path="/" component={HomePage} />
            </Switch>
            <Footer />
        </Router>
    );
};

export default CustomerTemplate;