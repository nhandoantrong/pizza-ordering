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
import BillingPage from '../pages/BillingPage/BillingPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import PromotionPage from '../pages/PromotionPage/PromotionPage';
import UserPageGuard from '../containers/PageGuards/UserPageGuard';

const CustomerRoute = () => {
    return (
        <Switch >
            <Route path="/" exact component={HomePage} />
            <Route path="/menu" exact component={PizzaMenu} />
            <Route path="/register" exact render = {() => <EntryGuard Component={RegisterPage} />} />
            <Route path = "/login" exact render = {() => <EntryGuard Component={LoginPage} />}/>
            <Route path = "/shopping-cart" exact  render = {({history}) => <UserPageGuard history={history} Component={ShoppingCartPage} />}/>
            <Route path ="/delivery-info" exact render = {({history}) => <UserPageGuard history={history} Component={DeliveryInfoPage} />}  />
            <Route path ="/billing" exact render = {({history}) => <UserPageGuard history={history} Component={BillingPage} />}  />
            <Route path ="/profile" exact render = {({history}) => <UserPageGuard history={history} Component={ProfilePage} />}/>
            <Route path="/promotion" exact component={PromotionPage} />
            <Route path = "" component ={Page404} />
        </Switch>
    );
};

export default CustomerRoute;