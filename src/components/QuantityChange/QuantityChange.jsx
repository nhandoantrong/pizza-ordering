import React from 'react';
import "./QuantityChange.scss"
const QuantityChange = ({quantity, changeQuantity}) => {
    return (
        <div className="quantity">
            <div className="change minus" onClick={() => changeQuantity(-1)}>
                -
        </div>
            <div className="number">
                {quantity}
            </div>
            <div className="change plus" onClick={() => changeQuantity(1)}>
                +
        </div>
        </div>
    );
};

export default QuantityChange;