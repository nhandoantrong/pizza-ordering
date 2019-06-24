import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import HomePage from '../pages/HomePage/HomePage';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import PizzaMenu from '../pages/PizzaMenu/PizzaMenu';
import PopupPizzaInfo from '../components/PopupPizzaInfo/PopupPizzaInfo';
const CustomerTemplate = () => {
    return (
        <Router >
            <Header />
            <Switch >
                <Route path="/" exact component={HomePage} />
                <Route path="/menu" exact component={PizzaMenu} />
            </Switch>
            <PopupPizzaInfo />
            <Footer />
        </Router>
    );
};

export default CustomerTemplate;