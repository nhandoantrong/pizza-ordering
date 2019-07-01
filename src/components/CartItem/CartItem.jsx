import React, {useState} from 'react';
import "./CartItem.scss"
const CartItem = ({ product }) => {
    const [quantity, setQuantity] = useState(1);

    const changeQuantity = (number) =>{
        setQuantity(quantity+number);
    }

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
                <div className="quantity">
                    <div className="change minus"onClick={()=>changeQuantity(-1)}>
                        -
                    </div>
                    <div className="number">
                        {quantity}
                    </div>
                    <div className="change plus" onClick={()=>changeQuantity(1)}>
                        +
                    </div>
                </div>
                <div className="price">
                    ${product.price*quantity}
                </div>
            </div>
            <div className="delete-button">
                <i className="fas fa-times"></i>
            </div>
        </div>
    );
};

export default CartItem;