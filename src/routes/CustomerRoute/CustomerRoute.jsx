import React from 'react';
import {Switch, Route} from "react-router-dom"
import HomePage from "../../pages/HomePage/HomePage";
import PizzaMenu from "../../pages/PizzaMenu/PizzaMenu"
import RegisterPage from '../../pages/RegisterPage/RegisterPage';

const CustomerRoute = () => {
    return (
        <Switch >
            <Route path="/" exact component={HomePage} />
            <Route path="/menu" exact component={PizzaMenu} />
            <Route path="/register" exact component = {RegisterPage} />
        </Switch>
    );
};

export default CustomerRoute;