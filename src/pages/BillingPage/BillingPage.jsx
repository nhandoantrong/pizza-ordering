import React from 'react';
import "./BillingPage.scss"
import CartListContainer from '../../containers/CartListContainer/CartListContainer';
import DeliveryFormContainer from '../../containers/DeliveryFormContainer/DeliveryFormContainer';
import { connect } from "react-redux"
const BillingPage = ({ totalPrice }) => {
    console.log(totalPrice);

    return (
        <div className="container billing-page">
            <div className="liar"></div>
            <h1>Billing Infomation</h1>
            <div className="row">
                <div className="col-6 cart-info">
                    <CartListContainer isCanBeModified={false} />
                </div>
                <div className="col-6 user-entry delivery-info">
                    <div className="content">
                        <h3>Delivery Info</h3>
                        <DeliveryFormContainer isCanBeModified={false} />

                    </div>
                    <div className="content">
                        <h3>Payment Method</h3>
                        <div className="payment-methods">
                            <div className="method">
                                <input type="radio" name="payment" id="COD" />
                                <label htmlFor="COD">
                                    <img src={require("../../assets/img/Cash-On-Delivery-Logo.jpg")} alt="COD" />
                                </label>
                            </div>
                            <div className="method">
                                <input type="radio" name="payment" id="visa-mastercard" />
                                <label htmlFor="visa-mastercard">
                                    <img src={require("../../assets/img/visa-mastercart.png")} alt="visa-mastercard" />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="submit-line">
                        <h3 className="total-price">Total: ${totalPrice}</h3>
                        <button>CONFIRM</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    totalPrice: state.order.totalPrice
})

export default connect(mapStateToProps)(BillingPage);