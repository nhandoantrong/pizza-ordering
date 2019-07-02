import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Routes from '../routes/Routes';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
import InfoModalContainer from '../containers/ModalContainer/InfoModalContainer';
const Template = () => {
    return (
        <ScrollToTop>
            <Header />
            <Routes />
            <InfoModalContainer />
            <Footer />
        </ScrollToTop>

    );
};

export default Template;