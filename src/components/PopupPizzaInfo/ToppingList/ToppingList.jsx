import React from 'react';
import "./ToppingList.scss";


const ToppingList = ({ toppingList, addTopping, removeTopping }) => {

    const handleToppingChoice = (event) => {
        const _id = event.target.value;
        const topping = toppingList.find(item => item._id === _id);

        if (event.target.checked) {
            addTopping(topping)
        }
        else {
            removeTopping(topping)
        }
    }
    const renderTopping = toppingList.map((topping) => {
        return <div className="col-6" key={topping._id}>
            <label className="label-container">
                <input type="checkbox" name="topping" id={topping._id} value={topping._id} onChange={handleToppingChoice} />
                <span className="checkmark"></span>
            </label>
            <div style={{ position: "relative" }}>
                <label htmlFor={topping._id} className="tooltip">{topping.name} ${topping.price}</label>
                <span className="tooltiptext" style={{ backgroundImage: `url('${topping.picture}')` }}>

                </span>
            </div>
        </div>

    })

    return (
        <div className="topping-list">
            <h3>More Topping, More Fun</h3>
            <div className="row">
                {renderTopping}
            </div>

        </div>
    );
};

export default ToppingList;