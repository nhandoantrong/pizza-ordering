import React, { useState } from 'react';
import { getOrderAPI } from "../../../services/OrderServices";
import {fireLoading,closeSwal,fireError} from "../../../util/AlertFiring";
import { connect } from "react-redux"
const CheckOrders = ({ token }) => {

    const [orderArr, setOrderArr] = useState(null);
    
    if (orderArr === null) {
        fireLoading("Getting orders")
        getOrderAPI(token)
            .then(res => {
                closeSwal()
                setOrderArr(res.data)
            })
            .catch(err => {
                fireError("Server is busy");
            })
    }

    return (
        <div>
            <h1>Your Orders</h1>
            <div className="user-entry">
                {
                    orderArr? orderArr.length>0 ? orderArr.map(order => {
                        return <div key={order._id} className="content" >
                         
                            <div style={{ marginBottom:"10px"}}>- Date: {order.date.split("T")[0]} </div>
                            <div style={{  marginBottom:"10px"}}>- Time: {order.date.split("T")[1].split(":")[0]}h{order.date.split("T")[1].split(":")[1]}</div>

                            <div style={{  marginBottom:"10px"}}>- Address: {order.address}</div>
                            <div style={{  marginBottom:"10px"}}>- Phone: {order.phone} </div>
                            <div style={{  marginBottom:"10px"}}>- Status: {order.status} </div>

                            <div style={{ fontWeight: "700" }}>Total Price: ${order.totalPrice}  </div>
                        </div>
                    }) : <img src={require("../../../assets/img/empty.svg")} alt="empty"/> :null
                }
            </div>

        </div>
    );
};

const mapStateToProps = state => ({
    token: state.user.token
})


export default connect(mapStateToProps)(CheckOrders);