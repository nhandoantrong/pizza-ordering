import React, {useState} from 'react';
import "./PizzaMenu.scss";
import PizzaItem from '../../components/PizzaItem/PizzaItem';
import data from "../../mockupData/pizza.json";


const PizzaMenu = () => {
    const [pizzaType, setPizzaType] = useState("traditionalPizza");
    
    const changePizzaType = (type) =>{
        setPizzaType(type);
    }

    const renderPizza = (type) => {
        return data[type].map((item, index) => {
            return <div className="col-4" key={index}>
                <PizzaItem item={item}  />
            </div>
        })
    }

    return (
        <div className="pizza-menu">
            <div className="liar"></div>
            <div className="container">
                <h1>Pizza Menu</h1>
                <div className="group-type">
                    <h3 className="active" onClick={()=>changePizzaType("traditionalPizza")} >Traditional </h3>
                    <h3 onClick={()=>changePizzaType("deluxePizza")}>Deluxe </h3>
                    <h3 onClick={()=>changePizzaType("seafoodPizza")}>Gourmet Seafood </h3>

                </div>
                <div className="pizza-menu-list">
                    <div className="row">
                        {renderPizza(pizzaType)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PizzaMenu;