import React from 'react';
import "./PizzaItem.scss"

const PizzaItem = ({ item = {
    name: "Chicken Supreme Pizza",
    picture: "https://cdn.shopify.com/s/files/1/0046/1615/9347/products/product1_2e71bdac-e0d0-41ee-9b74-f87f32833b87_large.jpg?v=1532430471",
    }, openModal=(info)=>{} }) => {

    const renderStar = (star) =>{
        const content =[];
        let remaining =5;
        for(let i = 0; i<star;i++){
            content.push (<i className="fas fa-star" key={i}></i>);
            remaining--;
        }
        
        if (!Number.isInteger(star)){
            content.push(<i className="fas fa-star-half-alt" key={Math.ceil(star)}></i>)
            remaining--;
        }
        for (let i =0 ;i<remaining;i++){
            content.push(<i className="far fa-star" key={5-1-i}></i>)
        }
        return content;
    }
    
    return (
        <div className="pizza-item">
            <div className="content" >
                <img src={item.picture} alt="pizza item" onClick={()=>openModal(item)}/>
                <h3 onClick={()=>openModal(item)}>{item.name}</h3>
                <div className="rating">
                    {renderStar(item.star)}
                </div>
                <button onClick={()=>openModal(item)}>Get It now</button>
            </div>
        </div>
    );
};

export default PizzaItem;