import React from 'react';
import "./PizzaItem.scss"

const PizzaItem = ({ item = {
    name: "Chicken Supreme Pizza",
    img: "https://cdn.shopify.com/s/files/1/0046/1615/9347/products/product1_2e71bdac-e0d0-41ee-9b74-f87f32833b87_large.jpg?v=1532430471",
    price: 322.00,
} }) => {
    return (
        <div className="pizza-item">
            <div className="content">
                <img src={item.img} alt="pizza item" />
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <button>Get It now</button>
            </div>
        </div>
    );
};

export default PizzaItem;