import React from 'react';
import {Switch, Route} from "react-router-dom"
import HomePage from "../../pages/HomePage/HomePage";
import PizzaMenu from "../../pages/PizzaMenu/PizzaMenu"

const CustomerRoute = () => {
    return (
        <Switch >
            <Route path="/" exact component={HomePage} />
            <Route path="/menu" exact component={PizzaMenu} />
        </Switch>
    );
};

export default CustomerRoute;