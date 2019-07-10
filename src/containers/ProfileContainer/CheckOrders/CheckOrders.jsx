import React, { useState } from 'react';
import { getOrderAPI } from "../../../services/OrderServices";
import { getProductAPI } from "../../../services/ProductService";
import { getToppingAPI } from "../../../services/ToppingService";

import { fireLoading, closeSwal, fireError } from "../../../util/AlertFiring";
import { connect } from "react-redux";
import "./CheckOrders.scss"
const CheckOrders = ({ token }) => {

    const [orderArr, setOrderArr] = useState(null);
    const [productList, setProductList] = useState([]);
    const [toppingList, setToppingList] = useState([]);

    if (productList.length === 0) {
        getProductAPI()
            .then(res => {
                setProductList(res.data)
            })
            .catch(err => {
                console.log({ err });
            })
    }

    if (toppingList.length === 0) {
        getToppingAPI()
            .then(res => {
                setToppingList(res.data)
            })
            .catch(err => {
                console.log({ err });
            })
    }



    if (orderArr === null) {
        fireLoading("Getting orders");

        getOrderAPI(token)
            .then(res => {
                closeSwal();
                setOrderArr(res.data);
            })
            .catch(err => {
                fireError("Server is busy");
            })
    }

    return (
        <div>
            <h1>Your Orders</h1>
            <div className="user-entry" style={{ marginBottom: "10px" }}>
                {
                    orderArr && productList.length > 0 && toppingList.length > 0 ? orderArr.length > 0 ? orderArr.map(order => {
                        return <div key={order._id} className="content" >

                            <div style={{ marginBottom: "10px" }}> <b>- Date: </b> {order.date.split("T")[0]} </div>
                            <div style={{ marginBottom: "10px" }}> <b>- Time:</b>  {order.date.split("T")[1].split(":")[0] - (-7)}h{order.date.split("T")[1].split(":")[1]}</div>

                            <div style={{ marginBottom: "10px" }}> <b>- Address: </b> {order.address}</div>
                            <div style={{ marginBottom: "10px" }}> <b>- Phone:</b> {order.phone} </div>
                            <div style={{ marginBottom: "10px" }}> <b>- Status: </b> {order.status} </div>
                            <div style={{ marginBottom: "10px", display: "flex" }}> <b>- Order Details: </b>
                                <ul className="detail-list">
                                    {order.orderDetail.map((detail, index) => {
                                        const id = detail.productID;
                                        const product = productList.find(product => product._id === id);
                                        return <li key={index}><span>- {product.name}</span>
                                            <div className="tool-tip">
                                                <img src={product.picture} alt="product" />
                                                <div className="name">{product.name}</div>
                                                <div className="size-type">
                                                    <div><b>Size:</b>  {detail.size}</div>
                                                    <div><b>Crust:</b>  {detail.type}</div>

                                                </div>
                                                {detail.topping.length > 0 ?
                                                    <div className="topping">
                                                        <h5>Toppings: </h5>
                                                        <div className="topping-list row">
                                                            {
                                                                detail.topping.map(toppingDetail => {
                                                                    const toppingTarget = toppingList.find(topping => topping._id === toppingDetail)
                                                                    return <div key={toppingDetail} className="col-6">{toppingTarget.name}</div>
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                    :null
                                                }

                                            </div>
                                        </li>
                                    })}
                                </ul>
                            </div>

                            <div style={{ fontWeight: "700" }}>Total Price: ${order.totalPrice}  </div>
                        </div>
                    }) : <img src={require("../../../assets/img/empty.svg")} alt="empty" /> : null
                }
            </div>

        </div>
    );
};

const mapStateToProps = state => ({
    token: state.user.token
})


export default connect(mapStateToProps)(CheckOrders);