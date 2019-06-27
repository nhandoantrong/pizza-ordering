import React from 'react';
import "./PizzaItem.scss"

const PizzaItem = ({ item = {
    name: "Chicken Supreme Pizza",
    picture: "https://cdn.shopify.com/s/files/1/0046/1615/9347/products/product1_2e71bdac-e0d0-41ee-9b74-f87f32833b87_large.jpg?v=1532430471",
    }, openModal=(info)=>{} }) => {
    return (
        <div className="pizza-item">
            <div className="content" >
                <img src={item.picture} alt="pizza item" onClick={()=>openModal(item)}/>
                <h3 onClick={()=>openModal(item)}>{item.name}</h3>
                <button onClick={()=>{console.log("hello")}}>Get It now</button>
            </div>
        </div>
    );
};

export default PizzaItem;