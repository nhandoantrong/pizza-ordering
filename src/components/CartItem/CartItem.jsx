import React, {  Fragment } from 'react';
import "./CartItem.scss"
import MediaQuery from "react-responsive";
import { smallScreenWidth } from "../../util/screenWidthConstant"
const CartItem = ({ product, toppingList,quantity }) => {
    
    console.log(toppingList);
    

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

                <div className="toppings">
                    <h4>Toppings:</h4>

                    <div className="row">
                        {toppingList.map((topping) => {
                            return <Fragment key={topping._id}>
                                <MediaQuery minDeviceWidth={smallScreenWidth}>
                                    <div className="col-3" key={topping._id}>
                                        {topping.name}
                                    </div>
                                </MediaQuery>
                                <MediaQuery maxDeviceWidth={smallScreenWidth+1}>
                                    <div className="col-6" key={topping._id}>
                                        {topping.name}
                                    </div>
                                </MediaQuery>
                            </Fragment>


                        })}
                    </div>

                </div>

                <div className="quantity">
                    <div className="change minus" >
                        -
                    </div>
                    <div className="number">
                        {quantity}
                    </div>
                    <div className="change plus" >
                        +
                    </div>
                </div>
                <div className="price">
                    ${product.price * quantity}
                </div>
            </div>
            <div className="delete-button">
                <i className="fas fa-times"></i>
            </div>
        </div>
    );
};

export default CartItem;