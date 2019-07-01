import React from 'react';
import CartListContainer from '../../containers/CartListContainer/CartListContainer';
import "./ShoppingCartPage.scss";
const ShoppingCartPage = () => {
    return (
        <div className="shopping-cart-page">
            <div className="liar"></div>
            <h1>SHOPPING CART</h1>
            <CartListContainer />
        </div>
    );
};

export default ShoppingCartPage;