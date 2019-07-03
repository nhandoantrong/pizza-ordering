import React from 'react';
import CartItem from '../../components/CartItem/CartItem';
import { connect } from 'react-redux'
import { deleteOrder } from "../../store/actions/OrderAction";
import "./CartListContainer.scss"
const CartListContainer = ({ orderList, deleteOrder, history, isCanBeModified = true }) => {

    const renderOrderList = orderList.map((order, index) => (
        <CartItem product={order.product}
            key={index}
            toppingList={order.toppingList}
            quantity={order.quantity}
            orderID={order.id}
            deleteOrder={deleteOrder}
            isCanBeModify={isCanBeModified}
        />
    ))

    const calculateTotalPrice = orderList.reduce((preValue, currentOrder) => {
        const calculateToppingPrice = currentOrder.toppingList.reduce((preVal, currentTopping) => {
            return preVal + currentTopping.price;
        }, 0)
        return preValue + (currentOrder.product.price + calculateToppingPrice) * currentOrder.quantity
    }, 0)

    return (
        <div className="cart-list">
            {renderOrderList}
            {
                calculateTotalPrice > 0 ?
                    <div className="confirmation">
                        {isCanBeModified ? <h3 className="total-price">
                            Total price : {calculateTotalPrice}
                        </h3> : null
                        }
                        {isCanBeModified ? <button className="confirm" onClick={() => { history.push("/delivery-info") }}>
                            CONFIRM
                        </button> : null}
                    </div>
                    : null
            }

        </div>
    );
};

const mapStateToProps = state => ({
    orderList: state.order.orderList
})

const mapDispatchToProps = dispatch => ({
    deleteOrder: (orderID) => {
        dispatch(deleteOrder(orderID))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CartListContainer);