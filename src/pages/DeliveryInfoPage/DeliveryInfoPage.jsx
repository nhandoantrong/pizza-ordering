import React from 'react';
import "./DeliveryInfoPage.scss"
import DeliveryFormContainer from '../../containers/DeliveryFormContainer/DeliveryFormContainer';
const DeliveryInfoPage = () => {
    return (
        <div className="user-entry delivery-page">
            <div className="liar"></div>
            <div className="content">
                <h1>Delivery Infomation</h1>
                <DeliveryFormContainer />
            </div>
        </div>
    );
};

export default DeliveryInfoPage;