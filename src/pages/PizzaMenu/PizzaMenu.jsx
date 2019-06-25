import React, { useState, Fragment } from 'react';
import "./PizzaMenu.scss";
import PizzaItem from '../../components/PizzaItem/PizzaItem';
import data from "../../mockupData/pizza.json";
import MediaQuery from 'react-responsive';
import { smallScreenWidth, mediumScreenWidth } from "../../util/screenWidthConstant"

const PizzaMenu = () => {
    const [pizzaType, setPizzaType] = useState("traditionalPizza");

    const changePizzaType = (type) => {
        setPizzaType(type);
    }

    const renderPizza = (type) => {
        return data[type].map((item, index) => {
            return <Fragment key={index}>
                <MediaQuery  maxDeviceWidth={smallScreenWidth-1}>
                    <div className="col-12">
                        <PizzaItem item={item} />
                    </div>
                    
                </MediaQuery>
                <MediaQuery minDeviceWidth={smallScreenWidth} maxDeviceWidth={mediumScreenWidth-1}>
                    <div className="col-6">
                        <PizzaItem item={item} />
                    </div>
                    
                </MediaQuery>
                <MediaQuery minDeviceWidth={mediumScreenWidth}>
                    <div className="col-4">
                        <PizzaItem item={item} />
                    </div>
                </MediaQuery>
            </Fragment>
        })
    }

    return (
        <div className="pizza-menu">
            <div className="liar"></div>
            <div className="container">
                <h1>Pizza Menu</h1>
                <div className="group-type">
                    <h3 className="active" onClick={() => changePizzaType("traditionalPizza")} >Traditional </h3>
                    <h3 onClick={() => changePizzaType("deluxePizza")}>Deluxe </h3>
                    <h3 onClick={() => changePizzaType("seafoodPizza")}>Gourmet Seafood </h3>

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