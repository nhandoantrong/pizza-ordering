import React, { Fragment } from 'react';
import "./ToppingList.scss";
import MediaQuery from 'react-responsive'
import { mediumScreenWidth } from "../../../util/screenWidthConstant"


const ToppingList = ({ toppingList, addTopping, removeTopping }) => {

    const handleToppingChoice = (event) => {
        const _id = event.target.value;
        const topping = toppingList.find(item => item._id === _id);

        if (event.target.checked){
            addTopping(topping)
        }
        else{
            removeTopping(topping)
        }
    }
    const renderTopping = toppingList.map((topping) => {
        return <Fragment key={topping._id}>
            <MediaQuery minDeviceWidth={mediumScreenWidth}>
                <div className="col-4" >
                    <label className="label-container">
                        <input type="checkbox" name="topping" id={topping._id} value={topping._id} onChange={handleToppingChoice}/>
                        <span className="checkmark"></span>
                    </label>
                    <div style={{position:"relative"}}>
                        <label htmlFor={topping._id} className="tooltip">{topping.name}</label>
                        <span className="tooltiptext" style={{ backgroundImage: `url('${topping.picture}')` }}>
                            <p>${topping.price}</p>
                        </span>
                    </div>

                </div>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={mediumScreenWidth - 1}>
                <div className="col-6" >
                    <label className="label-container">
                        <input type="checkbox" name="topping" id={topping._id} value={topping._id} onChange={handleToppingChoice}/>
                        <span className="checkmark"></span>
                    </label>
                    <div style={{position:"relative"}}>
                        <label htmlFor={topping._id} className="tooltip">{topping.name}</label>
                        <span className="tooltiptext" style={{ backgroundImage: `url('${topping.picture}')` }}>
                            <p>${topping.price}</p>
                        </span>
                    </div>
                </div>
            </MediaQuery>
        </Fragment>

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