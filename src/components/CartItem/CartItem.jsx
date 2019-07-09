import React, { Fragment } from 'react';
import "./CartItem.scss"
import MediaQuery from "react-responsive";
import { smallScreenWidth,mediumScreenWidth } from "../../util/screenWidthConstant"
import QuantityChange from '../QuantityChange/QuantityChange';
export const CartItem = ({ product, toppingList, quantity, orderID, deleteOrder, isCanBeModify = true, changeQuantity }) => {

    const toppingPrice = toppingList.reduce((previousValue, topping) => {
        return previousValue + topping.price
    }, 0)

    return (
        <div className="cart-item">
            <div className="picture">
                <img src={product.picture} alt="cart-item" />
            </div>
            <div className="content">
                <h3>{product.name}</h3>
                <div className="pizza-type-size">
                    <div>
                        Size: {product.size}
                    </div>
                    <div>
                        Crust: {product.type}
                    </div>
                </div>

                {toppingList.length > 0 ? <div className="toppings">
                    <h4>Toppings:</h4>

                    <div className="row" >
                        {toppingList.map((topping) => {
                            return <Fragment key={topping._id}>
                                <MediaQuery maxDeviceWidth={smallScreenWidth - 1}>
                                    <div className="col-6" style={{ marginBottom: "10px" }} key={topping._id}>
                                        {topping.name}
                                    </div>
                                </MediaQuery>
                                <MediaQuery minDeviceWidth={smallScreenWidth} maxDeviceWidth={mediumScreenWidth-1}>
                                    <div className="col-4" style={{ marginBottom: "10px" }} key={topping._id}>
                                        {topping.name}
                                    </div>
                                </MediaQuery>
                                <MediaQuery  minDeviceWidth={mediumScreenWidth}>
                                    <div className="col-3" style={{ marginBottom: "10px" }} key={topping._id}>
                                        {topping.name}
                                    </div>
                                </MediaQuery>
                            </Fragment>


                        })}
                    </div>

                </div>
                    : null
                }

                <div className='quantity'>
                    Quantity: {isCanBeModify ?
                        <QuantityChange quantity={quantity} changeQuantity={(amount) => changeQuantity(orderID, amount)} />
                        : <span>{quantity}</span>
                    }
                </div>

                <div className="price">
                    ${(product.price + toppingPrice) * quantity}
                </div>
            </div>
            {isCanBeModify ? <div className="delete-button" onClick={() => { deleteOrder(orderID) }}>
                <i className="fas fa-times"></i>
            </div> : null}

        </div>
    );
};

export default CartItem;