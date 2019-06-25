import React from 'react';
import { BrowserRouter as Router } from "react-router-dom"
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import PopupPizzaInfo from '../components/PopupPizzaInfo/PopupPizzaInfo';
import CustomerRoute from '../routes/CustomerRoute/CustomerRoute';
const CustomerTemplate = () => {
    return (
        <Router >
            <Header />
            <CustomerRoute />
            {/* <PopupPizzaInfo isOpen={true}/> */}
            <Footer />
        </Router>
    );
};

export default CustomerTemplate;