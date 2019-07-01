import React from 'react';
import "./CartItem.scss"
const CartItem = ({ picture }) => {
    return (
        <div className="cart-item">
            <div className="picture">
                <img src="https://thepizzacompany.vn/242-home_default/hawaii.jpg" alt="cart-item" />
            </div>
            <div className="content">
                <h3>Double Pepperoni</h3>
                <div className="pizza-type-size">
                    <div>
                        Size: M
                    </div>
                    <div>
                        Crust: Thick
                    </div>
                </div>
                <div className="quantity">
                    <div className="change minus">
                        -
                    </div>
                    <div className="number">
                        1
                    </div>
                    <div className="change plus">
                        +
                    </div>
                </div>
                <div className="price">
                    $30
                </div>
            </div>
            <div className="delete-button">
                <i class="fas fa-times"></i>
            </div>
        </div>
    );
};

export default CartItem;