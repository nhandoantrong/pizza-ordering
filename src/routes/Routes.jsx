import React from 'react';
import {Switch, Route} from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage";
import PizzaMenu from "../pages/PizzaMenu/PizzaMenu"
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import EntryGuard from '../containers/PageGuards/EntryGuard';
import LoginPage from '../pages/LoginPage/LoginPage';
import ShoppingCartPage from '../pages/ShoppingCartPage/ShoppingCartPage';
import DeliveryInfoPage from '../pages/DeliveryInfoPage/DeliveryInfoPage';
import Page404 from '../pages/Page404/Page404';

const CustomerRoute = () => {
    return (
        <Switch >
            <Route path="/" exact component={HomePage} />
            <Route path="/menu" exact component={PizzaMenu} />
            <Route path="/register" exact render = {() => <EntryGuard Component={RegisterPage} />} />
            <Route path = "/login" exact render = {() => <EntryGuard Component={LoginPage} />}/>
            <Route path = "/shopping-cart" exact component ={ShoppingCartPage} />
            <Route path ="/delivery-info" exact component = {DeliveryInfoPage}  />
            <Route path = "" component ={Page404} />
        </Switch>
    );
};

export default CustomerRoute;