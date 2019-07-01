import React from 'react';
import CartItem from '../../components/CartItem/CartItem';
import {connect} from 'react-redux'

const CartListContainer = ({orderList}) => {

    const renderOrderList = orderList.map((order,index)=>(
        <CartItem product={order.product} key={index}/>
    ))
    
    return (
        <div className ="cart-list">
            {renderOrderList}
        </div>
    );
};

const mapStateToProps = state =>({
    orderList : state.order.orderList
})

export default connect(mapStateToProps)(CartListContainer);