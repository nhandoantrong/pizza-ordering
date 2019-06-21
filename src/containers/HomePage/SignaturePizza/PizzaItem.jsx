import React from 'react';
import "./PizzaItem.scss"

const PizzaItem = props => {
    return (
        <div className="pizza-item">
            <div className="content">
                <img src={props.item.img} alt="pizza item" />
                <h3>{props.item.name}</h3>
            </div>
        </div>
    );
};

export default PizzaItem;