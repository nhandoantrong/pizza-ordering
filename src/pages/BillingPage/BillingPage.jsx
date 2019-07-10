import React from 'react';
import "./BillingPage.scss"
import CartListContainer from '../../containers/CartListContainer/CartListContainer';
import DeliveryFormContainer from '../../containers/DeliveryFormContainer/DeliveryFormContainer';
import { connect } from "react-redux";
import { reduceOrder } from "./ReduceOrder";
import { checkoutOnServer } from "../../store/actions/OrderAction";
import {Link ,Redirect} from "react-router-dom"
const BillingPage = ({ totalPrice, orderList, user, checkout, token }) => {
    const reducedList = reduceOrder(orderList);
    const order = {
        phone: user.phone,
        address: user.address,
        totalPrice,
        orderDetail: reducedList,
    }
    if (orderList.length===0){
        return <Redirect to="/menu"/>
    }
    else if (!user.phone || !user.address){
        return <Redirect to="/delivery-info"/>

    }


    return (
        <div className="container billing-page">
            <div className="liar"></div>
            <h1>Billing Infomation</h1>
            <div className="row">
                <div className="col cart-info">
                    <CartListContainer isCanBeModified={false} />
                </div>
                <div className="col user-entry delivery-info">
                    <div className="content">
                        <h3>Delivery Info</h3>
                        <DeliveryFormContainer isCanBeModified={false} />

                    </div>
                    <div className="content">
                        <h3>Payment Method</h3>
                        <div className="payment-methods">
                            <div className="method">
                                <input type="radio" name="payment" id="COD" defaultChecked />
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
                        <div className="comeback">
                        <Link to="/delivery-info">Change your infomation again?</Link> <br />
                        <Link to="/shopping-cart">Change your cart again?</Link>


                        </div>

                        <h3 className="total-price">Total: ${totalPrice}</h3>
                        <button onClick={() => {
                            checkout(order, token)
                        }}>CONFIRM</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    user: state.user.user,
    totalPrice: state.order.totalPrice,
    orderList: state.order.orderList,
    token: state.user.token
})

const mapDispatchToProps = dispatch => ({
    checkout: (order, token) => {
        dispatch(checkoutOnServer(order, token))
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(BillingPage);