import React from 'react';
import { BrowserRouter as Router } from "react-router-dom"
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import CustomerRoute from '../routes/CustomerRoute/CustomerRoute';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
import InfoModalContainer from '../containers/ModalContainer/InfoModalContainer';
const CustomerTemplate = () => {
    return (
        <Router onUpdate={() => window.scrollTo(0, 0)} >
            <ScrollToTop>
                <Header />
                <CustomerRoute />
                <InfoModalContainer />
                <Footer />
            </ScrollToTop>

        </Router>
    );
};

export default CustomerTemplate;